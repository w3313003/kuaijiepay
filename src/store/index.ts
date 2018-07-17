import Vue from 'vue';
import Vuex from 'vuex';
import createLogger, {LoggerOption} from 'vuex/dist/logger';
import state from './state';
import mutations from "./mutations/index";
import actions from './actions';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
const option: any = {};
export default new Vuex.Store({
    state,
    mutations,
    actions,
    plugins: debug ? [ createLogger((option as LoggerOption<any>)) ] : []
});

