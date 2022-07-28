import {ArticlesDocuments} from "./articles-documents";
import { ArticlesMeta } from "./articles-meta";

export interface ArticlesResponse {
  status: string;
  copyright: string;
  response: ArticlesDocuments;
  meta: ArticlesMeta;
}
