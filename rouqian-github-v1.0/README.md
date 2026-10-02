# 揉钱 · GitHub Pages 网页版 1.0

适用于 Mac 浏览器和 iPhone Safari，可添加到主屏幕；不需要微信开发者工具、Xcode、npm、服务器或 API 密钥。

## 最短发布步骤

1. 在 GitHub 创建名为 `rouqian` 的 **Public** 仓库，勾选 **Add a README file**，点 **Create repository**。
2. 解压下载的 ZIP，进入包含 `index.html` 的那一层。
3. 仓库选择 **Add file → Upload files**。把这一层的所有文件直接拖入上传区，点 **Commit changes**。
4. 确认仓库首页直接显示 `index.html`、`app.js`、`style.css`、`sw.js` 等，而不是只有 ZIP 或一层额外文件夹。
5. 仓库 **Settings → Pages → Build and deployment**：Source 选 **Deploy from a branch**；Branch 选 **main**，目录选 **/(root)**，点 **Save**。
6. 等待部署完成，以 Pages 页面出现的 **Visit site** 链接为准。一般格式为 `https://你的用户名.github.io/rouqian/`。
7. iPhone 用 Safari 打开该网址：分享 → 添加到主屏幕；若看到「作为 Web App 打开」，将其开启。

更详细的中文步骤、排错和备份说明见 `GUIDE.html`，可在电脑双击阅读。这个文件也是网站内「安装、发布与使用说明」的目标。

## 能用什么

- 每月／每周总预算，先设总额再分配项目；支持新增、删除项目。
- 长按或点击切分，拖动额度到另一项目；也支持输入精确金额、选择目标转移。
- 记账、单步撤销、按项目查看周期账单。
- 备注完全相同才合并；空备注逐笔保留。
- 上期比较、历史多期平均（只比较同类周期，至少两期）。
- 结束本期并开始新周期；新周期额度重新分配，历史账单保留。
- 本地保存、JSON 备份导出／恢复、安装图标、Service Worker 离线缓存。

## 数据边界

数据存在当前网站路径的浏览器存储，不会上传 GitHub 或发送给其他使用者。同一网址的不同设备、不同浏览器和主屏幕 App 可能使用不同存储。请选定主屏幕 App 作为固定入口，并定期导出备份。

备份包含私人账单，不要上传公共仓库；在备份恢复前先导出当前账本。恢复会替换，不会合并。
清理网站数据、删除 App、切换域名或仓库路径可能使旧数据不可用。网站正常更新不会主动清除账本。

若网站检测到无法读取的旧账本，会保留存储并阻止修改。导出可保存原始内容以便排查；不要清空浏览器数据。

## 技术与限制

纯静态 HTML/CSS/JS，无 CDN 依赖、没有自动云同步、没有登录、没有支付或后台通知。第一期从打开当月开始，后续周期手动开启，不自动结账。

离线需要先联网打开并等待「离线缓存已准备」。浏览器可能回收缓存或本地数据，离线能力不能代替备份。

这是原生小程序功能的网页实现，不直接执行 WXML。聊天中的试用数据及小程序数据不会自动导入。

已有逻辑验证覆盖转账守恒、备注分组、跨期比较和备份校验；本环境未完成真实 Safari/iPhone 和 GitHub 线上测试。导入 GitHub 后请用少量测试记录验证再正式记账。

## 更新

先导出账本，再将新版同名文件上传原仓库，Pages 会重新部署。代码发布者需要每次递增 `sw.js` 中的 VERSION。保持域名、仓库名称和打开路径稳定。更新后联网重开应用，必要时刷新；不要通过清除网站数据来更新。

## 官方参考

- GitHub Pages 发布设置：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- GitHub Pages 创建网站：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- iPhone 添加网页到主屏幕：https://support.apple.com/guide/iphone/iphea86e5236/ios
- Mac 添加网页到 Dock：https://support.apple.com/104996
