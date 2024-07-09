# Monorepo 컨벤션

## 브랜치 관리 

- [Trunk based Development](https://trunkbaseddevelopment.com/)을 기반으로 브랜치를 관리합니다.
- `main` 브랜치
- `feature` 브랜치: 새로운 기능을 개발할 때는 피쳐 브랜치를 생성하여 작업하고, 완료 후에는 main 브랜치로 병합합니다.

#### 브랜치 네이밍 컨벤션

- `일반 커밋 브랜치`: 이슈 번호가 없는 경우, `[프로젝트 명]/[커밋 타입]` 형식으로 브랜치를 작성합니다.
  - 예: sample-app/feat, sample-app/fix
- `이슈 기반 브랜치`: 이슈 번호가 있는 경우, `[프로젝트 명]/issue[이슈 번호]` 형식으로 브랜치를 작성합니다.
  -  예: sample-app/issue1234

--- 

## 커밋 규칙
* [Commit lint](https://github.com/conventional-changelog/commitlint)와 [Husky](https://typicode.github.io/husky/)를 사용하여 커밋 메시지의 일관성과 품질을 관리합니다.
* 커밋 메세지 컨벤션으로 [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) 컨벤션을 사용합니다.
* [prepare-commit-msg](https://github.com/younyikim/younyikim-playground/blob/main/.husky/prepare-commit-msg) 스크립트를 사용하여 사용하여 아래와 같은 형식으로 커밋 메시지를 자동으로 포맷하고 있습니다.
  * 브랜치 이름에서 프로젝트 명을 추출하여 커밋 메시지에 추가하여 일관된 포맷을 유지합니다.
  * ex) `sample-app/feat` 브랜치에서의 아래와 같이 commit 하는 경우 : 
      ```
      git commit -m "feat: commit message"
      ```
      아래와 같이 자동 수정됩니다. 
      ```
      feat(sample-app) : commit message
      ```
