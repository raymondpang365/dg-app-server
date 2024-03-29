/* @flow */

module.exports = {
  s3AccessId: process.env.S3_ACCESS_ID,
  s3AccessSecret: process.env.S3_ACCESS_SECRET,
  backdoor: process.env.DEV_BACKDOOR === 'true',
  nexmo: {
    apiKey: process.env.NEXMO_API_KEY,
    apiSecret: process.env.NEXMO_API_SECRET
  },
  stripe: process.env.STRIPE_SECRET_KEY,
  redis: {
    host: 'localhost',
    port: 6379,
    password: ''
  },
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'Test',
    titleTemplate: 'Test - %s',
    meta: [
      {
        name: 'description',
        content: 'The best react universal starter boilerplate in the world.'
      }
    ],
    links: [
      'https://fonts.googleapis.com/css?family=Tangerine',
      '/css/main.css'
    ]
  },
  fileUpload: {
    avatar: {
      maxSize: 1024 * 1024, // in bytes
      // MIME type
      validMIMETypes: ['image/jpeg', 'image/png', 'image/gif']
    }
  },
  jwt: {
    accessToken: {
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      expiresIn: 60 // in seconds
    },
    refreshToken: {
      secret: process.env.JWT_REFRESH_TOKEN_SECRET,
      expiresIn: 60 * 60 * 24 * 180 // in seconds
    },
    verifyEmail: {
      secret:  process.env.JWT_VERIFY_EMAIL_SECRET,
      expiresIn: 60 * 60 // in seconds
    },
    resetPassword: {
      secret: process.env.JWT_RESET_PASSWORD_SECRET,
      expiresIn: 60 * 60 // in seconds
    }
  },
  passportStrategy: {
    facebook: require('./passportStrategy/facebook/credential').development,
    google: require('./passportStrategy/google/credential').development,
  },
  nodemailer:{
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  },
  mailOptions: {
    subject: 'Untitled Mail',
    from: 'Express-React-Hmr-Boilerplate <psfr937@gmail.com>',
    text: 'No Text',
    html: '<pre>no html content<pre>',
  },
  fcmServerKey: process.env.FCM_SERVER_KEY,
  recaptcha: process.env.RECAPTCHA_KEY,
  googleMapApiKey: process.env.GOOGLE_MAP_API_KEY,
  gogoxAppId: process.env.GOGOX_APP_ID,
  gogoxSecretKey: process.env.GOGOX_SECRET_KEY
};
