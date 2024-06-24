import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

export function calculateDaysSince(startDate = '2022-05-02'): number {
  const start = dayjs(startDate).startOf('day'); // startDate의 시작 시간 설정
  const end = dayjs().endOf('day'); // 오늘 날짜의 끝 시간 설정

  const daysPassed = end.diff(start, 'day') + 1; // startDate부터 오늘까지의 일 수 계산

  return daysPassed;
}
