import {parseStoage} from "@/common/utils";
export default {
    isLogin: parseStoage("isLogin") || false,
    userInfo: parseStoage("userInfo") || {},
    openmenus: parseStoage("openmenus") || [],
    cachePages: parseStoage("cachePages") || [],
    breadcrumbList: parseStoage("breadcrumbList") || [],
    currentPage: parseStoage("currentPage") || {},
    shrink: parseStoage("skrink") || false
};
