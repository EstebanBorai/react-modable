import { 
  OPEN_MODAL, 
  CLOSE_MODAL,
  ERROR,
  LOADING,
  NOT_LOADING
} from './actions';

const reducer = (state = {
  modal: null,
  error: null,
  loading: false
}, action) => {
  switch(action.type) {
    case LOADING:
      return { ...state, loading: true };
    case NOT_LOADING:
      return { ...state, loading: false };
    case ERROR:
      return {  ...state, error: action.error };
    case OPEN_MODAL:
      return { ...state, modal: action.id, loading: false, error: null };
    case CLOSE_MODAL:
      return { ...state, modal: null, loading: false, error: null };
    default:
      return state;
  }
};

export default reducer;
