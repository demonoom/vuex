<template>
  <div>
    <h2>Foo 组件</h2>
    <p>{{ count }}</p>
    <p>{{ message }}</p>
    <button @click="increment">自增</button>
    <p>未完成任务数量：{{ un_done }}</p>
    <button @click="changeMes(11)">改变message</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'

export default {
  name: "Foo",
  data() {
    return {}
  },
  methods: {
    increment() {
      //不要在组件中直接修改容器store中的数据
      //为什么：因为无法被调试工具记录到
      // this.$store.state.count++
      this.$store.commit('increment', 2)
    },
    //把SOME_MUTATION 映射为了组件的一个method
    ...mapMutations({
      changeMes: 'SOME_MUTATION'
    })
  },
  /*computed: {
    count() {
      return this.$store.state.count
    }
  }*/
  computed: {
    /**
     * mapState映射函数，用来提取store.state
     * ...的写法是对象展开运算符，用来混入到当前计算属性当中
     */
    ...mapState({
      count: state => state.count,
      message: 'message'
    }),
    ...mapGetters({
      un_done: 'remaining'
    })
  }
}
</script>

<style scoped>

</style>