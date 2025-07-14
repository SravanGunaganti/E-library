import { Link } from "react-router-dom";

function Book({ book, label }) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <img
          src={book.image}
          alt={book.title}
          className="w-full aspect-[6/9] object-cover"
          onError={(e) =>
            (e.target.src =
              "https://edit.org/images/cat/book-covers-big-2019101610.jpg")
          }
        />
        <h3 className="px-2 text-sm md:text-md text-white">{book.title}</h3>
        <p className="px-2 font-outfit text-gray-400 text-sm">
          By {book.author}
        </p>

        <p className="px-2 font-outfit text-gray-400 text-sm">
          <span className="text-white mr-1">Category:</span>
          {book.category}
        </p>
      </div>

      <Link
        to={`/books/details/${book.id}`}
        className="text-xs md:text-sm m-2 bg-gray-700 hover:bg-gray-200 rounded-md text-center text-gray-200 hover:text-gray-800 px-4 py-2 justify-self-end">
        {label}
      </Link>
    </>
  );
}

export default Book;
