import { Moon, Sun } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { Button } from "./ui/button";

export const HeaderThemeToggle = () => {
  const { toggleColorScheme, colorScheme } = useColorScheme();

  const Icon = colorScheme === "dark" ? Moon : Sun;

  return (
    <Button
      size="icon"
      variant="muted"
      leadingIcon={Icon}
      onPress={toggleColorScheme}
    />
  );
};
