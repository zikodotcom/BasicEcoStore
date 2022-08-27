import { createSlice } from '@reduxjs/toolkit'

export const sliceHome = createSlice({
    name:"home",
    initialState: {
        data: [
            {
                id: 0,
                isDisplay: true,//true
                img: 'https://cdn.shopify.com/s/files/1/0526/3078/2123/files/BasicEcostore-207_3.jpg?v=1652207064',
                bigTitle: 'GENTLE ON SKIN',
                description: "Say goodbye to wasted cotton balls. Made with 70% bamboo and 30% cotton. They're soft, absorbent and gentle on your skin."
            },
            {
                id: 1,
                isDisplay: false,//true
                img: 'https://cdn.shopify.com/s/files/1/0526/3078/2123/files/BasicEcostore-207_5_ccf4d922-c070-4da5-9a9a-b1b53dbca06a.jpg?v=1655901597',
                bigTitle: 'REUSABLE',
                description: "SOur sleek and simple design keeps you hydrated while staying environmentally conscientious. Suitable for hot or cold beverages."
            },
            {
                id: 2,
                isDisplay: null,//false
                img: 'https://cdn.shopify.com/s/files/1/0526/3078/2123/files/BasicEcostore-207_5.jpg?v=1652206466',
                bigTitle: 'DRINK UP',
                description: "Stay hydrated with style and function. Bringing you a more sustainable way of staying hydrated. Great for on the go or casual use."
            },
        ],
        isActive: false
    },
    reducers:{
        display: (state)=>{
            for(let i = 0;i < state.data.length;i++){
                if (state.data[i].isDisplay === true){
                    state.data[i].isDisplay = null
                }else if(state.data[i].isDisplay === false){
                    state.data[i].isDisplay = true
                }else{
                    state.data[i].isDisplay = false
                }
            }
        },
        actived: (state)=>{
            state.isActive = !state.isActive
        }
    }
})

export const {display, actived} = sliceHome.actions
export default sliceHome.reducer