/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: JoinRooma
// ====================================================

export interface JoinRooma_incrementRoomUser {
  __typename: "Room";
  id: number;
  name: string;
}

export interface JoinRooma {
  incrementRoomUser: JoinRooma_incrementRoomUser | null;
}

export interface JoinRoomaVariables {
  incrementRoomUserId: number;
}
