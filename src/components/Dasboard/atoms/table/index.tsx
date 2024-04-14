import { CompanyType } from "@/types/company";
import React from "react";
import Pagination from "@/components/atoms/pagination";

type CompanyTableProps = {
  companies: CompanyType[];
  total: number;
  limit: number;
  page: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const CompanyTable: React.FC<CompanyTableProps> = ({
  companies,
  total,
  limit,
  page,
  setCurrentPage,
}) => {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Address</th>
            <th className="text-left">Revenue</th>
            <th className="text-left">Phone</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.address}</td>
              <td>{company.gstin}</td>
              <td>{company.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        total={total}
        limit={limit}
        page={page}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CompanyTable;
