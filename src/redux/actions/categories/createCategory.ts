import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateCategoryRequestDTO } from "../../../dtos/request/categories/createCategoryRequestDTO";
import { CategoryService } from "../../../services/categoryService";

export const createCategoryAction = createAsyncThunk(
  "categories/add",
  async (
    createCategoryRequestDTO: CreateCategoryRequestDTO,
    thunkAPI
  ): Promise<void> => {
    try {
      await CategoryService.createCategory(createCategoryRequestDTO);
    } catch (error: any) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
