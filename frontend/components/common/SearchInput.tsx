import React from 'react'
import { IoMdSearch } from 'react-icons/io'

const SearchInput = () => {
  return (
    <div className="flex justify-end mb-4">
        <div className="flex items-center gap-1 bg-slate-200 dark:bg-blue-200/20 px-4 py-2 rounded-md w-[300px]">
          <input
            type="text"
            id="search"
            name="search"
            className="w-full outline-none transition-all duration-300 bg-transparent"
            placeholder="Search"
            required
          />
          <button type="button" className="">
            <IoMdSearch size={25} />
          </button>
        </div>
      </div>
  )
}

export default SearchInput
