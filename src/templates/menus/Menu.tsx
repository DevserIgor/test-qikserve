'use client';
import React, { useContext } from 'react';
import Search from './search/Search';
import { AppContext } from '@/providers/appContextProvider';

const Menu: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state);
  return (
    <Search />
    // <Section sections={sections}/>

    // {/* Category and Items List */}
    // <div className="px-4">
    //   {['Burgers', 'Drinks', 'Desserts'].map((category) => (
    //     <div key={category}>
    //       <h2 className="text-lg font-bold my-4">{category}</h2>
    //       <div className="grid grid-cols-1 gap-4">
    //         {items
    //           .filter((item) => item.category === category.toLowerCase())
    //           .map((item) => (
    //             <div
    //               key={item.id}
    //               className="border p-4 rounded-lg flex items-center"
    //             >
    //               <img
    //                 className="w-20 h-20 object-cover rounded-full mr-4"
    //                 src={item.imageUrl}
    //                 alt={item.title}
    //               />
    //               <div>
    //                 <h3 className="font-bold">{item.title}</h3>
    //                 <p className="text-sm text-gray-600">
    //                   {item.description}
    //                 </p>
    //                 <p className="text-lg">{item.price}</p>
    //               </div>
    //             </div>
    //           ))}
    //       </div>
    //     </div>
    //   ))}
    // </div>

    // {/* Allergy Information Button */}
    // <div className="p-4">
    //   <button className="w-full p-4 border rounded text-left">
    //     View allergy information
    //   </button>
    // </div>
  );
};

export default Menu;
