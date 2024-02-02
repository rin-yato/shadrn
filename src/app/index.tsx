import { YStack } from "@/components/ui/stack";
import { Link } from "expo-router";
import React from "react";

export default function Page() {
  return (
    <YStack className="mt-20 p-5">
      <Link
        href="/button"
        className="py-2 px-4 text-lg bg-white"
        suppressHighlighting
      >
        Button
      </Link>
    </YStack>
  );
}
