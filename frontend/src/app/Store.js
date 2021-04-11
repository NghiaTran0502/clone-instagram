import { configureStore } from '@reduxjs/toolkit';

import exploreReducer from '../features/explores/ExploreSlice';

const rootReduce = {
   explore: exploreReducer
}

const store = configureStore({
   reducer: rootReduce
});

export default store;