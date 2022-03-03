@uiw/react-amap-require-script
===

用于加载高德地图其它 SDK 依赖，官方示例中的 css, js加载。

```jsx
import { APILoader } from '@uiw/react-amap';
// 或者单独安装使用
import { APILoader } from '@uiw/react-amap-require-script';
```

```typescript
/**
 * load SDK by css tag
 */
export declare function requireCss(src: string): Promise<void>;
/**
 * load SDK by script tag
 */
export declare function requireScript(src: string, id?: string): Promise<void>;
```
