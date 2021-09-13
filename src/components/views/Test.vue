<template>
    <div>
        <button id="byn_add" @click="add_num()">+</button>
            <h2 id="num">{{num}}</h2>
        <button id="btn_del" @click="del_num()">-</button>
    </div>
</template>
<script>
export default {
  name: 'test',
  data: function () {
    return {
      num: 0
    }
  },
  methods: {
    add_num: function () {
      console.log(123)
      this.num++
    },
    del_num: function () {
      this.num--
    }
  }
}
</script>
