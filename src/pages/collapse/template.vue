<template>
    <div class="collapseTemplate">
        <h1>collapse-折叠面板组件</h1>
        <br>
        <p>>注：该组件默认需要传入一个名为selectedTab的数组以保证正常使用。</p>
        <br>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content}}</code></pre>
        </div>
        <br>
        <hr>
        <br>
        <h3>预览：</h3>
        <div class="collapseWrapper1">
            <mo-collapse :selected.sync="selectedTab1">
                <mo-collapse-item title="标题1" name="1">内容1</mo-collapse-item>
                <mo-collapse-item title="标题2" name="2">内容2</mo-collapse-item>
            </mo-collapse>
        </div>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content1}}</code></pre>
        </div>
        <br>
        <hr>
        <br>
        <div>>通过通过添加single参数控制是否只能同时打开一栏</div>
        <br>
        <h3>预览：</h3>
        <div class="collapseWrapper2">
            <mo-collapse :selected.sync="selectedTab2" single>
                <mo-collapse-item title="标题1" name="1">内容1</mo-collapse-item>
                <mo-collapse-item title="标题2" name="2">内容2</mo-collapse-item>
            </mo-collapse>
        </div>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content2}}</code></pre>
        </div>
        <br>
    </div>
</template>

<script lang='js'>
  import {Collapse, CollapseItem} from 'mo-ui-beta'

  export default {
    components: {
      'mo-collapse': Collapse,
      'mo-collapse-item': CollapseItem,
    },
    data() {
      return {
        content: `
              data() {
                return {
                  selectedTab: [],
                       }
                     }
                        `,
        content1: `
              <mo-collapse :selected.sync="selectedTab">
                <mo-collapse-item title="标题1" name="1">内容1</mo-collapse-item>
                <mo-collapse-item title="标题2" name="2">内容2</mo-collapse-item>
              </mo-collapse>
                  `,
        content2: `
              <mo-collapse :selected.sync="selectedTab" single>
                <mo-collapse-item title="标题1" name="1">内容1</mo-collapse-item>
                <mo-collapse-item title="标题2" name="2">内容2</mo-collapse-item>
              </mo-collapse>
                  `,
        selectedTab1: [],
        selectedTab2: [],

      }
    }
  }
</script>

<style lang='css' scoped>
    .collapseWrapper1 {
        border: 1px solid #bbb;
        border-radius: 8px;
        padding: 10px;
        min-height: 160px;
    }
    .collapseWrapper2{
        border: 1px solid #bbb;
        border-radius: 8px;
        padding: 10px;
        min-height: 128px;
    }

</style>
