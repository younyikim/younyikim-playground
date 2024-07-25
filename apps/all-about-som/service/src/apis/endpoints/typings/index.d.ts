export interface SuccessDto<T = Record<string, unknown>> {
  success: boolean;
  message: string;
  data: T;
}
