import { configureStore } from '@reduxjs/toolkit';
import { feedbackApi } from './slice';

const rootReducer = {
  [feedbackApi.reducerPath]: feedbackApi.reducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(feedbackApi.middleware),
});

export default store;
