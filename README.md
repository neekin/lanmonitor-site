# LanMonitor 官网

LanMonitor（局域网桌面监控系统）的产品官网，基于 [VitePress](https://vitepress.dev/) 构建，部署在 GitHub Pages。

**线上地址**：https://neekin.github.io/lanmonitor-site/

## 本地开发

```bash
npm install
npm run dev        # 开发服务器
npm run build      # 构建到 docs/.vitepress/dist
npm run preview    # 本地预览构建产物
```

## 部署

推送到 `main` 分支后，GitHub Actions（`.github/workflows/deploy.yml`）自动构建并发布到 GitHub Pages，无需手动操作。

> 仓库 Settings → Pages → Source 需设为 **GitHub Actions**（首次部署前配置一次）。

## 站点结构

```
docs/
├─ index.md              # 首页
├─ product/
│  ├─ index.md           # 产品概述
│  ├─ features.md        # 核心功能
│  └─ license.md         # 版本与授权
├─ about.md              # 关于我们（联系方式）
└─ .vitepress/
   ├─ config.mts         # 站点配置
   └─ theme/             # 自定义主题（商务深蓝风格）
```
