/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LeftRoomb
// ====================================================

export interface LeftRoomb_decrementRoomUser {
  __typename: "Room";
  id: number;
  name: string;
}

export interface LeftRoomb {
  decrementRoomUser: LeftRoomb_decrementRoomUser | null;
}

export interface LeftRoombVariables {
  decrementRoomUserId: number;
}
