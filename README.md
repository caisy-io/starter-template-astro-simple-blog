# Starter template Astro simple blog
## Astro x Caisy 

To run this project a `.env` file like this (with your own projects values) is required: 
```
CAISY_PROJECT_ID=a894c383-edfc-4499-a639-a40509986ed4
CAISY_API_KEY=xxx
```

In order to have the right blueprints configured, make sure to follow the onboarind and select the starter template "Astro Simple Blog"

We are using 
- astro as server and server side rendering framework 
- tailwindcss for styling
- @caisy/rich-text-astro-renderer to render the caisy richtexts in astro
- graphql and graphql-request to fetch data from caisy

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

