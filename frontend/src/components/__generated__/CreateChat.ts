/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateChatInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateChat
// ====================================================

export interface CreateChat_createChat {
  __typename: "Chat";
  id: number;
  content: string | null;
}

export interface CreateChat {
  createChat: CreateChat_createChat | null;
}

export interface CreateChatVariables {
  createChatData: CreateChatInput;
}
