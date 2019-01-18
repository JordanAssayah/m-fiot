<template>
  <div id="app" class="app">
    <main-menu />
    <router-view class="app-content" />
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu'

export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>
