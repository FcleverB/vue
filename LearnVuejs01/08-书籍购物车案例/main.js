const app = new Vue({
  el: '#app',
  data: {
    disable: false,
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      },
    ]
  },
  methods: {
    decrement(item){
      if (item.count != 1){
        item.count--;
      }
      this.disable = true;
    },
    increment(item){
      item.count++
    },
    removeBook(index){
      this.books.splice(index,1);
    },
    // getFinalPrice(price){
    //   return '￥'+price.toFixed(2);
    // }
  },
  filters: {
    //会自动传入参数
    showPrice(price){
      return '￥'+price.toFixed(2);
    }
  },
  computed: {
    totalPrice(){
      let sum=0;
      // for(let i=0;i<this.books.length;i++){
      //   sum += this.books[i].price * this.books[i].count;
      // }
      for(let book of this.books){
        sum += book.price * book.count;
      }
      return sum;
    }
  }
})