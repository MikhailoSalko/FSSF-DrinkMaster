import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
// import Paginator from "../../components/Paginator/Paginator";
import MainTitle from "../../components/MainTitle/MainTitle";
import DrinksSearch from "./DrinksSearch/DrinksSearch";
import DrinksList from "./DrinksList/DrinksList";
import Container from "../../components/Container/Container";

import { allIngredients, allCategory, search } from "../../redux/operations/recipiesOperations";

import {
	selectCategories,
	selectIngredients,
	selectSearchResults,
	selectPage
} from "../../redux/selectors/recipieSelectors";

import css from "./DrinksPage.module.scss";

const desktopLimit = 9;
const tabletLimit = 8;

const DrinksPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const ingredientsList = useSelector(selectIngredients);
	const categoriesList = useSelector(selectCategories);
	const searchResults = useSelector(selectSearchResults);
	const page = useSelector(selectPage);

	const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1440;
	const limit = isDesktop ? desktopLimit : tabletLimit;

	useEffect(() => {
		if (categoriesList.length === 0) {
			dispatch(allCategory());
		}
		if (ingredientsList.length === 0) {
			dispatch(allIngredients());
		}
	}, [dispatch, categoriesList, ingredientsList]);

	const handleSearch = (chosenCategory, chosenIngredient) => {
		dispatch(
			search({
				search: {
					chosenCategory,
					chosenIngredient,
					query: null,
				},
				page,
				limit,
			}),
		);
		navigate(`/recipes/${encodeURIComponent(chosenCategory)}?page=${page}`);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Container>
			<section className={css.section}>
				<MainTitle title={"Drinks"} />
				<DrinksSearch
					onSearch={handleSearch}
					ingredientsList={ingredientsList}
				/>
				<DrinksList results={searchResults} />
			</section>
		</Container>
	);
};

export default DrinksPage;

// export default function DrinksPage() {
// 	return <div>DrinksPage</div>;
// }

// Исходный

// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Pagination from "../DrinksPage/Pagination/Pagination";

// actions
// export const setSelectedCategory = category => ({
// 	type: "SET_SELECTED_CATEGORY",
// 	payload: category,
// });

// export const fetchRecipesSuccess = recipes => ({
// 	type: "FETCH_RECIPES_SUCCESS",
// 	payload: recipes,
// });

// export const fetchRecipesFailure = error => ({
// 	type: "FETCH_RECIPES_FAILURE",
// 	payload: error,
// });

// export default function DrinksPage(props) {
// 	const dispatch = useDispatch();
// 	const { selectedCategory, recipes, error } = useSelector(state => state);

// 	useEffect(() => {
// 		const categoryFromUrl = props.match.params.category;
// 		if (categoryFromUrl) {
// 			dispatch(setSelectedCategory(categoryFromUrl));
// 		} else {
// 			dispatch(setSelectedCategory("Cocktail"));
// 		}

// 		// запрос на бекенд с использованием Axios
// 		axios
// 			.get(`/api/recipes?category=${selectedCategory}`)
// 			.then(response => {
// 				const data = response.data;
// 				// Обновляем список рецептов в состоянии (если такой экшен определен)
// 				dispatch(fetchRecipesSuccess(data));
// 			})
// 			.catch(error => {
// 				// Обрабатываем ошибку запроса (если такой экшен определен)
// 				dispatch(fetchRecipesFailure(error.message));
// 			});
// 	}, [dispatch, selectedCategory, props.match.params.category]);

// 	return (
// 		<div>
// 			<h2>{selectedCategory} Drinks</h2>
// 			{error ? (
// 				<p>Error: {error}</p>
// 			) : (
// 				<div>
// 					<ul>
// 						{recipes.map(recipe => (
// 							<li key={recipe._id}>
// 								<Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
// 							</li>
// 						))}
// 					</ul>
// 					<Pagination
// 						currentPage={currentPage}
// 						totalPages={totalPages}
// 					/>{" "}
// 					{/* Вставляем компонент пагинации */}
// 				</div>
// 			)}
// 		</div>
// 	);
// }
