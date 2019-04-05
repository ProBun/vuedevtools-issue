<template>
  <div>
    Foo
  </div>
</template>

<script>
export default {
  name: 'foo',
  created() {
    this.$store.commit('increment')
  }
}
</script>
