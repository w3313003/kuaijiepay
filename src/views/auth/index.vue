<template>
    <div class="auth-wrap">
        <div class="step">
            <div :class="{'active' : index < 2}" class="item" v-for="(item, index) in step" :key="item">
                <div class="icons"></div>
                <div class="text">
                    {{item}}
                </div>
            </div>
        </div>
        <div class="content-warp">
            <div class="infoWrap" v-if="stepNumber === 0">
                <div class="tips">
                    <div class="iconWrap">
                        <svg  class="icon" aria-hidden="true">
                            <use xlink:href="#icon-gantanhao"></use>
                        </svg>
                    </div>
                    <span>
                        请输入您的真实姓名，实名认证成功后将不可修改
                    </span>
                </div>
                <div class="infoBox">
                    <div class="title">
                        基本信息填写
                    </div>
                    <div class="filed">
                        <div class="label">
                            姓名：
                        </div>
                        <div class="input-wrap">
                            <input type="text" placeholder="请输入姓名" />
                        </div>
                    </div>
                    <div class="filed">
                        <div class="label">
                            手机号码：
                        </div>
                        <div class="input-wrap">
                            <input type="text" placeholder="请输入您的手机号码" />
                        </div>
                    </div>
                    <div class="filed">
                        <div class="label">
                            身份证号：
                        </div>
                        <div class="input-wrap">
                            <input type="text" placeholder="请输入您的身份证号" />
                        </div>
                    </div>
                </div>
                <div class="infoBox">
                    <div class="title">
                        银行卡信息填写
                    </div>
                    <div class="filed">
                        <div class="label">
                            银行卡号：
                        </div>
                        <div class="input-wrap">
                            <input type="text" placeholder="请输入结算银行卡号" />
                        </div>
                    </div>
                    <div class="filed">
                        <div class="label">
                            开户银行：
                        </div>
                        <div class="input-wrap">
                            <div class="selectwrap" @click="showBankPicker = true">
                                <span class="banktip">点击选择开户银行</span>
                                <img src="../../assets/img/select.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="filed">
                        <div class="label">
                            开户地址：
                        </div>
                        <div class="input-wrap">
                            <div class="selectwrap" >
                                <span class="banktip">点击选择开户地址</span>
                                <img src="../../assets/img/select.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="idWrap" v-if="stepNumber === 1">
                <div class="step_1">
                    <div class="title">
                        证件上传
                    </div>
                </div>
            </div>
        </div>
        <div class="cashbtn">
            <span>
                下一步
            </span>
        </div>
        <Popup v-model="showBankPicker" position="bottom">
            <Picker
                show-toolbar
                title="选择开户银行"
                :columns="bankList"
                @confirm="selectBank"
            />
        </Popup>
    </div>
</template>

<script lang="ts">
import { Popup, Picker } from "vant";
export default {
    components: {
        Popup, 
        Picker
    },
    data() {
        return {
            step: ["填写信息", "上传证件", "等待审核", "实名成功"],
            bankList: [
                {
                    text: "平安银行",
                    value: 1
                },
                {
                    text: "平安银行",
                    value: 2
                },
                {
                    text: "平安银行",
                    value: 3
                }
            ],
            stepNumber: 0,
            showBankPicker: false
        }
    },
    methods: {
        selectBank() {
            console.log(arguments);
            this.showBankPicker = false;
        }
    }
}

</script>

<style lang="stylus" scoped>
@import "../../assets/style/base.styl";
.banktip
    color #a7a7a7

.auth-wrap
    height 100vh
    overflow hidden
    display flex
    flex-direction column
    .cashbtn
        width 95%
        btn-bg()
        margin 15px auto
    .step
        flex 0 0 95px
        width 100%
        btn-bg()
        margin-top 0
        border-radius 0
        padding 0 15px
        box-sizing border-box
        justify-content space-between
        display flex
        margin-bottom 15px
        &:after
            position absolute
            left 0
            right 0
            transform translate(200%, -60%)
        &:before
            transform translate(-40%, 15%)
        .item
            position relative
            z-index 2
            display flex
            flex-direction column
            justify-content space-around
            align-items center
            padding 20px 0
            font-size 14px
            &:after
                content ""
                position absolute
                width 100%
                height 2px 
                right 0
                top 32px
                transform translateX(90%)
                background-color #fff
            &:last-child
                &:after
                    width 0
                    height 0
            .icons
                width 16px
                height 16px
                box-sizing border-box
                background #fff
                border-radius 50%
                position relative
                z-index 2
                &:before
                    content ""
                    opacity .3
                    border-radius 50%
                    width 22px
                    height 22px
                    position absolute
                    left 50%
                    top 50%
                    background #fff
                    transform translate(-50%,-50%)
            &.active
                color #7246ff
                &:after
                    background #7246ff
                .icons
                    background #7246ff
                    &:before
                        background #7246ff
    .content-warp
        flex 1
        overflow-y scroll
        width 95%
        margin auto
        box-sizing border-box
        padding 0 13px
        .title
            position relative
            padding 12px 0
            padding-left 10px
            color $textColor
            border-bottom 1px solid #e5e5e5
            &:before
                position absolute
                content ""
                width 2px 
                height 18px
                left 0
                background $textColor
        // 证件上传
        .idWrap
            border-radius 10px
            box-shadow 0 0 10px #ababab
        // 基本信息
        .infoWrap
            .tips
                display flex
                padding 13px
                border-radius 10px
                box-shadow 0 0 10px #ccc9c9
                font-size 14px
                align-items center
                margin-top 2px
                margin-bottom 15px
                color $textColor
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
            .infoBox
                padding  0 13px
                border-radius 10px
                box-shadow 0 0 10px #ccc9c9
                margin-top 25px
                .filed
                    padding 12px 0
                    display flex
                    font-size 16px
                    color #555
                    align-items center
                    border-bottom 1px solid #e5e5e5
                    &:last-child
                        border-bottom 0
                    .label
                        flex 0 0 80px
                    .input-wrap
                        flex 1
                        box-sizing border-box
                        padding 0 10px
                        input 
                            outline none
                        input::placeholder
                            color #a7a7a7
                            font-size 16px
                        .selectwrap
                            display flex
                            justify-content space-between
                            align-items center
                            img
                                width 16px
                                height 8px
@media screen and (max-width: 320px)
    .item
        &:after
            width 65%!important
</style>
