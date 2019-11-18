<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
        GitHub Actions features a powerful execution environment integrated into every step of your workflow. You can discover, create, and share actions to perform any job you'd like, and combine them to customize your workflow.
    </p>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://help.github.com/en/actions/automating-your-workflow-with-github-actions/getting-started-with-github-actions" target="_blank" rel="noopener">Getting started with GitHub Actions</a></li>
      <li><a href="https://help.github.com/en/actions/automating-your-workflow-with-github-actions/configuring-workflows" target="_blank" rel="noopener">Configuring workflows</a></li>
      <li><a href="https://help.github.com/en/actions/automating-your-workflow-with-github-actions/building-actions" target="_blank" rel="noopener">Building actions</a></li>
      <li><a href="https://help.github.com/en/actions/automating-your-workflow-with-github-actions/hosting-your-own-runners" target="_blank" rel="noopener">Hosting your own runners</a></li>
      <li><a href="https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-continuous-integration-workflows" target="_blank" rel="noopener">Creating continuous integration workflows</a></li>
    </ul>
    <h3>Repositories</h3>
    <ul>
      <li><a href="https://github.com/MarkWilliams3141/hello-github-actions" target="_blank" rel="nofollow">hello-github-actions</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloGitHubActions',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
