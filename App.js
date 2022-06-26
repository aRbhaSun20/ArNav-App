import 'react-native-gesture-handler'

import React from "react";
import { NativeBaseProvider } from "native-base";
import { queryClient, store } from "./src/reduxStore/store";
import Routes from "./src/Routes";

import { Provider as ReduxProvider } from "react-redux";

import { QueryClientProvider } from "react-query";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider>
          <Routes />
        </NativeBaseProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
