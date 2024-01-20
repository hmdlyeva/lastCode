import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("users/getdata", async () => {
  const response = await axios.get("http://localhost:5000/users");
  return response.data;
});

export const postData = createAsyncThunk("users/postdata", async (newp) => {
  const response = await axios.post(`http://localhost:5000/users`, newp);
  return response.data;
});

export const delData = createAsyncThunk("users/deldata", async (id) => {
  const response = await axios.delete(`http://localhost:5000/users/${id}`);
  return response.data;
});

const initialState = {
  products: [],
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  basket: JSON.parse(localStorage.getItem("cart")) || [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const { _id, name, detail, price, image , category} = action.payload;

      let index = state.wishlist.findIndex((p) => p._id === _id);
      if (index !== -1) {
        state.wishlist = state.wishlist.filter((p) => p._id !== _id);
      } else {
        state.wishlist.push({ _id, name, detail, price, image , category});
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },

    addToCart: (state, action) => {
      const { _id, name, detail, price, image, category } = action.payload;

      let index = state.basket.findIndex((p) => p._id === _id);
      if (index !== -1) {
        state.basket[index].count += 1;
      } else {
        state.basket = [
          ...state.basket,
          { _id, name, detail, price, image,category, count: 1 },
        ];
      }
      localStorage.setItem("cart", JSON.stringify(state.basket));
    },

    remvCart: (state, action) => {
      const { _id, name, detail, price, image, category } = action.payload;

      let index = state.basket.findIndex((p) => p._id === _id);
      if (index !== -1) {
        if (state.basket[index].count > 1) {
          state.basket[index].count -= 1;
        } else {
          state.basket = state.basket.filter((p) => p._id !== _id);
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.basket));
    },
    delCart: (state, action) => {
      const { _id, name, detail, price, image , category} = action.payload;

      let index = state.basket.findIndex((p) => p._id === _id);
      if (index !== -1) {
        state.basket = state.basket.filter((p) => p._id !== _id);
      }
      localStorage.setItem("cart", JSON.stringify(state.basket));
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.products = [...action.payload];
    });

    builder.addCase(postData.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    builder.addCase(delData.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (p) => p._id !== action.payload._id
      );
    });
  },
});

export const { addToWishList, addToCart, remvCart , delCart} = counterSlice.actions;

export default counterSlice.reducer;
