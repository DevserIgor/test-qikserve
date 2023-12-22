import React from 'react';

interface Props {
  // Add your component props here
}

const Search: React.FC<Props> = () => {
  // Add your component logic here

  return (
    <div className="p-4">
      <input
        className="w-full p-3 border rounded"
        type="search"
        placeholder="Search menu items"
      />
    </div>
  );
};

export default Search;
