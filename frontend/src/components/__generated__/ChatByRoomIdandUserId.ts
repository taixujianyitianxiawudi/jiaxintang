/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChatByRoomIdandUserId
// ====================================================

export interface ChatByRoomIdandUserId_chatByRoomIdandUser_author {
  __typename: "User";
  name: string | null;
}

export interface ChatByRoomIdandUserId_chatByRoomIdandUser {
  __typename: "Chat";
  id: number;
  createdAt: any;
  content: string | null;
  author: ChatByRoomIdandUserId_chatByRoomIdandUser_author | null;
}

export interface ChatByRoomIdandUserId {
  chatByRoomIdandUser: ChatByRoomIdandUserId_chatByRoomIdandUser[];
}

export interface ChatByRoomIdandUserIdVariables {
  chatByRoomIdandUserId?: number | null;
  chatByRoomIdandUserUserid?: number | null;
}
