import Header from "./components/Header/Header";
import Title from "./components/Header/Title";
import Products from "./components/Body/Products";
function App() {
  return (
    <div>
      <header>
        <Header />
        <Title />
      </header>
      <main>
        <Products />
      </main>
    </div>
  );
}

export default App;
