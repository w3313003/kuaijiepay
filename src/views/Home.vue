<template>
  <div class="home">
    <img src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Button> 12313</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { Button } from 'vant';
import api from "@/api";

@Component({
    components: {
        HelloWorld,
        Button
    },
})
export default class Home extends Vue {
}
</script>
