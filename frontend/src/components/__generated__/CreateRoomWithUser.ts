/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WithUserRoomCreateInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateRoomWithUser
// ====================================================

export interface CreateRoomWithUser_createRoomwithUser_chatwith {
  __typename: "User";
  name: string | null;
}

export interface CreateRoomWithUser_createRoomwithUser_owner {
  __typename: "User";
  name: string | null;
}

export interface CreateRoomWithUser_createRoomwithUser {
  __typename: "Room";
  id: number;
  name: string;
  chatwith: CreateRoomWithUser_createRoomwithUser_chatwith | null;
  owner: CreateRoomWithUser_createRoomwithUser_owner | null;
}

export interface CreateRoomWithUser {
  createRoomwithUser: CreateRoomWithUser_createRoomwithUser | null;
}

export interface CreateRoomWithUserVariables {
  createRoomwithUserData: WithUserRoomCreateInput;
}
