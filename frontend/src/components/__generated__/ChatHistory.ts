/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChatHistory
// ====================================================

export interface ChatHistory_allPosts_author {
  __typename: "User";
  name: string | null;
}

export interface ChatHistory_allPosts {
  __typename: "Post";
  id: number;
  content: string | null;
  author: ChatHistory_allPosts_author | null;
  createdAt: any;
}

export interface ChatHistory {
  allPosts: ChatHistory_allPosts[];
}
