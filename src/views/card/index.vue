<template>
    <div class="cardwrap">
        <div class="list-wrap">
            <div class="item"
                v-for="(item, index) of mapBankName2Pinyin"
                :key="index"
                :class="item.namePinYin"
            >
                <p class="bankname">
                    <span class="logo">
                    </span>
                    {{item.bankname}}
                </p>
                <div class="cardNo">
                    <span>****</span>
                    <span>****</span>
                    <span>****</span>
                    <span>
                        {{item.tailNumber}}
                    </span>
                </div>
                <div class="mask">
                    <img class="bg-img" src="../../assets/img/card-mask.png" alt="">
                    <svg class="icon edit" aria-hidden="true">
                        <use xlink:href="#icon-lhq-close"></use>
                    </svg>
                </div>
            </div>
        </div>
        <div class="btn" @click="addCard">
            <span>
                + 添加银行卡
            </span>
        </div>
        <div class="block"></div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class extends Vue {
    cardList: Object[] = [
        {
            bankname: "农业银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "邮储银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "中国银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "民生银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "上海银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "平安银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "光大银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "交通银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "工商银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "中信银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "广发银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "华夏银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "招商银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "兴业银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "浦发银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "建设银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "北京银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "宁波银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "盛京银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "大连银行",
            cardNumber: '666666666666666666'
        },
        {
            bankname: "浙商银行",
            cardNumber: '666666666666666666'
        }
    ]
    created() {
        console.log(this.mapBankName2Pinyin)
    }
    get mapBankName2Pinyin() {
        return this.cardList.map((v: any) => {
            console.log(v);
            switch(v.bankname) {
                case "农业银行":
                    v.namePinYin = "nh";
                    break;
                case "邮储银行":
                    v.namePinYin = "yz";
                    break;
                case "中国银行":
                    v.namePinYin = "zg";
                    break;
                case "民生银行":
                    v.namePinYin = "ms";
                    break;
                case "上海银行":
                    v.namePinYin = "sh";
                    break;
                case "平安银行":
                    v.namePinYin = "pa";
                    break;
                case "光大银行":
                    v.namePinYin = "gd";
                    break;
                case "交通银行": 
                    v.namePinYin = "jt";
                    break;
                case "工商银行":
                    v.namePinYin = "gs";
                    break;
                case "中信银行":
                    v.namePinYin = "zx";
                    break;
                case "广发银行":
                    v.namePinYin = "gf";
                    break;
                case "华夏银行":
                    v.namePinYin = "hx";
                    break;
                case "招商银行":
                    v.namePinYin = "zs";
                    break;
                case "兴业银行":
                    v.namePinYin = "xy";
                    break;
                case "浦发银行":
                    v.namePinYin = "pf";
                    break;
                case "建设银行":
                    v.namePinYin = "js";
                    break;
                case "北京银行":
                    v.namePinYin = "bj";
                    break;
                case "宁波银行":
                    v.namePinYin = "nb";
                    break;
                case "盛京银行":
                    v.namePinYin = "sj";
                    break;
                case "大连银行":
                    v.namePinYin = "dl";
                    break;
                case "浙商银行":
                    v.namePinYin = "zheshang";
                    break;
                default:
                    v.namePinYin = "default";
            };
            v.tailNumber = v.cardNumber.slice(-4);
            return v;
        })
    }
    addCard() {
        this.$router.push({
            path: "/card/addCard"
        })
    }
} 

</script>

