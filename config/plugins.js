module.exports = ({ env }) => ({
    // ...
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', ''),
        port: env('SMTP_PORT', ),
        auth: {
          user: env(''),
          pass: env(''),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: '',
        defaultReplyTo: '',
      },
    },
  },
  // ...
  seo: {
    enabled: true,
  },
  // ...
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 5, // Default is 5
    }
  },
  // ...
  upload: {
    // Update your cloudinary credentials here
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "dsp9yqcux",
        api_key: "656591691112526",
        api_secret: "oLh5byuISF16JJT6B41kPrby-so",
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});