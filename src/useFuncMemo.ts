import { useMemo } from 'react'

//
// useFuncMemo: why type your arguments twice?
//
// Tired:
//
//   const someData = useSomeData()
//   const someMoreData = useSomeMoreData()
//
//   const result = useMemo(() => {
//     return processData(someData, someMoreData)
//   }, [someData, someMoreData])
//
// Wired:
//
//   const someData = useSomeData()
//   const someMoreData = useSomeMoreData()
//
//   const result = useFuncMemo(processData, someData, someMoreData)
//
export function useFuncMemo<Args extends any[], Result>(func: (...args: Args) => Result, ...args: Args) {
  return useMemo(() => func(...args), args) // eslint-disable-line react-hooks/exhaustive-deps
}
