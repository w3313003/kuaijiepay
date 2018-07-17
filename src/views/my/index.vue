<template>
    <div class="my-wrap">
        <div class="bg"></div>
        <div class="userinfo">
            <img src="../../assets/img/avatar.png" alt="" class="avatar" />
            <div class="info">
                <div class="nickname">
                    测试测试 
                    <span>
                        会员
                    </span>
                </div>
                <div class="mobile">
                    15666552222
                </div>
            </div>
        </div>
        <div class="box">
            <div class="ball">
                提现
            </div>
            <div class="item">
                <div style="border-right:1px solid #e5e5e5">
                    <div class="title">
                        余额(元)
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-wenhao"></use>
                        </svg>
                    </div>
                    <div class="money">
                        555555
                    </div>
                </div>
            </div>
            <div class="item">
                <div>
                    <div class="title">
                        可提现余额(元)
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-wenhao"></use>
                        </svg>
                    </div>
                     <div class="money">
                        555555
                    </div>
                </div>
            </div>
        </div>
        <div class="navWrap first">
            <router-link tag="div" to="/auth" class="item">
                <div class="icon-wrap">
                    <img class="icons" src="../../assets/img/rz_icon.png" alt="">
                </div>
                <span>认证信息</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-arrow-down"></use>
                </svg>
            </router-link>
            <router-link tag="div" to="/card" class="item">
                <div class="icon-wrap">
                    <img class="icons" src="../../assets/img/xyk_icon.png" alt="">
                </div>
                <span>信用卡管理</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-arrow-down"></use>
                </svg>
            </router-link>
            <router-link tag="div" to="/card/settlementCard" class="item">
                <div class="icon-wrap">
                    <img class="icons" src="../../assets/img/jsk_icon.png" alt="">
                </div>
                <span>结算卡管理</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-arrow-down"></use>
                </svg>
            </router-link>
        </div>
        <div class="navWrap second">
            <router-link tag="div" to="/record/transaction" class="item">
                <div class="icon-wrap">
                    <img class="icons" src="../../assets/img/jt_icon.png" alt="">
                </div>
                <span>交易提现记录</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-arrow-down"></use>
                </svg>
            </router-link>
            <router-link tag="div" to="/record/commission" class="item">
                <div class="icon-wrap">
                    <img class="icons" src="../../assets/img/yt_icon.png" alt="">
                </div>
                <span>佣金提现记录</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-arrow-down"></use>
                </svg>
            </router-link>
            <router-link to="/record/personal" tag="div" class="item">
                <div class="icon-wrap">
                    <img class="icons" src="../../assets/img/gt_icon.png" alt="">
                </div>
                <span>个人交易记录</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-arrow-down"></use>
                </svg>
            </router-link>
            <router-link to="/record/card_commission" tag="div" class="item">
                <div class="icon-wrap">
                    <img class="icons" src="../../assets/img/sf_icon.png" alt="">
                </div>
                <span>刷卡返佣记录</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-arrow-down"></use>
                </svg>
            </router-link>
        </div>
        <div class="navWrap second">
            <router-link tag="div" to="/channelList" class="item">
                <div class="icon-wrap">
                    <img class="icons" src="../../assets/img/td_icon.png" alt="">
                </div>
                <span>通道介绍</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-arrow-down"></use>
                </svg>
            </router-link>
            <router-link tag="div" to="/spread" class="item">
                <div class="icon-wrap">
                    <img class="icons" src="../../assets/img/tg_icon.png" alt="">
                </div>
                <span>推广中心</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-arrow-down"></use>
                </svg>
            </router-link>
            <router-link tag="div" to="/message" class="item message">
                <div class="icon-wrap">
                    <img class="icons" src="../../assets/img/xx_icon.png" alt="">
                </div>
                <span>平台消息</span>
                <div class="badge">
                    2
                </div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-arrow-down"></use>
                </svg>
            </router-link>
        </div>
        <div class="recommand">
            我的推荐人：1231231231阿斯顿
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class extends Vue {
    
}
</script>

<style lang="stylus" scoped>
@import "../../assets/style/base";
.my-wrap
    padding 15px 15px 90px
    .message
        position relative
        .badge
            width 20px
            height 20px
            text-align center
            line-height 20px
            font-size 14px
            position absolute
            right 0
            top 50%
            border-radius 50%
            background #ff6767
            color #fff
            transform translate(-20px, -50%)
    .bg
        height 130px
        btn-bg()
        margin-top 0
        border-radius 0
        position fixed
        width 100%
        z-index -1
        top 0
        left 0
        &:before
            transform translate(130%, -60%)
        &:after
            transform translate(-40%, 40%)
    .userinfo
        display flex
        img.avatar
            flex 0 0 77px
            height 77px
            border-radius 50%
        .info
            flex 1
            padding 7px 0
            padding-left 10px
            box-sizing border-box
            color #fff
            font-size 18px
            display flex
            flex-direction column
            justify-content space-around
            letter-spacing 1px
            .nickname
                display flex
                align-items center
            span 
                padding 5px 10px
                margin-left 10px
                font-size 14px
                background #fff
                color $textColor
                border-radius 10px
    .box
        display flex
        box-sizing border-box
        box-shadow 0 0 10px #adacac
        background #fff
        border-radius 10px
        margin-top 30px
        position relative
        div.item
            flex 1
            padding 28px 25px 20px
            padding-right 0
            .title
                font-size 14px
                color #888888
            .money
                font-size 23px
                margin-top 12px
        .ball
            position absolute
            right 20px
            font-size 14px
            bottom 0
            width 43px
            height 43px
            color #fff
            bGradient(#7c99ff, #9484ff, 180deg)
            text-align center
            line-height 43px
            border-radius 50%
            transform translate(0%, 50%)
            box-shadow 0 0 5px #fff
    .navWrap
        padding 0 12px
        background #fff
        border-radius 10px
        box-sizing border-box
        box-shadow 0 0 10px #adacac;
        margin-top 15px
        .item
            padding 16px 0
            border-bottom 1px solid #e5e5e5
            display flex
            color #555555
            align-items center
            &:last-child
                border-bottom 0
            span 
                flex 1
                padding-left 10px
                color #555555
            .icon
                color #555555
                font-size 18px
            .icon-wrap
                flex 0 0 30px
                display flex
                justify-content center
                align-items center
        &.first
            margin-top 45px
            .icons
                flex 0 0 24.5px
                height 19.5px
        &.second
            .icons
                flex 0 0 20px
                height 20px
    .recommand
        background #fff
        border-radius 10px
        box-sizing border-box
        box-shadow 0 0 10px #adacac;
        height 60px
        line-height 60px
        text-align center
        margin-top 25px
        color #555555
        font-size 14px
</style>
