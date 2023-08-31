import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DeleteButton from "../../components/DeleteButton/DeleteButton";
import SeeButton from "../../components/SeeButton/SeeButton";
import imgDefault from "../../images/static/my-recepies/imgdefault.jpg";
import css from "./RecipesItem.module.scss";

export default function RecipesItem({ _id, drink, drinkThumb, about, onDeleteClick, page }) {
	return (
		<div className={css.card}>
			<Link to={`/recipe/${_id}`}>
				<div className={css.imageBox}>
					<div className={css.imageWrapper}>
						<img
							className={css.image}
							src={drinkThumb}
							alt={drink}
							onError={e => {
								e.currentTarget.src = imgDefault;
							}}
						/>
					</div>
				</div>
			</Link>
			<div>
				<div
					style={{ position: page }}
					className={css.ingredientsWrapper}
				>
					<Link to={`/recipe/${_id}`}>
						<p className={css.ingredientsTitle}>{drink}</p>
					</Link>
					<p className={css.ingredientsText}>Ingredients</p>
				</div>
			</div>
			<p className={css.about}>{about}</p>
			<div className={css.buttonsWrapper}>
				{(page === "my" || page === "favorite") && <SeeButton />}
				{(page === "my" || page === "favorite") && (
					<DeleteButton
						key={_id}
						drink={drink}
						drinkThumb={drinkThumb}
						about={about}
						page={page}
						onDeleteClick={() => onDeleteClick(_id, "favorite")}
					/>
				)}
			</div>
		</div>
	);
}

RecipesItem.propTypes = {
	_id: PropTypes.string.isRequired,
	drink: PropTypes.string.isRequired,
	drinkThumb: PropTypes.string.isRequired,
	about: PropTypes.string.isRequired,
	onDeleteClick: PropTypes.func.isRequired,
	page: PropTypes.string.isRequired,
};