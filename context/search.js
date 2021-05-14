import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export default function SearchProvider({ children }) {
  const [search, setSearch] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useCount must be used within a SearchProvider");
  const { search, setSearch } = context;
  return { search, setSearch };
}