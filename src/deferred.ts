export function Deferred<T>(): {
  resolve: (value: T | PromiseLike<T>) => void
  reject: (reason?: any) => void
  promise: Promise<T>
} {
  let resolve!: (value: T | PromiseLike<T>) => void
  let reject!: (reason?: any) => void

  const promise = new Promise<T>((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  })

  return { resolve, reject, promise }
}
