<template>
    <div id="app">
        <mo-layout class="websiteLayout">
            <mo-header class="header">
                <mo-row>
                    <mo-col span="4">
                        <router-link to="/">
                            <img src="./logo/logo.png">
                        </router-link>
                    </mo-col>
                    <mo-col span="20">还没想好要放什么</mo-col>
                </mo-row>
            </mo-header>
            <mo-layout>
                <mo-sider class="sider">
                    <div class="collapseWrapper">
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
                            <p>
                                <router-link to="button">button</router-link>
                            </p>
                            <p>
                                <router-link to="collapse">collapse</router-link>
                            </p>
                            <p>
                                <router-link to="grid">grid</router-link>
                            </p>
                            <p>
                                <router-link to="input">input</router-link>
                            </p>
                            <p>
                                <router-link to="layout">layout</router-link>
                            </p>
                            <p>
                                <router-link to="popover">popover</router-link>
                            </p>
                            <p>
                                <router-link to="tabs">tabs</router-link>
                            </p>
                            <p>
                                <router-link to="toast">toast</router-link>
                            </p>
                        </mo-collapse-item>
                    </mo-collapse>
                    </div>

                </mo-sider>
                <mo-layout>
                    <mo-content class="websiteContent">
                        <div class="templateWrapper">
                            <router-view/>
                        </div>
                    </mo-content>
                </mo-layout>
            </mo-layout>

        </mo-layout>
    </div>
</template>

<script>
  import {Layout, Sider, Header, Content, Collapse, CollapseItem, Row, Col} from 'mo-ui-beta'
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
      'mo-row': Row,
      'mo-col': Col,
    },
    data() {
      return {selectedTab: []}
    }
  }
</script>

<style>
    #app {
        font-family: "Times New Roman",Georgia,serif;
        font-size: 16px;
    }

    a {
        font-size: 16px;
        color: #111;
        text-decoration: none;
    }
p{
    padding-bottom: 10px;
    padding-left: 6px;
}
    a:hover {
        color: #666;
    }


    .websiteLayout {
        min-width: 100vh;
        min-height: 100vh;
        background: #eeeeee;
    }

    .sider {
        min-width: 20vh;
        background: #eee;
        font-size: 18px;
    }

    .header {
        min-height: 8vh;
        background: #cccccc;
    }

    .websiteContent {
        background: #ffffff;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
        overflow: auto;
        max-height: 92vh;
    }

    .example {
        margin-left: 8px;
    }

    .codeText {
        font-family: Verdana;
        font-size: 10pt;
        color: rgb(255, 215, 103);
    }

    .codeTextWrapper {
        background: rgb(49, 51, 53);
        border-radius: 8px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

.collapseWrapper{
    background: #fff;
}
</style>
