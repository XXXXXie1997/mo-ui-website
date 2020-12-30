<template>
    <div class="start">
        <h1>快速上手</h1>
        <br>
        <h2>1. 引入组件及默认css</h2>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content1}}</code></pre>
        </div>
        <br>
        <h2>2. 注册组件</h2>
        <br>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content2}}</code></pre>
        </div>
        <br>
        <h2>3. 使用组件</h2>
        <br>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content3}}</code></pre>
        </div>
        <br>
        <h3>预览</h3>
        <br>
        <div class="example">
            <mo-button icon="thumbs-up">默认按钮</mo-button>
        </div>
    </div>
</template>

<script lang='js'>
    import {Button,Icon} from 'mo-ui-beta'
export default {
  components:{
    'mo-button':Button,
    //eslint-disable-next-line
    'mo-icon':Icon,
  },
  data(){
    return{
      content1:`
             import { Button , Icon } from "mo-ui-beta";
             import "mo-ui-beta/dist/index.css";
      `,
      content2:`
             export default {
                  name: "xxx",
                  components: {
                      "mo-button": Button,
                      "mo-icon":Icon
                               },
                            }
      `,
      content3:`
             <template>
                <div>
                   <mo-button icon="thumbs-up">默认按钮</mo-button>
                </div>
             </template>
      `
    }
  }
}
</script>
