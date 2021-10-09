<template>
    <div>
        <blog-header></blog-header>
        <hr/>
        <div>
            用户名:<input type="text" v-model="loginInfoVo.username" placeholder="请输入用户名" />
            <br/>
            密码:<input type="text" v-model="loginInfoVo.password" placeholder="请输入密码" />
            <br/>
            登录验证情况：<textarea cols="30" rows="10" v-model="responseResult"></textarea>
            <button v-on:click="login">登录</button>
        </div>
        <hr/>
        <blog-footer></blog-footer>
    </div>
</template>

<script>
import BlogHeader from '@/components/common/BlogHeader.vue'
import BlogFooter from '@/components/common/BlogFooter.vue'

export default {
  name: 'Bloglogin',
  components: {BlogHeader, BlogFooter},
  data () {
    return {
      loginInfoVo: {username: '', password: ''},
      responeseResult: []
    }
  },
  methods: {
    login () {
      this.$axios.post('/login', {username: this.loginInfoVo.username, password: this.loginInfoVo.password})
        .then(successResponse => {
          this.responeseResult = JSON.stringify(successResponse.data)
          if (successResponse.data.code === 200) {
            this.$router.place({path: '/index'})
          }
        })
        .catch(failResponse => {})
    }
  }
}
</script>
