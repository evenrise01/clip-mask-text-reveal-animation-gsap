"use client";

import React, { useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface CopyProps {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
}

export default function Copy({
  children,
  animateOnScroll = true,
  delay = 0,
}: CopyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLElement[]>([]);
  const splitRef = useRef<SplitText[]>([]);
  const lines = useRef<HTMLElement[]>([]);

  // Memoize children to prevent unnecessary re-renders
  const memoizedChildren = useMemo(() => children, [children]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Reset refs
      splitRef.current = [];
      elementRef.current = [];
      lines.current = [];

      const elements: HTMLElement[] = containerRef.current.hasAttribute("data-copy-wrapper")
        ? Array.from(containerRef.current.children) as HTMLElement[]
        : [containerRef.current];

      // Batch all style reads
      const computedStyles = elements.map(el => window.getComputedStyle(el));

      elements.forEach((element, index) => {
        elementRef.current.push(element);

        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines", // ✅ THIS IS ESSENTIAL - creates overflow:hidden masks
          linesClass: "line++",
        });

        splitRef.current.push(split);

        // Use pre-computed style
        const textIndent = computedStyles[index].textIndent;

        // Batch DOM writes with RAF
        if (textIndent && textIndent !== "0px" && split.lines.length > 0) {
          requestAnimationFrame(() => {
            (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
            element.style.textIndent = "0";
          });
        }

        lines.current = lines.current.concat(split.lines as HTMLElement[]);
      });

      // Set initial state - text translated down and hidden by mask
      gsap.set(lines.current, { y: "100%" });

      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay,
        onComplete: () => {
          // Remove will-change after animation for better performance
          lines.current.forEach(line => {
            line.style.willChange = 'auto';
          });
        }
      };

      if (animateOnScroll) {
        gsap.to(lines.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
            invalidateOnRefresh: false,
          },
        });
      } else {
        gsap.to(lines.current, animationProps);
      }

      return () => {
        splitRef.current.forEach(split => split?.revert());
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay],
    }
  );

  if (!children || React.Children.count(children) === 0) return null;

  if (React.Children.count(children) === 1) {
    return <div ref={containerRef}>{memoizedChildren}</div>;
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {memoizedChildren}
    </div>
  );
}