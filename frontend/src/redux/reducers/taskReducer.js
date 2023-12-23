import { SET_TASK_LIST } from "../actions/actionTypes";

const INITIAL_STATE = [{
  id: 0,
  nome: '',
  description: '',
  status: '',
  image: '',
}]

export default function task(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_TASK_LIST:
      return [...action.data];
      default:
        return state;
  }

}