<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps (
    {
        delay: Number,
        play : Boolean,
        appFunction: Function,
    }
)

let showBlock = ref(false);
let count = ref(0);
let yes = ref(null);
let showResult = ref(false);




onMounted(() => {
    console.log(`delay in block: ${props.delay}`);
    setTimeout(() => {
        showBlock.value = true;
        startTime();
    }, props.delay); 
});
const fun=()=>{
    showBlock.value=false;
    stopTime();
    props.appFunction( count);
}
const startTime = () => {
    yes = setInterval(() => {
        count.value++;
    }, 10);
}
const stopTime = () => {
    clearInterval(yes);
    console.log(count.value);
    showResult.value = true;
}


</script>

<template>
    <div v-if="showBlock==true" @click="fun">
        <h1>hello world {{ delay }}</h1>
    </div>
    
</template>