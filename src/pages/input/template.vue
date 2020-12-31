<template>
    <div class="inputTemplate">
        <h1>input-输入框组件</h1>
        <br>
        <h3>可选属性：</h3>
        <p>> error：接收一个String，会在输入框右侧作为错误信息展示。</p>
        <br>
        <p>> readonly：只读，可以通过tab选中，但是不能修改。</p>
        <br>
        <p>> disabled：禁用，无法通过tab选中，也不能修改</p>
        <br>
        <h3>预览：</h3>
        <mo-input></mo-input>
        <br>
        <br>
        <mo-input error="ERROR"></mo-input>
        <br>
        <br>
        <mo-input readonly></mo-input>
        <br>
        <br>
        <mo-input disabled></mo-input>
        <br>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content}}</code></pre>
        </div>
        <br>
    </div>
</template>

<script lang='js'>
  import {Input} from 'mo-ui-beta'

  export default {
    components: {
      'mo-input': Input,
    },
    data(){
      return{
        content:`
          <mo-input></mo-input>

          <mo-input error="ERROR"></mo-input>

          <mo-input readonly></mo-input>

          <mo-input disabled></mo-input>
        `
      }
    }
  }
</script>

<style lang='scss' scoped>

</style>
