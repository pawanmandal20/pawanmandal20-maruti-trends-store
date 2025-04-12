import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: 499 + i * 10,
  description: `This is a stylish item number ${i + 1} perfect for daily and festive wear.`,
  image: "https://via.placeholder.com/300x300?text=Product+" + (i + 1)
}));

function HomePage() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded shadow p-4">
          <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded" />
          <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-700">₹{product.price}</p>
          <Link to={`/product/${product.id}`} className="text-blue-600 underline">View Details</Link>
        </div>
      ))}
    </div>
  );
}

function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <p className="p-4">Product not found.</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow rounded p-6 mt-4">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-xl font-semibold mt-2">₹{product.price}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link to="/">Maruti Trends</Link>
          </h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>

        <footer className="bg-blue-600 text-white text-center p-4 mt-6">
          &copy; {new Date().getFullYear()} Maruti Trends. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
