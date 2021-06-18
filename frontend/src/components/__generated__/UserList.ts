/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserList
// ====================================================

export interface UserList_allUsers_rooms_owner {
  __typename: "User";
  id: number;
}

export interface UserList_allUsers_rooms_chatwith {
  __typename: "User";
  id: number;
}

export interface UserList_allUsers_rooms {
  __typename: "Room";
  id: number;
  owner: UserList_allUsers_rooms_owner | null;
  chatwith: UserList_allUsers_rooms_chatwith | null;
}

export interface UserList_allUsers {
  __typename: "User";
  id: number;
  name: string | null;
  isOnline: boolean;
  rooms: UserList_allUsers_rooms[];
}

export interface UserList {
  allUsers: UserList_allUsers[];
}
