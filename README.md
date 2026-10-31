# Bear Mines / 小熊礦場 — 離線版

完全脫離 Sekai 平台的本地版本。資料夾＋本地資源，無任何外部 CDN 依賴。

## 怎麼跑

**不能直接雙擊 index.html（file://）**——Cocos 引擎用 ES module / SystemJS，必須透過本機伺服器。

在這個資料夾裡開一個終端機，執行：

```bash
python3 -m http.server 8765
```

然後用瀏覽器打開：

```
http://localhost:8765/index.html
```

建議用 Chrome / Edge / Safari（需要 WebGL，行動版 Safari 也行）。

## 存檔

進度存在瀏覽器 localStorage（key：`bear-mines-save-v1`），與 Sekai 帳號無關。
左下角圓形按鈕可重新開始；右上角可切換 繁中/簡中/EN/日本語。

## 檔案說明

| 路徑 | 說明 |
|------|------|
| `index.html` | 主頁（殼、載入畫面、UI、i18n、開機、視覺替換、存檔 polyfill） |
| `runtime.js` | Cocos 引擎＋遊戲資源自包含 bundle（約 3.9 MB） |
| `cocos-js/cc.js` | 本地 shim：把內嵌的 `assets/internal/index.js` 註冊為 `cc` 模組 |
| `assets/images/*.webp` | logo、礦石圖示、載入畫面插圖 |
| `assets/audio/*.m4a` | 背景音樂、音效檔 |

## 已知事項

- 首次載入需要幾秒解包 3.9 MB bundle，屬正常。
- 若長時間卡在載入畫面，18 秒後會自動放行（安全機制），遊戲本體已在背景跑。
