import Card from "./Card";
import React, { useState, useEffect } from "react";

function LandingPage({ search, recipes, setRecipes }) {
	const itemsPerPage = 9;

	const [searchBy, setSearchBy] = useState("recipe_name");

	const [currentPage, setCurrentPage] = useState(0);

	useEffect(() => {
		fetch("http://localhost:3001/meals")
			.then((response) => response.json())
			.then((data) => {
				setRecipes(organizePages([...data], itemsPerPage));
				// console.log(data);
			});
	}, []);

	function organizePages(data, perPage) {
		let temp = [];
		for (let i = 0; i < data.length; i += perPage) {
			temp.push(data.slice(i, i + perPage));
		}
		return temp;
	}

	//filter by name

	let filteredRecipe = recipes;
	if (recipes.length > 0) {
		filteredRecipe = organizePages(
			recipes.flat().filter((recipe) => {
				return recipe[searchBy]
					.toLowerCase()
					.includes(search.toLowerCase());
			}),
			itemsPerPage
		);
	}

	function handleChange(e) {
		setSearchBy(e.target.value);
	}

	return (
		<div className="">
			<div className="mt-2 flex justify-end w-full gap-3 mr-6">
				<div className="flex gap-2">
					<label>Search by:</label>
					<select value={searchBy} onChange={handleChange}>
						<option value="recipe_name">Name</option>
						<option value="country_of_origin">
							Country of origin
						</option>
						{/* <option  value="ratings">Ratings</option> */}
						<option value="ingredients">Ingredients</option>
						<option value="number_of_people_served">
							Number of people served
						</option>
					</select>
				</div>
			</div>
			<div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap- place-content-stretch md:w-full mx-auto">
				{/* to be replaced by : filteredRecipe */}
				{filteredRecipe.length > 0 &&
					filteredRecipe[currentPage].map((recipe, index) => {
						return <Card key={index} recipe={recipe} />;
					})}
			</div>
			<Pagination
				totalPages={filteredRecipe.length}
				currentPage={currentPage}
				onPageChange={setCurrentPage}
			/>
		</div>
	);
}

function Pagination({ totalPages, currentPage, onPageChange }) {
	const pageNumbers = [];
	// Determine the starting and ending pages to show
	let startPage = Math.max(currentPage - 2, 0);
	let endPage = Math.min(startPage + 4, totalPages - 1);
	if (endPage - startPage < 4) {
		startPage = Math.max(endPage - 4, 0);
	}
	// Add ellipsis if necessary
	if (startPage > 0) {
		pageNumbers.push(-1);
	}
	// Add page numbers
	for (let i = startPage; i <= endPage; i++) {
		pageNumbers.push(i);
	}
	if (endPage < totalPages - 1) {
		pageNumbers.push(-1);
	}
	return (
		<nav className="my-10 font-bold">
			<ul className="flex justify-center gap-2">
				{currentPage > 0 && (
					<li
						className="text-blue-900 cursor-pointer"
						onClick={() => onPageChange(currentPage - 1)}>
						Previous
					</li>
				)}
				{pageNumbers.map((pageNumber, index) => (
					<React.Fragment key={index}>
						{pageNumber === -1 ? (
							<li className="text-blue-900">...</li>
						) : (
							<li
								className={`rounded-full text-sm hover:ring-1 flex items-center justify-center w-6 h-6 ${
									pageNumber === currentPage
										? "text-blue-900 bg-white ring-1 ring-blue-900"
										: "text-blue-900"
								} cursor-pointer`}
								onClick={() => onPageChange(pageNumber)}>
								{pageNumber + 1}
							</li>
						)}
					</React.Fragment>
				))}
				{currentPage < totalPages - 1 && (
					<li
						className="text-blue-900 cursor-pointer"
						onClick={() => onPageChange(currentPage + 1)}>
						Next
					</li>
				)}
			</ul>
		</nav>
	);
}

export default LandingPage;

