import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search: React.FC = () => {
  return (
    <div className="relative p-4">
      <MdSearch className="absolute left-[30px] top-[38px] transform -translate-y-1/2 text-[#8A94A4] z-10 font-light text-[20px]" />
      <input
        className="w-full pl-10 h-[40px] rounded-[7.29px] border-[0.91px] border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-gray-700 font-roboto text-base font-normal leading-[18.24px] tracking-normal text-left"
        type="search"
        placeholder="Search menu items"
      />
    </div>
  );
};

export default Search;
