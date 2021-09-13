<template>
    <div>
        <h1>用户名：{{name}}</h1>
        <h2>性别：{{sex==1?"男":"女"}}</h2>
        <h3>下单时间：{{new Date().toLocaleDateString()}}</h3>
        <h3>小计：￥{{(price*count).toFixed(2)}}</h3>
        <input v-model = "name" type="text">
        <input type="radio" id="male" value="1" v-model="sex" name="性别">男
        <input type="radio" id="male" value="0" v-model="sex" name="性别">女
    </div>
</template>
<script>
export default {
  name: 'test2',
  data: function () {
    return {
      name: '张三',
      sex: '男',
      orderTime: '195079507293225',
      price: 12.5,
      count: 5
    }
  }
}
</script>
