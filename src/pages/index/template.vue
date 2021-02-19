<template>
    <div class="indexTemplate">
        <p>该页面本来应该是主页，但一想到这个UI除了自己没人会用，于是决定不做了。</p>
        <br>
        <p>故还请直接移步->
        <mo-button><a href="http://xietianyu1997.top/mo-ui-website/#/start" class="link">快速上手</a></mo-button>
        </p>
        <br>
        <p>或者随便点点看吧  ^  - ^</p>
    </div>

</template>

<script lang='js'>
    import {Button} from 'mo-ui-beta'
    export default {
      components:{
       'mo-button':Button
      }
    }
</script>

<style lang='scss' scoped>
    .indexTemplate{
        font-size: 20px;
    }
.link{
    font-size: 20px;
}
</style>
