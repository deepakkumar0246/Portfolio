import { config } from "@/data/config";
import ResumeView from "./resume-view";

export const metadata = {
  title: `Résumé | ${config.author}`,
  description: `Résumé of ${config.author} — B.Tech CSE Student & Software Developer. View online or download the PDF.`,
};

export default function ResumePage() {
  return <ResumeView />;
}
