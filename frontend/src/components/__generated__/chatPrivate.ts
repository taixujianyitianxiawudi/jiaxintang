/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: chatPrivate
// ====================================================

export interface chatPrivate_chatPrivate_author {
  __typename: "User";
  name: string | null;
  id: number;
}

export interface chatPrivate_chatPrivate_touser {
  __typename: "User";
  id: number;
  name: string | null;
}

export interface chatPrivate_chatPrivate {
  __typename: "Chat";
  id: number;
  createdAt: any;
  content: string | null;
  author: chatPrivate_chatPrivate_author | null;
  touser: chatPrivate_chatPrivate_touser | null;
}

export interface chatPrivate {
  chatPrivate: chatPrivate_chatPrivate[];
}

export interface chatPrivateVariables {
  chatPrivateId?: number | null;
  chatPrivateUserid?: number | null;
}
