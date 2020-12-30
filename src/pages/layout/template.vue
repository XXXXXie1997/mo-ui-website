<template>
    <div class="wrapper">
        <h1>layout-默认布局</h1>
        <br>
        <p>>以Layout作为容器，通过对Header，Sider，Content，Footer的组合实现布局。</p>
        <br>
        <h3>预览：</h3>
        <div class="layoutWrapper">
            <mo-layout class="layoutTemplate-layout">
                <mo-header class="layoutTemplate-header"> header </mo-header>
                <mo-layout>
                    <mo-sider class="layoutTemplate-sider"> sider </mo-sider>
                    <mo-content class="layoutTemplate-content"> content </mo-content>
                </mo-layout>
                <mo-footer class="layoutTemplate-footer"> footer </mo-footer>
            </mo-layout>
        </div>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content1}}</code></pre>
        </div>
            <br>
        <div class="layoutWrapper">
            <mo-layout class="layoutTemplate-layout">
                <mo-header class="layoutTemplate-header"> header </mo-header>
                <mo-content class="layoutTemplate-content"> content </mo-content>
                <mo-footer class="layoutTemplate-footer"> footer </mo-footer>
            </mo-layout>
        </div>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content2}}</code></pre>
        </div>
            <br>
        <div class="layoutWrapper">
            <mo-layout class="layoutTemplate-layout">
                <mo-header class="layoutTemplate-header"> header </mo-header>
                <mo-layout>
                    <mo-sider class="layoutTemplate-sider"> sider </mo-sider>
                    <mo-layout class="layoutTemplate-layout">
                        <mo-content class="layoutTemplate-content"> content </mo-content>
                        <mo-footer class="layoutTemplate-footer"> footer </mo-footer>
                    </mo-layout>
                </mo-layout>
            </mo-layout>
        </div>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content3}}</code></pre>
        </div>
        <br>
    </div>
</template>

<script lang='js'>
  import {Layout, Sider, Header, Footer, Content} from 'mo-ui-beta'

  export default {
    components: {
      'mo-layout': Layout,
      'mo-sider': Sider,
      'mo-header': Header,
      'mo-footer': Footer,
      'mo-content': Content
    },
    data(){
      return{
        content1:`
                  <mo-layout>
                      <mo-header> header </mo-header>
                          <mo-layout>
                              <mo-sider> sider </mo-sider>
                              <mo-content> content </mo-content>
                          </mo-layout>
                      <mo-footer> footer </mo-footer>
                  </mo-layout>
                    `,
        content2:`
                  <mo-layout>
                      <mo-header> header </mo-header>
                      <mo-content> content </mo-content>
                      <mo-footer> footer </mo-footer>
                  </mo-layout>
        `,
        content3:`
                  <mo-layout>
                      <mo-header> header </mo-header>
                      <mo-layout>
                          <mo-sider> sider </mo-sider>
                          <mo-layout>
                              <mo-content> content </mo-content>
                              <mo-footer> footer </mo-footer>
                          </mo-layout>
                      </mo-layout>
                  </mo-layout>
        `
      }
    }
  }
</script>

<style lang="scss" scoped>
    $background: rgb(67,189,200);
    .layoutWrapper {
        text-align: center;
        > .layoutTemplate-layout { height: 40vh;}
    }
    .layoutTemplate-sider { width: 3em; background: lighten($background, 15%); }
    .layoutTemplate-content { background: lighten($background, 30%)}
    .layoutTemplate-footer { background: $background; }
    .layoutTemplate-header { height: 3em; background: $background; }
</style>
