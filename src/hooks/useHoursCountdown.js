import { useState } from "react"

export const useHoursCountdown = (date, { hours, minutes, secs }) => {
  const [countdown, setCountdown] = useState({})

  setInterval(() => {
    const targetDate = new Date(date)
    targetDate.setHours(hours, minutes, secs)
    const cSecs = (targetDate - Date.now()) / 1000
    const cMinutes = cSecs / 60
    const cHours = cMinutes / 60
    setCountdown({ cHours, cMinutes, cSecs })
  }, 1000)

  return countdown
}
