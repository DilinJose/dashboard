import React, { useContext, useState } from 'react'
// import { inventoryData } from '../utils/data'
import { RiDeleteBin6Line } from "react-icons/ri";

import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { SearchContext } from '../App';

const InventoryTable = () => {
      const search = useContext(SearchContext);
    const inventoryData = useSelector((state: RootState) => state.inventory)

    console.log('inventoryData', inventoryData)

    const filterData = inventoryData.filter((item) =>
        item.name.toLowerCase().includes(search.searchValue.toLowerCase()
        ) ||
        item.code.includes(search.searchValue.toLowerCase())
    );

    console.log('filterData', filterData)

    const [showTable, setShowTAble] = useState(false)

    return (
        <>
            <div className='flex items-center justify-between border-t-1 border-x-1  border-[#a4a4a442] rounded-t-md p-3 m-0 bg-[#01C0C8]/15'>
                <p onClick={() => setShowTAble(!showTable)} className='flex gap-2  items-center text-white'>{!showTable ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}data</p>
                <p className='flex gap-2 items-center text-gray-300'>$12<span><RiDeleteBin6Line className='text-red-500' /></span></p>
            </div>

            {!showTable && <table className='m-0 border  w-full rounded-b-md border-collapse border-[#a4a4a442]' >
                <thead>
                    <tr className='bg-[#2EACBA17]'>
                        {
                            ['id', 'code', 'name', 'category', 'feeLevel', 'amount', 'gap'].map((header) => (
                                <th key={header} className={`p-2 border border-[#a4a4a442] text-gray-400 ${typeof header === 'string' ? 'text-left' : 'text-right'}`}>{header}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody className='rounded-b-md'>
                    {
                        filterData.map(({ id, code, name, category, feeLevel, amount, gap }) => (
                            <tr key={id} className='hover:bg-[#1e2a3c]'>
                                <td className={`p-2 border border-[#a4a4a442] text-gray-300 ${typeof id === 'string' ? 'text-left' : 'text-right'}`}>{id}</td>
                                <td className={`p-2 border border-[#a4a4a442] text-gray-300 ${typeof code === 'string' ? 'text-left' : 'text-right'}`}>{code}</td>
                                <td className={`p-2 border border-[#a4a4a442] text-gray-300 ${typeof name === 'string' ? 'text-left' : 'text-right'}`}>{name}</td>
                                <td className={`p-2 border border-[#a4a4a442] text-gray-300 ${typeof category === 'string' ? 'text-left' : 'text-right'}`}>{category}</td>
                                <td className={`p-2 border border-[#a4a4a442] text-gray-300 ${typeof feeLevel === 'string' ? 'text-left' : 'text-right'}`}>{feeLevel}</td>
                                <td className={`p-2 border border-[#a4a4a442] text-gray-300 ${typeof amount === 'string' ? 'text-left' : 'text-right'}`}>{amount.toFixed(2)}</td>
                                <td className={`p-2 border border-[#a4a4a442] text-gray-300 ${typeof gap === 'string' ? 'text-left' : 'text-right'}`}>{gap.toFixed(2)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            }
        </>
    )
}

export default InventoryTable