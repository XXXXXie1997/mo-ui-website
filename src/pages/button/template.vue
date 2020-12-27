<template>
    <div class="button">
        <h1>button组件</h1>
        <h3>预览：</h3>
        <mo-button icon="settings">默认按键</mo-button>
        <h3>代码：</h3>
        <textarea name="" id="" cols="80vh" rows="20vh">
            <pre><code>
                        <mo-button icon="settings">默认按键</mo-button>

            </code></pre>
        </textarea>
        <h1>button group 按键组</h1>
        <div>预览：</div>
        <mo-button-group>
            <mo-button>1</mo-button>
            <mo-button>2</mo-button>
            <mo-button>3</mo-button>
        </mo-button-group>

    </div>
</template>

<script lang='js'>
    import {Button,ButtonGroup} from 'mo-ui-beta'

    export default {
      components:{
        'mo-button':Button,
        'mo-button-group':ButtonGroup,
      }
    }
</script>

<style lang='scss' scoped>

</style>
