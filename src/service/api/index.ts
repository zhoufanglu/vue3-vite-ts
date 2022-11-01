/**
 * api接口的统一出口
 */
// 动态加载模块
const ms = import.meta.glob('./modules/*.ts', {
  eager: true,
  import: 'default'
})
const modules: any = {}

Object.keys(ms).forEach((key) => {
  const moduleName = key.substring(10, key.length - 3)
  modules[moduleName] = ms[key]
})

// 导出接口
export default {
  ...modules
  // ……
}
