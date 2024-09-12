import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/users/usersSlice';
import filterSlice from '../features/filter/filterSlice';

const rootReducer = combineReducers({
  users: userSlice,
  filter: filterSlice,
});
export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
