import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<>
			<nav className="flex justify-between items-center px-6 py-6 shadow-md sticky top-0 bg-gray-500 z-50">
                {/* logo */}
				<img src="/logo.svg" alt="logo" className="h-6 w-auto" />

                {/* Desktop blog */}
				<div className="flex items-center space-x-3">
					<span className="hidden md:block text-xl font-semibold text-red-900">Blog</span>
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
                <div className="md:hidden sticky top-19 bg-gray-400 p-4 text-center">
                    <span className="text-xl font-semibold text-red-900">Blog</span>
                </div>
            )}
		</>
	);
};

export default Navbar;
