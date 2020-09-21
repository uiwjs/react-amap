const headElement = document.head || document.getElementsByTagName('head')[0];
const _importedScript: { [src: string]: true } = {};

/**
 * load dependency by css tag
 */
export function requireCss(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (src in _importedScript) {
      resolve();
      return;
    }
    const script = document.createElement('link');
    script.type = 'text/css';
    script.rel = 'stylesheet';
    script.href = src;
    script.onerror = err => {
      headElement.removeChild(script);
      reject(new URIError(`The css ${src} is no accessible.`));
    }
    script.onload = () => {
      _importedScript[src] = true;
      resolve();
    }
    headElement.appendChild(script);
  })
}

/**
 * load dependency by script tag
 */
export function requireScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (src in _importedScript) {
      resolve();
      return
    }
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = "_react_amap"
    script.async = true
    script.defer = true
    script.src = src;
    script.onerror = err => {
      headElement.removeChild(script);
      reject(new URIError(`The Script ${src} is no accessible.`));
    }
    script.onload = () => {
      _importedScript[src] = true;
      resolve();
    }
    headElement.appendChild(script);
  })
}