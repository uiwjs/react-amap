import path from 'path';
import { OptionConf, ModuleScopePluginOpts, LoaderOneOf } from 'kkt';
import webpack from 'webpack';

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
];

export default (conf: webpack.Configuration, opts: OptionConf, webpack: Webpack) => {
  const pkg = require(path.resolve(process.cwd(), 'package.json'));
  // Get the project version.
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    })
  );

  conf.output = { ...conf.output, publicPath: './' }
  return conf;
}

