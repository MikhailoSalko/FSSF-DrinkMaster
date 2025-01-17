import { Notify } from "notiflix";
import { Loading } from "notiflix/build/notiflix-loading-aio";

const handlePending = state => {
	state.isLoading = true;

	Loading.hourglass();
};

const handleRejected = (state, { payload }) => {
	state.isLoading = false;
	state.error = payload;

	Loading.remove();
	Notify.failure(payload);
};

const handleFullfilled = state => {
	state.isLoading = false;
	state.error = null;

	Loading.remove();
};

export { handlePending, handleRejected, handleFullfilled };
