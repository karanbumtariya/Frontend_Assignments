import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
  setEditItem,
} from "../features/productsSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((s) => s.products.list);
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    (p.name || p.title || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="search-box">
        <input
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 && (
        <p className="empty-text">No records found</p>
      )}

      {filtered.length > 0 && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Offer Price</th>
                <th>Qty</th>
                <th>Date</th>
                <th>Photo</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((p, i) => (
                <tr key={i}>
                  <td>{p.name || p.title}</td>
                  <td>{p.price || "-"}</td>
                  <td>{p.offerPrice || "-"}</td>
                  <td>{p.qty || "-"}</td>
                  <td>{p.date || "-"}</td>

                  <td>
                    {p.photo ? (
                      <a
                        href={p.photo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>

                  <td style={{ maxWidth: "200px" }}>
                    {p.description || "-"}
                  </td>

                  <td>
                    <button
                      className="btn btn-edit"
                      onClick={() => dispatch(setEditItem(p))}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-delete"
                      onClick={() => dispatch(deleteProduct(p.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}