<template>
  <div>
    <a-button @click="login">Login</a-button>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log('Login mounted.')
  },
  methods: {
    login () {
      this.$http('/portal/frurl').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>