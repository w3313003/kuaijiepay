<template>
    <div class="wrap">
        <div class="bg"></div>
        <div class="inputBoxWrap">
            <div class="tips">
                请输入取款金额
            </div>
            <div class="money">
                <div class="amount">
                    {{amountMoney}}
                </div>
                <svg @click="clear" class="icon" aria-hidden="true">
                    <use xlink:href="#icon-searchclose"></use>
                </svg>
            </div>
            <div class="commission">
                预计返佣：<span>500</span>元
            </div>
        </div>
        <div class="keyBoard">
            <div :class="index === currentKey ? 'active' : ''"  
                @click="touchHandler(index)" 
                @touchend="touchendHandler"
                class="key"
                v-for="(item, index) in key" 
                :key="item">
                <span v-if="index !== 11">
                    {{item}}
                </span>
                <svg v-else class="icon" aria-hidden="true">
                    <use xlink:href="#icon-tuige"></use>
                </svg>
            </div>
        </div>
        <div class="swiperWrap">
            <Swipe 
                :payType="payType"
                :channeList="channeList"
                :initSlideIndex="initSlideIndex"
                @change="swiperChange"
                @toDetail="toDetail"
            />
        </div>
        <div class="cashbtn">
            <span>
                点 击 立 即 取 款
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component} from "vue-property-decorator";
// const { Swiper, SwiperSlide } =  require('vue-awesome-swiper');
import Swipe from "@/components/Swiper.vue";
import {
  State,
} from 'vuex-class'

@Component({
    components: {
        Swipe
    }
})
export default class extends Vue {
    created() {
        console.log(this.$route)
    }
    // vuex
    // @State('name') name: any;
    // data
    key = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', ''];
    currentKey: number = 13;
    amountArr: String[] = [];
    payType: number = 3;
    channeList: Object[] =  [
        {
            title: "有积分通道2",
            pay_type: 2,
        },
        {
            title: "有积分通道3",
            pay_type: 3,
        },
        {
            title: "有积分通道4",
            pay_type: 4,
        }
    ];
    // computed
    get amountMoney(): string  {
        const result = this.amountArr.length > 0 ? this.amountArr.join("") : '0'
        return result;
    }
    get initSlideIndex(): number {
        const index = this.channeList.findIndex((v: any) => v.pay_type === this.payType);
        return index;
    }
    // methods
    private touchHandler(index: number) {
        this.currentKey = index;
        if(index === 11) {
            this.amountArr.pop();
        } else {
            const value = this.key[index];
            if(this.amountArr.indexOf(".") !== -1 && value === '.') {
                return;
            };
            if(!this.amountArr.length && value === "0") {
                return;
            }
            this.amountArr.push(value);
        }
    }
    private touchendHandler() {
        this.currentKey = 13;
    }
    private clear() {
        this.amountArr = [];
    }
    private swiperChange(index: number) {
        this.payType = (this.channeList[index] as any).pay_type;
        console.log(this.payType);
    }
    private toDetail(index: number) {
        const payType = (this.channeList[index] as any).pay_type;
        this.$router.push({
            path: `/channelList`,
        })
    }
}

</script>

<style lang="stylus" scoped>
@import "../../assets/style/base";
.wrap
    padding-bottom 90px
.bg
    height 95px
    btn-bg()
    margin-top 0
    border-radius 0
    position fixed
    width 100%
    z-index -1
    top 0
    &:before
        transform translate(130%, -60%)
    &:after
        transform translate(-40%, 40%)
.inputBoxWrap
    width 91.6%
    margin 25px auto 0
    background #fff
    padding 14px
    box-sizing border-box
    border-radius 10px
    box-shadow 0 1px 5px #e7e7e7
    .tips
        color #a4a4a4
        font-size 16px
        margin-top 10px
    .money
        display flex
        padding 18px 0
        border-bottom 1px solid #e7e7e7
        align-items center
        justify-content space-between
        .icon
            color #aeaeae
            font-size 20px
        .amount
            color $textColor
            font-size 29px
            letter-spacing 1px
            position relative
            &:after
                position absolute
                right 0
                top 0
                content ''
                width 1px
                height 100%
                background #000
                animation flashing .7s linear infinite
    .commission
        font-size 16px
        color #a4a4a4
        margin-top 14px
        span 
            color $textColor
.keyBoard
    width 91.6%
    margin 15px auto 
    background #fff
    border 2px solid #d7d7d7
    border-radius 20px
    padding 15px 
    display flex
    flex-wrap wrap
    box-sizing border-box
    .key
        width 30%
        padding 20px 0
        text-align center 
        font-size 21px
        box-sizing border-box
        border 1px solid #e5e5e5
        color #707070
        border-radius 10px   
        margin-right 4%
        margin-bottom 10px
        transition background 1s
        &:nth-child(3n)
            margin-right 0
        &:nth-child(n + 10)
            margin-bottom 0
        &.active
            background #aeaeae
.swiperWrap
    width 100%
    overflow hidden
.cashbtn
    width 95%
    btn-bg()
    padding 17px 0
    &:before
        transform: translate(-35%, -80%);
    &:after
        transform: translate(-26%, 70%);

@keyframes flashing {
    0 {
        opacity 1
    }
    100% {
        opacity 0
    }
}
</style>
