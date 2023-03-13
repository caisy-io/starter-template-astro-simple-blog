# Starter template Astro simple blog
## Astro x Caisy 

Deploy this template to Vercel
<br>
<br>
[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcaisy-io%2Fstarter-template-astro-simple-blog&env=CAISY_PROJECT_ID,CAISY_API_KEY&envDescription=CAISY_PROJECT_ID%20and%20CAISY_API_KEY%20is%20required%20for%20the%20tempalte%20to%20work&envLink=https%3A%2F%2Fcaisy.io%2Fdeveloper%2Fdocs%2Fauthentication%2Fapi-keys&project-name=caisy-astro-simple-blog&repository-name=caisy-astro-simple-blog&demo-title=caisy-astro-simple-blog&demo-description=Example%20Deployment%20of%20this%20Template&demo-url=https%3A%2F%2Fstarter-template-astro-simple-blog.vercel.app)

Features:
- ✅ Tailwind styling
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Dynamic content updates from caisy without redeployment
- ✅ Sitemap support

## Requirements
In order to have the right blueprints configured, make sure to follow the onboarind and select the starter template *"Astro Simple Blog"*
To run this project a `.env` file like this (with your own projects values) is required: 
```
CAISY_PROJECT_ID=a894c383-edfc-4499-a639-a40509986ed4
CAISY_API_KEY=xxx
```

### To run this project locally:
- [ ] `git clone https://github.com/caisy-io/starter-template-astro-simple-blog.git`
- [ ] create `.env` file with your project id and API key 
- [ ] `npm install`
- [ ] `npm run dev`

In order to have the right blueprints configured, make sure to follow the onboarind and select the starter template "Astro Simple Blog"

###  We are using 
- astro as server and server side rendering framework 
- tailwindcss for styling
- @caisy/rich-text-astro-renderer to render the caisy richtexts in astro
- graphql and graphql-request to fetch data from caisy

#### Codegen 
During development we generate code using 
- @graphql-codegen/cli and plugins

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                                   |
| :--------------------- | :--------------------------------------------------------|
| `npm install`          | Installs dependencies                                    |
| `npm run dev`          | Starts local dev server at `localhost:3000`              |
| `npm run gen`          | Regenerates generated types and SDK                      |
| `npm run gen:watch`    | Wachting changes and regenerates generated types and SDK |
| `npm run build`        | Build your production site to `./dist/`                  |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check`         |
| `npm run astro --help` | Get help using the Astro CLI                             |

## 👀 Want to learn more?

Feel free to check [the caisy documentation](https://caisy.io/developer/docs) 
Feel free to check [the astro documentation](https://docs.astro.build) 

