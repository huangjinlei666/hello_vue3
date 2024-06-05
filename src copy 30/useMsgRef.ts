import { customRef } from 'vue'

export default function (initValue: string, delay: number) {
    let timer: number;
    let msg = customRef((track, trigger) => {
        return {
            //msg被读取时调用
            get() {
                track(); //告诉vue数据msg重要，对msg持续关注，一旦msg变化就去更新
                return initValue;
            },
            //msg被修改时调用
            set(value) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    initValue = value;
                    trigger(); //通知vue数据msg变化了
                }, delay);
            },
        };
    });
    return { msg }
}