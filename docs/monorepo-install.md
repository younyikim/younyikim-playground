# Monorepo 설치 및 실행 가이드

### 레포지토리 클론 및 의존성 설치

1. 레포지토리 클론하기

```bash
git clone https://github.com/younyikim/younyikim-playground.git
```

2. 의존성 설치

```bash
pnpm i
```

### 로컬 환경에서 실행하기
Root의 package.json에 각 애플리케이션을 즉시 실행할 수 있는 스크립트가 추가되어 있습니다. 원하는 애플리케이션을 실행하려면, 다음과 같이 명령어를 실행합니다.

* 예를 들어, `apps/all-about-som` 프로젝트를 실행하려면 :
```bash
// Root의 pacakge.json
"scripts": {
  "som:service": "pnpm --filter @all-about-som/service",
},
```
```bash
$ pnpm som:service dev // all-about-som 프로젝트 실행
```
