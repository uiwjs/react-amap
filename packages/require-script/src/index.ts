const _importedScript: { [src: string]: true } = {};

/**
 * load dependency by css tag
 */
export function requireCss(src: string, id: string = '_react_amap_css'): Promise<void> {
  const headElement = document && (document.head || document.getElementsByTagName('head')[0]);
  const dom = document.getElementById(id);
  return new Promise((resolve, reject) => {
    if (!document || src in _importedScript || dom) {
      resolve();
      return;
    }
    const script = document.createElement('link');
    script.type = 'text/css';
    script.rel = 'stylesheet';
    script.id = id;
    script.href = src;
    script.onerror = (err) => {
      headElement.removeChild(script);
      reject(new URIError(`The css ${src} is no accessible.`));
    };
    script.onload = () => {
      _importedScript[src] = true;
      resolve();
    };
    headElement.appendChild(script);
  });
}

/**
 * load dependency by script tag
 */
export function requireScript(src: string, id: string = '_react_amap_plugin'): Promise<void> {
  const headElement = document && (document.head || document.getElementsByTagName('head')[0]);
  const dom = document.getElementById(id);
  return new Promise((resolve, reject) => {
    if (!document || src in _importedScript || dom) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = id;
    script.async = true;
    script.defer = true;
    script.src = src;
    script.onerror = (err) => {
      headElement.removeChild(script);
      reject(new URIError(`The Script ${src} is no accessible.`));
    };
    script.onload = () => {
      _importedScript[src] = true;
      resolve();
    };
    headElement.appendChild(script);
  });
}
