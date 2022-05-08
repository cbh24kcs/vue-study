<script setup>
import {ref} from 'vue'

let msg = ref('Hello World')

function click() {
    msg.value = '你好啊'
    console.log(msg);
}

</script>

<template>
    <button @click="click">切换</button>
    {{msg}}
</template>

