import React, { useState } from "react";

interface SearchSectionProps {
  onSearchHandler: (data: SearchData) => void;
  onSearchValidate: () => boolean;
}
interface SearchData {
  searchInput: string;
  fromDate: string;
  toDate: string;
  adults: number;
  children: number;
}
const SearchSection: React.FC<SearchSectionProps> = ({
  onSearchHandler,
  onSearchValidate,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleSearch = () => {
    if (onSearchValidate()) {
      onSearchHandler({
        searchInput,
        fromDate,
        toDate,
        adults,
        children,
      });
    }
  };
  return (
    <div className="flex p-10 border-2 bg-white rounded-md">
      <div className="pr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <span className="text-red-500">*</span> Country or City:
        </label>
        <input
          type="text"
          placeholder="Enter country or city"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="px-3 py-2 border rounded-md w-full"
        />
      </div>
      <div className="pr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <span className="text-red-500">*</span> From Date:
        </label>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="px-3 py-2 border rounded-md w-full"
        />
      </div>
      <div className="pr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <span className="text-red-500">*</span> To Date:
        </label>
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="px-3 py-2 border rounded-md w-full"
        />
      </div>
      <div className="pr-4">
        <label className="block text-green-500 text-sm font-bold mb-2">
          Adults
        </label>
        <input
          type="number"
          value={adults}
          onChange={(e) => setAdults(Number(e.target.value))}
          className="px-3 py-2 border rounded-md w-full"
        />
      </div>
      <div>
        <label className="block text-green-500 text-sm font-bold mb-2">
          Children
        </label>
        <input
          type="number"
          value={children}
          onChange={(e) => setChildren(Number(e.target.value))}
          className="px-3 py-2 border rounded-md w-full"
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ml-4"
      >
        Find Hotel
      </button>
    </div>
  );
};

export default SearchSection;
