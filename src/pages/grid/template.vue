<template>
    <div class="grid">
        <h1>Grid组件</h1>
        <br>
        <p>>通过调整参数span的大小来控制栅格的大小，span的总和为24</p>
        <br>
        <h3>预览：</h3>
        <div class="gridWrapper">
            <mo-row>
                <mo-col span="12" class="colDemo1">1</mo-col>
                <mo-col span="12" class="colDemo2">2</mo-col>
            </mo-row>
            <br>
            <mo-row>
                <mo-col span="8" class="colDemo1">1</mo-col>
                <mo-col span="8" class="colDemo2">2</mo-col>
                <mo-col span="8" class="colDemo1">3</mo-col>
            </mo-row>
            <br>
            <mo-row>
                <mo-col span="6" class="colDemo1">1</mo-col>
                <mo-col span="6" class="colDemo2">2</mo-col>
                <mo-col span="6" class="colDemo1">3</mo-col>
                <mo-col span="6" class="colDemo2">4</mo-col>
            </mo-row>
        </div>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content}}</code></pre>
        </div>
        <br>
        <hr>
        <h2>Gutter</h2>
        <br>
        <p>>可以通过给Row添加gutter属性，给栅格间添加空隙（单位为<code>px</code>）</p>
        <br>
        <h3>预览：</h3>
        <div class="gridWrapper">
            暂无，gutter发现bug，待修复。
        </div>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">
                待添加
            </code></pre>
        </div>
        <br>
    </div>
</template>

<script lang='js'>
  import {Col, Row} from 'mo-ui-beta'

  export default {
    components: {
      'mo-row': Row,
      'mo-col': Col,
    },
    data(){
      return{
        content:`
              <mo-row>
                  <mo-col span="12">1</mo-col>
                  <mo-col span="12">2</mo-col>
              </mo-row>

              <mo-row>
                  <mo-col span="8">1</mo-col>
                  <mo-col span="8">2</mo-col>
                  <mo-col span="8">3</mo-col>
              </mo-row>

              <mo-row>
                  <mo-col span="6">1</mo-col>
                  <mo-col span="6">2</mo-col>
                  <mo-col span="6">3</mo-col>
                  <mo-col span="6">4</mo-col>
              </mo-row>
        `
      }
    }
  }
</script>

<style>
    .colDemo1{
        background: rgb(67,189,200);
        height: 2em;
        text-align: center;
        color: white;
    }
    .colDemo2{
        background: rgba(67, 200, 200,0.5);
        height: 2em;
        text-align: center;
        color: white;
    }
</style>
