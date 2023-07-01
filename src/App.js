import Header from "./components/Header/Header";
import Title from "./components/Header/Title";
import Products from "./components/Body/Products";
import Cart from "./components/Body/Cart";
function App() {
  return (
    <div>
      <header>
        <Header />
        <Title />
      </header>
      <main>
        <Products />
        <Cart />
      </main>
    </div>
  );
}

export default App;
