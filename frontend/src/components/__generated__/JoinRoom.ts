/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: JoinRoom
// ====================================================

export interface JoinRoom_incrementRoomUser {
  __typename: "Room";
  id: number;
  name: string;
}

export interface JoinRoom {
  incrementRoomUser: JoinRoom_incrementRoomUser | null;
}

export interface JoinRoomVariables {
  incrementRoomUserId: number;
}
