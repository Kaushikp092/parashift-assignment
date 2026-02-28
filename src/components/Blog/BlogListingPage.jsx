import { useState, useEffect } from "react";
import Skeleton from "../Skeleton/Skeleton";

const BlogListingPage = () => {
	const BLOG_API = import.meta.env.VITE_POST_API;
	const IMAGE_API = import.meta.env.VITE_IMAGE_API;

	const [blogs, setBlogs] = useState([]);
	const [visiblecount, setvisibleCount] = useState(6);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(BLOG_API);
				if (!res.ok) throw new Error("Failed to fetch blogs");
				const data = await res.json();

				// Integrate Image API here
				const blogsWithImages = data.map((post) => ({
					...post,
					image: `${IMAGE_API}/seed/${post.id}/600/400`,
				}));

				setBlogs(blogsWithImages);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [BLOG_API]);

	const visibleBlogs = blogs.slice(0, visiblecount);

	return (
		<>
			<div>
				{error && <p>Error: {error}</p>}
				{loading ? (
					<>
						<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-4">
							{Array.from({ length: 6 }).map((_, index) => (
								<Skeleton key={index} />
							))}
						</ul>
					</>
				) : (
					<>
						{/* Blog header */}
						<h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 tracking-tight mt-3 mb-8">
							Blogs Posts
						</h1>

						{/* Rendering all blogs post. First show only 6 post*/}
						<ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-4">
							{visibleBlogs.map((blog) => (
								<li
									key={blog.id}
									className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
								>
									<img
										src={blog.image}
										alt={blog.title}
										className="w-full h-48 object-cover transform transition duration-300 hover:scale-105"
									/>

									<div className="p-4">
										<div className="text-lg font-semibold mb-1">
											{blog.title}
										</div>
									</div>

									<p className="text-gray-600 test-sm mx-3 mb-4">
										{blog.body.slice(0, 80)}...
									</p>
								</li>
							))}

							{/* on click add new 6 blog post */}
							{visiblecount < blogs.length && (
								<button
									onClick={() => {
										setLoading(true);
										setTimeout(() => {
											setvisibleCount((prev) => prev + 6);
											setLoading(false);
										}, 2000);
									}}
									className=" p-4 m-4 bg-blue-800 rounded-lg font-semibold hover:bg-blue-600"
								>
									Load More
								</button>
							)}
						</ul>
					</>
				)}
			</div>
		</>
	);
};

export default BlogListingPage;
