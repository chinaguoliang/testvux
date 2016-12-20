<template>
    <div class="backgroundColor">
        <div>UserInfo</div>
      <div>receive Data:{{userName}}-{{userPassword}}</div>
    </div>
</template>
<style scoped>
    .backgroundColor{
        background-color:#ff0000;
    }
</style>
<script>
    export default{
        data(){
            return{
                userPassword:"",
                userName:""
            }
        },
        ready: function(){
          console.log('userName: ' + this.$route.params.userName);
          console.log('userPassword: ' + this.$route.params.userPassword);
          this.userName = this.$route.params.userName;
          this.userPassword = this.$route.params.userPassword;
        },
        components:{
        }
    }
</script>
