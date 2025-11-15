# 部署指南 - GitHub & Vercel

## 第6步：接入 GitHub & 推送首版代码

### 1. 初始化 Git 仓库

```bash
git init
```

### 2. 配置 Git 用户信息（如果还没配置）

```bash
git config user.name "您的姓名"
git config user.email "your.email@example.com"
```

### 3. 添加所有文件并提交

```bash
git add .
git commit -m "Initial commit: 个人主页项目"
```

### 4. 在 GitHub 上创建新仓库

1. 访问 [github.com](https://github.com)
2. 点击右上角的 **"+"** → **"New repository"**
3. 填写仓库信息：
   - **Repository name**: `personal-portfolio`（或您喜欢的名称）
   - **Description**: 个人主页项目
   - **Visibility**: 选择 **Public**（公开）或 **Private**（私有）
   - **不要**勾选 "Initialize this repository with a README"（我们已经有了）
4. 点击 **"Create repository"**

### 5. 连接本地仓库到 GitHub

创建仓库后，GitHub 会显示命令，执行以下命令（替换 `YOUR_USERNAME` 为您的 GitHub 用户名）：

```bash
git remote add origin https://github.com/YOUR_USERNAME/personal-portfolio.git
git branch -M main
git push -u origin main
```

**注意**：如果使用 SSH，命令是：
```bash
git remote add origin git@github.com:YOUR_USERNAME/personal-portfolio.git
```

### 6. 输入 GitHub 凭证

推送时可能需要输入：
- **用户名**：您的 GitHub 用户名
- **密码**：使用 Personal Access Token（不是 GitHub 密码）

**如何创建 Personal Access Token：**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 点击 "Generate new token (classic)"
3. 勾选 `repo` 权限
4. 生成后复制 token，用作密码

---

## 第7步：Vercel 一键上线

### 方法一：通过 Vercel 网站（推荐）

1. **访问 Vercel**
   - 打开 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 **"Add New..."** → **"Project"**
   - 在 "Import Git Repository" 中找到您的 `personal-portfolio` 仓库
   - 点击 **"Import"**

3. **配置项目**
   - **Framework Preset**: Next.js（应该自动检测）
   - **Root Directory**: `./`（默认）
   - **Build Command**: `npm run build`（默认）
   - **Output Directory**: `.next`（默认）
   - **Install Command**: `npm install`（默认）

4. **部署**
   - 点击 **"Deploy"**
   - 等待部署完成（通常 1-2 分钟）

5. **获取公开链接**
   - 部署完成后，Vercel 会提供一个链接，例如：
     `https://personal-portfolio-xxx.vercel.app`
   - 这个链接就是您的网站公开地址！

### 方法二：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 在项目目录中运行
vercel

# 按照提示操作：
# - 登录 Vercel 账号
# - 选择项目设置
# - 确认部署
```

### 自动部署

部署后，每次您推送代码到 GitHub 的 `main` 分支，Vercel 会自动重新部署您的网站！

---

## 常见问题

### Q: 推送代码时提示认证失败？
A: 使用 Personal Access Token 而不是 GitHub 密码。

### Q: Vercel 部署失败？
A: 检查：
- `package.json` 中的脚本是否正确
- 构建日志中的错误信息
- 确保所有依赖都已正确安装

### Q: 如何自定义域名？
A: 在 Vercel 项目设置中，点击 "Domains" 添加您的自定义域名。

---

## 完成后的检查清单

- [ ] Git 仓库已初始化
- [ ] 代码已推送到 GitHub
- [ ] Vercel 项目已创建
- [ ] 网站已成功部署
- [ ] 可以访问公开链接
- [ ] 自动部署已启用

恭喜！您的个人主页已经上线了！🎉

