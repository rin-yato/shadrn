import { useColorScheme, vars } from "nativewind";
import { PropsWithChildren } from "react";
import { View } from "react-native";

const themes = {
  light: vars({
    "--background": "#fafafa",
    "--foreground": "#171717",
    "--border": "#e5e5e5",
    "--input": "#f4f4f5",
    "--primary": "#375DFB",
    "--primary-foreground": "#fafafa",
    "--secondary": "#e4e4e7",
    "--secondary-foreground": "#171717",
    "--accent": "#f4f4f5",
    "--accent-foreground": "#171717",
    "--success": "#38C793",
    "--success-foreground": "#fafafa",
    "--danger": "#DF1C41",
    "--danger-foreground": "#fafafa",
  }),
  dark: vars({
    "--background": "#171717",
    "--foreground": "#fafafa",
    "--border": "#404040",
    "--input": "#525252",
    "--primary": "#375DFB",
    "--primary-foreground": "#fafafa",
    "--secondary": "#3f3f46",
    "--secondary-foreground": "#fafafa",
    "--accent": "#27272a",
    "--accent-foreground": "#fafafa",
    "--success": "#38C793",
    "--success-foreground": "#fafafa",
    "--danger": "#DF1C41",
    "--danger-foreground": "#fafafa",
  }),
};

export const Theme = ({ children }: PropsWithChildren) => {
  const { colorScheme } = useColorScheme();

  return (
    <View style={themes[colorScheme]} className="flex-1">
      {children}
    </View>
  );
};
