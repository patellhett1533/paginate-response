import { Document, Schema } from "mongoose";

export interface QueryResult<T extends Document> {
  results: T[];
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}

export interface SortOptions {
  sortBy?: string;
}

export interface PopulateOptions {
  populate?: string;
}

export interface SearchOptions {
  search?: string;
}

export interface PaginationOptions
  extends SortOptions,
    PopulateOptions,
    SearchOptions {
  limit?: number;
  page?: number;
}
