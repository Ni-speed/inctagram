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
    backToSignUp: 'Вернуться к регистрации ',
    signIn: 'Войти',
    signUp: 'Регистрация',
  },
  modalSignUp: {
    button: 'OK',
    text: 'Мы отправили ссылку для подтверждения вашего электронного ящика на адрес epam@epam.com.',
    title: 'Электронное письмо отправлено',
  },
  navBar: {
    confirmEmail: 'Подтверждение электронной почты',
    contacts: 'Контакты',
    forgotPassword: 'Восстановить пароль',
    home: 'Главная',
    privacyPolicy: 'Политика конфиденциальности',
    profile: 'Профиль',
    signIn: 'Войти',
    signUp: 'Регистрация',
    termsOfService: 'Срок службы',
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
