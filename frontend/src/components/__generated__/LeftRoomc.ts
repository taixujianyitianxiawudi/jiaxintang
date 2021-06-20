/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LeftRoomc
// ====================================================

export interface LeftRoomc_decrementRoomUser {
  __typename: "Room";
  id: number;
  name: string;
}

export interface LeftRoomc {
  decrementRoomUser: LeftRoomc_decrementRoomUser | null;
}

export interface LeftRoomcVariables {
  decrementRoomUserId: number;
}
