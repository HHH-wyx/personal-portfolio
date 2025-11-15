# 个人主页项目

一个使用 Next.js (App Router) + Tailwind CSS 构建的现代化个人主页项目。

## 功能特性

- ✅ 响应式设计（移动优先）
- ✅ 单页应用，包含 Hero、About、Projects、Contact 四个部分
- ✅ 组件化架构
- ✅ 滚动动画效果
- ✅ SEO 优化（OpenGraph、Twitter Cards）
- ✅ 可访问性支持（ARIA、语义化标签）
- ✅ 数据驱动（JSON 配置）

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **部署**: Vercel（推荐）

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

### 代码检查

```bash
npm run lint
```

## 项目结构

```
personal-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局（SEO 配置）
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Navbar.tsx        # 导航栏
│   ├── Hero.tsx          # 首页 Hero 区域
│   ├── About.tsx         # 关于我
│   ├── Projects.tsx      # 项目展示
│   ├── Contact.tsx       # 联系表单
│   └── Footer.tsx        # 页脚
├── content/              # 数据文件
│   └── data.json        # 个人信息配置
└── public/              # 静态资源
    └── avatar.jpg       # 头像图片（需要添加）
```

## 配置个人信息

编辑 `content/data.json` 文件，替换为您的真实信息：

- `personal`: 个人信息（姓名、标题、简介等）
- `social`: 社交媒体链接
- `about`: 关于我部分的内容和技能
- `projects`: 项目列表
- `contact`: 联系方式

## 添加头像

将您的头像图片命名为 `avatar.jpg` 并放置在 `public/` 目录下。

## 添加项目图片

将项目图片放置在 `public/` 目录下，并在 `content/data.json` 中引用（如 `/project1.jpg`）。

## 部署到 Vercel

### 方法一：通过 Vercel 网站

1. 将代码推送到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 点击 "New Project"
4. 导入您的 GitHub 仓库
5. 点击 "Deploy"

### 方法二：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 环境变量

通常不需要额外的环境变量配置。

## 自定义样式

### 修改主题色

编辑 `app/globals.css` 中的 CSS 变量：

```css
:root {
  --primary: #5B8DEF;    /* 主色调 */
  --secondary: #7BDAA1;  /* 辅助色 */
}
```

### 修改卡片样式

在组件中使用 Tailwind 类名调整：
- 圆角：`rounded-lg` (8px)
- 悬停阴影：`hover:shadow-lg`
- 过渡：`transition-all duration-200`

## 浏览器支持

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## 许可证

MIT

## 贡献

欢迎提交 Issue 和 Pull Request！

