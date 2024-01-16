module.exports = ({ env }) => ({
    // ...
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'mail.antixxtechhub.com'),
        port: env('SMTP_PORT', 465),
        auth: {
          user: env('careers@antixxtechhub.com'),
          pass: env('2]6!NK{lo3SJ'),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'careers@antixxtechhub.com',
        defaultReplyTo: 'careers@antixxtechhub.com',
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