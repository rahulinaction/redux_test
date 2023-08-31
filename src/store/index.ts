import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useSelector, useDispatch } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { apiPost } from './slices/apiPost';
import type { PreloadedState } from '@reduxjs/toolkit';
//*** Here we configure redux toolkit store along with reducers and the middleware**/
const reducers = combineReducers({
  [apiPost.reducerPath]: apiPost.reducer,
});

/*export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPost.middleware),
});*/

//Required for testing
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPost.middleware),
    preloadedState
  })
}


//setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducers>
export type AppStore = ReturnType<typeof setupStore>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;


