const BlogDetailSkeleton = () => {
	return (
		<div className="max-w-4xl mx-auto p-4 animate-pulse">
			<div className="w-full h-96 bg-gray-300 rounded mb-6"></div>
			<div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
			<div className="space-y-3">
				<div className="h-4 bg-gray-300 rounded w-full"></div>
				<div className="h-4 bg-gray-300 rounded w-full"></div>
				<div className="h-4 bg-gray-300 rounded s-5/6"></div>
			</div>
		</div>
	);
};

export default BlogDetailSkeleton;
