import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import NotFound from "./NotFound";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const [book, setBook] = useState(
    books.filter((book) => book.id === id)[0] || []
  );
  useEffect(() => {
    const foundBook = books.find((book) => String(book.id) === String(id));
    if (foundBook) {
      setBook(foundBook);
    } else {
      setBook(null);
    }
  }, [id]);

  if (!book) {
    return (
      <NotFound error="Book" />
    //   <div className=" -mt-[80px] relative min-h-screen flex justify-center items-center text-gray-400 text-xl">
    //   <div className="bg-gray-800 rounded-lg shadow-xl p-8 max-w-md text-center">
    //     <h1 className="text-5xl font-extrabold text-red-400 mb-4">OOPS!</h1>
    //     <p className="text-xl text-gray-400 mb-4">Book Not Found</p>
    //     <button
    //       onClick={() => (window.location.href = "/")}
    //       className=" text-sm px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-600  hover:text-gray-100 transition duration-300 ease-in-out">
    //       Back To Home
    //     </button>
    //   </div>
    // </div>

    );
  }
  return (
    <div className="flex justify-center p-4 text-gray-400 max-w-full">
      <div className="flex justify-start items-center md:items-start pt-4 md:pt-4 md:p-4  flex-col md:flex-row bg-gray-800  rounded-md w-full max-w-[900px] md:gap-4">
        <img
          src={book.image}
          alt={book.title}
          className="w-80 h-auto max-w-full object-cover"
          onError={(e) =>
            (e.target.src =
              "https://edit.org/images/cat/book-covers-big-2019101610.jpg")
          }
        />
        <div className="col-span-2 flex flex-col justify-start gap-2 p-4 md:p-0">
          <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-100">
            {book.title}
          </h2>
          <p className="font-outfit text-gray-400 text-sm">By {book.author}</p>
          <p className="flex gap-2 text-gray-100 justify-start items-center">
            <BsStarFill />
            {book.rating}/5
          </p>
          <p className="font-outfit text-gray-400 text-sm">
            <span className="text-white mr-1">Category:</span> {book.category}
          </p>
          <p className="font-outfit text-gray-400 text-sm break-all">
            <span className="text-gray-100">Description: </span> <br></br>
            {book.description}
          </p>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <Link
              to={`/books/`}
              className="text-xs sm:text-sm bg-gray-700 hover:bg-gray-100 rounded-md text-center text-gray-100 hover:text-gray-800 px-4 py-2">
              Back To Browse
            </Link>
            <Link
              to={`/`}
              className="text-xs sm:text-sm bg-gray-700 hover:bg-gray-100 rounded-md text-center text-gray-100 hover:text-gray-800 px-4 py-2">
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
