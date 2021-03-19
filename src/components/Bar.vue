<template>
  <div>
    <h2>Bar 组件</h2>
    <p>{{ count }}</p>
    <p>{{ message }}</p>
    <button @click="increment">自增</button>
    <p>未完成任务数量：{{ remaining }}</p>
    <p>{{ findTodoById(1).text }}</p>
    <button @click="async_increment">异步自增</button>
    <br>
    <button @click="asyncIncrement(6)">异步自增</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: "Bar",
  data() {
    return {}
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    async_increment() {
      this.$store.dispatch('increment', 5)
    },
    ...mapActions({
      asyncIncrement: 'increment'
    })
  },
  /*computed: {
    count() {
      return this.$store.state.count
    }
  }*/
  computed: {
    ...mapState([
      'count',
      'message'
    ]),
    ...mapGetters([
      'remaining',
      'findTodoById'
    ])
  }
}
</script>

<style scoped>

</style>