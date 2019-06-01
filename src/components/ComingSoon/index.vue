<template>
    <div class="m-nowshowing">
        <div class="m-item clearfix" v-for="item in comingList" :key="item.id">   
            <div class="pic-show"><img :src="item.img | setWH('120.180')" alt=""></div>
            <div class="info_list">
                <h2 class="clearfix"><em>{{item.nm}}</em><img src="/img/imaxs.png" v-if="item.version!=''"></h2>
                <p>点映评分<span class="grade">{{item.sc}}</span></p>
                <p>主演：{{item.star}}</p>
                <p>{{item.showInfo}}</p>
            </div>
            <div class="btn_mall">预售</div>
        </div>
    </div> 
</template>

<script>
export default {
    name:'ComingSoon',
    data(){
        return {
            comingList:[]
        }
    },
    mounted(){
        this.axios.get('/api//movieComingList?cityId=10').then((res)=>{
            if(res.data.msg==='ok'){
                this.comingList=res.data.data.comingList;
            }
        })
    }
}
</script>

<style scoped>
.m-item {
    position: relative;
    background: #fff;
    padding-left: .9375rem;
    padding-left: 4vw;
    margin-top: 16px;
}
.m-nowshowing .pic-show{
    width: 17.3vw;
    height: 25.3vw;
    float: left;
}
.m-nowshowing .pic-show img{
    display: block;
    width: 100%;
}
.m-nowshowing .info_list{
    padding-left: 2.7vw;
    padding-right: 2.7vw;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    overflow: hidden;
}
.m-nowshowing .info_list h2 em{
    color: #000;
    font-weight: 500;
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    max-width: 70%;
    font-size: 16px;
    font-style: normal;
    float: left;
}
.m-nowshowing .info_list h2 img{
    width: 20%;
    margin: 4px 0 4px 10px;
    float:left;
}
.m-nowshowing .info_list p{
    color: #777;
    font-size: 13px;
    margin-top: 6px;
    width: 56vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.m-nowshowing .info_list p .grade{
    color: #fea54c;
    font-size: 14px;
    margin-left: 6px;
}
.m-nowshowing .btn_mall{
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    color: #fff;
    background: lightseagreen;
    height: 28px;
    line-height: 28px;
    padding: 0 13px;
    font-size: 12px;
    border-radius: 120px;
    position: absolute;
    top: 50%;
    right: 4vw;
    transform: translateY(-50%);
}
</style>
