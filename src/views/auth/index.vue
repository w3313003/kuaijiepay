<template>
    <div class="auth-wrap">
        <div class="step">
            <div :class="{'active' : index <= stepNumber}" class="item" v-for="(item, index) in step" :key="item">
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
                            <div class="selectwrap" @click="showAreaPicker = true">
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
                    <div class="id_content">
                        <div class="item">
                            <div>
                                <img src="../../assets/img/idcrad1.png" alt="" class="bg">
                                <img src="../../assets/img/camera.png" class="camera" alt="">
                            </div>
                            <p class="desc">
                                身份证正面照片
                            </p>
                        </div>
                        <div class="item" >
                            <div v-if="idCard2">
                                <img class="bg selected" :src="idCard2" alt="" >
                                <svg @click="clearImg(2)" class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-lhq-close"></use>
                                </svg>
                            </div>
                            <div v-else>
                                <img src="../../assets/img/idcrad1.png" alt="" class="bg">
                                <div class="camera" >
                                    <Uploader :after-read="onRead" accept="image/*">
                                        <img src="../../assets/img/camera.png" alt="">
                                    </Uploader>
                                </div>
                            </div>
                            <p class="desc">
                                身份证反面照片
                            </p>
                        </div>
                        <div class="item">
                            <div>
                                <img src="../../assets/img/idcrad1.png" alt="" class="bg">
                                <img src="../../assets/img/camera.png" class="camera" alt="">
                            </div>
                            <p class="desc">
                                同时手持身份证和银行卡照片
                            </p>
                        </div>
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
                @cancel="showBankPicker = false"
            />
        </Popup>
        <Popup v-model="showAreaPicker" position="bottom">
            <Area
                show-toolbar
                title="选择地区"
                :area-list="area"
                @confirm="selectArea"
                @cancel="showAreaPicker = false"
            />
        </Popup>
        <Check-status 
            v-if="false"
            :status="status"
        />
    </div>
</template>

<script lang="ts">
import { Popup, Picker, Area, Uploader } from "vant";
import CheckStatus from "@/components/auth_status.vue";
import area from "../../common//area";
import api from "@/api";
import { setTimeout } from 'timers';
export default {
    components: {
        Popup, 
        Picker,
        Area,
        Uploader,
        CheckStatus
    },
    data() {
        return {
            step: ["填写信息", "上传证件", "等待审核", "实名成功"],
            area: area,
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
            stepNumber: 1,
            showBankPicker: false,
            showAreaPicker: false,
            idCard1: "",
            idCard2: "",
            idCard3: "",
            status: 1
        }
    },
    methods: {
        selectBank(value: any, index: number) {
            this.showBankPicker = false;
        },
        selectArea(columnsNum: any) {
            console.log(columnsNum);
            this.showAreaPicker = false;
        },
        onRead(file: any) {
            console.log(file);
            const formData = new FormData();
                formData.append("file", file, "files");
            api.post("/", formData).then(res => {
                console.log(res);
            })
            this.idCard2 = file.content;
        },
        clearImg(index: number) {
            const key = `idCard${index}`;
            (this as any)[key] = "";
        },
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
            &:before
                content ""
                position absolute
                width 100%
                height 2px 
                left 0
                top 32px
                transform translateX(-90%)
                background-color #fff
            &:first-child
                &:before
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
                &:before
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
            padding 0 12px
            margin 5px 0 15px
            .id_content
                padding 15px 0
                .item
                    width 200px
                    margin auto
                    position relative
                    margin-bottom 15px
                    svg.icon
                        position absolute
                        right 0
                        top 0
                        transform translate(50%, -50%)
                        color #eb5555
                    img.bg
                        width 100%
                        height 120px
                        display block
                        &.selected
                            border-radius 10px
                            box-shadow 0 0 5px #7e67fb;
                    .camera
                        width 55px
                        height 55px
                        position absolute
                        left 50%
                        top 0
                        transform translate(-50%, 30px)
                        overflow hidden
                        img
                            width 100%
                            height 100%
                    .desc
                        text-align center
                        margin 0
                        font-size 14px
                        margin-top 5px 
                
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
                margin-bottom 25px
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
