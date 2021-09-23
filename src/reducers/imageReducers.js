import { IMAGE_TYPES } from "../types";

const imageReducers = (state = [], action) => {
  switch (action.type) {
    case IMAGE_TYPES.FETCH_IMAGES:
      return action.payload;
    default:
      return state;
  }
};

export default imageReducers;
