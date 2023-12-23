import { EXAMPLE_DATA, TASK_LIST } from './actionTypes';

export const exampleAction = (state) => ({ type: EXAMPLE_DATA, state })

export const taskList = (state) => ({ type: TASK_LIST, state})