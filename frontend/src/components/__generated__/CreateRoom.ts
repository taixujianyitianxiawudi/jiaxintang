/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { RoomCreateInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateRoom
// ====================================================

export interface CreateRoom_createRoom {
  __typename: "Room";
  id: number;
}

export interface CreateRoom {
  createRoom: CreateRoom_createRoom | null;
}

export interface CreateRoomVariables {
  createRoomData: RoomCreateInput;
}
