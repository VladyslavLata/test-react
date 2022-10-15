import {
  configureStore,
  // createAction,
  // createReducer,
  createSlice,
} from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import { useDispatch, useSelector } from 'react-redux';

// const increment = createAction('timer/increment');
// const decrement = createAction('timer/decrement');

// const timerReducer = createReducer(0, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

const timerSlice = createSlice({
  name: 'timer',
  initialState: 0,
  reducers: {
    increment(state, action) {
      return (state += action.payload);
    },
    decrement(state, action) {
      return (state -= action.payload);
    },
  },
});

export const { increment, decrement } = timerSlice.actions;

const persistConfig = {
  key: 'timer',
  storage,
};

const timerPersistedReducer = persistReducer(persistConfig, timerSlice.reducer);
// ---- store----

export const store = configureStore({
  reducer: {
    timer: timerPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// ----store----
