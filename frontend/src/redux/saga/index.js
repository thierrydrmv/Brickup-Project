import { takeEvery, put } from 'redux-saga/effects';
import { SET_TASK_LIST, TASK_LIST } from '../actions/actionTypes';

function* getAllTasks(){
  const request = yield fetch("http://localhost:8080/task");
  const data = yield request.json();
  yield put({type: SET_TASK_LIST, data})
}

export default function* taskSaga()
{
  yield takeEvery(TASK_LIST, getAllTasks)
}
