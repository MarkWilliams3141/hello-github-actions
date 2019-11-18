<template>
  <div id="app">
    <img class="octocat-logo" alt="Vue logo" src="./assets/octocat.png">
    <HelloGitHubActions msg="Automating your workflow with GitHub Actions"/>
  </div>
</template>

<script>
import HelloGitHubActions from './components/HelloGitHubActions.vue'

export default {
  name: 'app',
  components: {
    HelloGitHubActions
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app .octocat-logo { width: 300px; }
.hello { text-align: left; max-width: 700px; margin: auto;}
</style>
