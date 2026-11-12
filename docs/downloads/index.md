---
title: 下载
description: 下载 LanMonitor Windows 桌面管理端，以及现代版和 Win7 兼容版 agent。
aside: false
sidebar: false
---

# 下载 LanMonitor

先在管理电脑上运行桌面管理端，再为需要接入的电脑安装 agent。免费试用支持 **1 台 agent 在线**。

<div class="download-grid">
  <section class="download-card">
    <span class="download-tag">管理电脑</span>
    <h2>桌面管理端</h2>
    <p class="download-platform">Windows 10 / 11 · x64</p>
    <p>设备预览、配置下发、截图归档与录像回看，适合在 Windows 电脑上集中管理。</p>
    <p class="download-runtime">自包含，无需安装 .NET。</p>
    <a class="download-button" href="https://github.com/neekin/lanmonitor-site/releases/latest/download/LanMonitor-desktop-win-x64.zip">下载桌面管理端</a>
  </section>
  <section class="download-card">
    <span class="download-tag">接入电脑</span>
    <h2>现代版 agent</h2>
    <p class="download-platform">Windows 10 / 11 · x64</p>
    <p>安装在需要接入的 Windows 电脑上，支持采集、录像补传和核心自动升级。</p>
    <p class="download-runtime">自包含，无需安装 .NET。</p>
    <a class="download-button" href="https://github.com/neekin/lanmonitor-site/releases/latest/download/LanMonitor-agent-win-x64.zip">下载现代版 agent</a>
  </section>
  <section class="download-card">
    <span class="download-tag">兼容旧设备</span>
    <h2>Win7 兼容版 agent</h2>
    <p class="download-platform">Windows 7 SP1 起 · x86 / x64</p>
    <p>为旧设备提供兼容客户端，可连接同一管理端并接受统一配置。</p>
    <p class="download-runtime">需预先安装 .NET Framework 4.8。</p>
    <a class="download-button" href="https://github.com/neekin/lanmonitor-site/releases/latest/download/LanMonitor-agent-win7.zip">下载 Win7 兼容版</a>
  </section>
</div>

下载由 GitHub Releases 提供，无需登录 GitHub。可查看[所有公开下载版本](https://github.com/neekin/lanmonitor-site/releases)，或下载 [SHA-256 校验文件](https://github.com/neekin/lanmonitor-site/releases/latest/download/SHA256SUMS.txt)。

## 如何开始

1. **启动管理端**：完整解压桌面管理端安装包，运行 `LanMonitor.Server.exe`。
2. **获取连接配置**：在管理端点击“客户端下载”，复制局域网下载地址，在需要接入的电脑上打开。此处下载的 agent 包会自动带上服务端连接参数。
3. **安装 agent**：完整解压，运行 `install-agent.bat` 并允许管理员权限，然后在管理端确认设备上线。

::: tip 通用包与自动配置包
官网提供的 agent 为通用包，需自行填写匹配管理端的服务器地址和接入密钥。部署时建议使用管理端“客户端下载”提供的安装包，批量安装更方便。
:::

需要更多接入额度，可查看[版本与授权](/product/license)，或[联系我们](/about)。
