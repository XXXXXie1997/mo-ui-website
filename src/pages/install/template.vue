<template>
    <div class="install">
        <h1>如何安装</h1>
        <br>
        <p>>进入项目根目录后运行：</p>

        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content}}</code></pre>
        </div>

    </div>
</template>

<script lang='js'>
export default {
  data(){
    return{
      content:`
            yarn add mo-ui-beta
      `
    }
  }
}
</script>

<style  scoped>

</style>
