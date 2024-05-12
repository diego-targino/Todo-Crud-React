import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryService } from "../../../services/categoryService";

export const deleteCategoryAction = createAsyncThunk(
  "categories/delete",
  async (categoryId: string, thunkAPI): Promise<void> => {
    try {
      await CategoryService.deleteCategory(categoryId);
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
