export const ru = {
  languageSelector: {
    en: 'Английский',
    ru: 'Русский',
  },
  linksButtons: {
    backToSignUp: 'Вернуться к регистрации ',
    signIn: 'Войти',
    signUp: 'Регистрация',
  },
  navBar: {
    contacts: 'Контакты',
    forgotPassword: 'Восстановить пароль',
    home: 'Главная',
    privacyPolicy: 'Политика конфиденциальности',
    profile: 'Профиль',
    signIn: 'Войти',
    signUp: 'Регистрация',
    termsOfService: 'Срок службы',
  },
  other: {
    agree: 'Я принимаю',
    and: 'и',
    haveAcc: 'У тебя уже есть аккаунт?',
  },
  privacyPolicy: {
    privacyPolicy: 'Политику конфиденциальности',
    termsOfService: 'Условия использования',
  },
  registerForm: {
    error: {
      email: {
        format: 'Необходимый формат example@example.ru',
      },
      password: {
        characters: 'Недопустимые символы',
        max: 'Максимальное количество знаков 20',
        min: 'Минимальное количество знаков 6',
      },
      passwordConfirm: 'Пароли должны совпадать',
      username: {
        characters: 'Недопустимые символы',
        max: 'Максимальное количество знаков 30',
        min: 'Минимальное количество знаков 6',
      },
    },
    fields: {
      email: 'Электронная почта',
      password: 'Пароль',
      passwordConfirm: 'Подтверждение пароля',
      username: 'Имя пользователя',
    },
  },
}
export type LocaleType = typeof ru
export type ErrorRegisterFormType = typeof ru.registerForm.error
