import * as Types from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_ERRORS:
      return payload;
    default:
      return state;
  }
}
