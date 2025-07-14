import { useState } from "react";
import { toast } from "react-toastify";
import { addBook } from "../utils/bookSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
    rating: 1,
    category: "",
    popular: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewBook((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetForm = () => {
    setNewBook({
      title: "",
      author: "",
      description: "",
      image: "",
      rating: 1,
      category: "",
      popular: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, author, description, image, rating, category, popular } =
      newBook;
    if (title && author && description && image && rating && category) {
      dispatch(addBook({ ...newBook, id: Date.now() }));
      toast.success("Book Added Successfully");
      resetForm();
      navigate("/books");
    } else {
      toast.error("Enter all fields");
    }
  };

  return (
    <>
      <div className="w-full p-2 md:p-4">
        <h1 className="text-gray-200 text-2xl md:text-3xl text-center font-bold mb-4">
          Add Book
        </h1>
        <div className="text-sm sm:text-ms lg:text-md">
          <div className="flex justify-center">
            <form
              onSubmit={handleSubmit}
              className=" text-gray-200 w-full max-w-md bg-gray-900 border border-gray-800 px-6 p-4 rounded-md outline-0">
              <div className="mb-2">
                <label className="block mb-1 font-medium" htmlFor="title">
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  placeholder="Enter Book title"
                  value={newBook.title}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 focus:outline-1 outline-gray-700  rounded-md py-2 px-4 outline-0"
                  type="text"
                />
              </div>
              <div className="mb-2">
                <label className="block mb-1 font-medium" htmlFor="author">
                  Author Name
                </label>
                <input
                  id="author"
                  name="author"
                  placeholder="Enter Author Name"
                  value={newBook.author}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 focus:outline-1 outline-gray-700 rounded-md py-2 px-4 outline-0"
                  type="text"
                />
              </div>
              <div className="mb-2">
                <label className="block mb-1 font-medium" htmlFor="category">
                  Category
                </label>
                <input
                  id="category"
                  name="category"
                  placeholder="Enter Book category"
                  value={newBook.category}
                  onChange={handleInputChange}
                  required
                  className="w-full py-2 px-4 bg-gray-800 focus:outline-1 outline-gray-700 rounded-md outline-0"
                  type="text"
                />
              </div>
              <div className="mb-2">
                <label className="block mb-1 font-medium" htmlFor="image">
                  Image Url
                </label>
                <input
                  id="image"
                  name="image"
                  placeholder="Enter Book Image Url"
                  value={newBook.image}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 focus:outline-1 outline-gray-700 rounded-md py-2 px-4 outline-0"
                  type="text"
                />
              </div>
              <div className="mb-2">
                <label className="block mb-1 font-medium" htmlFor="rating">
                  Rating: {newBook.rating}/5
                </label>
                <input
                  id="rating"
                  name="rating"
                  placeholder="Enter rating"
                  value={newBook.rating}
                  onChange={handleInputChange}
                  required
                  className="w-full accent-gray-500 border-0 outline-0"
                  type="range"
                  min={1}
                  max={5}
                  step={0.1}
                />
              </div>
              <div className="mb-2">
                <label className="block mb-1 font-medium" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter Book Description"
                  value={newBook.description}
                  className="w-full font-outfit focus:outline-1 outline-gray-700 bg-gray-800 rounded-md py-2 px-4 outline-0"
                  rows={3}
                  onChange={handleInputChange}
                  minLength={50}
                  maxLength={500}
                />
              </div>
              <div className="mb-2 flex justify-start gap-2 items-center">
                <label className=" font-medium" htmlFor="popular">
                  Popular
                </label>
                <input
                  id="popular"
                  name="popular"
                  placeholder="popularity"
                  checked={newBook.popular}
                  type="checkbox"
                  onChange={handleInputChange}
                  className="font-outfit bg-white accent-gray-400 border border-gray-300 rounded-md py-2 px-4 outline-0"
                />
              </div>

              <div className="flex gap-4 mt-4">
                <button
                  type="submit"
                  className="bg-gray-100  text-gray-900 flex-1  px-4 py-2 rounded-md hover:bg-gray-300 transition">
                  Add Book
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBook;
