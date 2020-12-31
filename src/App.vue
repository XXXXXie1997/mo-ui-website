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
                    <mo-col span="20"></mo-col>
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
                                <p class="linkWrapper">
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
                                <p class="linkWrapper">
                                    <router-link to="toast">toast-弹出提示框</router-link>
                                </p>
                            </mo-collapse-item>
                        </mo-collapse>
                    </div>

                </mo-sider>
                <mo-layout class="contentArea">
                    <mo-content class="websiteContent">
                        <div class="templateWrapper">
                            <router-view/>
                        </div>
                    </mo-content>
                </mo-layout>
            </mo-layout>
        </mo-layout>
        <div class="githubLink">
            <a href="https://github.com/XXXXXie1997/Mo-UI-Demo1">
                <img src="./logo/github.png" style="max-width: 1.2em;max-height: 1.2em">GitHub
            </a>
        </div>
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
      return {selectedTab: ['1','2']}
    }
  }
</script>

<style>
    #app {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 16px;
    }

    a {
        font-size: 14px;
        color: #111;
        text-decoration: none;

    }

    .linkWrapper {
        padding: 0 12px 8px;

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
        background: rgb(245, 246, 247);
    }

    .sider {
        min-width: 30vh;
        background: rgb(248, 249, 249);
        font-size: 18px;
    }

    .header {
        min-height: 8vh;
        background: rgb(64, 187, 198);
        border-bottom: 2px solid rgb(22,78,82);
    }

    .websiteContent {
        background: rgb(245, 246, 247);
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 40px;
        overflow: auto;
        max-height: 92vh;
        width: 100%;
        scrollbar-width: none;

    }


    .example {
        margin-left: 8px;
    }

    .codeText {
        font-family: Verdana, serif;
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

    *::-webkit-scrollbar {
        width: 0 !important;
    }

    .collapseWrapper {
        background: #fff;
    }

    .githubLink {
        position: absolute;
        right: 0;
        top: 0;
        margin: 5px;
        background: #fff;
        border: 1px solid rgb(60, 63, 65);
        border-radius: 6px;
        padding: 2px;
    }

</style>
