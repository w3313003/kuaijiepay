<template>
    <div class="teamWrap">
        <div class="bg"></div>
        <img class="curve" src="../../assets/img/curve.png" alt="">
        <div class="datawrap">
            <div class="box">
                <div class="item">
                    <div class="top">
                        <img src="../../assets/img/renshu.png" alt="">
                        <span>
                            团队人数
                        </span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-wenhao"></use>
                        </svg>
                    </div>
                    <div class="count">
                        55555<span>人</span>
                    </div>
                </div>
                <div class="item">
                    <div class="top">
                        <img src="../../assets/img/shouru.png" alt="">
                        <span>
                            团队收入
                        </span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-wenhao"></use>
                        </svg>
                    </div>
                    <div class="count">
                        55555<span>元</span>
                    </div>
                </div>
            </div>
            <div class="new_member">
                <div class="title">今日新增</div>
                <div class="count">
                    <span>23</span>
                    人</div>
            </div>
        </div>
        <div class="tableWrap">
            <div class="top">
                <div class="title">
                    团队报表
                </div>
                <div>
                    查看用户认证状态
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-arrow-down"></use>
                    </svg>
                </div>
            </div>
            <div class="content">
                <div class="btn" @click="to('agent')">
                    <div>
                        <span>我的代理商</span>
                        <img src="../../assets/img/double_arrow.png" />
                    </div>
                </div>
                <div class="btn"  @click="to('member')">
                    <div>
                        <span>我的一级用户</span>
                        <img src="../../assets/img/double_arrow.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        to(router) {
            this.$router.push({
                path: `/team/${router}`
            })
        },
    }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/style/base";
.teamWrap
    padding 10px 15px
    box-sizing border-box
    padding-bottom 90px
    .bg
        height 300px
        btn-bg()
        margin-top 0
        border-radius 0
        position fixed
        width 100%
        z-index -1
        top 0
        left 0
        &:before
            transform translate(20%, -60%)
            width 600px
            height 600px
        &:after
            width 200px
            height 200px
            transform translate(-40%, 40%)
    .datawrap
        position relative
        height 300px
        padding 22px 0
        z-index 2

        .box
            width 100%
            padding 25px 5px
            display flex
            background-color #fff
            border-radius 10px
            box-sizing border-box
            box-shadow 0 0 10px #e5e5e5
            display flex
            .item
                flex 1
                .top
                    display flex
                    align-items center
                    justify-content center
                    box-sizing border-box
                    color #888
                    img 
                        width 22px
                        height 18px
                    span 
                        margin 0 3px
                    .icon 
                        font-size 16px
                .count
                    font-size 22px
                    color #666666
                    text-align center
                    margin-top 15px
                    span
                        font-size 15px
        .new_member
            color #fff
            margin-top 25px
            font-size 18px
            span 
                font-size 26px
            div
                margin-top 10px
    .tableWrap
        margin-top 15px
        padding 0 13px 
        box-shadow 0 0 10px #d5d5d5
        box-sizing border-box
        border-radius 10px
        background #fff
        position relative
        z-index 2
        .top
            display flex
            justify-content space-between
            padding 14px
            border-bottom 1px solid #e5e5e5
            color #777
            .title
                position relative
                color $textColor
                padding-left 10px
                &:before
                    content ''
                    height 100%
                    background $textColor
                    width 2px
                    position absolute
                    left 0
                    top 0
        .content
            padding-bottom 15px
            .btn
                width 100%
                btn-bg()
                margin-top 15px
                padding 30px 0
                &:before
                    transform: translate(-40%, -75%);
                &:after
                    transform: translate(-46%, 45%);
                div
                    display flex
                    justify-content space-between
                    align-items center
                    padding 0 20px
                    span 
                        letter-spacing 1px
                    img 
                        width 20px
                        height 20px
    .curve
        position fixed
        top 180px
        left 0
        width 100%  
</style>
