import { useState } from "react";

export function useTab<T>(value: T) {
  const [activeTab, setActiveTab] = useState<T>(value);
  const isActive = (tab: T) => tab === activeTab;
  return { activeTab, setActiveTab, isActive };
}
