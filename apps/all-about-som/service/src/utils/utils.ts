/**
 * 현재 뷰포트 높이의 1%를 계산하여 --vh CSS 변수로 설정하는 함수
 * 이 함수는 주로 페이지 로드 시 호출되어 뷰포트의 높이에 따라 동적으로 높이를 조정할 때 사용
 */
export function setScreenHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
