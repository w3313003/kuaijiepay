<template>
    <div class="listwrap">
        <div class="round">

        </div>
        <div class="item">
            <div class="title">
                <span>
                    todaoA
                </span>
                <svg  class="icon" aria-hidden="true">
                    <use xlink:href="#icon-arrow-down"></use>
                </svg>
            </div>
            <div class="content">
                <div class="line">
                    <div class="iconWrap">
                        <svg  class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jinbi"></use>
                        </svg>
                    </div>
                    <div class="text">
                        额度:2000元～5000元
                    </div>
                </div>
                <div class="line">
                    <div class="iconWrap">
                        <svg  class="icon" aria-hidden="true">
                            <use xlink:href="#icon-qianbao"></use>
                        </svg>
                    </div>
                    <div class="text">
                        额度:2000元～5000元
                    </div>
                </div>
                <div class="line">
                    <div class="iconWrap">
                        <svg  class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gantanhao"></use>
                        </svg>
                    </div>
                    <div class="text">
                        额度:2000元～5000元
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="title">
                <div>
                    通道状态
                </div>
                <div>
                    查看限额
                    <svg  class="icon" aria-hidden="true">
                        <use xlink:href="#icon-arrow-down"></use>
                    </svg>
                </div>
            </div>
            <div class="list-wrap">
                <div class="list-item" v-for="(item, index) of bankList" :key="index">
                    <div class="bankname">
                        {{item.bankName}}
                    </div>
                    <div class="status" :class="{'full': item.isfull !== 0}">
                        {{item.isfull === 0 ? "额度不足" : "额度充足"}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

export default class extends Vue {
    bankList: Object[] = [
        {
            bankName: "平安银行",
            isfull: 0
        },
        {
            bankName: "平安银行",
            isfull: 1
        },
        {
            bankName: "平安银行",
            isfull: 0
        },
        {
            bankName: "平安银行",
            isfull: 0
        },
        {
            bankName: "平安银行",
            isfull: 0
        },{
            bankName: "平安银行",
            isfull: 0
        },
        {
            bankName: "平安银行",
            isfull: 1
        },
        {
            bankName: "平安银行",
            isfull: 0
        },
        {
            bankName: "平安银行",
            isfull: 0
        },
        {
            bankName: "平安银行",
            isfull: 0
        },{
            bankName: "平安银行",
            isfull: 0
        },
        {
            bankName: "平安银行",
            isfull: 1
        },
        {
            bankName: "平安银行",
            isfull: 0
        },
        {
            bankName: "平安银行",
            isfull: 0
        },
        {
            bankName: "平安银行",
            isfull: 0
        },{
            bankName: "平安银行",
            isfull: 0
        },
        {
            bankName: "平安银行",
            isfull: 1
        },
        {
            bankName: "平安银行",
            isfull: 0
        },
        {
            bankName: "平安银行",
            isfull: 0
        },
        {
            bankName: "平安银行",
            isfull: 0
        },
    ]
}

</script>

<style lang="stylus" scoped>
@import "../../assets/style/base.styl"
.listwrap
    min-height 100vh
    padding 15px 15px 0
    bGradient(#7c99ff, #9483ff, 180deg)
    box-sizing border-box
    position relative
    &:before
        content ""
        position fixed
        width 400px
        height 400px
        background #83aaff
        z-index 0
        border-radius 50%
        bottom 0
        left 0
        transform translate(-50%, 15%)
    &:after
        content ""
        position fixed
        width 200px
        height 200px
        background #5d72c2
        z-index 0
        border-radius 50%
        top 40px
        right 0
        transform translateX(50%)
    .round
        position fixed
        width 300px
        height 300px
        background #718bf0
        z-index 0
        border-radius 50%
        opacity .7
        bottom 0
        left 0
        transform translateX(50%)
    .item
        width 100%
        position relative
        z-index 2
        box-sizing border-box
        padding 0 12px 
        color #000
        border-radius 10px
        box-shadow 0 0 10px #c2c2c2
        background #Fff
        .title
            display flex
            align-items center
            justify-content space-between
            padding 12px 0
            color #636363
            font-size 16px
            border-bottom 1px solid #e5e5e5
        .content
            padding 12px 0
            .line
                display flex
                font-size 14px
                margin-bottom 5px
                align-items center
                &:last-child
                    margin-bottom 0
                .iconWrap
                    bGradient(#8fafff, #9583ff, 180deg)
                    border-radius 50%
                    flex 0 0 20px
                    height 20px
                    display flex
                    align-items center
                    justify-content center
                    margin-right 3px
                    .icon
                        font-size 12px
                        color #fff
                .text
                    flex 1
                    padding-left 10px
                    box-sizing border-box
                    no-wrap()
                    color #636363
    .content
        position relative
        z-index 2
        .title
            display flex
            color #fff
            justify-content space-between
            padding 25px 0
            font-size 14px
        .list-wrap
            display flex
            flex-wrap wrap
            justify-content space-between
            .list-item
                flex 0 0 47.5%
                overflow hidden
                margin-right 2%
                margin-bottom 10px
                font-size 14px
                justify-content space-around
                display flex
                color #fff
                border-radius 10px
                border 1px solid #fff
                box-sizing border-box
                padding 15px
                position relative
                &:before
                    content ""
                    position absolute
                    width 100%
                    height 100%
                    left 0 
                    top 0
                    background #Fff
                    opacity .2
                // background #9ba7ff
                .bankname
                    no-wrap()
                .status
                    no-wrap()
                    color #d14b4b
                    &.full
                        color #585cff
                &:nth-child(2n)
                    margin-right 0

</style>
