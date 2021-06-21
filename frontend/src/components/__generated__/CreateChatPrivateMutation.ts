/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateChatInputPrivate } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateChatPrivateMutation
// ====================================================

export interface CreateChatPrivateMutation_createChatPrivate {
  __typename: "Chat";
  id: number;
  content: string | null;
}

export interface CreateChatPrivateMutation {
  createChatPrivate: CreateChatPrivateMutation_createChatPrivate | null;
}

export interface CreateChatPrivateMutationVariables {
  createChatPrivateData: CreateChatInputPrivate;
}
