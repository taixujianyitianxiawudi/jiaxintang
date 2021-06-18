/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LeftRooma
// ====================================================

export interface LeftRooma_decrementRoomUser {
  __typename: "Room";
  id: number;
  name: string;
}

export interface LeftRooma {
  decrementRoomUser: LeftRooma_decrementRoomUser | null;
}

export interface LeftRoomaVariables {
  decrementRoomUserId: number;
}
