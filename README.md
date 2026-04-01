# Claude Code 源码精读

一本深度解析 Claude Code AI Agent 内部工程实现的中文技术文档，共 **14 章 84 篇**，基于 Docusaurus 3 构建。

[![Deploy to GitHub Pages](https://github.com/wzf1997/claude-code-guide/actions/workflows/deploy-gh-pages.yml/badge.svg)](https://github.com/wzf1997/claude-code-guide/actions/workflows/deploy-gh-pages.yml)

## 内容目录

| 章节 | 主题 | 篇数 |
|------|------|------|
| 第一章 | 认识 Claude Code | 4 |
| 第二章 | 项目全貌（导览） | 4 |
| 第三章 | 启动流程 | 4 |
| 第四章 | 查询循环（核心） | 6 |
| 第五章 | 工具系统 | 7 |
| 第六章 | 权限系统 | 5 |
| 第七章 | 状态管理与 UI | 5 |
| 第八章 | Skills 技能系统 | 5 |
| 第九章 | Memory 记忆系统 | 6 |
| 第十章 | 上下文管理与压缩 | 7 |
| 第十一章 | Subagent 与多任务系统 | 7 |
| 第十二章 | Hooks 机制深度解析 | 10 |
| 第十三章 | Agent Teams / Swarm 协作 | 11 |
| 第十四章 | 二次开发与生态 | 3 |

## 技术栈

- **Docusaurus 3.9.2** + React 19 + TypeScript 5.6
- **MDX 3**：文档中可嵌入 React 组件
- **pnpm** 包管理
- i18n 中文简体（zh-Hans）
- Giscus 评论系统
- 自定义颜色主题（Default / Ink / Paper）

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器（热重载）
pnpm start

# 构建静态网站
pnpm build

# 预览构建产物
pnpm serve

# TypeScript 类型检查
pnpm typecheck

# 清除 Docusaurus 缓存
pnpm clear
```

## 项目结构

```
claude-code-guide/
├── docs/                    # 文档内容（14 章）
│   ├── chapter-01-intro/
│   ├── chapter-02-overview/
│   └── ...
├── src/
│   ├── components/          # 自定义 React 组件
│   │   ├── ArticleComplete/ # 文章完成标记
│   │   ├── ChapterProgress/ # 章节进度徽章
│   │   ├── DifficultyBadge/ # 难度标签
│   │   ├── ProgressBar/     # 全局进度条
│   │   ├── SourceRef/       # 源码引用链接
│   │   └── ThemeSwitcher/   # 主题切换
│   ├── css/                 # 全局样式与主题配色
│   ├── hooks/               # useProgress 学习进度 Hook
│   ├── pages/               # 自定义首页
│   └── theme/               # Docusaurus 主题定制
├── docusaurus.config.ts     # 网站核心配置
└── sidebars.ts              # 侧边栏配置
```

## 部署

项目通过 GitHub Actions 自动部署至 GitHub Pages，`main` 分支推送后自动触发。同时支持 Vercel 自动部署。

## License

MIT
