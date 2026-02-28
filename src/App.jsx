import { Routes,Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/home";
import BlogListingPage from "./components/Blog/BlogListingPage";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blogs" element={<BlogListingPage />} />
				<Route path="*" element={<h1>404 Page not Found</h1> } />
			</Routes>
		</>
	);
}

export default App;
