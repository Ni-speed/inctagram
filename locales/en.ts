import { LocaleType } from './ru'

export const en: LocaleType = {
  confirmEmail: {
    button: 'Sign In',
    subTitle: 'Your email has been confirmed',
    title: 'Congratulations!',
  },
  generalInfo: {
    aboutMe: 'About Me',
    addAvatar: 'Add a Profile Photo',
    city: 'Select your city',
    country: 'Select your country',
    dateOfBirth: 'Date of birth',
    errors: {
      maxFieldLength: (max: number) => `Maximum number of characters - ${max}`,
      maxFirstname: (max: number) =>
        `The maximum length of the name must not exceed ${max} characters`,
      maxLastname: (max: number) =>
        `The maximum length of the last name must not exceed ${max} characters`,
      maxUsername: (max: number) => `Maximum number of characters  ${max}`,
      minUsername: (min: number) => `Username must be at least ${min} characters`,
      nonemptyFirstname: 'Enter your name',
      nonemptyLastname: 'Enter your last name',
      nonemptyUsername: 'Enter your Username',
      regexAboutMe: 'Field must contain 0-9, a-z, A-Z, . _ -',
      regexFirstname: 'Firstname must contain a-z, A-Z',
      regexLastname: 'Lastname must contain a-z, A-Z',
      regexUsername: 'Username must contain  0-9, a-z, A-Z, . _ -',
      under13: 'A user under 13 cannot create a profile.',
    },
    firstname: 'First Name',
    imageFormatError: 'File must be jpeg or png type',
    imageSizeError: 'File must be less than 10 MB.',
    imageUploadError: 'Upload error.',
    lastname: 'Last Name',
    saveChanges: 'Save Changes',
    saveSettingsChange: 'Save Change',
    selectImage: 'Select from computer',
    username: 'Username',
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
    profileSettings: 'Profile Settings',
    resendLink: 'Resend Link',
    sendLink: 'Send Link',
    signIn: 'Sign In',
    signUp: 'Sign Up',
  },
  logInForm: {
    error: {
      emailNotConfirmed: 'The user has not confirmed their email.',
      incorrectInputData: 'Invalid data entered.',
      invalidPasswordOrEmail: 'Invalid email address or password.',
      userNotCreated: 'User not found.',
    },
    password: 'The email or password are incorrect. Try again please',
    placeholder: {
      email: 'Enter your email address',
      password: 'Enter your password',
    },
  },
  modalAddPost: {
    button: {
      discard: 'Discard',
      next: 'Next',
      openDraft: 'Open Draft',
      original: 'Original',
      publish: 'Publish',
      saveDraft: 'Save draft',
      selectFromComputer: 'Select',
    },
    textOne: 'Do you really want to close the creation of a publication?',
    textTwo: 'If you close everything will be deleted',
    titleAddFhoto: 'Add Photo',
    titleCloseCreation: 'Close',
    titleEditFhoto: 'Cropping',
    titleFilterMode: 'Filters',
    titlePublicationMode: 'Publicatio',
    titleTextarea: 'Add publication descriptions',
  },
  modalEmailSent: {
    button: 'ОК',
    mailResend: 'Link to confirm your email resend to',
    textForgotPassword: 'We have sent a link to your email to',
    textSignUp: 'We have sent a link to confirm your email to',
    title: 'Email sent',
  },
  modalInputEmail: {
    button: 'OK',
    title: 'Inter email for resend',
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
        emailExist: 'Email exist',
        format: 'Invalid format of email',
        incorrectInputData: 'Incorrect input data',
        requiredEmail: 'Email is required',
      },
      login: {
        characters: 'Invalid characters present',
        loginExist: 'Login exist',
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
  sidebar: {
    create: 'Create',
    favorites: 'Favorites',
    home: 'Home',
    logOut: 'Log Out',
    messenger: 'Messenger',
    myProfile: 'My Profile',
    search: 'Search',
    statistics: 'Statistics',
  },
  titles: {
    expiredLinkPass: 'Password Recovery link expired',
    forgotPassword: 'Forgot Password',
    privacyPolicy: 'Privacy Policy',
  },
}
