import { Field } from "formik";
import PropTypes from "prop-types";
import css from "./RecipeDescriptionFields.module.scss";
import icons from "../../../images/icons.svg";

export default function RecipeDescriptionFields({ $name, name }) {
	return (
		<>
			<div className={css.imageContainer}>
				<div>
					<button
						className={css.btnContainer}
						type="button"
					>
						<svg
							className={css.btnIcon}
							width="28"
							height="28"
						>
							<use href={icons + "#plus"}></use>
						</svg>
					</button>
				</div>
				<div>
					<p className={css.btnText}>Add image</p>
				</div>
			</div>
			<div>
				<Field name={$name} />
				<Field name={name} />
			</div>
		</>
	);
}

RecipeDescriptionFields.propTypes = {
	// title: PropTypes.string.isRequired,
	propClass: PropTypes.string,
	// disabled: PropTypes.bool,
};
