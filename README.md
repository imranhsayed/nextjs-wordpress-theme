## 🎨 Next.js WordPress theme - Celestia
[![Project Status: Active.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![Stars](https://img.shields.io/github/stars/imranhsayed/nextjs-wordpress-theme?label=%E2%AD%90%20Stars)
![Forks](https://img.shields.io/github/forks/imranhsayed/nextjs-wordpress-theme?color=%23ff69b4)
![Contributors](https://img.shields.io/github/contributors/imranhsayed/nextjs-wordpress-theme?color=blue)
![Follow](https://img.shields.io/github/followers/imranhsayed?label=Please%20follow%20%20to%20support%20my%20work%20%F0%9F%99%8F&style=social)

- A React theme for WordPress, using Decoupled Architecture in Next.js
- Front end in React
- Backend in WordPress.

### Evironment vars. 
rename .env-example to .env and add your WordPress Site URL

### WordPress Setup
* Download, Upload and activate all the plugins from wordpress/plugins folder of this repo, into your WordPress Site.

1. [wp-graphql](https://github.com/imranhsayed/nextjs-wordpress-theme/blob/master/wordpress/plugins/wp-graphql.zip) - tested on ( v1.0.0 )
2. [Headless CMS](https://github.com/imranhsayed/nextjs-wordpress-theme/blob/master/wordpress/plugins/headless-cms.zip)
3. [WP GraphQL Gutenberg](https://github.com/imranhsayed/nextjs-wordpress-theme/blob/master/wordpress/plugins/wp-graphql-gutenberg-0.3.4.zip)

# Development

```shell script
npm run dev # Runs next dev which starts Next.js in development mode
npm run build # Runs next build which builds the application for production usage
npm run start # Runs next start which starts a Next.js production server
```

# [Cypress Tests](https://docs.cypress.io/)

To run cypress locally we run `cypress-open`
It adds a `cypress` directory and some example test in `cypress/integrations`

```shell script
npm run cypress:open
```

* Cypress docs
1. [API](https://docs.cypress.io/api/api/table-of-contents.html)

## Debugging with Node.js debugger tool. 
Notice that we have added this in `package.json`
```shell script
"dev": "NODE_OPTIONS='--inspect' next",
```
when you run `npm run dev`, you will see a node js icon in the Chrome inspector tab and there will also be a url to access it on the terminal
that says `Debugger listeing on ...`

## Important concepts

1. [Prerendering](https://nextjs.org/docs/basic-features/pages#pre-rendering)
2. Querying blocks:
[WP GraphQL Gutenberg](https://github.com/imranhsayed/nextjs-wordpress-theme/blob/master/wordpress/plugins/wp-graphql-gutenberg-0.3.4.zip) allows you to query Gutenberg blocks.
If you want to break down the blocks and render the content using individual React components, here is the query example.

```shell script
{
  posts {
    nodes {
      title
      blocks {
        name
        innerBlocks {
          name
          saveContent
        }
        saveContent
      }
    }
  }
}
```
