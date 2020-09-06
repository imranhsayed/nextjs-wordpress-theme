## 🎨 Next.js WooCommerce themes - Celestia
[![Project Status: Active.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![Stars](https://img.shields.io/github/stars/imranhsayed/nextjs-wordpress-theme?label=%E2%AD%90%20Stars)
![Forks](https://img.shields.io/github/forks/imranhsayed/nextjs-wordpress-theme?color=%23ff69b4)
![Contributors](https://img.shields.io/github/contributors/imranhsayed/nextjs-wordpress-theme?color=blue)
![Follow](https://img.shields.io/github/followers/imranhsayed?label=Please%20follow%20%20to%20support%20my%20work%20%F0%9F%99%8F&style=social)

- A React theme for WordPress, using Decoupled Architecture in Next.js
- Front end in React
- Backend in WordPress.

### Client config. 
rename client-config-example.js in packages/gatsby-woocommerce-theme directory to client-config.js and add your WordPress Site URL. 

### WordPress Setup
* Download, Upload and activate all the plugins from wordpress/plugins folder of this repo, into your WordPress Site.

1. [wp-graphql](https://github.com/imranhsayed/nextjs-wordpress-theme/blob/master/wordpress/plugins/wp-graphql.zip) - tested on ( v1.0.0 )

# Development

```shell script
npm run dev # Runs next dev which starts Next.js in development mode
npm run build # Runs next build which builds the application for production usage
npm run start # Runs next start which starts a Next.js production server
```

# Cypress Tests

To run cypress locally we run `cypress-open`
It adds a `cypress` directory and some example test in `cypress/integrations`

```shell script
npm run cypress:open
```
