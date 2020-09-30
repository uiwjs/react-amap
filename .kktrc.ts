import path from 'path';
import { OptionConf, ModuleScopePluginOpts, LoaderOneOf } from 'kkt';
import webpack from 'webpack';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';

type Webpack = typeof webpack;

export const loaderOneOf: LoaderOneOf = [
  require.resolve('@kkt/loader-less'),
  require.resolve('@kkt/loader-raw')
];

export const moduleScopePluginOpts: ModuleScopePluginOpts = [
  path.resolve(process.cwd(), 'README.md'),
  path.resolve(process.cwd(), 'src'),
  path.resolve(process.cwd(), 'src/Map/README.md'),
  path.resolve(process.cwd(), 'src/APILoader/README.md'),
  path.resolve(process.cwd(), 'src/ScaleControl/README.md'),
  path.resolve(process.cwd(), 'src/ToolBarControl/README.md'),
  path.resolve(process.cwd(), 'src/MapTypeControl/README.md'),
  path.resolve(process.cwd(), 'src/ControlBarControl/README.md'),
  path.resolve(process.cwd(), 'src/HawkEyeControl/README.md'),
  path.resolve(process.cwd(), 'src/Polyline/README.md'),
  path.resolve(process.cwd(), 'src/Marker/README.md'),
  path.resolve(process.cwd(), 'src/Text/README.md'),
  path.resolve(process.cwd(), 'src/Circle/README.md'),
  path.resolve(process.cwd(), 'src/Ellipse/README.md'),
  path.resolve(process.cwd(), 'src/Rectangle/README.md'),
  path.resolve(process.cwd(), 'src/BezierCurve/README.md'),
  path.resolve(process.cwd(), 'src/Polygon/README.md'),
  path.resolve(process.cwd(), 'src/InfoWindow/README.md'),
  path.resolve(process.cwd(), 'src/CircleMarker/README.md'),
  path.resolve(process.cwd(), 'src/Weather/README.md'),
  path.resolve(process.cwd(), 'src/Geolocation/README.md'),
  path.resolve(process.cwd(), 'src/AutoComplete/README.md'),
  path.resolve(process.cwd(), 'src/ContextMenu/README.md'),
];

export default (conf: webpack.Configuration, opts: OptionConf, webpack: Webpack) => {
  const pkg = require(path.resolve(process.cwd(), 'package.json'));
  // Get the project version.
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    })
  );

  /**
   * Fix `.chunk.js is 5.38 MB, and won't be precached. Configure maximumFileSizeToCacheInBytes to change this limit.`
   */
  if (conf.plugins) {
    conf.plugins = conf.plugins.map((item) => {
      if (item.constructor && item.constructor.name && /(GenerateSW)/.test(item.constructor.name)) {
        return null;
      }
      return item;
    }).filter(Boolean) as webpack.Plugin[];
    // Generate a service worker script that will precache, and keep up to date,
    // the HTML & assets that are part of the Webpack build.
    if (opts.isEnvProduction) {
      conf.plugins.push(new WorkboxWebpackPlugin.GenerateSW({
        maximumFileSizeToCacheInBytes: 1024 * 1024 * 8,
        clientsClaim: true,
        exclude: [/\.map$/, /asset-manifest\.json$/],
        navigateFallback: opts.publicUrlOrPath + '/index.html',
        navigateFallbackDenylist: [
          // Exclude URLs starting with /_, as they're likely an API call
          new RegExp('^/_'),
          // Exclude any URLs whose last part seems to be a file extension
          // as they're likely a resource and not a SPA route.
          // URLs containing a "?" character won't be blacklisted as they're likely
          // a route with query params (e.g. auth callbacks).
          new RegExp('/[^/?]+\\.[^/]+$'),
        ],
      }))
    }
  }

  conf.optimization = {
    ...conf.optimization,
    splitChunks: {
      chunks: 'all', // async对异步引入的代码分割 initial 对同步引入代码分割 all对同步异步引入的分割都开启
      minSize: 30000, // 字节 引入的文件大于30kb才进行分割
      maxSize: 0, // 文件的最大尺寸，优先级：maxInitialRequest/maxAsyncRequests < maxSize < minSize，需要注意的是这个如果配置了，umi.js 就可能被拆开，最后构建出来的 chunkMap 中可能就找不到 umi.js 了
      minChunks: 1, // 模块至少使用次数
      maxAsyncRequests: 30, // 同时加载的模块数量最多是_个，只分割出同时引入的前_个文件（按需加载模块）
      maxInitialRequests: 25, // 首页加载的时候引入的文件最多 _ 个（加载初始页面）
      automaticNameDelimiter: '~', // 缓存组和生成文件名称之间的连接符
      name: true, // 缓存组里面的 filename 生效，覆盖默认命名
      cacheGroups: {
        markdown_preview: {
          name: 'vendors-markdown-preview',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](@uiw\/react-markdown-preview|codemirror)[\\/]/,
          priority: -2,
        },
        prismjs: {
          name: 'vendors-prismjs',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](prismjs)[\\/]/,
          priority: -2,
        },
        react_code_preview: {
          name: 'vendors-code-preview',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](@uiw\/react-code-preview)[\\/]/,
          priority: -2,
        },
        react: {
          name: 'vendors-react',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          priority: -5,
        },
        uiwjs: {
          name: 'vendors-uiwjs',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]@uiw\/(copy-to-clipboard|react-split)[\\/]/,
          priority: -5,
        },
        lodash: {
          name: 'vendors-lodash',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](lodash)[\\/]/,
          priority: -5,
        },
        babel_plugin: {
          name: 'babel_plugin',
          chunks: 'all',
          // test: /[\\/]node_modules[\\/](babel-plugin-transform-remove-imports)[\\/]/,
          test: /[\\/]node_modules[\\/](babel-?.*)[\\/]/,
          priority: -5,
        },
        // babel_runtime: {
        //   name: 'vendors-runtime',
        //   chunks: 'all',
        //   test: /[\\/]node_modules[\\/](@babel)[\\/]/,
        //   priority: -5,
        // },
        babel_standalone: {
          name: 'vendors-standalone',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](@babel\/standalone)[\\/]/,
          priority: -5,
        },
        babel_runtime_template: {
          name: 'vendors-runtime-template',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]@babel[\/](template|regenerator|highlight|parser|code-frame|plugin-transform-classes)[\\/]/,
          priority: -5,
        },
        babel_runtime_core: {
          name: 'vendors-runtime-core',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](@babel\/core)[\\/]/,
          priority: -5,
        },
        babel_remark: {
          name: 'vendors-remark',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](remark-parse)[\\/]/,
          priority: -5,
        },
        babel_runtime_generator: {
          name: 'vendors-runtime-generator',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](@babel\/generator)[\\/]/,
          priority: -5,
        },
        babel_helper: {
          name: 'vendors-helper',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](@babel\/helper?.*)[\\/]/,
          priority: -5,
        },
        babel_runtime_helpers: {
          name: 'vendors-runtime-helpers',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](@babel\/runtime\/helpers)[\\/]/,
          priority: -5,
        },
        babel_runtime_types: {
          name: 'vendors-runtime-types',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](@babel\/types)[\\/]/,
          priority: -5,
        },
        babel_runtime_traverse: {
          name: 'vendors-runtime-traverse',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](@babel\/traverse)[\\/]/,
          priority: -5,
        },
      }
    }
  };

  conf.output = { ...conf.output, publicPath: './' };
  return conf;
}
