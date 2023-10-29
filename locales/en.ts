import { LocaleType } from './ru'

export const en: LocaleType = {
  languageSelector: {
    en: 'English',
    ru: 'Russian',
  },
  linksButtons: {
    backToSignIn: 'Back to Sign In',
    backToSignUp: 'Back to Sig Up ',
    newPass: 'Create New Password',
    resendLink: 'Resend Link',
    sendLink: 'Send Link',
    signIn: 'Sign In',
    signUp: 'Sign Up',
  },
  titles: {
    forgotPassword: 'Забыли пароль',
    expiredLinkPass: 'Password Recovery link expired',
  },
  navBar: {
    contacts: 'Contacts',
    forgotPassword: 'Forgot Password',
    home: 'Home',
    privacyPolicy: 'Privacy Policy',
    profile: 'Profile',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    termsOfService: 'Term Of Service',
  },
  other: {
    agree: 'I agree to the',
    and: 'and',
    haveAcc: 'Do you have an account?',
    infoExpired:
      'Looks like the verification link hasexpired. Not to worry, we can send the link again',
    infoForgotPass: 'Enter your email address and we will send you further instructions',
    infoNewPass: 'Your password must be between 6 and 20 characters',
  },
  privacyPolicy: {
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
  },
  registerForm: {
    error: {
      email: {
        format: 'Required format example@example.com',
      },
      password: {
        characters: 'Invalid characters present',
        max: 'Maximum number of characters 20',
        min: 'Minimum number of characters 6',
      },
      passwordConfirm: 'The passwords must match',
      username: {
        characters: 'Invalid characters present',
        max: 'Maximum number of characters 30',
        min: 'Minimum number of characters 6',
      },
    },
    fields: {
      email: 'Email',
      newPassword: 'New Password',
      password: 'Password',
      passwordConfirm: 'Password confirmation',
      username: 'Username',
    },
  },
}
