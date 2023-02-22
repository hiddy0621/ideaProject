// オプショナルパラメーターを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('This is Correct Pattern' + 'username is ' + username)
    return true
  } else {
    console.log('This is NOT Correct Pattern')
    return false
  }
}

// デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (userId: string, username = 'NO-NAME'): boolean => {
  if (userId === 'ABC') {
    console.log('This is Correct Pattern' + 'username is ' + username)
    return true
  } else {
    console.log('This is NOT Correct Pattern')
    return false
  }
}

// レストパラメータを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal, productPrice) => {
    return prevTotal + productPrice
  }, 0)
}

// 呼び出しシグネチャ（省略記法)
type LogMessage = (message: string) => void
export const logMessage5: LogMessage = (message) => {
  console.log('With Signature', +message)
}

// 完全な呼び出し記法
type FullLogMessage = {
  (message: string): void
}
export const logMessage6: FullLogMessage = (message) => {
  console.log('With Signature fully', +message)
}
