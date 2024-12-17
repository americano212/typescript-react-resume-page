# 📜 Resume web-page source code Repository
🌐 서비스 주소: https://resume.dongjun.me

## 💻 프로젝트 소개
개인 이력서를 웹페이지로 제공하는 프로젝트입니다. 텍스트 기반인 해외 이력서 양식으로 제작되었으며, 언어를 변경할 수 있는 기능을 제공합니다.

## 🔧 주요기능
1. 가벼운 이력서 페이지를 신속하게 제작하고 배포하는 기능
2. 영어/한국어로 빠른 텍스트 변환 기능 제공

## 🔨 Dev Guide
### ⚙ Dev Environment
- `react: 18.2.0`
- `typescript: 4.8.4`
- `redux: 4.2.0`
- **Infra Structure**: AWS S3 with CDN (managed by Terraform)
- **CI/CD**: CI/CD with `github actions`

### Init Project
1. Install npm dependencies `npm ci`
2. Run project Dev mode `npm start`

### Deploy Project
1. Check build is successful `npm run build`
2. Add `AWS_ACCESS_KEY` in github secrets
3. Push main branch

### 📁 Directory Structure
```bash
# cd src && tree
├─assets # static text data by JSON format
│  └─datas
├─components
│  └─atoms
├─pages
├─store
│  └─modules
├─styles
└─types
```