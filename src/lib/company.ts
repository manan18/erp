import axios from "@/config/axios.config";
import { CompanyType } from "@/types/company";

export async function getCompanies(): Promise<{
  data: CompanyType[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}> {
  const response = await axios.get("/users/companies", {
    withCredentials: true,
  });
  return response.data;
}

export async function addCompany(
  company: Omit<CompanyType, "id" | "createdAt" | "ownerId">
) {
  await axios.post("/company/create", company, {
    withCredentials: true,
  });
}
export async function removeCompany(id: string) {
  await axios.delete(`/company/delete/${id}`, {
    withCredentials: true,
  });
}
