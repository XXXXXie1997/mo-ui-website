<template>
  <div id="app">
<mo-layout class="layout">
  <mo-sider class="sider">sider</mo-sider>
  <mo-layout>
    <mo-header class="header">header</mo-header>
    <mo-content class="content">
      <router-view/>
    </mo-content>
    <mo-footer class="footer">footer</mo-footer>
  </mo-layout>
</mo-layout>
  </div>
</template>

<script>
import {Layout,Sider,Header,Footer,Content} from 'mo-ui-beta'
import 'mo-ui-beta/dist/index.css'

export default {
  name: 'App',
  components: {
    'mo-layout':Layout,
    'mo-sider':Sider,
    'mo-header':Header,
    'mo-footer':Footer,
    'mo-content':Content,
  }
}
</script>

<style>
#app {

}
.layout {
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

.footer {
  min-height: 5vh;
  background: #cccccc;
}
.content{
  background: #ffffff;
}
</style>
