import { useSelector, useDispatch } from "react-redux";
import { updateRead, updateBook, readCheck } from "./features/books/createBook";
import { useState } from "react";

const ViewBooks = () => {
  const data = useSelector((state) => state.books.data);
  const filteredData = useSelector((state) => state.books.filteredData);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [singleItem, setSingleItem] = useState({
    index: 0,
    name: "",
    author: "",
    year: "",
    price: "",
    read: false,
  });
  const dispatch = useDispatch();
  const updateBookPayload = (e, val) => {
    setSingleItem({
      ...singleItem,
      [val]: e.target.value,
    });
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3 style={{ margin: 0 }}>Books</h3>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Year</th>
              <th>Price</th>
              <th>
                Read
                <span>
                  <i
                    style={{ marginLeft: "5px", cursor: "pointer" }}
                    className="fa fa-check"
                    title="Read filter"
                    onClick={() => {
                      dispatch(readCheck(true));
                    }}
                  ></i>
                  <i
                    style={{ marginLeft: "5px", cursor: "pointer" }}
                    className="fa fa-ban"
                    title="Unread filter"
                    onClick={() => {
                      dispatch(readCheck(false));
                    }}
                  ></i>
                  <i
                    style={{ marginLeft: "5px", cursor: "pointer" }}
                    className="fa fa-rotate-left"
                    title="Reset filter"
                    onClick={() => {
                      dispatch(readCheck(""));
                    }}
                  ></i>
                </span>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[...(filteredData.length ? filteredData : data)].map((item, idx) => {
              return (
                <tr key={`${item.name}${item.year}`}>
                  <td>{item.name}</td>
                  <td>{item.author}</td>
                  <td>{item.year}</td>
                  <td>{item.price}</td>
                  <td>
                    <input
                      type="checkbox"
                      name="select"
                      checked={item.read ? true : false}
                      onChange={() => {
                        dispatch(updateRead(item.name));
                      }}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setDialogOpen(true);
                        setSingleItem({ ...item, index: idx });
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <dialog style={{ top: "200px" }} open={dialogOpen}>
        <h4 style={{ marginTop: 0 }}>Update book details</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
            }}
          >
            <label>Name:</label>
            <input
              onChange={(e) => updateBookPayload(e, "name")}
              value={singleItem.name}
              placeholder="Book Name"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
            }}
          >
            <label>Author:</label>
            <input
              onChange={(e) => updateBookPayload(e, "author")}
              value={singleItem.author}
              placeholder="Book Author"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
            }}
          >
            <label>Year:</label>
            <input
              onChange={(e) => updateBookPayload(e, "year")}
              value={singleItem.year}
              placeholder="Year Published"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "start",
            }}
          >
            <label>Price:</label>
            <input
              onChange={(e) => updateBookPayload(e, "price")}
              value={singleItem.price}
              placeholder="Price"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "1rem",
          }}
        >
          <button
            onClick={() => {
              dispatch(updateBook({ ...singleItem }));
              setDialogOpen(false);
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              setDialogOpen(false);
            }}
          >
            Cancel
          </button>
        </div>
      </dialog>
    </>
  );
};

export default ViewBooks;
