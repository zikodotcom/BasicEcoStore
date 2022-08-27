import { createSlice } from '@reduxjs/toolkit'

export const sliceProduct = createSlice({
    name:"home",
    initialState: {
        data: [
            {
                id: 0,
                isDisplay: true,//true
                img1: 'https://cdn.shopify.com/s/files/1/0526/3078/2123/products/WhatsAppImage2022-06-28at9.181.jpg?v=1656500380&width=360',
                img2: 'https://cdn.shopify.com/s/files/1/0526/3078/2123/products/BasicEcostore-6.jpg?v=1656500380&width=360',
                bigTitle: 'Glass Bamboo Tumbler',
                price: "$18.50 USD"
            },
            {
                id: 1,
                isDisplay: true,//true
                img1: 'https://cdn.shopify.com/s/files/1/0526/3078/2123/products/WhatsAppImage2022-06-20at11.04-2.jpg?v=1655826161&width=360',
                img2: 'https://cdn.shopify.com/s/files/1/0526/3078/2123/products/WhatsAppImage2022-06-20at11.04-1.jpg?v=1655826161&width=360',
                bigTitle: 'Reusable makeup remover pads',
                price: "$22.00 USD"
            },
        ],
    },
    reducers:{
        active: (state , action)=>{
            state.data[action.payload.index].isDisplay =  !state.data[action.payload.index].isDisplay
            console.log(state.data[action.payload.index].isDisplay);
        }
    }
})

export const {active} = sliceProduct.actions
export default sliceProduct.reducer