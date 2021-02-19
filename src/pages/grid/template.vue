<template>
    <div class="gridTemplate">
        <h1>Grid-栅格组件</h1>
        <br>
        <p>>通过调整参数span的大小来控制栅格的大小，span的总和为24</p>
        <br>
        <h3>预览：</h3>
        <div class="Wrapper">
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
            <pre><code class="codeText">{{content1}}</code></pre>
        </div>
        <br>
        <hr>
        <h2>Gutter</h2>
        <br>
        <p>>可以通过给Row添加gutter属性，给栅格间添加空隙（单位为<code>px</code>）</p>
        <br>
        <h3>预览：</h3>
        <div class="gutter-wrapper">
            <mo-row gutter="30">
                <mo-col class="item" span="8"> <span> col-8; gutter-30;</span> </mo-col>
                <mo-col class="item" span="8"> <span> col-8; gutter-30;</span> </mo-col>
                <mo-col class="item" span="8"> <span> col-8; gutter-30;</span> </mo-col>
            </mo-row>
            <mo-row gutter="20">
                <mo-col class="item" span="8"> <span> col-8; gutter-20;</span> </mo-col>
                <mo-col class="item" span="8"> <span> col-8; gutter-20;</span> </mo-col>
                <mo-col class="item" span="8"> <span> col-8; gutter-20;</span> </mo-col>
            </mo-row>
            <mo-row gutter="10">
                <mo-col class="item" span="8"> <span> col-8; gutter-10;</span> </mo-col>
                <mo-col class="item" span="8"> <span> col-8; gutter-10;</span> </mo-col>
                <mo-col class="item" span="8"> <span> col-8; gutter-10;</span> </mo-col>
            </mo-row>
        </div>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">
                {{content2}}
            </code></pre>
        </div>
        <br>
        <hr>
        <h2>Offset</h2>
        <br>
        <p>>col除了span属性确定其宽度之外，还可以接受offset属性以从左开始添加空档。</p>
        <p>需要注意的是：span和offset的总和依然需要为24，因为该组件就是将宽度等分为24份。</p>
        <br>
        <h3>预览：</h3>
        <div class="offset-wrapper">
            <mo-row>
                <mo-col class="item" span="8"> <span>col-8</span> </mo-col>
                <mo-col class="item" span="8"> <span>col-8</span> </mo-col>
                <mo-col class="item" span="4" offset="4"> <span>col-4</span> </mo-col>
            </mo-row>
            <mo-row>
                <mo-col class="item" span="8"> <span>col-8</span> </mo-col>
                <mo-col class="item" span="5" offset="3"> <span>col-5</span> </mo-col>
                <mo-col class="item" span="4" offset="4"> <span>col-4</span> </mo-col>
            </mo-row>
            <mo-row>
                <mo-col class="item" span="2" offset="6"> <span>col-2</span> </mo-col>
                <mo-col class="item" span="5" offset="3"> <span>col-5</span> </mo-col>
                <mo-col class="item" span="4" offset="4"> <span>col-4</span> </mo-col>
            </mo-row>
        </div>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">
                {{content3}}
            </code></pre>
        </div>
        <br>
        <hr>
        <h2>align</h2>
        <br>
        <p>>在span与offset的总和不到24时会留有空间，此时可以通过给row设置align属性来决定其子组件在节点中的排版方式。</p>
        <p>可接受left\center\right。</p>
        <br>
        <h3>预览：</h3>
        <div class="align-wrapper">
            <mo-row class="row" align="left">
                <mo-col class="item" span="8"><span>left(span-8)</span></mo-col>
                    <mo-col class="item" span="8"><span>left(span-8)</span></mo-col>
            </mo-row>
            <mo-row class="row" align="center">
                <mo-col class="item" span="8"><span>center(span-8)</span></mo-col>
                <mo-col class="item" span="8"><span>center(span-8)</span></mo-col>
            </mo-row>
            <mo-row class="row" align="right">
                <mo-col class="item" span="8"><span>right(span-8)</span></mo-col>
                <mo-col class="item" span="8"><span>right(span-8)</span></mo-col>
            </mo-row>
        </div>
        <br>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">
                {{content4}}
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
        content1:`
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
        `,
        content2:`
              <mo-row gutter="30">
                  <mo-col class="item" span="8"> <span> col-8; gutter-30;</span> </mo-col>
                  <mo-col class="item" span="8"> <span> col-8; gutter-30;</span> </mo-col>
                  <mo-col class="item" span="8"> <span> col-8; gutter-30;</span> </mo-col>
              </mo-row>
              <mo-row gutter="20">
                  <mo-col class="item" span="8"> <span> col-8; gutter-20;</span> </mo-col>
                  <mo-col class="item" span="8"> <span> col-8; gutter-20;</span> </mo-col>
                  <mo-col class="item" span="8"> <span> col-8; gutter-20;</span> </mo-col>
              </mo-row>
              <mo-row gutter="10">
                  <mo-col class="item" span="8"> <span> col-8; gutter-10;</span> </mo-col>
                  <mo-col class="item" span="8"> <span> col-8; gutter-10;</span> </mo-col>
                  <mo-col class="item" span="8"> <span> col-8; gutter-10;</span> </mo-col>
              </mo-row>
        `,
        content3:`
              <mo-row>
                  <mo-col class="item" span="8"> <span>col-8</span> </mo-col>
                  <mo-col class="item" span="8"> <span>col-8</span> </mo-col>
                  <mo-col class="item" span="4" offset="4"> <span>col-4</span> </mo-col>
              </mo-row>
              <mo-row>
                  <mo-col class="item" span="8"> <span>col-8</span> </mo-col>
                  <mo-col class="item" span="5" offset="3"> <span>col-5</span> </mo-col>
                  <mo-col class="item" span="4" offset="4"> <span>col-4</span> </mo-col>
              </mo-row>
              <mo-row>
                  <mo-col class="item" span="2" offset="6"> <span>col-2</span> </mo-col>
                  <mo-col class="item" span="5" offset="3"> <span>col-5</span> </mo-col>
                  <mo-col class="item" span="4" offset="4"> <span>col-4</span> </mo-col>
              </mo-row>
        `,
        content4:`
              <mo-row class="row" align="left">
                  <mo-col class="item" span="8"><span>left</span></mo-col>
                  <mo-col class="item" span="8"><span>left</span></mo-col>
              </mo-row>
              <mo-row class="row" align="center">
                  <mo-col class="item" span="8"><span>center</span></mo-col>
                  <mo-col class="item" span="8"><span>center</span></mo-col>
              </mo-row>
              <mo-row class="row" align="right">
                  <mo-col class="item" span="8"><span>right</span></mo-col>
                  <mo-col class="item" span="8"><span>right</span></mo-col>
              </mo-row>
        `
      }
    }
  }
</script>

<style lang="scss">
    $background: rgb(67,189,200);
    $font-color: white;
    * { box-sizing: border-box; }

    .colDemo1{
        background:$background;
        height: 2em;
        text-align: center;
        color: $font-color;
    }
    .colDemo2{
        background: rgba(67, 200, 200,0.5);
        height: 2em;
        text-align: center;
        color: $font-color;
    }

    .gutter-wrapper { padding-top: 10px;height: 8em;
        .item { text-align: center; color: $font-color;
            > span { display: block;height: 2em;margin-top: 5px; background: $background; }
        }
    }

    .offset-wrapper { padding-top:10px;height: 8em;
        > .row {
            > .item { text-align: center; color: $font-color;
                > span { display: block;height: 2em;margin-top: 5px; background: $background; }
            }
        }
    }
    .align-wrapper{ ;
        .row{
            > .item { text-align: center; color:  $font-color;
                &:nth-child(odd){ background: $background;display: block;height: 2em;margin-top: 5px;  }
                &:nth-child(even){ background: lighten($background,15%); color:  $font-color;display: block;height: 2em;margin-top: 5px;  }
            }
        }
    }
</style>
