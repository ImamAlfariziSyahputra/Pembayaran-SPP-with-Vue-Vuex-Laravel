export const SET_STUDENTS = (state, payload) => {
  state.students = payload
}

export const SET_DATA_UPDATE = (state, payload) => {
  state.dataUpdate = payload
  console.log(state.dataUpdate)
}