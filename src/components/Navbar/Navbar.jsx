import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<>
			<nav className="flex justify-between items-center px-6 py-6 shadow-md sticky top-0 bg-gray-500 z-50">
                {/* logo */}
				<img src="/logo.svg" alt="logo" className="h-6 w-auto" />

                {/* Desktop blog */}
				<div className="flex items-center space-x-3">
					 <Link className="hidden md:block text-xl font-semibold text-red-900" to="/">Home</Link>
					 <Link className="hidden md:block text-xl font-semibold text-red-900" to="/blogs">Blogs</Link>
					<button
						className="md:hidden text-3xl"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						{menuOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>
			</nav>

            {/* Mobile view menu */}
            {menuOpen && (
				<>
                <div className="md:hidden sticky top-19 bg-gray-400 p-4 text-center flex justify-evenly">
				 <Link className="text-xl font-semibold text-red-900" to="/">Home</Link>
				 <Link className="text-xl font-semibold text-red-900" to="/blogs">Blogs</Link>
                </div>
				</>
            )}
		</>
	);
};

export default Navbar;
