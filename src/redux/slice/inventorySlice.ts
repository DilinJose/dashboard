import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        code:
            "56220"
        ,
        name:
            "CT Cervical Spine without Contrast"
        ,

        category:

            "CTC - CT Cervical"
        ,

        feeLevel:

            "Medicare"
        ,
        amount: 250.56,
        gap: 0.0,
    },
    {
        id: 2,
        code:
            "56221"
        ,
        name:
            "CT Cervical Spine with Contrast"
        ,

        category:

            "CTC - CT Cervical"
        ,

        feeLevel:

            "Private"
        ,
        amount: 320.75,
        gap: 15.0,
    }
];

const InventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        searchInventory: (state, action) => {
            console.log('action', action)
            return state.filter(inventory => inventory.name.toLowerCase().includes(action.payload.toLowerCase()) || inventory.code.includes(action.payload));
        }
    }
})

export const { searchInventory } = InventorySlice.actions

export default InventorySlice.reducer