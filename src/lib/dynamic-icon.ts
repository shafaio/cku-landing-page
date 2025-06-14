/* eslint-disable @typescript-eslint/no-require-imports */
import { LucideIcon } from "lucide-react";

export const getDynamicIcon = (iconName: string): LucideIcon => {
  try {
    const LucideIcons = require("lucide-react");
    return LucideIcons[iconName] || LucideIcons.X;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    const { X } = require("lucide-react");
    return X;
  }
};

export const LucideIcons = new Proxy(
  {},
  {
    get: (target, prop: string) => {
      return getDynamicIcon(prop);
    },
  }
) as Record<string, LucideIcon>;
