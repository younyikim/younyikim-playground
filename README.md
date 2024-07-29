# younyikim-playground
 
> pnpm workspace를 활용하여 구성된 개인 프로젝트의 모노레포입니다.
> 
> 여러 개의 개인 프로젝트를 하나의 모노레포 구조로 관리하기 위해 만들어졌습니다.

### Monorepo 구조

```bash
younyikim-playground/
├── apps/                          # 여러 애플리케이션을 포함하는 디렉토리
│   ├── project-A/                 # A 프로젝트
├── packages/                      # 공통 패키지 및 라이브러리를 포함하는 디렉토리
├── scripts/                       
│   ├── scaffolding/               # 프로젝트 생성을 자동화하는 스크립트 디렉토리
├── pnpm-workspace.yaml            # pnpm workspace 설정 파일
├── package.json
```

### Applications & Packages

**프로젝트**

| 프로젝트 | 설명 | 링크 |
|----------|------|------|
| [All about my dog](https://github.com/younyikim/younyikim-playground/tree/main/apps/all-about-som) | 우리집 강아지 솜이를 소개하는 포트폴리오 웹 사이트입니다. | [![forthebadge](https://github.com/younyikim/younyikim-playground/assets/73516688/dd9945e8-14e5-4483-a182-6fe8ec0a7b96)](https://younyikim-playground.vercel.app/) |


**패키지**
| 프로젝트 | 설명 | 
|----------|------|
| [@younyikim/ui](https://github.com/younyikim/younyikim-playground/tree/main/packages/ui) | shadcn/ui 기반 커스텀 UI 컴포넌트 라이브러리입니다.|


**Scaffolding**

| 프로젝트 | 설명 |
|----------|------|
| [프론트엔드 프로젝트 템플릿](https://github.com/younyikim/younyikim-playground/tree/main/packages/frontend-template) | 프론트엔드 프로젝트에 사용하는 Vite 기반 React, TypeScript 템플릿입니다. |
| [프론트엔드 프로젝트 자동 생성 스크립트](https://github.com/younyikim/younyikim-playground/blob/main/scripts/scaffolding/create-react-project.sh) | 프론트엔드 프로젝트 생성과 초기 설정을 자동화하는 스크립트입니다. |


-----

### More Docs
- [Monorepo 설치 및 실행 가이드](https://github.com/younyikim/younyikim-playground/blob/main/docs/monorepo-install.md)
- [Monorepo Scaffolding으로 새로운 프로젝트 시작하기](https://github.com/younyikim/younyikim-playground/blob/main/docs/monorepo-scaffolding.md)
- [Monorepo 컨벤션 - 브랜치, 커밋](https://github.com/younyikim/younyikim-playground/blob/main/docs/monorepo-convention.md)
