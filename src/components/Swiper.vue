<template>
    <div class="swiperWrap">
        <swiper ref="swiper" :options="swiperOption">
            <swiper-slide @click.native="toDetail(index)" v-for="(item, index) of channeList" :key="index">
                <div  class="item">
                    <div class="title">
                        <span>
                            {{item.title}}
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
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
    name: "Swiper",
    props: {
        payType: {
            type: Number,
            default: 0
        },
        channeList: {
            type: Array,
            default: _ => []
        },
        initSlideIndex: {
            type: Number,
            default: 0
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    computed: {
        activeSlide() {
            return this.channeList.findIndex(v => v.payType === this.payType);
        }
    },
    data() {
        return {
            swiperOption: {
                effect: 'coverflow', // 3d滑动
                centeredSlides: true,
                loop: false,
                slidesPerView: 2,
                initialSlide: this.initSlideIndex,
                coverflowEffect: {
                    rotate: 25,
                    stretch: 0,
                    depth: 60,
                    modifier: 2,
                    slideShadows : true
                },
                on: {
                    slideChange: (s) => {
                        this.$nextTick(() => {
                            this.$emit("change", this.$refs.swiper.swiper.activeIndex)
                        })
                    }
                }
            }
        }
    },
    methods: {
        toDetail(index) {
            this.$emit("toDetail", index)
        }
    }
}

</script>

<style lang="stylus" scoped>
@import "../assets/style/base.styl";
.swiperWrap
    width 100%
    overflow hidden
    .item
        box-sizing border-box
        padding 0 12px 
        bGradient(#8fafff, #9583ff, 180deg)
        color #fff
        border-radius 10px
        .title
            display flex
            align-items center
            justify-content space-between
            padding 12px 0
            font-size 14px
            border-bottom 1px solid #fff
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
                    background #Fff
                    border-radius 50%
                    flex 0 0 16px
                    height 16px
                    display flex
                    align-items center
                    justify-content center
                    margin-right 3px
                    .icon
                        font-size 12px
                        color $textColor
                        transform scale(.85)
                .text
                    no-wrap()
</style>
