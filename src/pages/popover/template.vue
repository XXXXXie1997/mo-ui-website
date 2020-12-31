<template>
    <div class="popoverTemplate">
        <h1>Popover-弹出层组件</h1>
        <br>
        <p>>将一个页面元素和一个 <code>tamplate slot="content"</code> 由mo-popover包裹而成。</p>
        <br>
        <p>>popover可以接受两个参数，分别为position（控制弹出内容的方向）和trigger（控制内容弹出方式，默认为click，可选项hover）。</p>

        <br>
<h3>预览：</h3>
        <span class="example">
            <mo-popover position="left">
                <template slot="content">popover内容</template>
                <mo-button>在左边弹出popover</mo-button>
            </mo-popover>
        </span>
        <span class="example">
            <mo-popover position="right">
                <template slot="content">popover内容</template>
                <mo-button>在右边弹出popover</mo-button>
            </mo-popover>
        </span>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content1}}</code></pre>
        </div>
        <br>
        <hr>
        <br>
        <h3>预览：</h3>
        <div class="example">
            <mo-popover position="bottom" trigger="hover">
                <template slot="content">popover内容</template>
                <mo-button>鼠标悬浮弹出popover</mo-button>
            </mo-popover>
        </div>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content2}}</code></pre>
        </div>
        <br>
    </div>
</template>

<script lang='js'>
import {Button,Popover} from 'mo-ui-beta'

    export default {
  components:{
    'mo-button':Button,
    'mo-popover':Popover,
  },
data(){
    return{
      content1:`
                  <mo-popover position="left">
                      <template slot="content">popover内容</template>
                      <mo-button>在左边弹出popover</mo-button>
                  </mo-popover>
                  <mo-popover position="right">
                      <template slot="content">popover内容</template>
                      <mo-button>在右边弹出popover</mo-button>
                  </mo-popover>
      `,
      content2:`
                  <mo-popover position="bottom" trigger="hover">
                      <template slot="content">popover内容</template>
                      <mo-button>鼠标悬浮弹出popover</mo-button>
                  </mo-popover>
      `,
    }
}
    }
</script>

<style lang='scss' scoped>

</style>
