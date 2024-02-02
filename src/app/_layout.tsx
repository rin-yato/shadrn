import "../global.css";
import { Stack } from "expo-router";
import { Theme } from "@/components/theme";
import { HeaderThemeToggle } from "@/components/header-theme-toggle";

export default function Layout() {
  return (
    <Theme>
      <Stack
        screenOptions={{
          headerRight: HeaderThemeToggle,
          headerBackTitle: "Back",
        }}
      />
    </Theme>
  );
}
