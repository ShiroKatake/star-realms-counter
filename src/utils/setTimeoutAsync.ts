interface CancelablePromise extends Promise<void> {
  clear(): void;
}

export const setTimeoutAsync = (ms: number): CancelablePromise => {
  let timeoutId: NodeJS.Timeout;

  const promise = new Promise<void>(resolve => {
    timeoutId = setTimeout(resolve, ms);
  }) as CancelablePromise;

  promise.clear = () => clearTimeout(timeoutId);
  return promise;
}