/* Local shim for cocos-js/cc.js (离线版无法下载原厂 cc.js，改把已内嵌在 runtime.js 的
   assets/internal/index.js 重新注册为 'cc'，并挂到 window.cc）。 */
(function (System) {
  if (!System) { console.error('[cc-shim] SystemJS not found'); return; }
  System.register('cc', ['assets/internal/index.js'], function (_export) {
    var internal = null;
    function expose() {
      if (!internal) return;
      var real = internal.default || internal;
      // re-export every named binding so `import { director } from 'cc'` style works
      try {
        Object.keys(internal).forEach(function (k) {
          if (k === 'default') return;
          try { _export(k, internal[k]); } catch (e) {}
        });
      } catch (e) {}
      _export('default', real);
      if (!window.cc) window.cc = real;
    }
    return {
      setters: [function (m) { internal = m; expose(); }],
      execute: function () { expose(); }
    };
  });
})(System);
