import { cn } from "@/lib/utils";
import { View, ViewProps } from "react-native";

/**
 * Use for horizontal stack
 * @purpose To make it easier to read
 */
export const XStack = ({ className, ...props }: ViewProps) => {
  return <View {...props} className={cn("flex-row", className)} />;
};

/**
 * Use for vertical stack
 * @purpose To make it easier to read
 */
export const YStack = View;

/**
 * Use for dynamic stack that can change direction
 * @purpose To make it easier to read
 */
export const DStack = View;
