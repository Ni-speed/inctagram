export const ru = {
  confirmEmail: {
    button: 'Войти',
    subTitle: 'Ваша электронная почта подтверждена',
    title: 'Поздравляем!',
  },
  languageSelector: {
    en: 'Английский',
    ru: 'Русский',
  },
  linksButtons: {
    backToSignIn: 'Вернуться к регистрации',
    backToSignUp: 'Вернуться к регистрации ',
    forgotPassword: 'Забыли пароль',
    newPass: 'Создать новый пароль',
    resendLink: 'Отправить ссылку повторно',
    sendLink: 'Отправить ссылку',
    signIn: 'Войти',
    signUp: 'Регистрация',
  },
  logInForm: {
    error: {
      emailNotConfirmed: 'Пользователь не подтвердил електронную почту.',
      incorrectInputData: 'Введены некорректные данные.',
      invalidPasswordOrEmail: 'Неверный адрес электронной почты, имя пользователя или пароль.',
      userNotCreated: 'Пользователь с таким именем или почтой не найде.',
    },
    password: 'Электронная почта или пароль неправильно. Попробуйте еще раз, пожалуйста',
    placeholder: {
      email: 'Введите адрес электронной почты',
      password: 'Введите пароль',
    },
  },
  modalEmailSent: {
    button: 'OK',
    mailResend: 'Cсылка для подтверждения вашего электронного ящика отправлена повторно на',
    textForgotPassword: 'Мы отправили ссылку для создания нового пароля на',
    textSignUp: 'Мы отправили ссылку для подтверждения вашего электронного ящика на',
    title: 'Электронное письмо отправлено',
  },
  modalInputEmail: {
    button: 'OK',
    title: 'Введите адрес электронной почты',
  },

  notConfirmEmail: {
    button: 'Повторно отправить ссылку',
    subTitle:
      'Похоже, срок действия ссылки для подтверждения истек. Не волнуйтесь, мы можем отправить ссылку еще раз.',
    title: 'Срок действия ссылки истек',
  },
  other: {
    agree: 'Я принимаю',
    and: 'и',
    dontHaveAcc: 'У вас нет учетной записи?',
    haveAcc: 'У тебя уже есть аккаунт?',
    infoExpired: 'Похоже, ссылка для восстановления пароля истекла. Попробуйте ещё раз',
    infoForgotPass: 'Введите свой адрес электронной почты',
    infoNewPass: 'Ваш пароль должен быть от 6 до 20 символов',
    infoSent:
      'Ссылка для восстановления пароля была отправлена на адрес электронной почты. Если вы не получили письмо отправьте ссылку повторно.',
  },
  privacyPolicy: {
    privacyPolicy: 'Политику конфиденциальности',
    termsOfService: 'Условия использования',
  },
  registerForm: {
    error: {
      email: {
        emailExist: 'Электронная почта существует',
        format: 'Недопустимый формат почты',
        incorrectInputData: 'Введены некорректные данные',
        requiredEmail: 'Обязательное поле Email',
      },
      login: {
        characters: 'Недопустимые символы',
        loginExist: 'Имя пользователя существует',
        max: 'Максимальное количество знаков 30',
        min: 'Минимальное количество знаков 6',
      },
      password: {
        characters: 'Недопустимые символы',
        max: 'Максимальное количество знаков 20',
        min: 'Минимальное количество знаков 6',
        reqConfirmPassword: 'Подтверждение  является обязательным',
        reqNewPassword: 'Пароль является обязательным',
      },
      passwordConfirm: 'Пароли должны совпадать',
    },
    fields: {
      email: 'Электронная почта',
      newPassword: 'Новый пароль',
      password: 'Пароль',
      passwordConfirm: 'Подтверждение пароля',
      username: 'Имя пользователя',
    },
  },
  titles: {
    expiredLinkPass: 'Ссылка восстановления пароля истекла',
    forgotPassword: 'Восстановление пароля',
    privacyPolicy: 'Политика конфиденциальности',
  },
}
export type LocaleType = typeof ru
export type ErrorRegisterFormType = typeof ru.registerForm.error
