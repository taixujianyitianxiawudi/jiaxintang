/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RoomList
// ====================================================

export interface RoomList_allRooms_owner {
  __typename: "User";
  name: string | null;
}

export interface RoomList_allRooms {
  __typename: "Room";
  currentNumberofUsers: number;
  name: string;
  details: string | null;
  owner: RoomList_allRooms_owner | null;
  createdAt: any;
  id: number;
}

export interface RoomList {
  allRooms: RoomList_allRooms[];
}
