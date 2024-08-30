<template>
    <div>
        <div class="title">
            <van-button type="primary">主要按钮</van-button>
            <div>{{ time }}</div>
            <div>北京时间：{{ date }}</div>
        </div>
    </div>
</template>

<script setup>
console.log('loginview')
import { nextTick, onMounted, ref } from 'vue'
import { getServerTime } from '@/api'

const time = ref('')
const date = ref('')
const getTime = () => {
    getServerTime().then(res => {
        console.log('res', res)
        time.value = res.timestamp
        date.value = timestampToDate(time.value)
    }).catch(err => {
        console.log('err', err)
    })
}


// 方法一：使用Date对象和getTime方法
function timestampToDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


onMounted(() => {
    getTime()
})
</script>

<style>
.title {
    color: red;
    font-size: 12px;
}
</style>