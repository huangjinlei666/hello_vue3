import mitt from 'mitt'
//可实现任意组件通信
const emitter=mitt()

// //绑定事件
// emitter.on('test1',()=>{
//     console.log('test1')
// })
// emitter.on('test2',()=>{
//     console.log('test2')
// })

// //触发事件
// setInterval(()=>{
//     emitter.emit('test1')
//     emitter.emit('test2')
// },1000)

// setTimeout(() => {
//     // emitter.off('test1')
//     // emitter.off('test2')
//     emitter.all.clear()
// }, 3000);

export default emitter