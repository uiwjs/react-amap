import webpack, { Configuration } from 'webpack';
import path from 'path';
import { LoaderConfOptions } from 'kkt';
import lessModules from '@kkt/less-modules';
import rawModules from '@kkt/raw-modules';
import scopePluginOptions from '@kkt/scope-plugin-options';
import pkg from './package.json';

export default (conf: Configuration, env: 'production' | 'development', options: LoaderConfOptions) => {
  conf = rawModules(conf, env, options);
  conf = lessModules(conf, env, options);
  conf = scopePluginOptions(conf, env, {
    ...options,
    allowedFiles: [path.resolve(process.cwd(), 'README.md')],
  });
  // Get the project version.
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
  );
  conf.module!.exprContextCritical = false;
  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' };
    conf.optimization = {
      ...conf.optimization,
      splitChunks: {
        chunks: 'all', // async对异步引入的代码分割 initial 对同步引入代码分割 all对同步异步引入的分割都开启
        minSize: 30000, // 字节 引入的文件大于30kb才进行分割
        minChunks: 1, // 模块至少使用次数
        maxAsyncRequests: 30, // 同时加载的模块数量最多是_个，只分割出同时引入的前_个文件（按需加载模块）
        maxInitialRequests: 25, // 首页加载的时候引入的文件最多 _ 个（加载初始页面）
        automaticNameDelimiter: '~', // 缓存组和生成文件名称之间的连接符
        cacheGroups: {
          reactvendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react-vendor',
            chunks: 'all',
          },
          babelstandalone: {
            test: /[\\/]node_modules[\\/](@babel[\\/]standalone)[\\/]/,
            name: 'babel-standalone-vendor',
            chunks: 'all',
          },
          prismjs: {
            test: /[\\/]node_modules[\\/](refractor)[\\/]/,
            name: 'refractor-vendor',
            chunks: 'all',
          },
          codemirror: {
            test: /[\\/]node_modules[\\/](@codemirror)[\\/]/,
            name: 'codemirror-vendor',
            chunks: 'all',
          },
          uiw: {
            test: /[\\/]node_modules[\\/](@uiw)[\\/]/,
            name: 'uiw-vendor',
            chunks: 'all',
          },
          parse5: {
            test: /[\\/]node_modules[\\/](parse5)[\\/]/,
            name: 'parse5-vendor',
            chunks: 'all',
          },
        },
      },
    };
  }
  return conf;
};
