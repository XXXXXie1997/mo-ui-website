<template>
    <div class="installTemplate">
        <h1>如何安装</h1>
        <br>
        <h2>YARN</h2>
        <br>
        <p>>进入项目根目录后运行：</p>

        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content1}}</code></pre>
        </div>
        <br>
        <hr>
        <br>
        <h2>NPM</h2>
        <br>
        <p>>进入项目根目录后运行：</p>

        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content2}}</code></pre>
        </div>
        <br>
        <p>请避免同时使用两种包管理工具，如果你是使用vue-cli搭建的项目，默认使用的包管理工具为yarn，那么请尽量不要使用npm安装。</p>

    </div>
</template>

<script lang='js'>
export default {
  data(){
    return{
      content1:`
            yarn add mo-ui-beta
      `,
      content2:`
            npm install mo-ui-beta
      `
    }
  }
}
</script>

<style  scoped>

</style>
