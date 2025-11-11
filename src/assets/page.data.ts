import { Page } from "../types/page.interface";
import {
  aboutMeData,
  awardsData,
  certificateData,
  educationsData,
  experienceData,
  projectsData,
  technicalSkillData,
} from "./datas";

export const pageData: Page[] = [
  {
    title: "ABOUT ME",
    contents: aboutMeData,
    isDisplay: true,
  },
  {
    title: "EDUCATIONS",
    contents: educationsData,
    isDisplay: true,
  },
  {
    title: "EXPERIENCE",
    contents: experienceData,
    isDisplay: true,
  },
  {
    title: "HONORS AND AWARDS",
    contents: awardsData,
    isDisplay: true,
  },
  {
    title: "CERTIFICATE",
    contents: certificateData,
    isDisplay: true,
  },
  {
    title: "TECHNICAL SKILLS",
    contents: technicalSkillData,
    isDisplay: true,
  },
  { title: "PROJECTS", contents: projectsData, isDisplay: false },
];
