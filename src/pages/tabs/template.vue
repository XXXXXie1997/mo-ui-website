<template>
    <div class="tabsTamplate">
        <h1>Tabs-标签页组件</h1>
        <br>
        <p>>注：该组件默认需要传入一个名为selectedTab的默认值以保证正常使用,同时tabs-item和tabs-pane必须有一一对应的name。</p>
        <br>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content}}</code></pre>
        </div>
        <br>
        <hr>
        <br>
        <p>>mo-tabs-item可以通过接受disabled属性使该标签变得不可用。</p>
        <br>
        <h3>预览：</h3>
        <div class="tabsWrapper">
            <mo-tabs :selected.sync="selectedTab">
                <mo-tabs-head>
                    <mo-tabs-item name='tab1'>Tab1</mo-tabs-item>
                    <mo-tabs-item name='tab2'>Tab2</mo-tabs-item>
                    <mo-tabs-item name='tab3' disabled>Tab3</mo-tabs-item>
                    <mo-tabs-item name='tab4'>Tab4</mo-tabs-item>
                </mo-tabs-head>
                <mo-tabs-body>
                    <mo-tabs-pane name='tab1'>内容11111</mo-tabs-pane>
                    <mo-tabs-pane name='tab2'>内容22222</mo-tabs-pane>
                    <mo-tabs-pane name='tab3'>内容33333</mo-tabs-pane>
                    <mo-tabs-pane name='tab4'>内容44444</mo-tabs-pane>
                </mo-tabs-body>
            </mo-tabs>
        </div>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content1}}</code></pre>
        </div>
        <br>
    </div>
</template>

<script lang='js'>
    import {Tabs,TabsItem,TabsHead,TabsBody,TabsPane} from 'mo-ui-beta'
export default {
      components:{
        'mo-tabs':Tabs,
        'mo-tabs-head':TabsHead,
        'mo-tabs-body':TabsBody,
        'mo-tabs-item':TabsItem,
        'mo-tabs-pane':TabsPane,
      },
  data(){
    return{
      selectedTab:'tab1',
      content:`
                 data() {
                    return {
                      selectedTab: 'tab1',
                           }
                         }
      `,
      content1:`
                 <mo-tabs :selected.sync="selectedTab">
                     <mo-tabs-head>
                         <mo-tabs-item name='tab1'>Tab1</mo-tabs-item>
                         <mo-tabs-item name='tab2'>Tab2</mo-tabs-item>
                         <mo-tabs-item name='tab3' disabled>Tab3</mo-tabs-item>
                         <mo-tabs-item name='tab4'>Tab4</mo-tabs-item>
                     </mo-tabs-head>
                     <mo-tabs-body>
                         <mo-tabs-pane name='tab1'>内容11111</mo-tabs-pane>
                         <mo-tabs-pane name='tab2'>内容22222</mo-tabs-pane>
                         <mo-tabs-pane name='tab3'>内容33333</mo-tabs-pane>
                         <mo-tabs-pane name='tab4'>内容44444</mo-tabs-pane>
                     </mo-tabs-body>
                 </mo-tabs>
      `,
    }
  }
}
</script>

<style lang='scss'>
.tabsWrapper{
    border: 1px solid #bbb;
    border-radius: 8px;
    padding: 10px;
    min-height: 160px;
}


.line {
display: none;
}
</style>
