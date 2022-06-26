import { QueryClient } from "react-query";
import { createStore, combineReducers } from "redux";
import { NavigationReducers } from "./NavigationReducers";
import { LocationReducers } from "./LocationReducers";
import { UserReducers } from "./UserReducers";

const allReducers = combineReducers({
  user: UserReducers,
  navigation: NavigationReducers,
  location: LocationReducers,
});

// const persistedReducer = persistReducer(persistConfig, allReducers);
// const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(allReducers);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, staleTime: 60000 },
  },
});
