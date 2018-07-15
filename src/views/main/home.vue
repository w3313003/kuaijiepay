<template>
    <div class="home">
        <div class="workarea">
            <div class="content">
                <div class="notify">
                    <div class="img">
                        <img src="../../assets/img/notify.png" alt="">
                    </div>
                    <div class="text">
                        <p>666666666663123123123123123126666</p>
                    </div>
                </div>
                <div class="operatingArea">
                    <div class="top">
                        <div>
                            <img src="../../assets/img/tixian.png" alt="">
                            单笔最多可提现
                        </div>
                        <div class="btn">
                            提现攻略
                        </div>
                    </div>
                    <div class="money" ref="money">
                    </div>
                    <div class="feature">
                        <div class="item">
                            <img src="../../assets/img/qukuan.png" alt="">
                            <p>
                                2分钟快速取款
                            </p>
                        </div>
                        <div class="item">
                            <img src="../../assets/img/tuozhan.png" alt="">
                            <p>
                                拓展收益
                            </p>
                        </div>
                        <div class="item">
                            <img src="../../assets/img/feilv.png" alt="">
                            <p>
                                费率低至0.38%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cashbtn" @click="toWithDraw">
            <span>
                点 击 立 即 取 款
            </span>
        </div>
        <div class="entry">
            <img class="mainEntry" src="../../assets/img/index1.png" alt="">
            <div class="viceEntry">
                <img src="../../assets/img/index2.png" alt="">
                <img src="../../assets/img/index3.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import { Flip } from 'number-flip';
import { setTimeout } from 'timers';

@Component
export default class Home extends Vue {
    amount = 43432;
    mounted() {
        this.$nextTick(() => {
            const dom = this.$refs.money;
            new Flip({
                node: dom,
                from: 0,
                to: this.amount,
            })
        })
    }
    toWithDraw() {
        this.$router.push("/withdraw")
    }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/style/base";

.home
    padding-bottom 55px
    .cashbtn
        width 95%
        btn-bg()
    .workarea
        position relative
        background #8294ff
        color #fff
        padding 17px 0 38px
        position relative
        overflow hidden
        &:before
            position absolute
            width 200px
            height 200px
            content ''
            background #5572e4
            opacity .5
            border-radius 50%
            bottom 0
            transform translate(-50%,10%)
        &:after
            position absolute
            width 300px
            height 300px
            content ''
            background #82baff
            border-radius 50%
            top 0
            right 0
            transform translate(50%, -40%)
        .content
            width 95%
            margin auto
            overflow hidden
            position relative
            z-index 2
            .notify
                margin 0 5px
                background #ffffff
                box-sizing border-box
                height 43px
                border-radius 5px
                display flex
                padding 10px 0
                .img
                    flex 0 0 76px
                    border-right 1px solid #e7e7e7
                    display flex
                    align-items center
                    justify-content center
                    margin-right 15px
                    img 
                        display block
                        width 52.5px
                .text
                    flex 1
                    display flex
                    align-items center
                    p
                        width 90%
                        no-wrap()
                        color #8f8f8f
                        font-size 14px
            .operatingArea
                margin 37px 5px 0
                .top
                    display flex
                    align-items center
                    justify-content space-between
                    font-size 14px
                    img
                        width 18px
                        height 18px
                        vertical-align: bottom;
                    .btn
                        color #91a3ff
                        background #ffffff
                        border-radius 5px
                        padding 7px 10px
                .money
                    color #ffffff
                    font-size 36px
                    margin-top 10px
                    position relative
                    padding-left 25px
                    &:before
                        width 25px
                        height 25px
                        font-size 25px
                        color #fff
                        position absolute
                        bottom 5px
                        left 0
                        content "¥"
                        text-align center
                .feature
                    display flex
                    font-size 14px
                    height 45px
                    margin-top 25px
                    .item
                        flex 1
                        display flex
                        flex-direction column
                        justify-content space-between
                        p
                            margin 0
                        &:nth-child(1)
                            img 
                                width 28px
                                height 17.5px
                        &:nth-child(2)
                            img 
                                width 23px
                                height 15px
                        &:nth-child(3)
                            img 
                                width 20px
                                height 19px
    .entry
        width 95%
        margin: 20px auto;
        .mainEntry
            width 100%
            border-radius 20px
        .viceEntry
            display flex
            justify-content space-between
            margin-top 20px
            img 
                width 48%
                height 95px
                border-radius 10px

</style>
