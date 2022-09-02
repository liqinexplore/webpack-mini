const webpack = require('webpack');

// `webpack-cli` 与 `webpack/cli` 调来调去，逻辑复杂，为了方便，直接使用其 node api 进行示例，方便调试

// 1. webpack 的运行时代码分析
// 2. output.filename template
// 3. [contenthash].js 中的 hash 是如何生成的
// 4. [id] 与 [name] 是如何生成的
// 5. 试试 mode 为 production/development/none 时运行时代码有何不同
// 6. output.path 如何指定打包目录为 build 目录
// 7. devtool 对运行时有何影响
// 8. sourcemap 的工作原理是什么样的

// webpack 的运行时代码分析
function f1() {
    return webpack({
        entry: './index.js',
        mode: 'none',
        output: {
            filename: 'main.js'
        }
    })
}

function f2() {
    return webpack({
        entry: './index.js',
        mode: 'none',
        optimization: {
            runtimeChunk: true,
        }
    })
}

// output.path 如何指定打包目录为 build 目录
f2().run((err, stat) => {
    console.log(JSON.stringify(stat.toJson()))
})