<template>
  <div id="app">
    <h1>hello world</h1>
    <Foo></Foo>
    <Bar></Bar>
  </div>
</template>

<script>
import Foo from "@/components/Foo";
import Bar from "@/components/Bar";

export default {
  name: 'App',
  components: {
    Foo,
    Bar
  }
}
</script>

<style>

</style>
