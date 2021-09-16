<template>
<div>
    <div  id="cart" v-cloak>
        <template v-if="books.length">
          <table>
              <thead>
                  <tr>
                      <th></th>
                      <th>商品名称</th>
                      <th>出版日期</th>
                      <th>商品单价</th>
                      <th>购买数量</th>
                      <th>操作</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for=" (item,index) in books" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{item.bookname}}</td>
                    <td>{{item.pubdate}}</td>
                    <td>{{item.price | showPrice}}</td>
                    <td>
                        <button
                            @click="decrement(index)"
                            :disabled="item.count ===1">-</button>
                        {{item.count}}
                        <button @click="increment(index)">+</button>

                    </td>
                    <td>
                        <button @click="del(index)">移除</button>
                    </td>
                  </tr>
              </tbody>
          </table>
          <div>总价：{{sum}}</div>
        </template>
         <div v-else>购物车为空</div>
    </div>
</div>
</template>
<script>
export default {
  name: 'test5',
  data: function () {
    return {
      books: [
        {id: 1, bookname: '时间旅人', pubdate: '20100908', price: 55.0, count: 1},
        {id: 2, bookname: '操作系统', pubdate: '20120128', price: 22.0, count: 1},
        {id: 3, bookname: '计算机基础', pubdate: '20180909', price: 15.0, count: 1},
        {id: 4, bookname: '明朝那些事', pubdate: '20061108', price: 88.0, count: 1}
      ]
    }
  },
  methods: {
    increment: function (index) {
      console.log('-------increment' + index)
      this.books[index].count++
    },
    decrement: function (index) {
      console.log('-------decrement' + index)
      this.books[index].count--
    },
    del: function (index) {
      this.books.splice(index, 1)
    }
  },
  filters: {
    showPrice (price) {
      return '￥' + price.toFixed(2)
    }
  },
  computed: {
    sum: {
      get () {
        let sum = 0
        for (let book of this.books) {
          sum += book.count * book.price
        }
        return sum + '￥'
      }
    }
  }
}
</script>
<style scoped>
    table {
        border: 1px solid #e9e9e9;
        border-collapse: collapse;
        border-spacing: 0;
    }

    th, td {
        padding: 8px, 16px;
        border: 1px solid #e9e9e9;
        text-align: left;
    }

    th {
        background-color: #f7f7f7;
        color: #5c6b77;
        font-weight: 600;
    }
</style>
