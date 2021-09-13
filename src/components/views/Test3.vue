<template>
    <div>
        <h2 v-if="isLogin">已登录</h2>
        <a @click="login()">登录</a>
        <a @click="exit()">注销</a>
    </div>
</template>
<script>
export default {
  name: 'test3',
  data: function () {
    return {
      isLogin: false
    }
  },
  methods: {
    login: function () {
      this.isLogin = true
    },
    exit: function () {
      this.isLogin = false
    }
  }
}
</script>
