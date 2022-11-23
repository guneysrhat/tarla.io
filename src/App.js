import { Provider } from "react-redux";
import store from "./app/store";
import UserTable from "./component/UserTable";

function App() {
  return (
    <Provider store={store}>
      <UserTable />
    </Provider>
  );
}

export default App;
