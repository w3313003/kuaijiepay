<template>
     <div class="agentWrap">
        <div class="bg">
        </div>
        <div class="toolbar">
            <div class="mobileWrap">
                <input placeholder="请输入手机号" />
            </div>
            <div class="select" @click="showPicker = true">
                <span v-if="!showDateTxt">选择月份</span>
                <img  v-if="!showDateTxt" src="../../assets/img/date.png" alt="">
                <div style="width: 100%;text-align: center" v-else>
                    {{mapDate2Month}}
                </div>
            </div>
            <div class="search-btn">
                <img src="../../assets/img/search.png" alt="">
            </div>
        </div>
        <div class="content">
            <div class="head">
                <div class="name">姓名</div>
                <div>手机号</div>
                <div>交易金额</div>
                <div>产生收益</div>
            </div>
            <div class="list-wrap">
                <List 
                    @load="loadMore"
                >
                    <div 
                        v-for="(item, index) of data" 
                        :key="index" 
                        class="line"
                        :class="index % 2 === 0 ? 'even' : ''"
                    >
                        <div class="name">
                            {{item.name}}
                        </div>
                        <div>
                            {{item.mobile}}
                        </div>
                        <div>
                            {{item.money}}
                        </div>
                        <div>
                            {{item.income}}
                        </div>
                    </div>
                </List>
            </div>
        </div>
        <Popup v-model="showPicker" position="bottom">
            <DatetimePicker 
                v-model="currentDate"
                title="请选择月份"
                type="year-month"
                @confirm="selectDate"
                @cancel="showPicker = false"
            />
        </Popup>
    </div>
</template>

<script lang="ts">
import { Popup, DatetimePicker, List } from "vant";
import { Vue, Component } from "vue-property-decorator";
export default {
    components: {
        Popup,
        DatetimePicker,
        List
    },
    computed: {
        mapDate2Month() {
            const year: Number = this.currentDate.getFullYear(),
                 month: Number = this.currentDate.getMonth() + 1,
                formateMonth = month >= 10 ? "month" : `0${month}`;
            return `${year}-${formateMonth}`;
        }
    },
    data() {
        return {
            currentDate: new Date(),
            showPicker: false,
            showDateTxt: false,
            data: [
                {
                    name: "lik",
                    mobile: "1231231231",
                    money: "2312.32",
                    income: "@!31123123212"
                },
                {
                    name: "li31",
                    mobile: "1231231231",
                    money: "2312.32",
                    income: "@!312"
                },
                {
                    name: "lik",
                    mobile: "1231231231",
                    money: "2312.32",
                    income: "@!312"
                }
            ]
        }
    },
    methods: {
        selectDate(value: Date) {
            this.showDateTxt = true;
            this.currentDate = value;
            this.showPicker = false;
        },
        loadMore() {
            console.log(123)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/style/base";
.bg
    height 65px
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
.toolbar
    height 65px
    padding: 22px 15px;
    display flex
    justify-content space-between
    align-items center
    .search-btn
        width 40px
        height 40px
        background #fff
        border-radius 5px
        display flex
        align-items center
        justify-content center
        img 
            width 16px
            height 16px
    .mobileWrap
        flex 0 0 40%
        height 40px
        background #fff
        box-sizing border-box
        font-size 14px
        border-radius 10px
        display flex
        overflow hidden
        align-items center
        justify-content space-around
        input 
            width 80%
            font-size 16px
            outline 0
            color $textColor
            &::placeholder
                color $textColor
    .select
        flex 0 0 40%
        background #fff
        height 40px
        border-radius 10px
        display flex
        align-items center
        justify-content space-between
        padding 0 10px
        box-sizing border-box 
        color $textColor
        img 
            width 18px
            height 18px
.content
    .head,.line
        display flex
        width 100%
        div
            flex 1
            text-align center
            word-break break-all
            display flex
            align-items center
            justify-content center
            &.name
                flex 0 0 50px
                word-break break-all
    .head
        padding 22px 0
        color $textColor
        border-bottom 1px solid $textColor
    .line
        padding 12px 0
        &.even
            background #ebebeb
.list-wrap
    position fixed
    width 100%
    overflow-y scroll
    top 172px
    bottom 0
</style>
