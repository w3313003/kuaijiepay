<template>
    <div class="form-wrap">
        <div class="form">
            <div class="title">
                基本信息
            </div>
            <div class="filed">
                <div class="label">
                    姓名：
                </div>
                <div class="input-wrap">
                    <input type="text" placeholder="请输入持卡人姓名" />
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
                    银行卡号：
                </div>
                <div class="input-wrap">
                    <input type="text" placeholder="请输入银行卡号" />
                </div>
            </div>
            <div class="filed">
                <div class="label">
                    预留号码：
                </div>
                <div class="input-wrap">
                    <input type="text" placeholder="请输入银行预留手机号" />
                </div>
            </div>
        </div>
        <div class="btn">
            <span>
                确 认 绑 定
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
    </div>
</template>

<script lang="ts">
import { Popup, Picker } from "vant";

import { Vue, Component } from "vue-property-decorator";

@Component({
    components: {
        Popup, 
        Picker
    }
})
export default class extends Vue {
    showBankPicker: boolean = false;
    bankList: object[] = [
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
            ]

    selectBank() {

    }
}

</script>

<style lang="stylus" scoped>
@import "../../assets/style/base";
.form-wrap
    box-sizing border-box
    padding 15px
    .form
        width 100%
        padding 0 12px
        border-radius 10px
        box-sizing border-box
        box-shadow 0 0 10px #e5e5e5
        .title
            padding 14px 0 14px 10px
            color $textColor
            font-size 18px
            position relative
            border-bottom 1px solid #e5e5e5
            &:before
                position absolute 
                content ""
                background $textColor
                left 0
                top 50%
                width 2px 
                height 20px
                transform translateY(-50%)
        .filed
            padding 15px 0
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
            .banktip
                color #a7a7a7
    .btn
        btn-bg()
        margin-top 20px
        padding 18px 0
</style>