<style lang="stylus" scoped>
@import "../../assets/style/base";
.cardwrap
    padding 10px 15px
    box-sizing border-box
    .list-wrap
        padding-bottom 75px
        .item
            width 100%
            height 130px
            border-radius 10px
            padding 16px
            box-sizing border-box
            bGradient(#1C8ACF, #51C4A7, 130deg)
            margin-bottom 14px
            position relative
            overflow hidden
            &:last-child
                margin-bottom 0
            div.mask
                position absolute
                width 60px
                height 35px
                right 0
                bottom 0
                img.bg-img
                    width 100%
                    height 100%
                .edit
                    color #fff
                    position absolute 
                    left 80%
                    top 60%
                    transform translate(-50%, -50%)
            p
                margin 0
                font-size 18px
                color #fff
                display flex
                align-items center
                span.logo
                    width: 25px;
                    height: 25px;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right 7px
            .cardNo
                position absolute
                width 100%
                left 50%
                top 50%
                transform translate(-50%, -30%)
                display flex
                justify-content space-around
                color #fff
                font-size 20px
                padding 0 60px
                box-sizing border-box
                align-items center
                span 
                    display flex
                    height 25px
                    align-items center
            &.nh
                bGradient(#2fb487, #92d1b0, 130deg)
                span.logo
                    background-image url("../../assets/img/abchina.png")
                    background-size: 100% 100%;
            &.yz
                bGradient(#007e3e, #31d197, 130deg);
                span.logo
                    background-image url("../../assets/img/yz.png")
                    background-size: 100% 100%;
            &.zg
                bGradient(#b81c22, #ff8d60, 130deg);
                span.logo
                    background-image url("../../assets/img/boc.png")
                    background-size: 100% 100%;
            &.ms
                span.logo
                    background-image url("../../assets/img/cmbc.png")
                    background-size: 100% 100%;
            &.sh
                bGradient(#293c8f, #7447f3, 130deg);
                span.logo
                    background-image url("../../assets/img/bosc.png")
                    background-size: 100% 100%;
            &.pa
                bGradient(#d94a20, #ffa855, 130deg);
                span.logo
                    background-image url("../../assets/img/pingan.png")
                    background-size: 100% 100%;
            &.gd
                bGradient(#722d88, #7447f3, 130deg);
                span.logo
                    background-image url("../../assets/img/cebbank.png")
                    background-size: 100% 100%;
            &.jt
                bGradient(#2f317c, #5994ee, 130deg);
                span.logo
                    background-image url("../../assets/img/bankcomm.png")
                    background-size: 100% 100%;
            &.xy
                span.logo
                    background-image url("../../assets/img/cib.png")
                    background-size: 100% 100%;
            &.zheshang
                span.logo
                    background-image url("../../assets/img/czbank.png")
                    background-size: 100% 100%;
            &.js
                bGradient(#2f317c, #5994ee, 130deg);
                span.logo
                    background-image url("../../assets/img/ccb.png")
                    background-size: 100% 100%;
            &.zs
                bGradient(#b81c22, #ff8d60, 130deg);
                span.logo
                    background-image url("../../assets/img/cmbchina.png")
                    background-size: 100% 100%;
            &.sj
                span.logo
                    background-image url("../../assets/img/shengjingbank.png")
                    background-size: 100% 100%;
            &.dl
                span.logo
                    background-image url("../../assets/img/bankofdl.png")
                    background-size: 100% 100%;
            &.gs
                bGradient(#b81c22, #ff8d60, 130deg);
                span.logo
                    background-image url("../../assets/img/icbc.png")
                    background-size: 100% 100%;
            &.zx
                span.logo
                    background-image url("../../assets/img/citicbank.png")
                    background-size: 100% 100%;
            &.gf
                span.logo
                    background-image url("../../assets/img/cgbchina.png")
                    background-size: 100% 100%;
            &.hx
                bGradient(#b81c22, #ff8d60, 130deg);
                span.logo
                    background-image url("../../assets/img/hxb.png")
                    background-size: 100% 100%;
            &.bj
                span.logo
                    background-image url("../../assets/img/bankofbeijing.png")
                    background-size: 100% 100%;
            &.nb
                bGradient(#d94a20, #ffa855, 130deg);
                span.logo
                    background-image url("../../assets/img/nbcb.png")
                    background-size: 100% 100%;
            &.pf
                span.logo
                    background-image url("../../assets/img/spdb.png")
                    background-size: 100% 100%;
    .btn
        width 95%
        btn-bg()
        position fixed
        bottom 10px
        left 50%
        transform translateX(-50%)
        z-index 2
    .block
        width 100%
        height 40px
        background #fff
        position fixed
        bottom 0
        left 0
</style>
