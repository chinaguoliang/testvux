<template>

  <divider>{{msg}}</divider>
  <title-bar></title-bar>
  <divider>a</divider>
  <navigation-bar></navigation-bar>
  <divider>b</divider>

  <scroller lock-x scrollbar-y use-pulldown @pulldown:loading="load" enable-horizontal-swiping height="300px">
    <div class="box2">
      <swiper :list="list" direction="horizontal" auto :min-moving-distance="20" height="300px"></swiper>
    </div>
  </scroller>

  <div>
    <cell title="Vux" value="Cool" is-link></cell>
    <cell title="A" value="B" is-link></cell>
    <cell title="C" value="D" is-link></cell>
  </div>


  <divider>Horizontal</divider>
  <flexbox style="width:100%;align-items:center;">
    <flexbox-item>
      <div class="flex-demo" v-link="{name:'account',params:{accountId:'xingyuji',password:123456}}">Go to account</div>
    </flexbox-item>
  </flexbox>
  <flexbox style="height:40px;">
    <flexbox-item>
      <div class="flex-demo">1</div>
    </flexbox-item>
    <flexbox-item>
      <div class="flex-demo">2</div>
    </flexbox-item>

  </flexbox>
  <divider>Vertical</divider>
  <flexbox orient="vertical" :margin-left=0>
    <flexbox-item>
      <div class="flex-demo" style="margin-left:0">1</div>
    </flexbox-item>
    <flexbox-item>
      <div class="flex-demo" style="margin-left:0">2</div>
    </flexbox-item>
    <flexbox-item>
      <div class="flex-demo" style="margin-left:0">3</div>
    </flexbox-item>
  </flexbox>


</template>

<script>
import Vue from 'vue'
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import { Scroller, Swiper } from 'vux/src/components'
import TitleBar from '../components/TitleBar'
import NavigationBar from '../components/NavigationBar'
import Bus from '../js/bus.js'

 //引入组件
import {Divider,FlexboxItem,Flexbox} from 'vux/src/components'


export default {
  components: {
    Group,
    Cell,
     Divider,FlexboxItem,Flexbox,
     Scroller,
    Swiper,
    TitleBar,
    NavigationBar
  },
  methods: {
    load (uuid) {
      const _this = this
      setTimeout(function () {
        _this.$broadcast('pulldown:reset', uuid)
      }, 2000)
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      list: [{
        url: 'http://www.baidu.com',
        img: 'http://pic.90sjimg.com/back_pic/qk/back_origin_pic/00/02/90/741f84aab6a1834641f571922f406116.jpg',
        title: '如何手制一份秋意的茶？'
      }, {
        url: 'http://www.baidu.com',
        img: 'http://pic.90sjimg.com/back_pic/u/00/04/28/87/55ed40935d4ac.jpg',
        title: '茶包VS原叶茶'
      }, {
        url: 'http://www.baidu.com',
        img: 'http://img15.3lian.com/2015/h1/258/d/52.jpg',
        title: '播下茶籽，明春可发芽？'
      }]
    }
  },
  ready(){
     Bus.$on('loadSuccess', text => {
      if (text) {
        this.msg = text;
      }
    })
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
