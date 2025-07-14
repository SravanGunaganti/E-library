import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="w-full max-w-screen overflow-x-hidden min-h-screen bg-black">
      <Header />
      <main className="mt-[80px] w-screen max-w-[1200px] mx-auto">
        <Outlet />
      </main>
      <ToastContainer position="top-right" autoClose={1000} limit={1} />
    </div>
  );
}

export default App;
