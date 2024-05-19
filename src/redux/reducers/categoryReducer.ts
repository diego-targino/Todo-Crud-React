import { createSlice } from "@reduxjs/toolkit";
import { CategoryState } from "../states/categoryState";
import {
  createCategoryAction,
  deleteCategoryAction,
  editCategoryAction,
  listCategoriesAction,
} from "../actions/categories";
import { resetCategoryState } from "../../utils/resetState";

const initialCategoryState: CategoryState = {
  categories: [],
  loading: false,
};

export const categorySlice = createSlice({
  name: "categories",
  initialState: initialCategoryState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listCategoriesAction.pending, (state) => {
        state = resetCategoryState(state);
        state.loading = true;
        state.categories = [];
      })
      .addCase(listCategoriesAction.fulfilled, (state, action) => {
        state = resetCategoryState(state);
        state.loading = false;
        state.categories = action.payload?.categories || [];
      })
      .addCase(listCategoriesAction.rejected, (state, action) => {
        state = resetCategoryState(state);
        state.loading = false;
        state.error =
          (action.payload as string) || "houve um erro ao listar as tarefas";
      });

    builder
      .addCase(createCategoryAction.pending, (state) => {
        state = resetCategoryState(state);
        state.loading = true;
        state.successCreate = undefined;
      })
      .addCase(createCategoryAction.fulfilled, (state) => {
        state = resetCategoryState(state);
        state.loading = false;
        state.successCreate = true;
      })
      .addCase(createCategoryAction.rejected, (state, action) => {
        state = resetCategoryState(state);
        state.loading = false;
        state.successCreate = false;
        state.error =
          (action.payload as string) || "houve um erro ao criar tarefa";
      });

    builder
      .addCase(editCategoryAction.pending, (state) => {
        state = resetCategoryState(state);
        state.loading = true;
        state.successEdit = undefined;
      })
      .addCase(editCategoryAction.fulfilled, (state) => {
        state = resetCategoryState(state);
        state.loading = false;
        state.successEdit = true;
      })
      .addCase(editCategoryAction.rejected, (state, action) => {
        state = resetCategoryState(state);
        state.loading = false;
        state.successEdit = false;
        state.error =
          (action.payload as string) || "houve um erro ao editar tarefa";
      });

    builder
      .addCase(deleteCategoryAction.pending, (state) => {
        state = resetCategoryState(state);
        state.loading = true;
        state = resetCategoryState(state);
      })
      .addCase(deleteCategoryAction.fulfilled, (state) => {
        state = resetCategoryState(state);

        state.loading = false;
        state.successDelete = true;
      })
      .addCase(deleteCategoryAction.rejected, (state, action) => {
        state = resetCategoryState(state);
        state.loading = false;
        state.successDelete = false;
        state.error =
          (action.payload as string) || "houve um erro ao deletar tarefa";
      });

    builder.addDefaultCase((state, action) => {});
  },
});
