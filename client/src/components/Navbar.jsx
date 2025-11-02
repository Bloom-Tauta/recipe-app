import { NavLink } from "react-router-dom";
import Search from "./Search";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { IoMdRestaurant } from "react-icons/io";

function Navbar({ search, handleSearch }) {
	const user = localStorage.getItem("user");
	const role = localStorage.getItem("admin");
	const navigate = useNavigate();

	function handleDashboards() {
		if (role + "" === true + "") {
			navigate("/admins");
		} else {
			navigate("/user");
		}
	}

	const logout = () => {
		localStorage.clear();
	};

	const handleOnclick = () => {
		Swal.fire({
			icon: "success",
			title: "logout successfully",
			confirmButtonText: "OK",
		}).then(() => {
			logout();
			window.location.href = "/";
		});
	};

	function handleAddFavorites() {
		navigate("/");
		document.querySelector("#favorite")?.scrollIntoView({
			behavior: "smooth",
			block: "end",
			inline: "nearest",
		});
	}

	return (
		<header className="bg-white drop-shadow-xl p-4 flex justify-between items-center gap-2">
			<NavLink
				to="/"
				className="text-black text-4xl flex items-center gap-1">
				<IoMdRestaurant size={40} className="text-orange-600" />
				Recipe-Share
			</NavLink>
			<Search search={search} handleSearch={handleSearch} />
			<nav className="flex">
				<ul className=" flex gap-4 text-[#] text-base ">
					<NavLink
						to="/recipes"
						className="font-bold p-1 text-orange-600 hover:text-white hover:bg-orange-600 rounded-lg hover:border-none">
						Recipes
					</NavLink>
					{user ? (
						<>
							<button
								onClick={handleAddFavorites}
								className="font-bold p-1 text-orange-600 hover:text-white hover:bg-orange-600 rounded-lg hover:border-none">
								Favorite Recipes
							</button>
							<NavLink
								to="/addrecipe"
								className="font-bold p-1 text-orange-600 hover:text-white hover:bg-orange-600 rounded-lg hover:border-none">
								Add Recipe
							</NavLink>
							<button
								onClick={handleDashboards}
								className="font-bold p-1 text-orange-600 hover:text-white hover:bg-orange-600 rounded-lg hover:border-none">
								{user}
							</button>
							<NavLink onClick={handleOnclick}> Logout</NavLink>
						</>
					) : (
						<>
							<NavLink
								to="/signup"
								className="font-bold p-1 text-orange-600 hover:text-white hover:bg-orange-600 rounded-lg hover:border-none">
								Sign Up
							</NavLink>
							<NavLink
								to="/login"
								className="font-bold p-1 text-orange-600 hover:text-white hover:bg-orange-600 rounded-lg hover:border-none">
								Login
							</NavLink>
							<NavLink
								to="/about"
								className="font-bold p-1 text-orange-600 hover:text-white hover:bg-orange-600 rounded-lg hover:border-none">
								About
							</NavLink>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;

