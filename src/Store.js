import {configureStore} from '@reduxjs/toolkit';
import { customReducer } from './Reducer/Reducer';

const Store = configureStore({
    reducer: {
        custom : customReducer,
    },
});

export default Store;