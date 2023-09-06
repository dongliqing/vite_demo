import type {Directive} from "vue";


export const code : Directive = {
    mounted(el, binding){
        const {value} = binding;
        console.log(value);
        //如果缓存中的code码没有包含该code码，那么不显示按钮
        el.parentNode && el.parentNode.removeChild();
    }
}