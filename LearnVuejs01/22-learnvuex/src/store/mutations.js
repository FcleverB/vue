import {INCREMENT} from "./mutations-type";

export default {
  // 方法
  // increment(state) {
  [INCREMENT](state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  /*
  * 传递的参数称为payload   负载
  *     如果使用特殊的传参方式  那么payload接收的就是一个对象
  * */
  incrementCount(state, payload){
    // state.counter += count
    state.counter += payload.count
  },
  addStudent(state,stu) {
    state.students.push(stu)
  },
  updateInfo(state){
    state.info.name = 'fc'
  }
}
