<template>
    <div id="main">
        <Header title="喵喵影院"/>
        <div class="cniema_menu clearfix">
            <div class="city_switch">全城</div>
            <div class="brand_switch">品牌</div>
            <div class="feature_switch">特色</div>
        </div>
        <Clist/>
        <TabBar/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import Clist from '@/components/Clist';
export default {
    name:'Cniema',
    components:{
        Header,
        TabBar,
        Clist
    }
}
</script>

<style scoped>
.cniema_menu{
    border-bottom: 1px solid #ccc;
    display: flex;
}
.cniema_menu>div{
    flex: 1 1 auto;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    text-align: center;
    padding: 10px 0;
}
.cniema_menu>div:after{
    content: "";
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #333;
    display: inline-block;
    vertical-align: middle;
    margin: 10px;

}
</style>
