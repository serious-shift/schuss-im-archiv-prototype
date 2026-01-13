import { Chapter } from "@/src/types";
import { einfuehrungChapter } from './einfuehrung';
import { entscheidungChapter } from "./entscheidung";
import { verhoerRalfKoenigChapter } from "./verhoer-ralf-koenig";
import { verhoerLenaBergmannChapter } from "./verhoer-lena-bergmann";
import { verhoerPetraHaasChapter } from "./verhoer-petra-haas";
import { veroeffentlichungenDurchleuchtenChapter } from "./veroeffentlichungen-durchleuchten";
import { tiefereAnalyseVeroeffentlichungenChapter } from "./tiefere-analyse-veroeffentlichungen";
import { tonspurPruefenChapter } from "./tonspur-pruefen";
import { tonspurErgebnisseChapter } from "./tonspur-ergebnisse";
import { befragungLenaBergmannChapter } from "./befragung-lena-bergmann";
import { usbStickVerlustChapter } from "./usb-stick-verlust";
import { spurensicherungAdminStationChapter } from "./spurensicherung-admin-station";
import { befragungPetraHaasChapter } from "./befragung-petra-haas";

export const chapters: Chapter[] = [
  einfuehrungChapter,
  entscheidungChapter,
  verhoerRalfKoenigChapter,
  verhoerLenaBergmannChapter,
  verhoerPetraHaasChapter,
  veroeffentlichungenDurchleuchtenChapter,    
  tiefereAnalyseVeroeffentlichungenChapter,
  tonspurPruefenChapter,
  tonspurErgebnisseChapter,
  befragungLenaBergmannChapter,
  usbStickVerlustChapter,
  spurensicherungAdminStationChapter,
  befragungPetraHaasChapter,
];