"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useVisitedChapters } from "@/src/lib/useVisitedChapters";

type ConditionalNavigationProps = {
  checkChapterId: string;
  targetChapterId_ifTrue: string;
  targetChapterId_ifFalse: string;
};

export function ConditionalNavigation({
  checkChapterId,
  targetChapterId_ifTrue,
  targetChapterId_ifFalse,
}: ConditionalNavigationProps) {
  const router = useRouter();
  const { visitedChapters } = useVisitedChapters();

  useEffect(() => {
    if (visitedChapters.length > 0) {
      const hasVisited = visitedChapters.includes(checkChapterId);
      if (hasVisited) {
        router.replace(`/chapter/${targetChapterId_ifTrue}`);
      } else {
        router.replace(`/chapter/${targetChapterId_ifFalse}`);
      }
    }
  }, [visitedChapters, checkChapterId, targetChapterId_ifTrue, targetChapterId_ifFalse, router]);

  // Render nothing or a loading indicator
  return null;
}