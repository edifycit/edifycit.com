"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import queryStr from 'query-string'


const Pagination = ({res,filters}) => {

  const router = useRouter()



  return (
   <>
   <div className="flex text-sm justify-end items-center gap-2 py-4 text-[#666]">
          <span>
            {res?.starting}-{res?.ending} of {res?.count}
          </span>
          <div className="flex items-center text-2xl gap-2">
            <button
              disabled={res.starting == 1}
              title="Prev"
              onClick={() => router.push(`/blog?${queryStr.stringify({...filters,page:filters?.page ? Number(filters.page)-1 : 1})}`)}

              className="hover:bg-gray-300 disabled:text-gray-400  disabled:cursor-not-allowed w-6 flex items-start justify-center h-6 cursor-pointer rounded-full"
            >
              <i className="bx bx-chevron-left"></i>
            </button>
            <button
              disabled={res?.ending == res?.count}
              title="Next"
              onClick={() => router.push(`/blog?${queryStr.stringify({...filters,page:filters?.page ? Number(filters.page)+1 : 1})}`)}
              className="hover:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed w-6 flex items-start justify-center h-6 cursor-pointer rounded-full"
            >
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>
   </>
  )
}

export default Pagination