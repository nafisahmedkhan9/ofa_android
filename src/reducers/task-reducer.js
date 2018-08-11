import * as TASK_CONSTANT from "../actions/task-actions";

export default function taskReducer(state = {}, { type, payload }) {
  switch (type) {
    case TASK_CONSTANT.APISUCCESS:
      return Object.assign({}, state, payload);

    case TASK_CONSTANT.APIFAILURE:
      return Object.assign({}, state, payload);

    case TASK_CONSTANT.UPDATEPROPS:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
}
