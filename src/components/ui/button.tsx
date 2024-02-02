import { cn } from "@/lib/utils";
import { cva } from "cva";
import { Pressable, PressableProps, Text } from "react-native";
import { Plus } from "lucide-react-native";
import { Fragment } from "react";
export interface ButtonProps extends PressableProps {
  variant?: "primary" | "secondary";
}

export const button = cva({
  base: "px-4 flex-row py-2.5 rounded-lg active:opacity-80 gap-x-2",
  variants: {
    variant: {
      primary: "bg-blue-500",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const buttonText = cva({
  base: "text-white font-medium",
  variants: {
    variant: {
      primary: "text-white",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const Button = ({ children, className, ...props }: ButtonProps) => {
  const childIsString = typeof children === "string";

  return (
    <Pressable {...props} className={cn(button(), className)}>
      {/* If the child is a string, we handle displaying the text, otherwise just render the children. */}
      {childIsString ? (
        <Fragment>
          <Plus size={18} className={cn(buttonText())} />
          <Text className={cn(buttonText())}>{children}</Text>
        </Fragment>
      ) : (
        children
      )}
    </Pressable>
  );
};
