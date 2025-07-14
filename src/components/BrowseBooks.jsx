import { useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight, BiSearch } from "react-icons/bi";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Book from "./Book";
import NotFound from "./NotFound";

function BrowseBooks() {
  const books = useSelector((state) => state.books.books);
  const categories = useSelector((state) => state.books.categories);
  const { category } = useParams();

  const catFound = category && categories.find(cat=> cat.name === category);
  if(!catFound && category!=="All" && category!==undefined ){
    return <NotFound error="Category" />
  }

  const location = useLocation();
  const [catBooks, setCatBooks] = useState(
    category
      ? category !== "All"
        ? books.filter((book) => book.category === category)
        : books
      : books
  );

  const [allBooks, setBooks] = useState(
    category ? books.filter((book) => book.category === category) : books
  );

  const [searchInp, setSearchInp] = useState("");
  const itemRefs = useRef({});
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -100 : 100,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const filteredBooks = category
      ? category !== "All"
        ? books.filter((book) => book.category === category)
        : books
      : books;
    setBooks(filteredBooks);
    setCatBooks(filteredBooks);
    setSearchInp("");
    if (category !== undefined) {
      itemRefs.current[category]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [category]);

  const handleSearch = (value) => {
    setSearchInp(value);
    setBooks(
      catBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(value.toLowerCase()) ||
          book.author.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  return (
    <>
      <div className="relative flex justify-start items-center max-w-full gap-2 my-4">
        <button
          onClick={() => scroll("left")}
          className="left-0 text-2xl rounded-full bg-gray-800 text-gray-400 ml-2">
          <BiChevronLeft />
        </button>
        <ul
          ref={scrollRef}
          className="flex justify-start gap-3  max-w-full overflow-x-auto scrollbar-hide">
          <Link to={`/books/All`} key={`catindex}`}>
            <li
              className={`${
                category === "All" || location.pathname ==="/books" || location.pathname ==="/books/"
                  ? "bg-gray-200 text-gray-800"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-200"
              }  py-2 px-4 rounded-md`}>
              <h3 className="text-sm">All</h3>
            </li>
          </Link>
          {categories?.map((cat) => (
            <Link to={`/books/${cat.name}`} key={`cat${cat.id}`}>
              <li
                ref={(el) => (itemRefs.current[cat.name] = el)}
                className={`${
                  category === cat.name
                    ? "bg-gray-200 text-gray-800"
                    : "bg-gray-800 hover:bg-gray-700 text-gray-100"
                }  py-2 px-4 rounded-md`}>
                <h3 className="text-nowrap text-sm ">{cat.name}</h3>
              </li>
            </Link>
          ))}
        </ul>
        <button
          onClick={() => scroll("right")}
          className=" bg-gray-800 right-0 rounded-full text-gray-400 z-10 text-2xl mr-2">
          <BiChevronRight />
        </button>
      </div>
      <div className="max-w-[300px] text-xs xs:text-sm sm:text-md self-start ml-2 bg-gray-800 rounded-md text-gray-200 p-2 flex gap-2 items-center mt-4 md:mt-0">
        <label>
          <BiSearch className="text-gray-200" />
        </label>
        <input
          type="search"
          value={searchInp}
          className="outline-none border-0 w-full"
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="flex justify-center items-center">
        {allBooks.length !== 0 ? (
          <ul className="p-2 md:p-4 text-gray-200 mt-4 font-self grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 self-center gap-2">
            {allBooks?.map((book) => (
              <li
                key={`browse${book.id}`}
                className="relative flex flex-col justify-between w-full bg-gray-800 rounded-md overflow-hidden">
                {/* {book.popular&&<span className=" text-sm z-40 absolute top-0 right-0 p-1 shadow-md rounded-tr-md rounded-bl-md bg-gray-200 text-gray-800">Popular</span>} */}
                <Book book={book} label="View Details" />
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-3xl p-4 text-center text-gray-500 mt-4">
            No results found
          </div>
        )}
      </div>
    </>
  );
}

export default BrowseBooks;
