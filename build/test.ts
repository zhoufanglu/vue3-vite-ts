export default function testPlugin() {
  return {
    // 插件名字
    name: 'vite-plugin-test',
    options(options) {
      // 可设置options.input修改入口文件
      console.log(8, options)
    },
    buildStart(options) {
      console.log('开始。。')
      console.log(11, options)
    },
    resolveId(id) {
      console.log(14, id)
    },
  }
}
