import { configureStore } from '@reduxjs/toolkit';
import {userApi} from '../backend/user'
import { tracksApi } from '../backend/tracks';
import { selectionsApi } from '../backend/selection';
import { favoritesApi } from '../backend/favorites';
import authReducer from './reducers/auth';
import trackReducer from './reducers/tracks';

export const store = configureStore({
  reducer: {
    trackId: trackReducer,
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
    [selectionsApi.reducerPath]: selectionsApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(tracksApi.middleware)
      .concat(selectionsApi.middleware)
      .concat(favoritesApi.middleware),
});