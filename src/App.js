import { Provider } from "react-redux";
import store from "./redux/store";
import ListOfAllDogBreeds from "./components.js/ListOfAllDogBreeds ";
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <ListOfAllDogBreeds />
      </div>
    </Provider>
  );
}

export default App;
