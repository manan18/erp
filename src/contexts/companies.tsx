import { createContext } from "react";
import { CompanyType } from "@/types/company";

const CompanyContext = createContext<{
  companies: CompanyType[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  addCompany: (
    company: Omit<CompanyType, "id" | "createdAt" | "ownerId">
  ) => void;
  removeCompany: (id: string) => void;
  refreshCompanies: () => void;
  loading: boolean;
}>({
  companies: [],
  meta: {
    total: 0,
    limit: 10,
    page: 1,
    totalPages: 1,
  },
  addCompany: () => {},
  removeCompany: () => {},
  refreshCompanies: () => {},
  loading: true,
});

export default CompanyContext;
