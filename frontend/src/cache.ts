import { InMemoryCache, makeVar } from "@apollo/client";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          },
        },
        UserOrRoom: {
          read() {
            return UserOrRoomVar()
          }
        }
      },
    },
  },
});

export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem("token"));
export const UserOrRoomVar = makeVar<boolean>(localStorage.getItem("place")==="true");
