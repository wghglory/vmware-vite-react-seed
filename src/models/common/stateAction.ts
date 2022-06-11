// reducer action state
export type Action<T, D> = {
  type: T[keyof T];
  payload?: D;
  error?: any;
  meta?: any;
};

export interface State<D> {
  error: any | null;
  data: D | null;
  isLoading: boolean;
}
