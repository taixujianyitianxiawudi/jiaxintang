/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WithUserRoomCreateInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Mutation
// ====================================================

export interface Mutation_createRoomwithUser_chatwith {
  __typename: "User";
  name: string | null;
}

export interface Mutation_createRoomwithUser_owner {
  __typename: "User";
  name: string | null;
}

export interface Mutation_createRoomwithUser {
  __typename: "Room";
  id: number;
  name: string;
  chatwith: Mutation_createRoomwithUser_chatwith | null;
  owner: Mutation_createRoomwithUser_owner | null;
}

export interface Mutation {
  createRoomwithUser: Mutation_createRoomwithUser | null;
}

export interface MutationVariables {
  createRoomwithUserData: WithUserRoomCreateInput;
}
