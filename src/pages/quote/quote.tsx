import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'
import { HiOutlineUserPlus } from "react-icons/hi2";
import { GrDocumentText } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";

import { locationData } from '../../utils/data';
import InventoryTable from '../../components/inventoryTable';
import { searchInventory } from '../../redux/slice/inventorySlice';

const Quote = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')
  const userData = useSelector((state: RootState) => state.user.user)
  const inventoryData = useSelector((state: RootState) => state.inventory)

  const searchItem = searchValue && inventoryData.filter(inventory => inventory.name.toLowerCase().includes(searchValue.toLowerCase()) || inventory.code.includes(searchValue))

  useEffect(() => {
    if (searchValue) {
      setTimeout(() => {
        dispatch(searchInventory(searchValue))
      }, 500)
    }
  }, [searchValue])



  return (
    <div className='p-5'>
      <p className='text-gray-300 mb-3'>Welcome <span className='text-white'>{userData?.name ?? "user"}</span></p>

      <div className='border border-[#a4a4a442] rounded-md px-5 py-10'>
        <div className='flex flex-wrap gap-5 justify-between items-start'>

          <div className='flex flex-3 flex-col gap-5'>
            <div className='rounded-md flex  gap-2 items-center justify-center flex-col border border-[#a4a4a442] w-[180px] h-[150px]' >
              <div className='flex items-center justify-center border border-[#01C0C842] w-12 h-12 rounded-full bg-[#01C0C8]/15'>
                <HiOutlineUserPlus color='#ffff' />
              </div>
              <p className='text-gray-400'>Add a Patient</p>
            </div>

            <div className='flex gap-5 flex-wrap'>
              <div>
                <div className='relative'>
                  <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Procedure name or code' className='bg-[#111c2d] border border-[#a4a4a442] p-3 rounded-md text-white w-[400px] focus:border-[#01C0C8] ring-[#01C0C8]' />
                  <CiSearch className='text-white absolute top-4 left-3' />
                </div>
                {searchItem && <div className='text-white'>{searchItem?.map(({ name }) => <p className='p-3 rounded-md bg-[#1F2937]'>{name}</p>)}</div>
                }
              </div>

              <select className='bg-[#111c2d] border border-[#a4a4a442] p-3 rounded-md text-gray-400 w-[300px]'>
                {
                  locationData.map((location) => {
                    return <option key={location.id} value={location.code}>{location.name}</option>
                  })
                }
              </select>

              <div>
                <button className='flex items-center justify-center gap-3 bg-[#01C0C8]/15 border border-[#01C0C8] p-3 rounded-md text-white w-[300px]'>Inventories <span><GrDocumentText className='text-white' /></span></button>
              </div>
            </div>
            <div>
              <input type="text" placeholder='Type:SubjectLine' className='bg-[#111c2d] border border-[#a4a4a442] p-3 rounded-md text-white w-[750px]' />
            </div>


          </div>

          <div className='flex  flex-1 flex-col gap-5 '>
            <div className='flex items-center justify-between gap-5'>
              <label className=' text-gray-400'>Qoute No</label>
              <input type="text" placeholder='Qoute No' className='bg-[#111c2d] border border-[#a4a4a442] p-1 rounded-md text-white w-[250px]' />
            </div>
            <div className='flex items-center justify-between  gap-5'>
              <label className=' text-gray-400'>Date of issue<span className='text-red-500'>*</span></label>
              <input type="date" className='  bg-[#111c2d] border border-[#a4a4a442] p-1 rounded-md text-white w-[250px]' />
            </div>
            <div className='flex items-center justify-between  gap-5'>
              <label className=' text-gray-400'>Free level<span className='text-red-500'>*</span></label>
              <select className='bg-[#111c2d] border border-[#a4a4a442] p-1 rounded-md text-gray-400 w-[250px]' >
                <option value="normal">Normal</option>
              </select>
            </div>

          </div>
        </div>
        <div className='my-5'>
          <InventoryTable />
        </div>

        <div className='flex justify-between items-start '>

          <div>
            <h5 className='font-bold text-white'>Terms and condition</h5>
            <p className='font-extralight text-gray-400'>conditions</p>
          </div>

          <div className='flex flex-col gap-5'>
            <div className='border border-[#a4a4a442] bg-[#2EACBA17] rounded-md p-3 mt-2 flex flex-col gap-3 w-[300px]'>
              <div className='border-b-1 pb-2 border-[#a4a4a442] rounded-md text-gray-400'>
                <div className='flex justify-between items-center mb-2 '>
                  <p>Rebate Total:</p>
                  <p>$250</p>
                </div>

                <div className='flex justify-between items-center  mb-2'>
                  <p>Gap Total:</p>
                  <p>$0</p>
                </div>

                <div className='flex justify-between items-center  mb-2'>
                  <p>Inventories Total:</p>
                  <p>$0</p>
                </div>

                <div className='flex justify-between items-center  mb-2'>
                  <p>Total Discount:</p>
                  <p>$0</p>
                </div>

              </div>
              <div className='flex justify-between items-center '>
                <p className='font-bold text-white text-lg'>Net Total:</p>
                <p className='text-[#01C0C8]'>$250</p>
              </div>

            </div>
            <div className='flex justify-end'>
              <button className='w-20 h-10 bg-[#01C0C8] rounded-md'>save</button>
            </div>
          </div>


        </div>
      </div>

    </div>
  )
}

export default Quote