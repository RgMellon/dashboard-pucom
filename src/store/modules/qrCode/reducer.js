import produce from 'immer';

const INITIAL_STATE = {
  open: false,
};

export default function qrCode(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@qrCode/SET_OPEN': {
        draft.open = !draft.open;
        break;
      }

      default:
    }
  });
}
