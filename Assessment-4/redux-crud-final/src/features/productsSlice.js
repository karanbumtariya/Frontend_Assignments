import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/posts";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await axios.get(API);
  return res.data.slice(0, 10);
});

export const addProduct = createAsyncThunk("products/add", async (data) => {
  const res = await axios.post(API, data);
  return res.data;
});

export const deleteProduct = createAsyncThunk("products/delete", async (id) => {
  await axios.delete(`${API}/${id}`);
  return id;
});


export const updateProduct = createAsyncThunk(
  "products/update",
  async (product) => {
    const res = await axios.put(`${API}/${product.id}`, product);
    return res.data;
  }
);

const slice = createSlice({
  name: "products",
  initialState: {
    list: [],
    editItem: null,  
  },
  reducers: {
    setEditItem: (state, action) => {
      state.editItem = action.payload;
    },
  },
  extraReducers: (b) => {
    b.addCase(fetchProducts.fulfilled, (s, a) => {
      s.list = a.payload;
    });
    b.addCase(addProduct.fulfilled, (s, a) => {
      s.list.unshift(a.payload);
    });
    b.addCase(deleteProduct.fulfilled, (s, a) => {
      s.list = s.list.filter((i) => i.id !== a.payload);
    });

    b.addCase(updateProduct.fulfilled, (s, a) => {
      const index = s.list.findIndex((i) => i.id === a.payload.id);
      if (index !== -1) {
        s.list[index] = a.payload;
      }
    });
  },
});

export const { setEditItem } = slice.actions;
export default slice.reducer;