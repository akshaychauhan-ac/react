import { useDispatch } from "react-redux";
import { addBook } from "./features/books/createBook";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [bookData, setBookData] = useState({});
  const [toast, setToast] = useState(false);
  const dispatch = useDispatch();
  const addNewBook = (book) => {
    setToast(true);
    dispatch(addBook({ ...book, read: false }));
    setBookData({
      name: "",
      author: "",
      year: "",
      price: "",
      read: false,
    });
  };
  const updateBookPayload = (e, val) => {
    setBookData({
      ...bookData,
      [val]: e.target.value,
    });
  };

  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
      <h3>Book Library</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "20rem",
        }}
      >
        <input
          onChange={(e) => updateBookPayload(e, "name")}
          value={bookData.name}
          placeholder="Book Name"
        />
        <input
          onChange={(e) => updateBookPayload(e, "author")}
          value={bookData.author}
          placeholder="Book Author"
        />
        <input
          type="number"
          onChange={(e) => updateBookPayload(e, "year")}
          value={bookData.year}
          placeholder="Year Published"
        />
        <input
          type="number"
          onChange={(e) => updateBookPayload(e, "price")}
          value={bookData.price}
          placeholder="Price"
        />
        <button
          disabled={
            !bookData.name ||
            !bookData.author ||
            !bookData.year ||
            !bookData.price
              ? "disabled"
              : ""
          }
          onClick={() => addNewBook(bookData)}
        >
          Add Book
        </button>
        {toast && <h5>New book added! Click <Link to="/view">here</Link> to view.</h5>}
      </div>
    </div>
  );
};

export default Home;
