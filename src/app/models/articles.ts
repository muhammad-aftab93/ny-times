import {ArticlesMultimedia} from "./articles-multimedia";
import {ArticlesHeadline} from "./articles-headline";
import {ArticlesKeywords} from "./articles-keywords";
import { ArticlesByline } from "./articles-byline";

export interface Articles {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: ArticlesMultimedia[];
  headline: ArticlesHeadline;
  keywords: ArticlesKeywords[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: ArticlesByline;
  type_of_material: string;
  _id: string;
  word_count: string;
  uri: string;
}
