import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

Vue.use(Router);

const router =  new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: "/home",
            component: () => import("./views/main/Index.vue"),
            children: [
                {
                    path: "/home",
                    name: "home",
                    component: () => import("./views/main/home.vue"),
                    meta: {}
                }, {
                    path: "/withdraw",
                    name: "withdraw",
                    component: () => import("./views/withdraw/index.vue"),
                    meta: {
                        title: "提现"
                    }
                }, {
                    path: "/team",
                    name: "team",
                    component: () => import("./views/team/index.vue"),
                    meta: {
                        title: "团队"
                    }
                }, {
                    path: "/message",
                    name: "message",
                    component: () => import("./views/message/index.vue"),
                    meta: {
                        title: "消息"
                    }
                }, {
                    path: "/my",
                    name: "my",
                    component: () => import("./views/my/index.vue"),
                    meta: {
                        title: "我的"
                    }
                }
            ]
        },
        // 支付通道
        {
            path: "/channelList",
            name: "channelList",
            component: () => import("./views/withdraw/channeList.vue"),
            meta: {
                title: "支付通道"
            }
        },
        {
            path: "/channelList/:paytype",
            name: "paytype",
            component: () => import("./views/withdraw/listDetail.vue"),
            meta: {
                title: "通道详情"
            }
        },
        // 认证
        {
            path: "/auth",
            name: "auth",
            component: () => import("./views/auth/index.vue"),
            meta: {
                title: "实名认证"
            }
        },
        // 卡片管理
        {
            path: "/card",
            name: "cardlist",
            component: () => import("./views/card/index.vue"),
            meta: {
                title: "信用卡管理"
            }
        },
        {
            path: "/card/addCard",
            name: "addCard",
            component: () => import("./views/card/addCard.vue"),
            meta: {
                title: "添加银行卡"
            }
        },
        {
            path: "/card/settlementCard",
            name: "settlementCard",
            component: () => import("./views/card/settlementCard.vue"),
            meta: {
                title: "结算卡管理"
            }
        },
        // 团队相关
        {
            path: "/team/agent",
            name: "agent",
            component: () => import("./views/team/agent.vue"),
            meta: {
                title: "会员状态"
            }
        },
        {
            path: "/team/member",
            name: "member",
            component: () => import("./views/team/member.vue"),
            meta: {
                title: "用户详情"
            }
        },
        // 记录
        {
            path: '/record/personal',
            name: "personal",
            component: () => import("./views/record/personal.vue"),
            meta: {
                title: "个人交易记录"
            }
        },
        {
            path: '/record/transaction',
            name: "transaction",
            component: () => import("./views/record/transaction.vue"),
            meta: {
                title: "交易提现记录"
            }
        },
        {
            path: '/record/card_commission',
            name: "card_commission",
            component: () => import("./views/record/card_commission.vue"),
            meta: {
                title: "刷卡返佣记录"
            }
        },
        {
            path: '/record/commission',
            name: "commission",
            component: () => import("./views/record/commission.vue"),
            meta: {
                title: "佣金提现记录"
            }
        },
        // 消息相关
        {
            path: "/message/list",
            name: "/messagelist",
            component: () => import("./views/message/list.vue"),
            meta: {
                title: "消息列表"
            }
        },
        // 推广
        {
            path: "/spread",
            name: "spread",
            component: () => import("./views/spread/index.vue"),
            meta: {
                title: "推广中心"
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
    ],
});

router.beforeEach((to: any, from, next) => {
    const title =  to.meta.title || "银联快捷";
    document.title = title;
    next();
});

export default router;
