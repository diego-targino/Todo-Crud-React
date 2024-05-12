import { createAsyncThunk } from "@reduxjs/toolkit";
import { ListCategoriesResponseDTO } from "../../../dtos/response/categories/listCategoriesResponseDTO";
import { CategoryService } from "../../../services/categoryService";

export const listCategoriesAction = createAsyncThunk(
  "categories/list",
  async (
    userId: string,
    thunkAPI
  ): Promise<ListCategoriesResponseDTO | undefined> => {
    try {
      const listCategoriesResponseDTO = await CategoryService.listCategories(
        userId
      );

      return listCategoriesResponseDTO;
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
