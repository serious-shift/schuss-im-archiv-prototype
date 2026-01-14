import { Chapter } from "@/src/types";
import { ConditionalNavigation } from "@/src/components/game/ConditionalNavigation";

export const USBStickAnalyseRouterChapter: Chapter = {
  id: "usb-stick-analyse-router",
  title: "Analyse wird vorbereitet...",
  scenes: [
    {
      id: "usb-stick-analyse-router-scene",
      title: "Router Analyse",
      content: [
        {
          type: "custom",
          component: ConditionalNavigation,
          props: {
            checkChapterId: "usb-stick-verlust",
            targetChapterId_ifTrue: "usb-stick-analyse-b",
            targetChapterId_ifFalse: "usb-stick-analyse-a",
          },
        },
      ],
    },
  ],
};