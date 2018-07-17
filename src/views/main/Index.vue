<template>
    <div class="wrap">
        <router-view />
        <div class="dashBoard">
            <router-link to="/home" class="item">
                <div class="icon">
                </div>
                首页
            </router-link>
            <router-link to="/team" class="item">
                <div class="icon">
                </div>
                团队
            </router-link>
            <router-link to="/withdraw" class="item">
                 <div class="inner">
                     <img src="../../assets/img/withdraw.png" alt="">
                 </div>
            </router-link>
            <router-link :to="{ path: '/message'}" class="item">
                <div class="icon">
                </div>
                消息
            </router-link>
            <router-link to="/my" class="item">
                <div class="icon">
                </div>
                我的
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
    name: string = "213"
}
</script>

<style lang="stylus" scoped>
@import "../../assets/style/base";
.dashBoard
    height 50px
    width 100%
    position fixed
    bottom 0
    display flex
    border-top 1px solid #e7e7e7
    font-size 14px
    background #fff
    z-index 99
    .item
        flex 1
        text-align center
        color #bdbdbd
        text-decoration none
        &.router-link-active
            color $textColor
        div.icon
            width 19px
            height 19px
            margin 5px auto
        &:nth-child(1)
            div.icon
                background url("../../assets/img/index.png")
                background-size cover
                width 22px
            &.router-link-active
                div.icon
                    background url("../../assets/img/index_active.png")
                    background-size cover
        &:nth-child(2)
            div.icon
                background url("../../assets/img/team.png")
                background-size cover
            &.router-link-active
                div.icon
                    background url("../../assets/img/team_active.png")
                    background-size cover
        &:nth-child(4)
            div.icon
                width 19px
                height 19px
                background url("../../assets/img/message.png")
                background-size cover
            &.router-link-active
                div.icon
                    background url("../../assets/img/message_active.png")
                    background-size cover
        &:nth-child(5)
            div.icon
                width 17.5px
                height 18.5px
                background url("../../assets/img/my.png")
                background-size cover
            &.router-link-active
                div.icon
                    background url("../../assets/img/my_active.png")
                    background-size cover
        &:nth-child(3)
            .inner
                border-radius 50%
                width 60px
                height 60px
                display flex
                margin auto
                align-items center
                justify-content center
                transform translateY(-20px)
                bGradient(#8FB0FF, #9583FF, 180deg)
                img
                    width 25.5px
                    height 24px
                    display inline-block
.test
    color #9584ff
    background-image: linear-gradient(36deg, #17522E 0%, #2893A2 60%, #FFCB16 100%)
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
</style>
