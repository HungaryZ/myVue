<template>
    <div>
        <h1>Message: {{messageNow}}</h1>
        <input v-model="messageNow" v-focus>
        <br>
        <button @click="addObv()">添加观察者</button>
        <br>
        <button @click="publish_message()">发布</button>
        <ul>
            <li v-for="(item,index) in observers" :key="index">
                <h2>观察者姓名: {{item.name}}</h2>
                <h3>观察者信息: {{item.message}}</h3>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'test4',
  data: function () {
    return {
      messageNow: '123',
      observers: [
        {
          name: 'obv1',
          message: '321',
          getNewMessage: function () {
            /* eslint-disable */
            this.message = messageNow
          }
        }
      ]
    }
  },
  methods: {
    // 定义addObv方法来添加观察者
    addObv: function () {
      console.log('测试观察者')
      const observer = {
        name: 'obv',
        message: this.message
      }
      this.observers.push(observer)
      console.log('添加观察者完成')
    },
    // 定义publish_message来发布信息
    publish_message: function () {
      this.observers.forEach(observer => {
        observer.item = 'obv'
        observer.message = this.messageNow
      })
    }
  }
}
</script>
