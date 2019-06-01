<template>
    <div id="tab-bar-wrapper">   
        <ul class="tab-bar">          
            <router-link tag="li" to="/movie">       
                <span role="icon">&#xe6af;</span>       
                <span role="name">热映</span>            
            </router-link>          
            <router-link tag="li" to="/cniema">       
                <span role="icon">&#xe69a;</span>       
                <span role="name" style="color: ;">影院</span>            
            </router-link>          
            <router-link tag="li" to="/mine">       
                <span role="icon">&#xe65a;</span>       
                <span role="name" style="color: ;">我的</span>            
            </router-link>        
        </ul> 
    </div>
</template>

<script>
export default {
    name:'tabBar'
};
</script>

<style scoped>
#tab-bar-wrapper {
    z-index: 99;
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff -webkit-linear-gradient(top,#ededed,#ededed 50%,transparent 0,transparent 0) 0 0 repeat-x;
    background: #fff linear-gradient(180deg,#ededed,#ededed 50%,transparent 0,transparent 0) 0 0 repeat-x;
    background-size: 100% 1px;
    background-color: hsla(0,0%,100%,.98);
}
#tab-bar-wrapper .tab-bar {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    box-sizing: border-box;
    padding: 1.9vw 0;
}
#tab-bar-wrapper li {
    display: block;
    position: relative;
    text-align: center;
    color: #777;
}
#tab-bar-wrapper .tab-bar li {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}
#tab-bar-wrapper span {
    display: block;
}
#tab-bar-wrapper span[role=icon] {
    display: block;
    height: 5.9vw;
    margin: 0 auto;
    font-family: 'iconfont';
    font-size: 22px;
}
#tab-bar-wrapper li.router-link-active span{
    color: #ff4d64;
}

</style>
