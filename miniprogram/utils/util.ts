
const formatNumber = (n: number): string  => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

export const formatTime = (date: Date): string => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

export const formatMonthDate = (date: Date): string => {
  const now = new Date()
  if(now.toDateString() == date.toDateString()){
    return '今日'
  }
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${month}月${day}日`
}
