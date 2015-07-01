'use strict';

module.exports = {
	db: 'mongodb://dcastaneda:random1one@ds053312.mongolab.com:53312/meanstack',
	app: {
		title: 'MeanLean - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '386496048216386',
		clientSecret: process.env.FACEBOOK_SECRET || '7489660fbeaa2f7c52fa2e953d44a388',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || '2yUn1eCW48qgDlRvp9scfVEyW',
		clientSecret: process.env.TWITTER_SECRET || 'PNd0wLafTDdlr53e1Q8cnbIRd6BmvMmM8W9cbmn3Ni8hJ4OSUL',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '560528779275-blbk6tdbn0srcq9n5fqm6764d32nngah.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || '48Y-XjrYPiONC5L95n7d7V-6',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || '77l3j9r7mghmuy',
		clientSecret: process.env.LINKEDIN_SECRET || 'QCbGGt0m8jDtHZNQ',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || '33087d2e866c525303c5',
		clientSecret: process.env.GITHUB_SECRET || 'c6eb86c972a3810fae4cc3714662885069fca487',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
