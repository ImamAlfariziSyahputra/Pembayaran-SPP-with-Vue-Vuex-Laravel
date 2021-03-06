import Api from'./Api'

const END_POINT = 'majors'

export default {
  all() {
    return Api.get(END_POINT)
  },
  store(payload) {
    return Api.post(END_POINT, payload)
  },
  update(payload) {
    return Api.put(`${END_POINT}/${payload.id}`, payload.data)
  },
  delete(id) {
    return Api.delete(`${END_POINT}/${id}`)
  },
  destroy() {
    return Api.delete(END_POINT)
  }
}