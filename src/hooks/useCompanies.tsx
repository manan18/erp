import CompanyContext from "@/contexts/companies";
import { useContext } from "react";

export default function useCompanies() {
  const { companies, addCompany, removeCompany, refreshCompanies, loading } =
    useContext(CompanyContext);

  return {
    companies,
    addCompany,
    removeCompany,
    refreshCompanies,
    loading,
  };
}
