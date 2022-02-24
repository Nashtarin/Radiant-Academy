import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import courseReducer from './slices/courseSlice';
import forumReducer from './slices/forumSlice';
import categoryReducer from './slices/categorySlice';

const rootReducer = combineReducers({
  courses: courseReducer,
  forums: forumReducer,
  categories: categoryReducer,
})

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})