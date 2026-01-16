import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../features/productsSlice";

export default function ProductForm() {
  const dispatch = useDispatch();
  const editItem = useSelector((s) => s.products.editItem);

  const [form, setForm] = useState({
    id: null,
    name: "",
    price: "",
    offerPrice: "",
    photo: "",
    qty: "",
    description: "",
    date: "",
  });

  useEffect(() => {
    if (editItem) {
      setForm(editItem);
    }
  }, [editItem]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (!form.name || !form.price) {
      alert("Name & Price required");
      return;
    }

    if (form.id) {
      dispatch(updateProduct(form));
    } else {
      dispatch(addProduct(form));
    }

    setForm({
      id: null,
      name: "",
      price: "",
      offerPrice: "",
      photo: "",
      qty: "",
      description: "",
      date: "",
    });
  };

  return (
    <form className="form-card" onSubmit={submit}>
      <h3 style={{ marginBottom: "12px", color: "#2c3e50" }}>
        {form.id ? "Update Product" : "Add New Product"}
      </h3>

      <div className="form-grid">
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />

        <input
          name="offerPrice"
          placeholder="Offer Price"
          value={form.offerPrice}
          onChange={handleChange}
        />

        <input
          name="photo"
          placeholder="Photo URL"
          value={form.photo}
          onChange={handleChange}
        />

        <input
          name="qty"
          placeholder="Quantity"
          value={form.qty}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Product Description"
          value={form.description}
          onChange={handleChange}
        />
      </div>

      <div style={{ marginTop: "15px" }}>
        <button className="btn btn-primary">
          {form.id ? "Update Product" : "Add Product"}
        </button>
      </div>
    </form>
  );
}
