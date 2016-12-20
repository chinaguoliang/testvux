<template>
    <div>
        <div>Account</div>
      <a v-link="{name:'userInfo',params:{userName:'xiaohutushen',userPassword:666666}}">Go to UserInfo</a>
      <a>receiveData:{{accountId}},{{password}}</a>
    </div>
</template>
<style scoped>
    body{
    }
</style>
<script>
    export default{
        data(){
            return{
                accountId:"",
                password:""
            }
        },
        ready: function(){
          console.log('accountId: ' + this.$route.params.accountId);
          console.log('password: ' + this.$route.params.password);
          this.accountId = this.$route.params.accountId;
          this.password = this.$route.params.password;
        }
        ,
        components:{
        }
    }
</script>
