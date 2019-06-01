<template>
    <div class="login">
        <div class="login_logo"><img src="img/m1.jpg" alt=""></div>
        <div class="login_form">
            <input type="text" class="user" placeholder="请输入您的用户名">
            <input type="text" class="pass" placeholder="请输入您的密码">
        </div> 
        <div class="login_info clearfix">
            <div class="forget fl">忘记密码</div>
            <div class="sogin fr">立即注册</div>
        </div>    
    </div>
</template>

<script>
export default {
    name:'Login'
}
</script>

<style>
.login_logo img{
    display: block;;
    overflow: hidden;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 20vw auto 10vw;
}
.login_form input{
    display: block;
    width: 80%;
    height: 40px;
    margin: 15px auto 0;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 0 10px;;
}
.login_info{
     width: 80%;
     margin: 15px auto 0;
}
.login_info>div{
    color:#666;
    text-decoration: underline;
    font-size: 14px;
}
</style>
