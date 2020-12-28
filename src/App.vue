<template>
    <div id="app">
        <mo-layout class="websiteLayout">
            <mo-header class="header">
                <mo-row>
                    <mo-col span="4">logo</mo-col>
                    <mo-col span="12">还没想好要放什么</mo-col>
                    <mo-col span="8">简单点，再简单点</mo-col>
                </mo-row>
            </mo-header>
            <mo-layout>
                <mo-sider class="sider">
                    <mo-collapse :selected.sync="selectedTab">
                        <mo-collapse-item title="入门" name="1">
                            <p>
                                <router-link to="install">安装</router-link>
                            </p>
                            <p>
                                <router-link to="start">快速上手</router-link>
                            </p>
                        </mo-collapse-item>
                        <mo-collapse-item title="组件" name="2">
                            <p><router-link to="button">button</router-link></p>
                            <p><router-link to="collapse">collapse</router-link></p>
                            <p><router-link to="grid">grid</router-link></p>
                            <p><router-link to="input">input</router-link></p>
                            <p><router-link to="layout">layout</router-link></p>
                            <p><router-link to="popover">popover</router-link></p>
                            <p><router-link to="tabs">tabs</router-link></p>
                            <p><router-link to="toast">toast</router-link></p>
                        </mo-collapse-item>
                    </mo-collapse>
                </mo-sider>
                <mo-layout>
                    <mo-content class="websiteContent">
                      <div class="wrapper">
                          <router-view/>
                      </div>
                    </mo-content>
                </mo-layout>
            </mo-layout>

        </mo-layout>
    </div>
</template>

<script>
  import {Layout, Sider, Header, Content, Collapse, CollapseItem,Row,Col} from 'mo-ui-beta'
  import 'mo-ui-beta/dist/index.css'

  export default {
    name: 'App',
    components: {
      'mo-layout': Layout,
      'mo-sider': Sider,
      'mo-header': Header,
      'mo-content': Content,
      'mo-collapse': Collapse,
      'mo-collapse-item': CollapseItem,
      'mo-row':Row,
      'mo-col':Col,
    },
    data() {
      return {selectedTab: ['1']}
    }
  }
</script>

<style>
    #app {

    }

    .websiteLayout {
        min-width: 100vh;
        min-height: 100vh;
        background: #eeeeee;
    }

    .sider {
        min-width: 20vh;
        background: deepskyblue;

    }

    .header {
        min-height: 8vh;
        background: #cccccc;
    }

    .websiteContent {
        background: #ffffff;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
    }
    .example{
        margin-left: 8px;
    }
    *{
        box-sizing: border-box;
    }

</style>
