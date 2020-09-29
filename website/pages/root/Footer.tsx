import React from 'react';
import styles from './Footer.module.less';

export default () => {
  return (
    <div className={styles.footer}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/uiwjs/react-amap/issues/new"
      >
        提交 Bug
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/uiwjs/react-amap"
      >
        GitHub
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/kktjs/kkt"
      >
        kkt
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/uiwjs/uiw"
      >
        uiwjs
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/uiwjs/react-baidu-map"
      >
        react-baidu-map
      </a>
    </div>
  );
}