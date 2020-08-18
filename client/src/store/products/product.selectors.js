import { createSelector } from "reselect";

const selectProducts = (state) => state.productList;

export const selectProductList = createSelector(
  [selectProducts],
  (list) => list.products
);
