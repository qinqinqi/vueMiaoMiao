<template>
    <div id="main">
        <Header />
        <div id="content">     
            <div class="tpp-hdr clearfix">
                <div class="city fl">
                    <router-link tag="div" to="/movie/City" class="current-city">
                        <div class="city-name">上海</div>
                    </router-link>
                </div>
                <div class="tab fl">
                    <ul role="tablist">
                        <router-link tag="li" to="/movie/NowPlaying">
                            <div class="content">正在热映</div>
                        </router-link>
                        <router-link tag="li" to="/movie/ComingSoon">
                            <div class="content">即将上映</div>
                        </router-link>
                        <router-link tag="li" to="/movie/Search">
                            <div class="search">&#xe60d;</div>
                        </router-link>
                    </ul>
                </div>
            </div>
            <keep-alive>
                <router-view/>
                <NowPlaying/>
            </keep-alive>   
        </div>  
        <TabBar/>  
    </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import NowPlaying from '@/components/NowPlaying';
export default {
    name:'Movie',
    components:{
        Header,
        TabBar,
        NowPlaying
    },
}
</script>

<style scoped>
.tpp-hdr{padding: 10px 0;}
.tpp-hdr .city{
    width: 30%;
    display: inline-block;
    vertical-align: top;
    font-size: 0;
    margin-left: 10px;
}
.tpp-hdr .city-name{
    margin-right: 10px;
    position: relative;
    font-size: 14px;
    font-weight: bold;
}
.tpp-hdr .city-name:after {
    content: "";
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #333;
    display: block;
    position: absolute;
    left: 10vw;
    top:0;
    bottom: 0;
    margin: auto 0; 
}
.tpp-hdr .tab {
    text-align: center;
    display: inline-block;
    vertical-align: top;
    word-spacing: 0;
}
.tpp-hdr .tab ul{
    position: relative;
    overflow: hidden;
}
.tpp-hdr .tab li {
    display: block;
    float: left;
    padding: 0 .9375rem;
    padding: 0 4vw;
}
.tpp-hdr .tab li .content {
    font-size: 1rem;
    color: #777;
    text-align: center;
}
.tpp-hdr .tab li.router-link-active>div {
    font-weight: 700;
    color: #ff4d64;
}
.tpp-hdr .tab li .search{
    font-family: 'iconfont';
    font-size: 20px;
}
</style>
