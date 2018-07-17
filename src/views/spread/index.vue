<template>
    <div class="sWrap">
        <div class="item">
            <img class="post" src="../../assets/img/index1.png" alt="">
            <div class="text">
                <div class="left">
                    <div class="title">
                        12312312
                    </div>
                    <div class="labelwrap">
                        <div class="label">
                            鸡汤
                        </div>
                    </div>
                </div>
                <div class="right">
                    立即获取
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-arrow-down"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

export default class extends Vue {

}
</script>

<style lang="stylus" scoped>
@import "../../assets/style/base";
.sWrap
    padding 15px
    box-sizing border-box
    .item
        border-bottom 1px solid #e5e5e5
        padding 20px 0
        &:first-child
            padding-top 0
        &:last-child
            border-bottom 0
        .post
            width 100%
            height 133px
            border-radius 10px
        .text
            display flex
            margin-top 15px
            align-items center
            .title
                color $textColor
                padding-left 10px
                position relative
                &:before
                    position absolute
                    left 0 
                    top 0
                    content ''
                    height 100%
                    width 2px
                    background $textColor
            .labelwrap
                margin-top 15px
                display flex
                flex-wrap wrap
                .label
                    padding  10px 15px 10px 20px
                    background-image url("../../assets/img/label.png")
                    background-size 100% 100%
                    color #797979
        .left
            flex 1
        .right
            flex 0 0 90px
            height 32px
            color #fff
            bGradient(#7c99ff, #9583ff, 180deg)
            font-size 14px
            border-radius 5px
            text-align center
            line-height 32px
</style>
