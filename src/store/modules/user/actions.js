export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_USER_REQUEST',
    payload: { data },
  };
}

export function updateProfileSucces(data) {
  // console.tron.log(data);
  return {
    type: '@user/UPDATE_SUCCESS',
    payload: { data },
  };
}
