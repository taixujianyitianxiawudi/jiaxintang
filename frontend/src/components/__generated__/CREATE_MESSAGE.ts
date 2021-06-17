/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostCreateInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CREATE_MESSAGE
// ====================================================

export interface CREATE_MESSAGE_createDraft {
  __typename: "Post";
  content: string | null;
}

export interface CREATE_MESSAGE {
  createDraft: CREATE_MESSAGE_createDraft | null;
}

export interface CREATE_MESSAGEVariables {
  createDraftData: PostCreateInput;
}
