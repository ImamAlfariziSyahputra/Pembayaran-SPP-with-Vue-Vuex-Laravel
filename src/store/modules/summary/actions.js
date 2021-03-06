import Student from '../../../api/Student'
import Classroom from '../../../api/Classroom'
import User from '../../../api/User'

export const countStudents = ({commit}) => {
  Student.count().then(response => {
    commit('SET_STUDENTS_COUNT', response.data)
  })
}

export const countClassrooms = ({commit}) => {
  Classroom.count().then(response => {
    commit('SET_CLASS_COUNT', response.data)
  })
}

export const countOnline = ({commit}) => {
  User.count().then(response => {
    commit('SET_ONLINE_COUNT', response.data)
  })
}

export const countClassPerMajor = ({commit}) => {
  Classroom.countClassPerMajor().then(response => {
    commit('SET_CLASS_PER_MAJOR_COUNT', response.data)
  })
}