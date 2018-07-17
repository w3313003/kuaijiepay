import * as Types from "./types";
import { vueX2stoage } from "@/common/utils";
import { State } from "@/common/Inspect";

export default {
    [Types.LOGIN](state: State, payload: boolean): void {
        vueX2stoage("isLogin", payload);
        state.isLogin = payload;
    }
};

