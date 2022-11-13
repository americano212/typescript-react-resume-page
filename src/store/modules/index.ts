import { combineReducers } from "redux";
import setLanguage from "./language";

const rootReducer = combineReducers({
  setLanguage,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
