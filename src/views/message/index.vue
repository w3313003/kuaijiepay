<template>
    <div class="message-wrap">
        <div class="item">
            <div class="inner">
                <div class="iconWrap">
                    <img src="../../assets/img/tz1.png" alt="">
                </div>
                <span>系统通知</span>
                <img src="../../assets/img/double_arrow.png" />
            </div>
        </div>
        <div class="item">
            <div class="inner">
                <div class="iconWrap">
                    <img src="../../assets/img/tz2.png" alt="">
                </div>
                <span>平台福利</span>
                <img src="../../assets/img/double_arrow.png" />
            </div>
        </div>
        <div class="item">
            <div class="inner">
                <div class="iconWrap">
                    <img src="../../assets/img/tz3.png" alt="">
                </div>
                <span>帐变通知</span>
                <img src="../../assets/img/double_arrow.png" />
            </div>
        </div>
        <div class="item">
            <div class="inner">
                <div class="iconWrap">
                    <img src="../../assets/img/tz4.png" alt="">
                </div>
                <span>新增用户通知</span>
                <img src="../../assets/img/double_arrow.png" />
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { Vue, Component} from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
import * as Types from "@/store/mutations/types";
import { setTimeout } from 'timers';

@Component
export default class extends Vue {
    @State("isLogin") isLogin !: boolean;
    @Mutation(Types.LOGIN) loginChange !: Function;
    created() {
        console.log(this.isLogin)
        setTimeout(() => {
            this.loginChange(true);
        }, 1000)
    }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/style/base"
.message-wrap
    padding 12px 15px 90px
    .item
        width 100%
        btn-bg()
        margin-top 15px
        padding 30px 0
        bGradient(#90abff, #9584ff, 90deg)
        &:before
            transform: translate(-40%, -75%);
        &:after
            transform: translate(-46%, 45%);
        div.inner
            display flex
            justify-content space-between
            align-items center
            padding 0 20px
            span 
                flex 1
                text-align left
                letter-spacing 1px
                padding-left 10px
            img 
                width 20px
                height 20px
            .iconWrap
                flex 0 0 42px
                height 42px
                background #fff
                border-radius 50%
                position relative
                z-index 2
                line-height 42px
                display flex
                align-items center
                justify-content center
                img
                    width 18px
                    height 18px
</style>
