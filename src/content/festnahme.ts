import { Chapter } from "@/src/types";

export const festnahmeChapter: Chapter = {
  id: "festnahme",
  title: "Festnahme",
  scenes: [
    {
      id: "scene-xxx",
      title: "Festnahme",
      layout: 'split-view',
      content: [
        {
          type: 'decision',
          question: "Wen möchtest du als Täter an dem Mord an Martin Heller verhaften?",
          choices: [
              {
                  text: "Dr. Petra Haas",
                  targetChapterId: "finale-petra-haas",
                  image: '/images/scene-xxx/XXX-festnahme-petra-haas.png' 
              },
              {
                  text: "Lena Bergmann",
                  targetChapterId: "finale-lena-bergmann",
                  image: '/images/scene-xxx/XXX-festnahme-lena-bergmann.png'
              },
              {
                  text: "Ralf König",
                  targetChapterId: "finale-ralf-koenig",
                  image: '/images/scene-xxx/XXX-festnahme-ralf-könig.png',

              }
          ],
          displayAs: 'decision',
        }
      ]
    },
  ]
}