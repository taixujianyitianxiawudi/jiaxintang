/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteRoom
// ====================================================

export interface DeleteRoom_deleteRoom {
  __typename: "Room";
  id: number;
}

export interface DeleteRoom {
  deleteRoom: DeleteRoom_deleteRoom | null;
}

export interface DeleteRoomVariables {
  deleteRoomId: number;
}
