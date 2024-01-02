import React from 'react';
import { MdSearch } from 'react-icons/md';
import { InputSearch, WrapperSearch } from './styles';

const Search: React.FC = () => {
  return (
    <WrapperSearch>
      <MdSearch
        className="
        absolute 
        left-[30px] 
        md:left-[15px]
        top-[38px] 
        transform 
        -translate-y-1/2 
        text-[#8A94A4] 
        z-10 
        font-light 
        text-[20px]"
      />
      <InputSearch type="search" placeholder="Search menu items" />
    </WrapperSearch>
  );
};

export default Search;
