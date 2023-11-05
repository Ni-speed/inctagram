import { LocaleType } from './ru'

export const en: LocaleType = {
  confirmEmail: {
    button: 'Sign In',
    subTitle: 'Your email has been confirmed',
    title: 'Congratulations!',
  },
  languageSelector: {
    en: 'English',
    ru: 'Russian',
  },
  linksButtons: {
    backToSignIn: 'Back to Sign In',
    backToSignUp: 'Back to Sig Up ',
    forgotPassword: 'Forgot Password',
    newPass: 'Create New Password',
    resendLink: 'Resend Link',
    sendLink: 'Send Link',
    signIn: 'Sign In',
    signUp: 'Sign Up',
  },
  logInForm: {
    password: 'The email or password are incorrect. Try again please',
  },
  modalEmailSent: {
    button: 'ОК',
    textForgotPassword: 'We have sent a link to your email to',
    textSignUp: 'We have sent a link to confirm your email to epam@epam.com',
    title: 'Email sent',
  },
  navBar: {
    confirmEmail: 'Сonfirm Email',
    contacts: 'Contacts',
    forgotPassword: 'Forgot Password',
    home: 'Home',
    privacyPolicy: 'Privacy Policy',
    profile: 'Profile',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    termsOfService: 'Term Of Service',
  },
  notConfirmEmail: {
    button: 'Resend verification link',
    subTitle:
      'Looks like the verification link has expired. Not to worry, we can send the link again',
    title: 'Email verification link expired',
  },
  other: {
    agree: 'I agree to the',
    and: 'and',
    dontHaveAcc: 'Don’t have an account?',
    haveAcc: 'Do you have an account?',
    infoExpired:
      'Looks like the verification link hasexpired. Not to worry, we can send the link again',
    infoForgotPass: 'Enter your email address and we will send you further instructions',
    infoNewPass: 'Your password must be between 6 and 20 characters',
    infoSent:
      'The link has been sent by email.\n' +
      '                If you don’t receive an email send link again',
  },
  privacyPolicy: {
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
  },
  registerForm: {
    error: {
      email: {
        format: 'Invalid format of email',
        requiredEmail: 'Email is required',
      },
      login: {
        characters: 'Invalid characters present',
        max: 'Maximum number of characters 30',
        min: 'Minimum number of characters 6',
      },
      password: {
        characters: 'Invalid characters present',
        max: 'Maximum number of characters 20',
        min: 'Minimum number of characters 6',
        reqConfirmPassword: ' Password confirmation is required',
        reqNewPassword: ' New password is required',
      },
      passwordConfirm: 'The passwords must match',
    },
    fields: {
      email: 'Email',
      newPassword: 'New Password',
      password: 'Password',
      passwordConfirm: 'Password confirmation',
      username: 'Username',
    },
  },
  titles: {
    expiredLinkPass: 'Password Recovery link expired',
    forgotPassword: 'Forgot Password',
  },
}
