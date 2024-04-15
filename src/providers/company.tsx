"use client";
import React, { useEffect, useState } from "react";
import CompanyContext from "@/contexts/companies";
import { CompanyType } from "@/types/company";
import { getCompanies, addCompany, removeCompany } from "@/lib/company";

export default function CompanyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [companies, setCompanies] = React.useState<CompanyType[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [meta, setMeta] = useState({
    total: 0,
    limit: 10,
    page: 1,
    totalPages: 1,
  });

  const refreshCompanies = async () => {
    setLoading(true);
    const companies = await getCompanies();
    setCompanies(companies.data);
    setMeta(companies.meta);
    setLoading(false);
  };

  useEffect(() => {
    refreshCompanies();
  }, []);

  return (
    <CompanyContext.Provider
      value={{
        companies,
        meta,
        addCompany: async (company) => {
          await addCompany(company);
          refreshCompanies();
        },
        removeCompany: async (id) => {
          await removeCompany(id);
          refreshCompanies();
        },
        refreshCompanies,
        loading,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}
