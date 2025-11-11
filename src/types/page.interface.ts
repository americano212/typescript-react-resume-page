import { Content } from "./content.interface";

export interface Page {
  title: string;
  contents: Content[];
  isDisplay?: boolean;
}
