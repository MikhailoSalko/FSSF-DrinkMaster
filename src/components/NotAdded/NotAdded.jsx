import PropTypes from "prop-types";

import Container from "../Container/Container";
import DrinkDefault from "../../images/static/main/main.jpg";
import css from "./NotAdded.module.scss";

export default function NotAdded({ text }) {
	return (
		<Container>
			<div className={css.wrapDiv}>
				<img
					className={css.notFoundImg}
					src={DrinkDefault}
					alt="No recipe"
				/>
				<p className={css.notFavoriteText}>{text}</p>
			</div>
		</Container>
	);
}

NotAdded.propTypes = {
	text: PropTypes.string.isRequired,
};
