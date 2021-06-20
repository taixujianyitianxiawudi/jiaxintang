/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: JoinRoomb
// ====================================================

export interface JoinRoomb_incrementRoomUser {
  __typename: "Room";
  id: number;
  name: string;
}

export interface JoinRoomb {
  incrementRoomUser: JoinRoomb_incrementRoomUser | null;
}

export interface JoinRoombVariables {
  incrementRoomUserId: number;
}
