<template>
    <div class="buttonTemplate">
        <h1>button-按钮组件</h1>

        <br>
        <h3>预览：</h3>
        <mo-button class="example">默认按键</mo-button>
        <mo-button class="example" icon="settings">默认按键</mo-button>
        <mo-button class="example" iconPosition="right" :loading="true">默认按键</mo-button>
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
            <mo-button disabled>按键2</mo-button>
            <mo-button>按键3</mo-button>
        </mo-button-group>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content2}}</code></pre>
        </div>
        <br>
        <hr>

        <br>
        <p>> 一个普通的按钮,可以接受
            <code>icon(String);iconPosition(String);disabled(Boolean)</code>以及 <code>:loading(Boolean)</code>
            四个参数。</p>
        <br>
        <div class="popoverWrapper">
            <mo-popover position="top">
                <template slot="content">
                    <p><mo-icon name="left"></mo-icon>:left</p>
                    <p><mo-icon name="right"></mo-icon>:right</p>
                    <p><mo-icon name="down"></mo-icon>:down</p>
                    <p><mo-icon name="error"></mo-icon>:error</p>
                    <p><mo-icon name="info"></mo-icon>:info</p>
                    <p><mo-icon name="loading"></mo-icon>:loading</p>
                    <p><mo-icon name="settings"></mo-icon>:settings</p>
                    <p><mo-icon name="thumbs-up"></mo-icon>:thumbs-up</p>
                    <p><mo-icon name="download"></mo-icon>:download</p>
                </template>
                <mo-button>目前可用的icon</mo-button>
            </mo-popover>
        </div>
        <br>
    </div>
</template>

<script lang='js'>
  import {Button, ButtonGroup, Icon,Popover} from 'mo-ui-beta'

  export default {
    components: {
      'mo-button': Button,
      'mo-button-group': ButtonGroup,
      'mo-icon': Icon,
      'mo-popover':Popover,
    },
    data() {
      return {
        content1: `
            <mo-button>默认按键</mo-button>
            <mo-button icon="settings">默认按键</mo-button>
            <mo-button :loading="true" iconPosition="right">默认按键</mo-button>
            <mo-button disabled>默认按键</mo-button>
        `,
        content2: `
            <mo-button-group>
              <mo-button>按键1</mo-button>
              <mo-button disabled>按键2</mo-button>
              <mo-button>按键3</mo-button>
            </mo-button-group>
        `
      }
    }
  }
</script>

<style scoped>

</style>
