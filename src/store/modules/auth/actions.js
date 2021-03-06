export function sigInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function sigInSucces(token, shop) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, shop },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILUERE',
  };
}

export function logout() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
