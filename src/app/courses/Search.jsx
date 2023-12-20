"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Search = ({ value }) => {
  var [keyword, setKeyword] = useState(value || "");
  var router = useRouter();

  useEffect(() => {
    router.push(`/courses?keyword=${keyword}`);
  }, [keyword]);

  return (
    <div className="relative group">
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
        placeholder="Search"
        className="text-white focus:ring-0 bg-black border border-white/20 rounded-full py-2 px-3"
      />
      <i className="bx text-white bg-black absolute top-1/2 -translate-y-1/2 right-3 bx-search"></i>
    </div>
  );
};

export default Search;
