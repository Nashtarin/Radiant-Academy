import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import courseReducer from './slices/courseSlice';
import forumReducer from './slices/forumSlice';
import categoryReducer from './slices/categorySlice';
import reviewReducer from './slices/reviewSlice';
import userReducer from './slices/userSlice';
import quizReducer from './slices/quizSlice';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  courses: courseReducer,
  forums: forumReducer,
  categories: categoryReducer,
  reviews: reviewReducer,
  users: userReducer,
  quizzes: quizReducer,
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