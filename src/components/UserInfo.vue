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
  import VueResource from 'vue-resource';
  import Vue from 'vue';
  Vue.use(VueResource);

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

          this.$http.get("http://localhost:8081/attendance/getAllLocation").then(
            function (res) {
                // 处理成功的结果
                alert("success");
                 console.log("requestMsg:" + JSON.stringify(res.body));
            },function (res) {
            // 处理失败的结果
                alert("failed");
              console.log("requestMsg:" + res);
            }
          );
        },
        components:{
        }
    }
</script>
