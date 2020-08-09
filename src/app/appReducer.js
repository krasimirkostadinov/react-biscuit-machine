import { messages } from "../constants";

export const initialState = {
  itemSelected: false,
  selectedContainer: "",
};

export function componentReducer(state = initialState, payload) {
  switch (payload.type) {
    case messages.CLICK_COMPONENT:
      return {
        ...state,
        itemSelected: true,
        selectedContainer: action.payload,
      };

    default:
      return state;
  }
}
