import { createContext } from "react";
import { CompanyType } from "@/types/company";

const CompanyContext = createContext<{
  companies: CompanyType[];
  addCompany: (
    company: Omit<CompanyType, "id" | "createdAt" | "ownerId">
  ) => void;
  removeCompany: (id: string) => void;
  refreshCompanies: () => void;
  loading: boolean;
}>({
  companies: [],
  addCompany: () => {},
  removeCompany: () => {},
  refreshCompanies: () => {},
  loading: true,
});

export default CompanyContext;
