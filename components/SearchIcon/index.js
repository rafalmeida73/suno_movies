import React from "react";

import { useSearch } from "../../context/search";


function SearchIcon() {
  const { search } = useSearch();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        stroke={`${!search ? '#EAEAEA' : 'var(--pink'}`}
        strokeMiterlimit="10"
        strokeWidth="2.308"
        clipPath="url(#clip0)"
      >
        <path d="M9.986.923a9.063 9.063 0 100 18.126 9.063 9.063 0 000-18.126v0z"></path>
        <path strokeLinecap="round" d="M16.747 16.747l6.33 6.33"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill={`${!search ? '#EAEAEA' : 'var(--pink'}`} d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default SearchIcon;