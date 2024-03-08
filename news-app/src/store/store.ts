import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { apiService } from '../services/api-service/api.service';

import { rtkQueryMiddleware } from './rtk-middleware';
import { reducer as snackbarReducer } from './snackbar-slice';

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
    snackbar: snackbarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware, rtkQueryMiddleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
