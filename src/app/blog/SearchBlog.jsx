"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter ,useSearchParams} from "next/navigation";

const Search = ({ value }) => {
  var router = useRouter();
  var s = useRef(null)
var key = useSearchParams().get("keyword")
  


  useEffect(()=>{

      s.current.value = key
    
  },[])

  return (
    <div className="relative group flex justify-end">
      <input
        ref={s}
        onChange={(e) => router.push(`/blog?keyword=${e.target.value}`)}
        type="search"
        placeholder="Search"
        className="text-white w-[340px] outline-none focus:ring-2 bg-black border border-white/20 rounded-lg py-2 px-3"
      />
    </div>
  );
};

export default Search;
