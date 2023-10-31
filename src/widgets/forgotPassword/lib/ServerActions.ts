import { useState } from 'react'

import axios from 'axios'

async function verifyCaptcha(token: null | string) {
  const res = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${'process.env.NEXT_PUBLIC_SECRET_KEY'}&response=${token}`
  )

  if (res.data.success) {
    return 'success!'
  } else {
    throw new Error('Failed Captcha')
  }
}
export const useCaptcha = () => {
  const [isVerified, setIsverified] = useState<boolean>(false)

  async function handleCaptchaSubmission(token: null | string) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false))
  }

  return { handleCaptchaSubmission, isVerified }
}
