/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: JoinRoomc
// ====================================================

export interface JoinRoomc_incrementRoomUser {
  __typename: "Room";
  id: number;
  name: string;
}

export interface JoinRoomc {
  incrementRoomUser: JoinRoomc_incrementRoomUser | null;
}

export interface JoinRoomcVariables {
  incrementRoomUserId: number;
}
