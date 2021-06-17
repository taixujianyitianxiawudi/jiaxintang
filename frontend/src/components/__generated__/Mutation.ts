/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostCreateInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Mutation
// ====================================================

export interface Mutation_createDraft {
  __typename: "Post";
  content: string | null;
}

export interface Mutation {
  createDraft: Mutation_createDraft | null;
}

export interface MutationVariables {
  createDraftData: PostCreateInput;
}
