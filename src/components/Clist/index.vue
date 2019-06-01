<template>
    <div class="cniema_body" id="content">
        <ul>
            <li v-for="item in cniemaList" :key="item.id">
                <div class="movie_info clearfix">
                    <span class="fl">{{item.nm}}</span>
                    <span class="fr"><em class="price">{{item.sellPrice}}元</em>起</span>
                </div>
                <div class="address">
                    <span>{{item.addr}}</span>
                    <span>{{item.distance}}</span>
                </div>
                <div class="card">
                    <div v-for="(num,key) in item.tag" :key="key" v-if="num ===1" :class="key | classToggle">{{key | formatCard}}</div>        
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Clist',
    data(){
        return{
            cniemaList:[]
        }
    },
    mounted(){
        this.axios.get('/api/cinemaList?cityId=10').then((res)=>{
            console.log(res);
            if(res.data.msg==='ok'){
                this.cniemaList=res.data.data.cinemas;
            }
        })
    },
    filters:{
        formatCard(key){
            var card=[
                {key:"allowRefund",value:"改签"},
                {key:"buyout",value:"退票"},
                {key:"cityCardTag",value:"城市服务"},
                {key:"deal",value:"可停车"},
                {key:"endorse",value:"签名"},
                {key:"hallTypeVOList",value:"4D"},
                {key:"sell",value:"特惠"},
                {key:"snack",value:"观影小食"},
                {key:"vipTag",value:"折扣卡"}
            ];
            for(var i=0;i<card.length;i++){
                if(card[i].key === key){
                    return card[i].value;
                }
            }
            return '';
        },
        classToggle(key){
            var card=[
                {key:"allowRefund",value:"bl"},
                {key:"buyout",value:"bl"},
                {key:"cityCardTag",value:"or"},
                {key:"deal",value:"kd"},
                {key:"endorse",value:"kd"},
                {key:"hallTypeVOList",value:"or"},
                {key:"sell",value:"or"},
                {key:"snack",value:"kd"},
                {key:"vipTag",value:"or"}
            ];
            for(var i=0;i<card.length;i++){
                if(card[i].key === key){
                    return card[i].value;
                }
            }
            return '';
        }
    }
}
</script>

<style scoped>
.cniema_body ul li{
    border-bottom: 1px dashed #ccc;
    padding: 10px;
}
.cniema_body ul li>div span{
    display: block;
    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 8px;
}
.movie_info span:nth-child(2){
    width: 20%;
}
.price{
    font-style: normal;
    color:#ff4d64;
}
.cniema_body ul .address span{
    color: #666;
    font-size: 12px;
}
.cniema_body ul .card div{
    border-radius: 5px;
    margin-right: 10px;
    display: inline-block;
    font-size: 12px;
    padding: 2px;
    margin-top: 8px;
}
.cniema_body ul .card div.bl{
    border:1px solid #349cec;
    color:#349cec;
}
.cniema_body ul .card div.or{
    border:1px solid #f90;
    color:#f90;
}
.cniema_body ul .card div.kd{
    border:1px solid #ff4d64;
    color:#ff4d64;
}
</style>
