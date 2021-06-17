/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostCreateInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateMessage
// ====================================================

export interface CreateMessage_createDraft {
  __typename: "Post";
  content: string | null;
}

export interface CreateMessage {
  createDraft: CreateMessage_createDraft | null;
}

export interface CreateMessageVariables {
  createDraftData: PostCreateInput;
}
