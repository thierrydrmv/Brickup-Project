import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import taskSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer, 
  middleware:() => [sagaMiddleware]
});

sagaMiddleware.run(taskSaga);

export default store;