import { createSelector } from "reselect";

const selectUser = (state) => state.userSignedIn;

export const selectSignedInUser = createSelector(
  [selectUser],
  (user) => user.userInfo
);
