import { IconType, SiteType } from "./enum";

export class Problem {
  siteType;
  level;
  number;
  title;
  url;

  constructor(
    siteType: SiteType | undefined,
    level: string,
    number: string,
    title: string,
    url: string
  ) {
    this.siteType = siteType;
    this.level = level;
    this.number = number;
    this.title = title;
    this.url = url;
  }
}

export class ProblemPage extends Problem {
  iconType;
  iconSrc;

  constructor(
    siteType: SiteType | undefined,
    level: string,
    number: string,
    title: string,
    url: string,
    iconType: IconType | null,
    iconSrc: string
  ) {
    super(siteType, level, number, title, url);
    this.iconType = iconType;
    this.iconSrc = iconSrc;
  }
}
