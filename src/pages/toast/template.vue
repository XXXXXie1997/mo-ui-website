<template>
    <div class="toastTemplate">
        <h1>Toast-弹出提示框组件</h1>
        <br>
        <h2>可用选项</h2>
        <br>
        <p>1. zIndex</p>
        <p>>该选项用于设置弹出框在当前层叠上下文中的位置。</p>
        <br>
        <p>2. autoClose</p>
        <p>>该选项用于设置弹出框是否会自动关闭以及弹出框显示的时长（单位：s），默认为5s后关闭。</p>
        <br>
        <p>3. closeButton</p>
        <p>>该选项接受一个对象，包括text（弹出框右侧关闭按钮的内容）与callback（支持传入回调）属性，默认text为“我知道了”。</p>
        <br>
        <p>4. position</p>
        <p>>该选项用于设置弹出框在页面中跳出的位置，可接受top,middle,bottom三个值,默认为top。</p>
        <br>

        <hr>
        <br>
        <h2>使用方式举例</h2>
        <br>
        <h3>预览：</h3>
        <div class="toastWrapper">
            <mo-button @click="xxx">toast从顶部弹出</mo-button>
            <br>
            <mo-button @click="middle">toast从中间弹出</mo-button>
            <br>
            <mo-button @click="bottom">toast从底部弹出</mo-button>
        </div>
        <br>
        <p>>首个toast修改了部分选项，其他两个除position选项外均为默认。</p>
        <h3>代码：</h3>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content1}}</code></pre>
        </div>
        <br>
        <p>>因为toast无法直接通过标签使用，关于该组件的所有内容都在script部分的methods中：</p>
        <div class="codeTextWrapper">
            <pre><code class="codeText">{{content2}}</code></pre>
        </div>
        <br>
    </div>
</template>

<script lang='js'>
    import Vue from 'vue'
import {Button,Toast,Plugin} from 'mo-ui-beta'
    Vue.use(Plugin)

    export default {
      components:{
        'mo-button':Button,
        //eslint-disable-next-line
        'mo-toast':Toast,
      },
      methods:{
        xxx(){
          this.$toast('我是toast内容',
            {autoClose:5 ,zIndex:30,closeButton:{text:'已阅',callback:()=>{console.log('我是回调')}}}
          )
        },
          bottom(){
      this.$toast('我是 toast 内容', { position: 'bottom' })
    },
    middle(){
      this.$toast('我是 toast 内容', { position: 'middle' })
    },
      },
      data(){
        return{
          content1:`
              <div class="toastWrapper">
                  <mo-button @click="xxx">toast从顶部弹出</mo-button>
                  <mo-button @click="middle">toast从中间弹出</mo-button>
                  <mo-button @click="bottom">toast从底部弹出</mo-button>
              </div>
            `,
          content2:`
            import Vue from 'vue'
            import {Button,Toast,Plugin} from 'mo-ui-beta'
            Vue.use(Plugin)

            export default {
                components:{
                    'mo-button':Button,
                    'mo-toast':Toast,
                },
                methods:{
                    xxx(){
                        this.$toast('toast内容',
                            {autoClose:5 ,zIndex:30,closeButton:{text:'已阅',callback:()=>{console.log('我是回调')}}}
                        )
                    },
                    bottom(){
                        this.$toast('我是 toast 内容', { position: 'bottom' })
                    },
                    middle(){
                        this.$toast('我是 toast 内容', { position: 'middle' })
                    },
                },
            }
          `,
        }
      }
    }
</script>

<style lang='scss' scoped>

</style>
