<template>
    <div class="city_body">
        <div class="city_tit">
            <div class="inner">
                <h1>选择城市</h1>
                <router-link tag="p" to="/movie" class="close">X</router-link>
            </div>
        </div>
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li v-for="item in hotList" :key="item.id">{{item.nm}}</li>
                </ul>
            </div>
            <div class="city_sort" ref="city_sort">
                <div v-for=" item in cityList" :key="item.index">
                    <h2>{{item.index}}</h2>
                    <ul class="clearfix">
                        <li v-for="city in item.list" :key="city.id">{{city.nm}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="city_index">
            <ul class="clearfix">
                <li>热门</li>
                <li v-for="(item,index) in cityList" :key="item.index" @touchstart="handleToIndex(index)">
                    {{item.index}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'City',
    data(){
        return{
            cityList:[],
            hotList:[]
        }
    },
    //在生命周期中用mounted代理数据
    mounted () {
        this.axios.get('/api/cityList').then((res)=>{
            var cities=res.data.data.cities;
            if(res.data.msg==='ok'){
                var {cityList,hotList}=this.formCityList(cities);
                // cityList[index:A,list:[{nm:'安溪',id:cities[i].id,py:cities[i].py}]]
                // hotList[id:1,nm:'北京',py:'beijing',isHot:1];
                this.cityList=cityList;
                this.hotList=hotList;
            }
        })
    },
    methods:{
        formCityList(cities){
            // cityList所有城市 hotList热门城市
            var cityList=[];
            var hotList=[];

            //检索所有城市并按索引排序 start
            for(var i=0;i<cities.length;i++){
                var firstLetter=cities[i].py.substring(0,1).toUpperCase();
                if(toCom(firstLetter)){//添加新索引
                    cityList.push({index:firstLetter,list:[{nm:cities[i].nm,id:cities[i].id}]});
                }else{//添加到已有索引
                    for(var j=0;j<cityList.length;j++){
                        if(cityList[j].index===firstLetter){
                            cityList[j].list.push({nm:cities[i].nm,id:cities[i].id})
                        }
                    }
                }
            }
            cityList.sort((n1,n2)=>{
                if(n1.index > n2.index){
                    return 1;
                }else if(n1.index <n2 .index){
                    return -1;
                }else{
                    return 0;
                }
            })
            function toCom(firstLetter){
                for(var i=0;i<cityList.length;i++){
                    if(cityList[i].index === firstLetter){
                        return false;
                    }
                }
                return true;
            }
            //  console.log(cityList)
            //检索所有城市并按索引排序 end

            //获得热门城市 start
            for(var i=0;i<cities.length;i++){
                var hot=cities[i].isHot;
                if(hot===1){
                    // console.log(cities[i].nm)
                    hotList.push(cities[i]);
                }
            }
            //  console.log(hotList)
            //获得热门城市 end
            return{
                cityList,
                hotList
            };
        },
        // 点击索引跳转
        handleToIndex(index){
            var h2=this.$refs.city_sort.getElementsByTagName('h2');
            this.$refs.city_sort.parentNode.scrollTop=h2[index].offsetTop; 
            console.log(this.$refs.city_sort.parentNode.scrollTop);
        }
        
    }
}
</script>

<style scoped>
.city_body{
    position: absolute;
    top:0;
    bottom:0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 100;
    overflow-y: scroll;
}
.city_tit{
    border-bottom: 1px solid #e9e9e9;
    width: 100%;
    height: 45px;
    background: #fff;
    color: #000;
    font-size: 16px;
    line-height: 45px;
    text-align: center;
    position: fixed;
    top: 0;
    z-index: 110;
}
.city_tit .inner{
    position: relative;
}
.city_tit .close{
    position: absolute;
    top:0;
    right:10px;
    line-height: 45px;
}
.city_tit h1{
    font-weight: bold;
}
.city_list{
    padding-top: 45px;
}
.city_list h2{
    padding: 9px 12px;
    background: #eee;
    color: #777;
    font-size: 12px;
    font-weight: 400;
}
.city_list ul{
    padding: 0 0 0 15px;
    color: #777;
}
.city_list ul li{
    padding: 12px 12px 12px 0;
    overflow: hidden;
    font-size: 15px;
}
.city_index{
    position: fixed;
    right: 10px;
    top:50%;
    transform: translateY(-50%);
}
.city_index li{
    height: 20px;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #349cec;
}
</style>
