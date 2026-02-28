import { Link } from "react-router";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
	return (
		<>
			<div className="flex flex-col md:flex-row justify-between items-center bg-gray-500 py-4 px-6 text-white font-bold">
				<div className="mb-2 md:mb-0 text-center md:text-left">
					{" "}
					<span>Designed & Develop by Kaushik Patil</span>
				</div>
				<div className="mb-2 md:mb-0 text-center md:text-left">
					<span>ParaShit assignment</span>
				</div>

				<nav className="flex flex-row gap-4">
					<Link
						to={`https://www.linkedin.com/in/kaushik-patil-644553343/`}
						target="_blank"
						className="hover:text-blue-300 transition"
					>
						<FaLinkedinIn />
					</Link>

					<Link
						to="https://github.com/Kaushikp092/parashift-assignment"
						target="_blank"
						className="hover:text-gray-300 transition"
					>
						<BsGithub />
					</Link>
				</nav>
			</div>
			{/* </div> */}
		</>
	);
};

export default Footer;
