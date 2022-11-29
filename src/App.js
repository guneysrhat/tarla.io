import { Provider } from "react-redux";
import store from "./app/store";
import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import theme from "./components/globalStyles/theme";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
