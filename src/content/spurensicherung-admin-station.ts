import { Chapter } from "@/src/types";

export const spurensicherungAdminStationChapter: Chapter = {
  id: "spurensicherung-admin-station",
  title: "Spurensicherung: Admin-Station",
  scenes: [
    {
      id: "scene-5-c-a-a",
      title: "Spurensicherung: Admin-Station",
      layout: "default",
      showTitleBanner: true,
      content: [
        {
          type: "narrative",
          text: "Die Techniker:innen des LKA sind schnell vor Ort. Die Admin-Station wird isoliert, jede Fläche sorgfältig abgesichert. Besonders die Tastatur steht im Fokus – dort, wo der Gastzugriff um 16:39 Uhr begann."
        },
      ]
    },
    {
        id: "scene-5-c-a-a-investigation",
        title: "Untersuchung der Admin-Station",
        content: [
            {
                type: "investigation",
                backgroundImage: '/images/investigation_admin_station.png',
                hotspots: [
                    {
                        id: 'hint-1',
                        title: 'Bildschirm',
                        description: 'Eher unwahrscheinlich. Bildschirme werden selten direkt berührt – Fingerabdrücke sind hier selten und meist unvollständig.',
                        image: '/images/pistole.png',
                        required: false,
                        position: { x: 50, y: 30 },
                    },
                    {
                        id: 'hint-2',
                        title: 'Maus',
                        description: 'Eher unwahrscheinlich. Bildschirme werden selten direkt berührt – Fingerabdrücke sind hier selten und meist unvollständig.',
                        image: '/images/pistole.png',
                        required: false,
                        position: { x: 60, y: 40 },
                    },
                    {
                        id: 'hint-3',
                        title: 'Tastatur',
                        description: 'Eher unwahrscheinlich. Bildschirme werden selten direkt berührt – Fingerabdrücke sind hier selten und meist unvollständig.',
                        image: '/images/pistole.png',
                        required: false,
                        position: { x: 70, y: 50 },
                    },
                ]
            },
            {
                type: 'navigation',
                buttonText: "Ermittlung abschließen",
                targetSceneId: "scene-5-c-a-a-conclusion"
            }
        ]
    },
    {
        id: "scene-5-c-a-a-conclusion",
        title: "Ergebnisse der Spurensicherung",
        content: [
            {
                type: "narrative",
                text: [
                    "Insgesamt vier verwertbare Fingerabdrücke auf den zuletzt benutzten Tasten. Zwei davon lassen sich eindeutig Lena Bergmann zuordnen – sie nutzte den Rechner am Vormittag.",
                    "Ein weiterer Abdruck stammt von Dr. Petra Haas.",
                    "Auffällig: Der Abdruck von Dr. Haas befindet sich auf der Eingabetaste – genau an der Stelle, an der der Datenimport ausgelöst wurde.",
                    "Ein vierter Abdruck bleibt unzuordenbar, taucht jedoch nur randständig auf und steht in keinem direkten Zusammenhang mit der Übertragung.",
                ]
            }
        ]
    },
    {
        id: "scene-5-c-a-a-decision",
        title: "Entscheidung: Nächste Schritte",
        content: [
            {
                type: "decision",
                question: "Die Spuren auf der Tastatur lassen sich nicht mehr ignorieren. Wir haben Fingerabdrücke von Haas aber auch von Bergmann gefunden. Wen möchten Sie konfrontieren?",
                choices: [
                    {
                        text: "→ Was sind ihre Aufgaben an dem Admin-PC & wann hat Sie ihn zuletzt genutzt?",
                        targetChapterId: "befragung-petra-haas"
                    },
                    {
                        text: "→ Warum wurde die manipulierte Nachricht über ihr Konto auf Hellers Handy übertragen?",
                        targetChapterId: "befragung-lena-bergmann"
                    }
                ]
            }
        ]
    }
  ]
}