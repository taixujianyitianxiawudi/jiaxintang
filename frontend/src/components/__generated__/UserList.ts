/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserList
// ====================================================

export interface UserList_allUsers {
  __typename: "User";
  id: number;
  name: string | null;
  isOnline: boolean;
}

export interface UserList {
  allUsers: UserList_allUsers[];
}
