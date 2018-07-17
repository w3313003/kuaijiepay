<template>
    <div class="cWrap">
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
                <span v-if="!showDateText">选择月份</span>
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
                        <img class="seal" src="../../assets/img/jy_success.png" alt="">
                        <div class="title line">
                            <span class="key">
                                订单编号:
                            </span>
                            <div class="value">
                                213123213123
                            </div>
                        </div>
                        <div class="desc">
                            <div class="line">
                                <span class="key">
                                    银行卡号:
                                </span>
                                <div class="value">
                                    213123213123
                                </div>
                            </div>
                            <div class="line">
                                <span class="key">
                                    交易方式:
                                </span>
                                <div class="value">
                                    有几分a
                                </div>
                            </div>
                            <div class="line">
                                <span class="key">
                                    交易金额:
                                </span>
                                <div class="value">
                                    有几分a
                                </div>
                            </div>
                            <div class="line">
                                <span class="key">
                                    手续费:
                                </span>
                                <div class="value">
                                    有几分a
                                </div>
                            </div>
                            <div class="line">
                                <span class="key">
                                    实收金额:
                                </span>
                                <div class="value">
                                    55555.5
                                </div>
                            </div>
                        </div>
                        <div class="title line">
                            <div class="money">
                                返佣:<span>58.5</span>
                            </div>
                            <span class="key">
                                交易时间:
                            </span>
                            <div class="value">
                                213123213123
                            </div>
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
        .seal
            position absolute
            width 74px
            height 65px
            bottom 56px
            right 20px
            transform scale(1.2)
        .line
            display flex
            padding 7px 8px
            &.title
                padding 14px 8px
                position relative
                .money
                    position absolute
                    right 10px
                    top 50%
                    color #999
                    transform translateY(-50%)
                    span
                        color $textColor
                        font-size 20px
                        vertical-align: middle;
            .key
                flex 0 0 70px
                color #999
                font-size 16px
            .value
                flex 1
                padding-left 10px
                box-sizing border-box
                word-break break-all
        .desc
            background #fafafa
</style>
