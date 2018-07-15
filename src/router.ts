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
                },
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
        {
            path: "/channelList",
            name: "channelList",
            component: () => import("./views/withdraw/channeList.vue"),
            meta: {
                title: "支付通道"
            }
        },
        {
            path: "/auth",
            name: "auth",
            component: () => import("./views/auth/index.vue"),
            meta: {
                title: "实名认证"
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
