<template>
    <div>
        <div>title Bar</div>
      <button v-on:click="addCount()">发送事件</button>
    </div>
</template>
<style>

</style>
<script>
import Bus from '../js/bus.js'

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
        },
        methods: {
          addCount:function(){
            Bus.$emit('loadSuccess', '添加成功！');
          }
        }

    }
</script>
