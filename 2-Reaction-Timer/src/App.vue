<script setup>
import { ref } from "vue";
import Block from "./components/Block.vue";
import Result from "./components/Result.vue";

let play = ref(false);
let delay = ref(null);
const playTheGame = () => {
  play.value = true;
  delay.value = 2000 + Math.random() * 5000;
  console.log("delay", delay.value);
};
let showResult = ref(false);
let delayOfClick = ref(0);

const appFunction = (count) => {
  console.log("resetting the button from block",  count.value);
  showResult.value = true;
  delayOfClick.value = count.value;
  play.value = false;
  delay.value = null;
  console.log(showResult.value);
  
};
const stopResultShow = ()=>{
  console.log("STOP SHOW RESULT");
  
  showResult.value=false;
}
</script>

<template>
  <div class="flex items-center justify-center pt-25">
    <div>
      <h1>START A BASIC PROJECT FOR LEARNING</h1>
      <button class="pb-8"  @click="playTheGame"  :disabled="play">
        <div v-if="play==false" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">PLAY NOW</div>
        <div v-else class="bg-blue-200 text-white font-bold py-2 px-4 rounded-full">PLAY NOW</div>
        <!-- <div>PLAY NOW</div> -->
      </button>
      
      <Block class="box-border size-70 border-4 p-20 text-center bg-green-500 text-white" v-if="play==true" :delay="delay" :appFunction="appFunction" />

      <Result class="box-border size-70 border-4 p-20 text-center bg-sky-500 text-white" v-if="showResult==true" :count="delayOfClick" @click="stopResultShow"/>
    
    </div>
  </div>
</template>

<style scoped></style>