<template>
    <div class="mask">
        <!-- <img class="seal" src="../../assets/img/check_success.png" /> -->
        <!-- <img class="seal" src="../../assets/img/check_waiting.png" /> -->
        <div class="messagebox">
            <div class="title">
                <div class="iconWrap">
                    <svg  class="icon" aria-hidden="true">
                        <use xlink:href="#icon-gantanhao"></use>
                    </svg>
                </div>
                认证失败
            </div>
            <div class="reason">
                您的身份证与您填写的 身份证号不匹配
            </div>
            <div class="btn">
                <span>
                    重新填写
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        status: Number,
        default: 0
    },
}
</script>

<style lang="stylus" scoped>
@import "../assets/style/base.styl"

.mask
    width 100%
    height 100%
    position fixed
    background rgba(0,0,0,.6)
    z-index 10
    .seal
        display block
        position fixed
        bottom 140px
        right 30px
        width 153px
        height 132px
    .messagebox
        width 290px
        margin auto
        background #fff
        padding 0 20px 15px
        box-sizing border-box
        border-radius 10px
        transform translateY(55vw)
        .title
            padding 24px 0
            border-bottom 1px solid #e5e5e5
            display flex
            justify-content center
            align-items center
            font-size 18px
            color $textColor
            .iconWrap
                bGradient(#8fafff, #9583ff, 180deg)
                border-radius 50%
                flex 0 0 22px
                height 22px
                display flex
                align-items center
                justify-content center
                margin-right 3px
                .icon
                    font-size 14px
                    color #fff
        .reason
            padding 20px 40px
            line-height 22px
            text-align center
            box-sizing border-box
            color #949494
        .btn
            width 200px
            btn-bg()
            padding 17px 0
            margin-top 0
            &:before
                transform: translate(-35%, -80%);
            &:after
                transform: translate(-26%, 70%);
</style>
