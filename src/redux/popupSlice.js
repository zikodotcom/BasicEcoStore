import { createSlice } from "@reduxjs/toolkit";



export const slicePopUp = createSlice({
    name: 'popUp',
    initialState: {
        pop : false,
        data: [
            {
                id: 1,
                img: 'https://scontent.cdninstagram.com/v/t51.29350-15/299491146_1273882963016692_1365420098626278586_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=2IeZcLgr8MEAX-BmcpH&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT876WIbG-p6HhH9ppZQxjOrJT7wpeOeGO4Y7DPKg7DFHA&oe=6303697F',
                content: 'Keep your hydration on point with these adorable water bottles 🍃🌿',
                hashtag: '#sustainablebusiness #reusables #waterbottle #bambooproducts #canadianbusiness #tumblercups #reducewaste #plasticfreeliving #ａｅｓｔｈｅｔｉｃｓ'
            },
            {
                id: 2,
                img: 'https://scontent.cdninstagram.com/v/t51.29350-15/298449452_927921208167919_3238800250247177437_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=71w4ZaGkL2EAX-EkQia&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT89Lw42oC5qvBbb1Ofb1JvisFA8qMFGDT3HBieH4Wzzzg&oe=6303891B',
                content: '“Light, bright and fresh” - that’s my favourite way to apply toner! ✨',
                hashtag: '#facialrounds #facialpads #makeupmirror #makeupstorage #zerowastebathroom #reusablepads #savetheearth #saynotopollution #vanitystorage'
            },
            {
                id: 3,
                img: 'https://scontent.cdninstagram.com/v/t51.29350-15/296755836_4791824357585021_505120322591346519_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=MHgVckugztYAX8niEAN&_nc_oc=AQnu28_gf3NPsyLRKK4Dzc-BeF5VBEslBjU6rySWJNmjUXxquetRE5rKmy_-fHLbUxU&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT83v5ypYTrtA7O2z0wQ7_rX4DUUI2PNbeR2CJlJad3cig&oe=63085D7B',
                content: 'Reusable makeup pads make a world of difference. Say no to the landfill, yes to a clean conscience ',
                hashtag: '#reusablemakeuppads #ecofriendly #reusablepads #sustainableliving #makeupremover #plasticfreeoceans #zerowastebeauty #makeupwipes #skincareroutines'
            },
            {
                id: 4,
                img: 'https://scontent.cdninstagram.com/v/t51.29350-15/295970009_5403567619688759_941320095598307504_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=6qtyfjf5GVgAX-gTXyl&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_GXaHcS_ZlzWrh7QqFLEz1Ad64kP4vtx0yFMu_K5Xqbw&oe=6305C99C',
                content: 'Enjoying the summer with her eucalyptus tumbler ',
                hashtag: '#summertime #summerdrinks #summervibes #waterbottle #icedtea #lemonade🍋 #refreshingdrink'
            }
        ],
        index : ''
    },
    reducers: {
        handlePop: (state)=>{
            state.pop = !state.pop
        },
        getIndex: (state,action)=>{
            state.index = action.payload
        },
        incrementIndex : (state)=>{
            if (state.index < 3){
                state.index++;
                console.log(state.index);
            }else{
                state.index = 0
                console.log(state.index);
            }
        },
        decrementIndex: (state)=>{
            if (state.index > (0)){
                state.index--;
                console.log(state.index);
            }else{
                state.index = 3
                console.log(state.index);
            }
        }
    }
})
export const {handlePop, getIndex, incrementIndex, decrementIndex} = slicePopUp.actions
export default slicePopUp.reducer