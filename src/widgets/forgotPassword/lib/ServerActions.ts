import { useState } from 'react'

import axios from 'axios'
/*async function verifyCaptcha(token: null | string) {
  try {
    const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
      params: {
        response: token,
        secret: process.env.NEXT_PUBLIC_SECRET_KEY,
      },
    })

    // Проверяем, прошла ли проверка рекапчи успешно
    if (response.data.success) {
      // Проверка рекапчи пройдена успешно
      console.log('Проверка рекапчи пройдена успешно')
    } else {
      // Проверка рекапчи не пройдена успешно
      console.log('Проверка рекапчи не пройдена успешно')
    }
  } catch (error) {
    // Обработка ошибок при отправке запроса
    console.error('Ошибка при отправке запроса:', error)
    throw new Error('Failed Captcha')
  }
}*/
export const useCaptcha = () => {
  const [isVerified, setIsVerified] = useState<boolean>(true)

  function handleCaptchaSubmission() {
    setIsVerified(!isVerified)
  }

  return { handleCaptchaSubmission, isVerified }
}
