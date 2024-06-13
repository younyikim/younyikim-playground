# younyikim-playground

> pnpm workspace 활용 개인 프로젝트 monorepp입니다.
> 여러 개의 개인 프로젝트를 하나의 모노레포 구조로 관리하기 위해 만들어졌습니다.

### 프로젝트 구조

```bash
younyikim-playground/
├── apps/                          # 여러 애플리케이션을 포함하는 디렉토리
│   ├── project-A/                 # A 프로젝트
│   │   ├── client/                # A 프로젝트의 클라이언트 코드
│   │   ├── server/                # A 프로젝트의 서버 코드
├── packages/                      # 공통 패키지 및 라이브러리를 포함하는 디렉토리
├── pnpm-workspace.yaml            # pnpm workspace 설정 파일
├── package.json
```

### Applications

현재 1개의 프로젝트가 있습니다.

<!-- 추후 추가 -->
<!-- - All about my dog : 우리집 강아지 솜이를 소개하는 포트폴리오 웹 사이트입니다. -->

- [Sample App](https://github.com/younyikim/younyikim-playground/tree/main/apps/sample-app) : Vite, React, Typescript 기반 테스트 웹 애플리케이션입니다.

### 설치

1. 레포지토리를 클론합니다.

```bash
git clone https://github.com/younyikim/younyikim-playground.git
```

2. 의존성 설치

```bash
pnpm i
```

### 로컬 환경에서 실행하기

1. 원하는 앱 실행하기

Root의 `package.json`에 각 애플리케이션을 즉시 실행할 수 있도록 스크립트를 추가했습니다. `app/` 내부의 프로젝트를 실행하려면, Root에서 바로 실행하면 됩니다.

ex) `sample-app` 실행하기

```bash
pnpm sample-app dev
```

### 브랜치 관리 전략

- [Trunk based Development](https://trunkbaseddevelopment.com/)을 기반으로 브랜치를 관리합니다.
- `main` 브랜치 하나만 운영하며, 신규 기능은 피쳐 브랜치를 생성하여 작업하고 며칠 내로 `main`에 merge 합니다.

##### 브랜치 네이밍 컨벤션

- 신규 기능을 개발하는 브랜치는 `[프로젝트 명]/[prefix]` 형식으로 작성합니다.
  ex) `sample-app/feat`, `sample-app/fix`

### Monorepo Project 템플릿 사용하기

pnpm 기반 monorepo 템플릿으로 프로젝트를 시작하고 싶다면? [younyikim/pnpm-monorepo 레포지토리 바로가기](https://github.com/younyikim/pnpm-monorepo)
