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
                    <mo-col span="12"></mo-col>
                    <mo-col span="8">还没想好要放什么</mo-col>
                </mo-row>
            </mo-header>
            <mo-layout>
                <mo-sider class="sider">
                    <div class="collapseWrapper">
                        <mo-collapse class="collapse" :selected.sync="selectedTab">
                            <mo-collapse-item title="入门" name="1">
                                <p class="linkWrapper">
                                    <router-link to="install">安装</router-link>
                                </p>
                                <p class="lastLinkWrapper">
                                    <router-link to="start">快速上手</router-link>
                                </p>
                            </mo-collapse-item>
                            <mo-collapse-item title="组件" name="2">
                                <p class="linkWrapper">
                                    <router-link to="button">button-按键</router-link>
                                </p>
                                <p class="linkWrapper">
                                    <router-link to="collapse">collapse-折叠面板</router-link>
                                </p>
                                <p class="linkWrapper">
                                    <router-link to="grid">grid-栅格工具</router-link>
                                </p>
                                <p class="linkWrapper">
                                    <router-link to="input">input-输入框</router-link>
                                </p>
                                <p class="linkWrapper">
                                    <router-link to="layout">layout-默认布局</router-link>
                                </p>
                                <p class="linkWrapper">
                                    <router-link to="popover">popover-弹出层</router-link>
                                </p>
                                <p class="linkWrapper">
                                    <router-link to="tabs">tabs-标签页</router-link>
                                </p>
                                <p class="lastLinkWrapper">
                                    <router-link to="toast">toast-弹出提示框</router-link>
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
        font-family: "Times New Roman", Georgia, serif;
        font-size: 16px;
    }

    a {
        font-size: 14px;
        color: #111;
        text-decoration: none;
    }

    .linkWrapper {
        padding-bottom: 20px;
        padding-left: 8px;
    }
    .lastLinkWrapper{
        padding-left: 8px;
    }

    a:hover {
        color: rgb(68, 190, 201);
    }

    .router-link-active {
        color: rgb(63, 180, 191);
        font-weight: bold;
    }


    .websiteLayout {
        min-width: 100vh;
        min-height: 100vh;
        background: #eee;
    }

    .sider {
        min-width: 30vh;
        background: rgb(248, 249, 249);
        font-size: 18px;
    }

    .header {
        min-height: 8vh;
        background: rgb(67, 189, 200);
    }

    .websiteContent {
        background: rgb(245, 246, 247);
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
        font-family: Verdana,serif;
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

    .collapseWrapper {
        background: #fff;
    }


</style>
