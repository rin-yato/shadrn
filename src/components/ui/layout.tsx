import { useSafeAreaInsets } from "react-native-safe-area-context";
import { YStack } from "./stack";
import { ViewProps } from "react-native";
import { cn } from "@/lib/utils";

export interface LayoutProps extends ViewProps {
  insetTop?: boolean;
  insetBottom?: boolean;
  insetY?: boolean;
}

export const Layout = ({
  insetY,
  insetBottom,
  insetTop,
  style,
  className,
  ...props
}: LayoutProps) => {
  const insets = useSafeAreaInsets();

  const paddingTop = insetTop || insetY ? insets.top : undefined;
  const paddingBottom = insetBottom || insetY ? insets.bottom : undefined;

  return (
    <YStack
      {...props}
      style={[{ paddingTop, paddingBottom }, style]}
      className={cn("bg-background p-5 size-full", className)}
    />
  );
};
