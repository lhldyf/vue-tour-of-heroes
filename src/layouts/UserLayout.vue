<template>
  <div>
    <a-button>UserLayout</a-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log('UserLayout mounted.')
  }
}
</script>

<style>

</style>