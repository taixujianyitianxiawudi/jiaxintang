/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChatByRoomId
// ====================================================

export interface ChatByRoomId_chatByRoomId_author {
  __typename: "User";
  name: string | null;
  id: number;
}

export interface ChatByRoomId_chatByRoomId_room {
  __typename: "Room";
  id: number;
}

export interface ChatByRoomId_chatByRoomId {
  __typename: "Chat";
  id: number;
  createdAt: any;
  content: string | null;
  author: ChatByRoomId_chatByRoomId_author | null;
  room: ChatByRoomId_chatByRoomId_room | null;
}

export interface ChatByRoomId {
  chatByRoomId: ChatByRoomId_chatByRoomId[];
}

export interface ChatByRoomIdVariables {
  chatByRoomIdId?: number | null;
}
