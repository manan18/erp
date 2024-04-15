import CompanyContext from "@/contexts/companies";
import { useContext } from "react";

export default function useCompanies() {
  const {
    companies,
    meta,
    addCompany,
    removeCompany,
    refreshCompanies,
    loading,
  } = useContext(CompanyContext);

  return {
    companies,
    meta,
    addCompany,
    removeCompany,
    refreshCompanies,
    loading,
  };
}
