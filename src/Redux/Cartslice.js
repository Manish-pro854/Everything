import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    AddItem: (state, action) => {
      let price = action.payload.price;

      // Convert "1,200" => 1200
      if (typeof price === "string") {
        price = price.replace(/,/g, ""); // remove commas
      }

      const numericPrice = parseFloat(price) || 0;

      state.items.push(action.payload);
      state.totalAmount += numericPrice;
    },

    RemoveItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        let price = state.items[index].price;

        if (typeof price === "string") {
          price = price.replace(/,/g, "");
        }

        const numericPrice = parseFloat(price) || 0;

        state.totalAmount -= numericPrice;
        state.items.splice(index, 1);
      }
    },
  },
});

export const { AddItem, RemoveItem } = cartSlice.actions;
export default cartSlice.reducer;
