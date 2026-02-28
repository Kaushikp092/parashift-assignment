const Skeleton = () => {
	return (
		<>
				<li className="wfull bg-white shadow-md rounded-lg  animate-pulse">
					{/* Image placeholder */}
					<div className="w-full h-48 bg-gray-300"></div>

					<div className="p-4 space-y-3">
						{/* Title placeholder */}
						<div className="h-4 bg-gray-300 rounded w-3/4"></div>

						{/* body placeholder */}
						<div className="h-3 bg-gray-300 rounded w-full"></div>
					</div>
				</li>
		</>
	);
};

export default Skeleton;
