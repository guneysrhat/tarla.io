import { Provider } from "react-redux";
import store from "./app/store";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { grey, blueGrey } from "@mui/material/colors";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: grey["900"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });
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
