import * as UI from "./actionType";

const defaultState = {
  rootFontSize: "",
  userInfo: {
    code: "",
    mobile: ""
  },
  hasAuth: false
};

const appReducer = (state = defaultState, action) => {
  console.log("UI", state, action);
  switch (action.type) {
    case UI.ROOT_FONT_SIZE:
      return { ...state, rootFontSize: action.rootFontSize };
    case UI.USER_INFO:
      return { ...state, userInfo: action.userInfo };
    case UI.HAS_AUTH:
      return { ...state, hasAuth: action.hasAuth };
    default:
      return state;
  }
};

export {
  appReducer,
  defaultState
}