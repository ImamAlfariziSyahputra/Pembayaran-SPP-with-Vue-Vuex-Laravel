import Api from'./Api'
import axios from 'axios'

const END_POINT = 'payments'

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
  },
  getPaymentHistory(payload) {
    return Api.post(`${END_POINT}/history`, payload)
  },
  getDetailHistory(payload) {
    return Api.post(`${END_POINT}/detail`, payload)
  }
}