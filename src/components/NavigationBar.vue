<template>
    <div>
        <div>Navigation Bar ---> responseEvent:{{msg}}</div>
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
        ready(){
         Bus.$on('loadSuccess', text => {
          if (text) {
            this.msg = text;
          }
    })
  }
    }
</script>
