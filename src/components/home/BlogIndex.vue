<template>
    <div>
        <blog-header></blog-header>
        <hr/>
        <div>
            这个是首页
        </div>
        <hr/>
        <blog-footer></blog-footer>
    </div>
</template>

<script>
import blogHeader from '@/components/common/BlogHeader'
import blogFooter from '@/components/common/BlogFooter'
export default {
  name: 'BlogIndex',
  components: {blogHeader, blogFooter}
}
</script>
