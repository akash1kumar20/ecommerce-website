import Header from "./components/Header/Header";
import Title from "./components/Header/Title";
import Cart from "./components/Body/Cart";
import DataProvider from "./Data_room/DataProvider";
import Products from "./components/Body/Products";
function App() {
  return (
    <DataProvider>
      <header>
        <Header />
        <Title />
      </header>
      <main>
        <Products />
        <Cart />
      </main>
    </DataProvider>
  );
}

export default App;
