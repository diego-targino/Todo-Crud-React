import { CreateCategoryRequestDTO } from "../dtos/request/categories/createCategoryRequestDTO";
import { EditCategoryRequestDTO } from "../dtos/request/categories/editCategoryRequestDTO";
import { ListCategoriesResponseDTO } from "../dtos/response/categories/listCategoriesResponseDTO";
import { IResponse } from "../dtos/response/iResponse";
import { AxiosClient } from "../utils/axiosClient";

export class CategoryService {
  static async listCategories(
    userId: string
  ): Promise<ListCategoriesResponseDTO> {
    const response = await AxiosClient.get<ListCategoriesResponseDTO>(
      "/categories",
      {
        headers: { userId: userId },
      }
    );

    if (response.status !== 200) throw new Error(response.data.message);
    return response.data;
  }

  static async createCategory(
    createCategoryRequestDTO: CreateCategoryRequestDTO
  ): Promise<void> {
    const response = await AxiosClient.post<IResponse>(
      "/categories",
      createCategoryRequestDTO
    );

    if (response.status !== 201) throw new Error(response.data.message);
  }

  static async editCategory(
    editCategoryRequestDTO: EditCategoryRequestDTO
  ): Promise<void> {
    const response = await AxiosClient.put<IResponse>(
      `/categories/${editCategoryRequestDTO.id}`,
      editCategoryRequestDTO
    );

    if (response.status !== 200) throw new Error(response.data.message);
  }

  static async deleteCategory(categoryId: string): Promise<void> {
    const response = await AxiosClient.delete<IResponse>(
      `/categories/${categoryId}`
    );

    if (response.status !== 200) throw new Error(response.data.message);
  }
}
