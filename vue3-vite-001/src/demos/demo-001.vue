<template>
    <input type="text" v-model="msg">
    <br>
    {{msg}}
    <br>
    <button @click="changeMsg">按钮</button>
</template>

<script setup>
import {ref} from 'vue'

let msg = ref("Hello World")
// let msg = "Hello World"

function changeMsg() {
    msg.value = "Hello World"
}

</script>


