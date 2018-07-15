<template>
    <PullRefresh 
        v-model="isLoading"
        @refresh="onRefresh"
    >
        <div class="wrap">
            <div class="item" v-for="(item, i) in channeList" :key="i"
                @click="toDetail(item)"
            >
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
        </div>
    </PullRefresh>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { PullRefresh } from "vant";
import { setTimeout } from 'timers';

@Component({
    components: {
        PullRefresh
    }
})
export default class extends Vue {
    private isLoading: boolean = false;
    channeList: Object[] = [
        {
            payType: 2,
            title: "通道a"
        },
        {
            payType: 2,
            title: "通道a"
        },
        {
            payType: 2,
            title: "通道a"
        },
        {
            payType: 2,
            title: "通道a"
        },
        {
            payType: 2,
            title: "通道a"
        },
        {
            payType: 2,
            title: "通道a"
        }
    ]

    onRefresh() {
        setTimeout(() => {
            this.isLoading = false;
        }, 1000)
    }
    toDetail(item: any) {
        this.$router.push({
            path: `/channelList/${item.payType}`
        })
    }
}

</script>

<style lang="stylus" scoped>
@import "../../assets/style/base";
.wrap
    padding 14px
    box-sizing border-box
    background #fff
    min-height 100vh
    .item
        width 100%
        box-sizing border-box
        padding 0 12px 
        color #000
        border-radius 10px
        box-shadow 0 0 10px #c2c2c2
        margin-bottom 20px
        .title
            display flex
            align-items center
            justify-content space-between
            padding 12px 0
            color #636363
            font-size 16px
            border-bottom 1px solid #e5e5e5
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
                .text
                    flex 1
                    padding-left 10px
                    box-sizing border-box
                    no-wrap()
                    color #636363

</style>
