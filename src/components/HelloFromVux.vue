<template>
  <div class="vux-demo">
    <img class="logo" src="../assets/vux_logo.png">
    <h1>{{ msg }}</h1>
  </div>
  <group title="cell demo">
    <cell title="Vux" value="Cool" is-link></cell>
  </group>

  <divider>Horizontal</divider>
  <flexbox style="height:40px;">
    <flexbox-item><div class="flex-demo">1</div></flexbox-item>
    <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    <flexbox-item><div class="flex-demo">3</div></flexbox-item>
  </flexbox>
  <divider>Vertical</divider>
  <flexbox orient="vertical" :margin-left=0>
    <flexbox-item><div class="flex-demo" style="margin-left:0">1</div></flexbox-item>
    <flexbox-item><div class="flex-demo" style="margin-left:0">2</div></flexbox-item>
    <flexbox-item><div class="flex-demo" style="margin-left:0">3</div></flexbox-item>
  </flexbox>
</template>

<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
 //引入组件
    import {Divider,FlexboxItem,Flexbox} from 'vux/src/components'

export default {
  components: {
    Group,
    Cell,
     Divider,FlexboxItem,Flexbox
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}

 .flex-demo {
      text-align: center;  /*文本居中显示*/
      color: #EEE;
      background-color: #0077FF;
      margin-bottom: 16px;
      border-radius: 6px; /*按钮的圆角弧度*/
      -webkit-background-clip: padding-box;
    }
</style>
