const MODABLE = '@@modable';

export const ERROR = `${MODABLE}/ERROR`;
export const modalError = error => ({ type: ERROR, error });

export const LOADING = { type: `${MODABLE}/LOADING` };
export const NOT_LOADING = { type: `${MODABLE}/NOT_LOADING` };

export const OPEN_MODAL = `${MODABLE}/OPEN_MODAL`;
export const openModal = id => ({ type: OPEN_MODAL, id });

export const CLOSE_MODAL = `${MODABLE}/CLOSE_MODAL`;
export const closeModal = () => ({ type: CLOSE_MODAL });
