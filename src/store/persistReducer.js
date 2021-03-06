import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'dash-pucom',
      storage,
      whitelist: ['auth', 'user', 'cupom'],
    },
    reducers
  );

  return persistedReducer;
};
