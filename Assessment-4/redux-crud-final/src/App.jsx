import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div className="app-container">
      <h2 className="app-title">Redux CRUD App</h2>
      <ProductForm />
      <ProductList />
    </div>
  );
}
