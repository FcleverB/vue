export default {
  powerCounter(state){
    return state.counter * state.counter
  },
  moreTwoAge(state) {
    return state.students.filter(s => s.age >= 20)
  },
  moreTwoAgeLength(state,getters) {
    return getters.moreTwoAge.length
  },
  moreAgeStu(state){
    return function (age) {
      return state.students.filter(s => s.age >= age)
    }
  }
}
