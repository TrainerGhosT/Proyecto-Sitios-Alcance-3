import { configureStore } from '@reduxjs/toolkit';
//import authReducer from './slices/authSlice';
import oferenteReducer from './slices/oferenteSlice';
import puestoReducer from './slices/puestoSlice';

export const store = configureStore({
  reducer: {
   // auth: authReducer,
    oferente: oferenteReducer,
    puesto: puestoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;