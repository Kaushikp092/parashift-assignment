import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import BlogDetailSkeleton from "../Skeleton/BlogDetailSkeleton";
const BlogDetailpage = () => {
	const { slug } = useParams();
	const BLOG_API = import.meta.env.VITE_POST_API;
	const IMAGE_API = import.meta.env.VITE_IMAGE_API;

	const [blog, setBlog] = useState(null);
	const [related, setRelated] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchBlog = async () => {
			try {
				const res = await fetch(BLOG_API);
				const data = await res.json();

				const blogsWithSlug = data.map((post) => ({
					...post,
					slug: post.title.toLowerCase().replace(/\s+/g, "-"),
					image: `${IMAGE_API}/seed/${post.id}/600/400`,
				}));

				const currentBlog = blogsWithSlug.find((b) => b.slug === slug);

				setBlog(currentBlog);

				//Related blogs (exclude current)
				const relatedBlogs = blogsWithSlug
					.filter((b) => b.slug !== slug)
					.slice(0, 3);

				setRelated(relatedBlogs);
			} catch (err) {
				console.error(err);
			} finally {
				setLoading(false);
			}
		};
		fetchBlog();
	}, [slug]);

	if (loading) {
		return (
			<div className="max-w-4xl mx-auto mt-10">
				<BlogDetailSkeleton />
				<BlogDetailSkeleton />
			</div>
		);
	}

	if (!blog) return <p>Blog not found</p>;

	return (
		<>
			<div className="max-w-4xl mx-auto p-4">
				{/* Blog Image */}
				<img
					src={blog.image}
					alt={blog.title}
					className="w-full h-96 object-cover rounded-lg mb-6"
				/>

				{/* Blog title */}
				<h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

				{/* Blog Content */}
				<p className="text-gray-700 leading-relaxed mb-10">{blog.body}</p>

				{/* Related Blogs */}
				<h2 className="text-2xl font-semibold mb-4">Related Blogs</h2>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{related.map((item) => {
						console.log(item);
						return (

							<div key={item.id} className="bg-white shadow-md rounded-lg p-4">
							<Link to={`/blogs/${item.slug}`}>
								<img
									src={item.image}
									alt={item.title}
									className="w-full h-40 object-cover rounded mb-3 transform transition duration-300 hover:scale-105"
									/>
								<h3 className="font-semibold">{item.title}</h3>
							</Link>
						</div>
								)
					})}
				</div>
			</div>
		</>
	);
};

export default BlogDetailpage;
