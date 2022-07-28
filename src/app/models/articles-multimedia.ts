import { ArticlesLegacy } from "./articles-legacy";

export interface ArticlesMultimedia {
  rank: number;
  subtype: string;
  caption: string;
  credit: string;
  type: string;
  url: string;
  height: string;
  width: string;
  legacy: ArticlesLegacy;
  subType: string;
  crop_name: string;
}
