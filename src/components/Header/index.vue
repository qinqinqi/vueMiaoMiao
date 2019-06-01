<template>
    <header id="header">
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    name:'Header',
    props: {
        title:{
            type:String,
            default:"喵喵电影"
        }
    },
}
</script>

<style scoped>
#header{width: 100%;height: 7vh;text-align: center;background: #ff4d64;color:#fff;font-size: 12px;line-height: 7vh;}
</style>
