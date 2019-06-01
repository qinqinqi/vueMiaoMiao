<template>
    <div clss="main">
        <div class="search_body padd">
            <div class="search_input">
                <i>&#xe60d;</i>
                <input type="text" placeholder="输入电影名称" v-model="message">
            </div>
        </div>
        <div class="m-nowshowing">
            <div class="m-item clearfix" v-for="item in searchList" :key="item.id">   
                <div class="pic-show"><img :src="item.img | setWH('130.180')" alt=""></div>
                <div class="info_list">
                    <h2>{{item.nm}}</h2>
                    <p>{{item.star}}</p>
                    <p>{{item.cat}}</p>
                    <p>{{item.rt}}</p>
                </div>
                <div class="grade_text">{{item.sc}}分</div>
            </div>
        </div> 
    </div>
    
</template>

<script>
export default {
    name:'Search',
    data(){
        return{
            message:'',
            searchList:[]
        }
    },
    watch : {
        message(newVal){
            // axios请求频繁时取消上一次请求,防抖
            var that=this;
            // 取消上一次请求
            this.cancelRequest();
            this.axios.get('/api/searchList?cityId=10&kw='+newVal,{
                cancelToken: new this.axios.CancelToken((c)=> {
                    that.source = c;
                })
            }).then((res)=>{
                console.log(res)
                var msg=res.data.msg;
                var movies=res.data.data.movies;
                if(msg && movies){
                    this.searchList=res.data.data.movies.list;
                }
            }).catch((err) =>{
                if (this.axios.isCancel(err)) {
                    console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
                } else {
                    //handle error
                    console.log(err);
                }
            })
        }
    },
    methods:{
        cancelRequest(){
            if(typeof this.source ==='function'){
                this.source('终止请求')
            }
        },
    }
}
</script>

<style scoped>
.search_input i{
    font-family: 'iconfont';font-style: normal;position: absolute;margin: 5px;
}
.search_input input{
    display: block;border: 1px solid #ccc;border-radius: 5px;
    width: 100%;height: 30px;padding: 0 10px 0 30px;margin-bottom: 20px;
}
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
.m-nowshowing .info_list h2{
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
    max-width: 100%;
    font-size: 16px;
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
.m-nowshowing .grade_text{
    color: #fea54c;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    height: 28px;
    line-height: 28px;
    padding: 0 13px;
    font-size: 14px;
    position: absolute;
    top: 10px;
    right: 4vw;
}
</style>
