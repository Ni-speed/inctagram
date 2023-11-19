import { useState } from 'react'

export const useCaptcha = () => {
  const [isVerified, setIsVerified] = useState<boolean>(true)

  function handleCaptchaSubmission() {
    setIsVerified(!isVerified)
  }

  return { handleCaptchaSubmission, isVerified }
}
