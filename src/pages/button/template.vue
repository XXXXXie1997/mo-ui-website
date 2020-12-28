<template>
    <div class="button">
        <h1>button组件</h1>
        <br>
        <h3>预览：</h3>
        <mo-button class="example">默认按键</mo-button>
        <mo-button class="example" icon="settings">默认按键</mo-button>
        <mo-button class="example" :loading="true">默认按键</mo-button>
        <mo-button class="example" disabled>默认按键</mo-button>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content1}}</code></pre>
        </div>
        <br>
        <hr>
        <br>
        <h1>button group 按键组</h1>
        <br>
        <h3>预览：</h3>
        <mo-button-group class="example">
            <mo-button>按键1</mo-button>
            <mo-button>按键2</mo-button>
            <mo-button>按键3</mo-button>
        </mo-button-group>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content2}}</code></pre>
        </div>
    </div>
</template>

<script lang='js'>
  import {Button, ButtonGroup, Icon} from 'mo-ui-beta'

  export default {
    components: {
      'mo-button': Button,
      'mo-button-group': ButtonGroup,
      //eslint-disable-next-line
      'mo-icon': Icon,
    },
    data() {
      return {
        content1: `
            <mo-button>默认按键</mo-button>
            <mo-button icon="settings">默认按键</mo-button>
            <mo-button :loading="true">默认按键</mo-button>
            <mo-button disabled>默认按键</mo-button>
        `,
        content2: `
            <mo-button-group>
              <mo-button>按键1</mo-button>
              <mo-button>按键2</mo-button>
              <mo-button>按键3</mo-button>
            </mo-button-group>
        `
      }
    }
  }
</script>

<style lang='css' scoped>

    .codeText {
        color: #eee;
    }

    .codeTextWrapper {
        background: #333333;
        border-radius: 8px;
    }
</style>
