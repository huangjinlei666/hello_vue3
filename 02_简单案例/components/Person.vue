<template>
  <div class="Person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="alertTel">展示电话</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Person',
  mixins: [],
  components: {},
  props: {},
  data () {
    return {
        name:'张三',
        age:18,
        tel:13388888888
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    changeName(){
        this.name='zhang-san'
    },
    changeAge(){
        this.age+=1
    },
    alertTel(){
        alert(this.tel)
    },
  }
}
</script>

<style scoped>
    .Person{
        background-color: skyblue;
        box-shadow: 0,0,10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
      margin:0 5px
    }
</style>
