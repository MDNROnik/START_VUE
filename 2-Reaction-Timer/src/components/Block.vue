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


onMounted(() => {
    console.log(`delay in block: ${props.delay}`);
    
    setTimeout(() => {
        showBlock.value = true;
    }, props.delay);
});
const fun=()=>{
    showBlock.value=false;
    console.log("clicked");
    props.appFunction();
}

</script>

<template>
    <div v-if="showBlock==true" @click="fun">
        <h1>hello world {{ delay }}</h1>
    </div>
</template>