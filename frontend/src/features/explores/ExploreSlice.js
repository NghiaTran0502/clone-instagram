import { createSlice } from '@reduxjs/toolkit'

export const exploreSlice = createSlice({
   name: 'explore',
   initialState: [
      {
         id: 91176,
         url: 'https://picsum.photos/id/532/500/500',
         like: 1000,
         comment: 100
      },
      {
         id: 82605,
         url: 'https://picsum.photos/id/43/300/300',
         like: 1000,
         comment: 100
      },
      {
         id: 74760,
         url: 'https://picsum.photos/id/722/300/300',
         like: 1000,
         comment: 100
      },
      {
         id: 39588,
         url: 'https://picsum.photos/id/294/300/300',
         like: 1000,
         comment: 100
      },
      {
         id: 72133,

         url: 'https://picsum.photos/id/229/300/300',
         like: 1000,
         comment: 100
      },
      {
         id: 95333,
         url: 'https://picsum.photos/id/862/300/300',
         like: 1000,
         comment: 100
      },
      {
         id: 62419,
         url: 'https://picsum.photos/id/515/300/300',
         like: 1000,
         comment: 100
      },
      {
         id: 12569,
         url: 'https://picsum.photos/id/730/300/300',
         like: 1000,
         comment: 100
      },
      {
         id: 47434,
         url: 'https://picsum.photos/id/287/300/300',
         like: 1000,
         comment: 100
      },
      {
         id: 52685,
         url: 'https://picsum.photos/id/859/300/300',
         like: 1000,
         comment: 100
      },
      {
         id: 69928,
         url: 'https://picsum.photos/id/110/300/300',
         like: 1000,
         comment: 100
      },
      {
         id: 86160,
         url: 'https://picsum.photos/id/649/300/300',
         like: 1000,
         comment: 100
      },
   ],
   reducers: {
      getExplore: (state, action) => {
         // GetAPI and push data
      }
   },
})

// Action creators are generated for each case reducer function
// export const { } = exploreSlice.actions

export default exploreSlice.reducer