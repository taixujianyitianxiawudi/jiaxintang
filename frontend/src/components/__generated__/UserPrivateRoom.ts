/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserPrivateRoom
// ====================================================

export interface UserPrivateRoom_userPrivateRoom {
  __typename: "Room";
  id: number;
}

export interface UserPrivateRoom {
  userPrivateRoom: UserPrivateRoom_userPrivateRoom | null;
}

export interface UserPrivateRoomVariables {
  userPrivateRoomId?: number | null;
}
