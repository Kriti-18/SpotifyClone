import { configureStore } from '@reduxjs/toolkit';

import { SpotifyApi} from './services/Spotify';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [SpotifyApi.reducerPath]: SpotifyApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(SpotifyApi.middleware),
});
