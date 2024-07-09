# Monorepo Scaffolding으로 새로운 프로젝트 시작하기

해당 Monorepo에서는 Bash 스크립트를 사용하여 Vite 기반 React, TypeScript 프로젝트를 자동 생성하는 Scaffolding을 제공합니다.
이 문서에서는 해당 Scaffolding을 사용해 새 프로젝트를 시작하는 방법에 대해 설명합니다. 

## 목차

1. [Scaffolding이란?](#scaffolding이란)
2. [Monorepo Scaffolding 소개](#monorepo-scaffolding-소개)
3. [Monorepo Scaffolding 사용 방법](#monorepo-scaffolding-사용-방법)
   - [프로젝트 생성](#1-프로젝트-생성)
   - [프로젝트 실행](#2-프로젝트-실행)
4. [Monorepo Scaffolding 상세 설명](#monorepo-scaffolding-상세-설명)
   - [1. Bash 스크립트 실행](#1-bash-스크립트-실행)
   - [2. 프로젝트 디렉토리 & 프로젝트 생성](#2-프로젝트-디렉토리--프로젝트-생성)
   - [3. 기본 설정 파일 수정](#3-기본-설정-파일-수정)
   - [4. 의존성 설치](#4-의존성-설치)

----


## Scaffolding이란?

> 새로운 프로젝트나 모듈을 시작할 때 초기 구조와 설정을 자동으로 생성해주는 도구나 프로세스를 말합니다.
> 이는 개발자가 반복적으로 수행해야하는 초기 설정 작업을 자동화하여 생산성을 높이고 일관된 프로젝트 구조를 유지하는 데 도움을 줍니다.

## Monorepo Scaffolding 소개

해당 Monorepo에서 제공하는 Scaffolding은 다음을 포함합니다 : 

* Vite의 react-ts 템플릿 기반 프로젝트 생성
* 기본적인 설정 파일 제공 (`tsconfig.json`, `vite.config.ts` 등)
* 기본적인 프로젝트 구조, 절대 경로 설정 제공
* Root에 프로젝트 실행 스크립트 추가
* 공통 패키지 및 의존성 관리
  * Tailwind CSS
  * react-router-dom
  * ESLint, Prettier, Husky, Commit Lint
 
## Monorepo Scaffolding 사용 방법

#### 1. 프로젝트 생성
Monorepp의 Root에서 아래 명령어를 실행하여 새로운 프로젝트를 생성합니다.

```bash
pnpm scaffolding:frontend <project-path>

# eg. pnpm scaffolding:frontend apps/new-project
```

#### 2. 프로젝트 실행

프로젝트 생성이 완료된 후, 아래 명령어를 통해 새로운 프로젝트를 실행합니다.    

Monoreopo Scaffolding 사용 시, 프로젝트 실행에 의존성 설치 등 필요한 모든 설정과 환경이 제공되기 때문에 별도의 설정 없이 새로운 프로젝트를 실행할 수 있습니다.

```bash
pnpm <project-name> dev

# eg. pnpm new-project:service dev
```

## Monorepo Scaffolding 상세 설명 

`pnpm scaffolding:frontend <project-path>` 명령을 실행하면, 다음과 같은 과정이 자동으로 진행됩니다:

명령어 예시
```bash
pnpm scaffolding:frontend apps/new-project
```

#### 1. Bash 스크립트 실행
위의 명령어가 실행되면 [create-react-project.sh](https://github.com/younyikim/younyikim-playground/blob/main/scripts/scaffolding/create-react-project.sh) 스크립트가 실행되며, 아래의 동작들을 순차적으로 진행합니다.   


#### 2. 프로젝트 디렉토리 & 프로젝트 생성:

`apps/new-project` 디렉토리가 생성되며, 해당 디렉토리에 Vite 기반 React, TypeScript 프로젝트 템플릿([`packages/frontend-template`](https://github.com/younyikim/younyikim-playground/tree/main/packages/frontend-template))파일을
복사합니다. 

#### 3. 기본 설정 파일 수정

복제한 템플릿 프로젝트에서 프로젝트 이름, 경로 등을 새로운 프로젝트에 맞게 변경합니다.

**① 프로젝트 이름 수정**
  
Monorepo 프로젝트 내에서 식별되는 데 사용될 새로운 프로젝트의 이름(package.json의 name 필드)을 설정합니다.

  * 경로의 depth가 1인 경우
    ```bash
    "name" : "@[프로젝트 경로]/service"
    # eg. apps/new-project -> "name" : "@new-project/service"
    ```
  * 경로의 depth가 2인 경우
    ```bash
    "name" : "@[프로젝트 경로1]/[프로젝트 경로2]"
    # eg. apps/new-project/admin -> "name" : "@new-project/admin"
    # eg. apps/new-project/client -> "name" : "@new-project/client"
    ```

**②프로젝트 실행 스크립트 추가**
  
특정 프로젝트를 실행 시, 매번 해당 디렉토리로 이동하지 않고 Root에서 실행, 빌드 등의 명령어를 수행할 수 있도록 Root의 package.json에 스크립트를 추가합니다.
위에서 사용된 프로젝트 이름에 맞추어 스크립트가 자동 생성됩니다.

  * 경로의 depth가 1인 경우
    ```bash
     "scripts": {
      "[프로젝트 경로]:service" : "pnpm --filter [프로젝트 이름]"
     },
    # eg. apps/new-project -> "new-project:service" : "pnpm --filter @new-project/service"
    ```
  * 경로의 depth가 2인 경우
    ```bash
    "scripts": {
      "[프로젝트 경로1]:[프로젝트 경로2]" : "pnpm --filter [프로젝트 이름]"
     },
    # eg. apps/new-project/admin -> "new-project:admin" : "pnpm --filter @new-project/admin"
    # eg. apps/new-project/client -> new-project:client" : "pnpm --filter @new-project/client"
    ```

**③ 기타 설정 수정**    

이외 기본 설정 수정은 [create-react-project.sh](https://github.com/younyikim/younyikim-playground/blob/main/scripts/scaffolding/create-react-project.sh)에서 확인하실 수 있습니다.



#### 4. 의존성 설치

`pnpm install` 명령어가 실행되어, 관련 패키지를 모두 설치합니다. 
