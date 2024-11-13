export interface Content extends Subtitle, SubDescription{
  details: ContentDetail[];
  date?: string;
  isDisplay?: boolean;
}

export interface ContentDetail{
  linkUrl?: string;
  linkText?: string;

  krText: string;
  enText: string;

  frontBold?: string;
  enEndBold?: string;
  krEndBold?: string;
  
  date?: string;

  isDisplay?: boolean;
}

interface Subtitle{
  enSubtitle?: string;
  krSubtitle?: string;

  enDescription?: string;
  krDescription?: string;
}

interface SubDescription{
  enSubDescription?: string;
  krSubDescription?: string;
}