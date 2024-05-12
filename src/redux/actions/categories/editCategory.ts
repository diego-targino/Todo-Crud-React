import { createAsyncThunk } from "@reduxjs/toolkit";
import { EditCategoryRequestDTO } from "../../../dtos/request/categories/editCategoryRequestDTO";
import { CategoryService } from "../../../services/categoryService";

export const editCategoryAction = createAsyncThunk(
  "categories/edit",
  async (
    editCategoryRequestDTO: EditCategoryRequestDTO,
    thunkAPI
  ): Promise<void> => {
    try {
      await CategoryService.editCategory(editCategoryRequestDTO);
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
