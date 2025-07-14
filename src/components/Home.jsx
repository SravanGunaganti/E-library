import { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Book from "./Book";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function Home() {
  const books = useSelector((state) => state.books.books);
  const categories = useSelector((state) => state.books.categories);
  const popularBooks = books.filter((book) => book.popular === true);
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="py-10  w-full flex flex-col items-center p-2 md:p-4">
        <h1 className="text-2xl md:text-4xl font-outfitbold text-gray-100 text-center mb-2 tracking-[5px]">
          Welcome To E-Library
        </h1>
        <p className="text-center text-sm text-gray-400 mb-8">
          Explore a wide range of books across different categories. Select your
          favorite category below to start browsing and discovering your next
          read!
        </p>

        <div className="relative flex gap-2 max-w-full items-center">
          <button
            onClick={() => scroll("left")}
            className="left-0 text-2xl rounded-full bg-gray-800 text-gray-400 ">
            <BiChevronLeft />
          </button>
          <ul
            ref={scrollRef}
            className="flex scrollbar-hide justify-start gap-3 max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <Link to={`/books/${cat.name}`} key={cat.name + cat.id}>
                <li className="bg-gray-800 hover:bg-gray-700 text-gray-100 p-10 rounded-lg">
                  <h3 className="text-center text-md text-nowrap">
                    {cat.name}
                  </h3>
                </li>
              </Link>
            ))}
          </ul>
          <button
            onClick={() => scroll("right")}
            className=" bg-gray-800 right-0 rounded-full text-gray-400 z-10 text-2xl">
            <BiChevronRight />
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl my-4 font-outfitbold text-gray-100 text-center">
          Popular Books
        </h2>
        <ul className="p-2 md:p-4 text-gray-200 mt-4 font-self grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 self-center gap-2">
          {popularBooks?.map((book) => (
            <li
              key={`popular${book.id}`}
              className="flex flex-col justify-between w-full bg-gray-800 max-w-[300px] xs:max-w-full rounded-md overflow-hidden">
              <Book book={book} label="View More Details" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
