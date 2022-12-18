import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../../Style/style.css';

const Services = () => {
  const [books, setBooks] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch(`https://bookshoopserver-production.up.railway.app/books/booksCollection?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books)
        const count = data.count;
        const pageNumber = Math.ceil(count / 8);
        setPageCount(pageNumber);
      });
  }, [page]);
  return (
    <div className="container mt-5">
      <h1 className="text-center">Find Your Books</h1>
      <h6 className="text-danger m-auto text-center border-2 mb-3 border-bottom border-danger w-25">
        Get Your Favourite books from here
      </h6>

      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {books.map((book) => (
          <div key={book._id} className="col">
            <div className="card">
              <img
                height={200}
                src={book.img}
                className="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h4 class="card-title">{book.name}</h4>
                <h5>
                  Price: <span className="text-danger">${book.price}</span>
                </h5>
                <p class="card-text">{book.details}</p>
                <Link to={`/purchase/${book._id}`}>
                  <button className="btn btn-dark">Purchase</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination container mb-5 mt-2">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={number === page ? "selected" : ""}
            key={number}
            onClick={() => setPage(number)}
          >
            {number+1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Services;
