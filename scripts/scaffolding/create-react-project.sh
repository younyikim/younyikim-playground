#!/bin/bash

# 새로운 프로젝트 경로를 인수로 받습니다.
PROJECT_PATH=$1

# PROJECT_PATH의 깊이(depth)를 계산합니다.
# '/' 문자의 개수로 깊이를 계산합니다.
depth=$(tr -cd '/' <<< "$PROJECT_PATH" | wc -c)

# PROJECT_PATH 경로 유효성 검사
# ex) ./script.sh apps/new-project-name 형식으로 사용
if [ -z "$PROJECT_PATH" ]; then
  echo "🚫 프로젝트 경로를 입력해주세요. Usage: $0 <project-path/project-name>"
  exit 1
fi

# depth가 1 이하인 경우 에러 발생
if [ $depth -le 0 ]; then
  echo "🚫 유효하지 않은 프로젝트 경로입니다."
  exit 1
fi

# 템플릿 디렉토리 경로
TEMPLATE_DIR=packages/frontend-template

# 새로운 프로젝트 디렉토리 생성
mkdir -p "$PROJECT_PATH" 
echo "✅ 새로운 프로젝트 디렉토리를 생성했습니다 : "$PROJECT_PATH""

# 템플릿 파일 복사
cp -R $TEMPLATE_DIR/. $PROJECT_PATH
cp -R $TEMPLATE_DIR/.gitignore $PROJECT_PATH  # 숨김 파일도 복사

echo "✅ 새로운 프로젝트가 생성되었습니다."

# 새로운 프로젝트 이름 설정 (디렉토리 경로를 기반으로)
SECOND_LEVEL_DIR=$(echo "$PROJECT_PATH" | cut -d'/' -f2)

# 새로운 프로젝트의 packgae.json의 name 필드 설정
# ex) @all-about-som/service 형식
PACKAGE_NAME="@${SECOND_LEVEL_DIR}/service"

# 새로운 프로젝트의 package.json 파일 경로
PACKAGE_JSON_PATH=$PROJECT_PATH/package.json

# package.json 파일의 name 필드를 업데이트
jq --arg name "$PACKAGE_NAME" '.name = $name' $PACKAGE_JSON_PATH > tmp.$$.json && mv tmp.$$.json $PACKAGE_JSON_PATH

echo "✅ package.json의 name 필드를 수정했습니다: $PACKAGE_NAME"

# 새로운 프로젝트의 tsconfig.json 파일 경로
TSCONFIG_PATH=$PROJECT_PATH/tsconfig.json

# extends 경로 설정
if [ $depth -eq 2 ]; then
  # PROJECT_PATH의 깊이가 3인 경우 ex) apps/project-test/service
  extends="../../../tsconfig.base.json"
elif [ $depth -eq 1 ]; then
  # PROJECT_PATH의 깊이가 2인 경우 ex) apps/project-test
  extends="../../tsconfig.base.json"
else
  echo "🚫 유효하지 않은 프로젝트 경로입니다."
  exit 1
fi

# tsconfig.json 파일의 extends 경로를 설정합니다.
jq '.extends = $extends' --arg extends "$extends" "$TSCONFIG_PATH" > tmp.$$.json && mv tmp.$$.json "$TSCONFIG_PATH"

echo "✅ tsconfig의 extends 경로를 수정했습니다: $extends"

# pnpm-workspace.yaml 파일 경로
PNPM_WORKSPACE_PATH="pnpm-workspace.yaml"

# 깊이가 3인 경우에만 경로 추가
# ex) apps/project-test/service => workspace에 경로 추가 ('apps/project-test/*')
# ex) apps/project-test => 경로 추가하지 않아도 됨 ('apps/*'로 처리된다)
if [ $depth -eq 2 ]; then
  # 프로젝트명 추출
  # ex) apps/project-test/service -> apps/project-test 추출
  WORKSPACE_PROJECT_NAME=$(echo "$PROJECT_PATH" | awk -F'/' '{print $1 "/" $2}')

# pnpm-workspace.yaml에 workspace 추가
echo "  - '$WORKSPACE_PROJECT_NAME/*'" >> "$PNPM_WORKSPACE_PATH"

echo "✅ pnpm-workspace.yaml에 '$WORKSPACE_PROJECT_NAME/*'를 추가했습니다."
fi

# 프로젝트 의존성 설치
pnpm install

# 새로운 스크립트 이름
# ex) apps/project-test/service -> project-test:service
NEW_SCRIPT_NAME="$SECOND_LEVEL_DIR:service"
NEW_SCRIPT="pnpm --filter $PACKAGE_NAME"

# Root package.json의 scripts 섹션에 새로운 스크립트를 추가합니다.
jq --arg key $NEW_SCRIPT_NAME --arg value "$NEW_SCRIPT" '.scripts[$key] = $value' package.json > tmp.$$.json && mv tmp.$$.json package.json

echo "✅ Root의 package.json에 새로운 스크립트 '$NEW_SCRIPT_NAME : $NEW_SCRIPT'가 추가되었습니다."
echo "🎉 HAPPY CODING!"