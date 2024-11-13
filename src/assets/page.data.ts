import { Page } from "../types/page.interface";
import { aboutMeData, awardsData, certificateData, educationsData, experienceData, technicalSkillData } from "./datas";

export const pageData: Page[] = [
  {
    title: "ABOUT ME",
    contents: aboutMeData
  },
  {
    title: "EDUCATIONS",
    contents: educationsData
  },
  {
    title: "EXPERIENCE",
    contents: experienceData
  },
  {
    title: "HONORS AND AWARDS",
    contents: awardsData
  },
  {
    title: "CERTIFICATE",
    contents: certificateData
  },
  {
    title: "TECHNICAL SKILLS",
    contents: technicalSkillData
  }
]