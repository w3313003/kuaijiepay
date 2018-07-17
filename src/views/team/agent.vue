<template>
    <div class="agentWrap">
        <div class="bg">
        </div>
        <div class="toolbar">
            <div class="mobileWrap">
                <input placeholder="请输入手机号" />
            </div>
            <div class="select" @click="showPicker = true">
                <span v-if="!currentStatus">会员状态</span>
                <img  v-if="!currentStatus" src="../../assets/img/select.png" alt="">
                <div style="width: 100%;text-align: center" v-else>
                    {{currentStatus.text}}
                </div>
            </div>
            <div class="search-btn">
                <img src="../../assets/img/search.png" alt="">
            </div>
        </div>
        <div class="content">
            <table>
                <tr class="head">
                    <th class="id">
                        序号
                    </th>
                    <th class="name">姓名</th>
                    <th>手机号</th>
                    <th class="status">
                        状态
                    </th>
                </tr>
                <tbody>
                    <List
                        @load="loadMore"
                        :finished="finished"
                        v-model="loading"
                    >
                        <tr :class="index % 2 !== 0 ? '' : 'even'" v-for="(item, index) of data" :key="index">
                            <td class="id">
                                {{item.id}}
                            </td>
                            <td class="name">
                                {{item.name}}
                            </td>
                            <td>
                                {{item.mobile}}
                            </td>
                            <td class="status">
                                {{item.status}}
                            </td>
                        </tr>
                    </List>
                </tbody>
            </table>
        </div>
        <Popup v-model="showPicker" position="bottom">
            <Picker
                show-toolbar
                title="请选择会员状态"
                :columns="statusList"
                @confirm="select"
                @cancel="showPicker = false"
            />
        </Popup>
    </div>
</template>

<script lang="ts">
import { Popup, Picker, List } from "vant";
import { setTimeout } from 'timers';
export default {
    components: {
        Popup,
        Picker,
        List
    },
    data() {
        return {
            loading: false,
            finished: false,
            statusList: [
                {
                    text: "全部状态",
                    value: 0
                },
                {
                    text: "已实名",
                    value: 1
                },
                {
                    text: "待审核",
                    value: 2
                },
                {
                    text: "审核失败",
                    value: 3
                },
                {
                    text: "未进件",
                    value: 4
                },
            ],
            data: [
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                },
                {
                    id: 1,
                    name: "lik",
                    mobile: "15623332222",
                    status: 0
                }
            ],
            showPicker: false,
            currentStatus: null
        }
    },
    methods: {
        select(value: any) {
            this.currentStatus = value;
            this.showPicker = false; 
        },
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
.content
    width 100%
    table
        width 100%
        tr.head
            padding 20px 0
            color $textColor
            border-bottom 1px solid $textColor
        tr
            width 100%
            display flex
            padding 14px 0
            &.even
                background #ebebeb
            td,th
                text-align center
                flex 1
                no-wrap()
                &.id,&.name
                    flex 0 0 60px
                &.status
                    flex 0 0 80px
tbody
    position fixed
    width 100%
    overflow-y scroll
    top 172px
    bottom 0


@media screen and (max-width: 330px)
    th.id,td.id
        flex 0 0 55px!important
    td.name,th.name,td.status,th.status
        flex 0 0 74px!important
</style>
