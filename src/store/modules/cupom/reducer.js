import produce from 'immer';

const INITIAL_STATE = {
  cupom: [],
};

export default function cupom(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cupom/SET_CUPOM': {
        draft.cupom = action.payload.data;
        break;
      }

      default:
    }
  });
}
