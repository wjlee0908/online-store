"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@shared/lib/class-name";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(
        "flex flex-col gap-2 border-b border-neutral-200",
        className
      )}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  const listRef = useRef<HTMLDivElement>(null);
  const [triggerCount, setTriggerCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateMetrics = React.useCallback(() => {
    if (!listRef.current) return;
    const triggers = Array.from(
      listRef.current.querySelectorAll('[data-slot="tabs-trigger"]')
    );
    setTriggerCount(triggers.length);
    const currentIndex = triggers.findIndex(
      (el) => el.getAttribute("data-state") === "active"
    );
    setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
  }, []);

  useEffect(() => {
    updateMetrics();
  }, [props.children, updateMetrics]);

  useEffect(() => {
    if (!listRef.current) return;
    const observer = new MutationObserver(() => updateMetrics());
    observer.observe(listRef.current, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["data-state"],
    });
    return () => observer.disconnect();
  }, [updateMetrics]);

  return (
    <TabsPrimitive.List
      ref={listRef}
      data-slot="tabs-list"
      className={cn("relative flex", className)}
      {...props}
    >
      {props.children}
      <div
        data-testid="slider"
        className={`absolute bottom-0 left-0 border-b-2 border-black mb-[-1px] transition-all duration-300`}
        style={{
          width: triggerCount > 0 ? `${100 / triggerCount}%` : "0%",
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
    </TabsPrimitive.List>
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "flex-1 py-4 text-sm font-semibold data-[state=inactive]:text-neutral-500 transition-colors cursor-pointer",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
