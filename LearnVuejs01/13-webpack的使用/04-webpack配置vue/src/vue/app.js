export default {
  template: `
    <div>
      <h2>{{message}}</h2>
      <button @click="btnClick">按钮</button>
      <h2>{{name}}</h2>
    </div>
  `,
  data() {
    return {
      message: 'webpack集成vue',
      name: 'fclever'
    }
  },
  methods: {
    btnClick() {
      console.log('webpack,vue点击事件');
    }
  }
}