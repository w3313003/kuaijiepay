<template>
     <div class="agentWrap">
        <div class="bg">
        </div>
        <div class="toolbar">
            <div class="select" @click="showStatusPicker = true">
                <span >
                    {{statusText ? statusText : '交易状态'}}
                </span>
                <img src="../../assets/img/select.png" alt="">
            </div>
            <div class="select" @click="showDatePicker = true">
                <span v-if="!showDateTxt">选择月份</span>
                <img class="date" v-if="!showDateTxt" src="../../assets/img/date.png" alt="">
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
                <div class="id">序号</div>
                <div>提现金额(元)</div>
                <div>提现时间</div>
                <div class="status">状态</div>
            </div>
            <div class="list-wrap">
                <List 
                    @load="loadMore"s
                >
                    <div 
                        v-for="(item, index) of data" 
                        :key="index" 
                        class="line"
                        :class="index % 2 === 0 ? 'even' : ''"
                    >
                        <div class="id">
                            {{item.name}}
                        </div>
                        <div>
                            {{item.mobile}}
                        </div>
                        <div>
                            {{item.money}}
                        </div>
                        <div class="status">
                            {{item.income}}
                        </div>
                    </div>
                </List>
            </div>
        </div>
        <Popup v-model="showStatusPicker" position="bottom">
            <Picker
                show-toolbar
                title="请选择交易状态"
                :columns="memberStatus"
                @confirm="selectStatus"
                @cancel="showStatusPicker = false"
            />
        </Popup>
        <Popup v-model="showDatePicker" position="bottom">
            <DatetimePicker 
                v-model="currentDate"
                title="请选择月份"
                type="year-month"
                @confirm="selectDate"
                @cancel="showDatePicker = false"
            />
        </Popup>
    </div>
</template>

<script lang="ts">
import { Popup, DatetimePicker, List, Picker } from "vant";
import { Vue, Component } from "vue-property-decorator";
export default {
    components: {
        Popup,
        DatetimePicker,
        List,
        Picker
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
            showStatusPicker: false,
            statusText: "",
            currentDate: new Date(),
            showDatePicker: false,
            showDateTxt: false,
            memberStatus:  [
                {
                    text: "全部状态",
                    value: 0
                },
                {
                    text: "成功",
                    value: 1
                },
                {
                    text: "失败",
                    value: 2
                }
            ],
            data: [
                {
                    name: "lik",
                    mobile: "1231231231",
                    money: "2017-8-9",
                    income: "成功"
                },
                {
                    name: "li31",
                    mobile: "1231231231",
                    money: "2312.32",
                    income: "失败"
                },
                {
                    name: "lik",
                    mobile: "1231231231",
                    money: "2312.32",
                    income: "待审核"
                }
            ]
        }
    },
    methods: {
        selectStatus(value: any) {
            this.statusText = value.text;
            this.showStatusPicker = false;
        },
        selectDate(value: Date) {
            this.showDateTxt = true;
            this.currentDate = value;
            this.showDatePicker = false;
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
            height 10px
            &.date
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
            &.id
                flex 0 0 50px
                word-break break-all
            &.status
                flex 0 0 80px
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
