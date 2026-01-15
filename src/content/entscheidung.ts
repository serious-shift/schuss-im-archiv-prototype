import { Chapter } from "@/src/types";

export const entscheidungChapter: Chapter = {
  id: "entscheidung-1",
  title: "Erste Entscheidung",
  scenes: [
    {
      id: "scene-1-decision",
      title: "Erste Entscheidung",
      layout: 'split-view',
      content: [
        {
          type: 'info',
          text: "Die Spurensicherung hat die Funde aus Büro 3.17 verarbeitet. Die Ergebnisse führen zu drei Personen:",
        },
        {
          type: 'decision',
          question: "Sie müssen entscheiden, welche der drei Hauptspuren Sie zuerst in der Konfrontation vertiefen.",
          backgroundImage: '/images/scene-1/1-Blick-auf-Tisch-mit-Beweismitteln.png',
          choices: [
              {
                  text: "Dr. Petra Haas (DNA des Haars am Ärmel)",
                  targetChapterId: "verhoer-petra-haas",
                  image: '/images/investigationAssets/Haar_prop.png' 
              },
              {
                  text: "Lena Bergmann (Schriftuntersuchung des Zettels auf Schreibtisch)",
                  targetChapterId: "verhoer-lena-bergmann",
                  image: '/images/investigationAssets/Papierspur-detail_prop.png'
              },
              {
                  text: "Ralf König (Audiospur auf Hellers Handy)",
                  targetChapterId: "verhoer-ralf-koenig",
                  image: '/images/investigationAssets/Handy-front_prop.png',

              }
          ],
          displayAs: 'decision',
        }
      ]
    },
  ]
}