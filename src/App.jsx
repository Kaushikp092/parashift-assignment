import { Routes,Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/home";
import BlogListingPage from "./components/Blog/BlogListingPage";
import BlogDetailpage from "./components/Blog/BlogDetailpage";
import NotFound from "./components/pages/NotFound";
import Footer from "./components/pages/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blogs" element={<BlogListingPage />} />
				<Route path="/blogs/:slug" element={<BlogDetailpage />}/>
				<Route path="*" element={<NotFound /> } />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
