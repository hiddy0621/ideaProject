// アロー関数
export const logMessage = (message: string): void => {
  console.log('ここにメッセージくるよ❶', message)
}

// 名前つき関数
export function logMessage2(message: string): void {
  console.log('ここにメッセージくるよ❷', message)
}

// 関数式
export const logMessage3 = function (message: string): void {
  console.log('ここにメッセージくるよ❸', message)
}

// アロー関数の省略式
export const logMessage4 = (message: string): void => console.log('ここにメッセージくるよ④', message)

// エラーを投げる関数
export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}
