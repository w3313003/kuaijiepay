<template>
    <div class="listWrap">
        <div class="bg">
        </div>
        <div class="toolbar">
            <div class="select" @click="showDatePicker = true">
                <span v-if="!showDateText">开始时间</span>
                <img class="date"  v-if="!showDateText" src="../../assets/img/date.png" alt="">
                <div style="width: 100%;text-align: center" v-else>
                    {{mapDate2Month}}
                </div>
            </div>
            <div class="select" @click="showDatePicker = true">
                <span v-if="!showDateText">结束时间</span>
                <img class="date"  v-if="!showDateText" src="../../assets/img/date.png" alt="">
                <div style="width: 100%;text-align: center" v-else>
                    {{mapDate2Month}}
                </div>
            </div>
            <div class="search-btn">
                <img src="../../assets/img/search.png" alt="">
            </div>
        </div>
        <div class="content">
            <div class="list-wrap">
                <List
                    @load="loadMore"
                    :finished="finished"
                    v-model="loading"
                    :immediate-check="false"
                >
                    <div class="item">
                        123
                    </div>
                </List>
            </div>
        </div>
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

import { Vue, Component } from "vue-property-decorator";
import { Popup, DatetimePicker, List, Picker } from "vant";
import { setTimeout } from 'timers';

@Component({
    components: {
        Popup, 
        DatetimePicker, 
        List,
        Picker
    }
})
export default class extends Vue {
    loading: boolean = false;
    finished: boolean = false;
    showStatusPicker: boolean = false;
    statusText: String = "";
    showDatePicker: boolean = false;
    showDateText: boolean = false;
    currentDate: Date = new Date();
    memberStatus: Object[] = [
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
    ];
    get mapDate2Month(): String {
        const year: Number = this.currentDate.getFullYear(),
             month: Number = this.currentDate.getMonth() + 1,
            formateMonth = month >= 10 ? "month" : `0${month}`;
        return `${year}-${formateMonth}`;
    }
    selectStatus(value: any) {
        console.log(value);
        this.statusText = value.text;
        this.showStatusPicker = false;
    };
    selectDate(value: Date) {
        this.showDateText = true;
        this.currentDate = value;
        this.showDatePicker = false;
    };
    loadMore() {
        this.loading = true;
        setTimeout(() => {
            this.finished = true;
            this.loading = false;
            console.log(456);
        }, 1000);
        console.log(123);
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
.list-wrap
    position fixed
    width 100%
    overflow-y scroll
    top 109px
    bottom 0
    box-sizing border-box
    padding 15px 15px
    .item
        box-sizing border-box
        border-radius 10px
        box-shadow 0 0 10px #d5d5d5
        align-items center
        position relative
        margin-bottom 20px
        padding 20px 10px
</style>
