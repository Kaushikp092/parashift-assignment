import { Link } from "react-router";
const Home = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center h-screen bg-gray-50">
				<h1 className="text-3xl font-bold text-gray-800 mb-6">This is Home Page</h1>
        <p className="text-gray-600 mb-4">Navigate to the blog page below</p>
				<Link to="/blogs" className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">Go to Blogs</Link>
			</div>
		</>
	);
};

export default Home;
