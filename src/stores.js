import { writable } from "svelte/store";

export const basicInfo = writable([
    {
        key: 1,
        name: 'name',
        label: 'Name:',
        value: '',
        placeholder: 'Your Name'
    },
    {
        key: 2,
        name: 'subtitle',
        label: 'Subtitle:',
        value: '',
        placeholder: 'Briefly describe, what you are doing. The limit is 150 symbols.'
    },
    {
        key: 3,
        name: 'desc',
        label: 'Description:',
        value: '',
        placeholder: 'You can provide more details, if you want. The limit is 300 symbols.'
    },
    {
        key: 4,
        name: 'location',
        label: 'Location:',
        value: '',
        placeholder: 'Planet Earth'
    },
    {
        key: 5,
        name: 'currently',
        label: 'Currently:',
        value: '',
        placeholder: 'building something cool'
    },
    {
        key: 6,
        name: 'recent',
        label: 'Recently:',
        value: '',
        placeholder: 'won a lottery'
    },
])

export const socialLinks = writable([
    {
        key: 1,
        name: 'website',
        value: '',
        url: 'https://',
        placeholder: 'mywebsite.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/socials/globe.svg'
    },
    {
        key: 2,
        name: 'email',
        value: '',
        url: 'mailto:',
        placeholder: 'myemail@service.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/socials/at.svg'
    },
    {
        key: 3,
        name: 'twitter',
        value: '',
        url: 'https://twitter.com/',
        placeholder: 'account',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/socials/twitter.svg'
    },
    {
        key: 4,
        name: 'linkedin',
        value: '',
        url: 'https://www.linkedin.com/in/',
        placeholder: 'account',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/socials/linkedin.svg'
    },
    {
        key: 5,
        name: 'twitch',
        value: '',
        url: 'https://www.twitch.tv/',
        placeholder: 'account',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/socials/twitch.svg'
    },
    {
        key: 6,
        name: 'youtube',
        value: '',
        url: 'https://www.youtube.com/',
        placeholder: 'account',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/socials/youtube.svg'
    },
    {
        key: 7,
        name: 'discord',
        value: '',
        url: 'https://discord.com/user/',
        placeholder: 'account',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/socials/discord.svg'
    },
    {
        key: 8,
        name: 'behance',
        value: '',
        url: 'https://www.behance.net/',
        placeholder: 'account',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/socials/behance.svg'
    },
])

export const coreSkills = writable([
    {
        key: 1,
        name: 'c',
        value: false,
        alt: 'C',
        url: 'https://www.learn-c.org',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/c.svg',
    },
    {
        key: 2,
        name: 'cplus',
        value: false,
        alt: 'C++',
        url: 'https://cplusplus.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/cplus.svg',
    },
    {
        key: 3,
        name: 'csharp',
        value: false,
        alt: 'C#',
        url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/csharp.svg',
    },
    {
        key: 4,
        name: 'coffeescript',
        value: false,
        alt: 'CoffeeScript',
        url: 'https://coffeescript.org',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/coffeescript.svg',
    },
    {
        key: 5,
        name: 'dart',
        value: false,
        alt: 'Dart',
        url: 'https://dart.dev',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/dart.svg',
    },
    {
        key: 6,
        name: 'go',
        value: false,
        alt: 'Go',
        url: '',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/go.svg',
    },
    {
        key: 7,
        name: 'java',
        value: false,
        alt: 'Java',
        url: 'https://www.java.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/java.svg',
    },
    {
        key: 8,
        name: 'javascript',
        value: false,
        alt: 'JavaScript',
        url: 'https://www.javascript.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/javascript.svg',
    },
    {
        key: 9,
        name: 'kotlin',
        value: false,
        alt: 'Kotlin',
        url: 'https://kotlinlang.org',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/kotlin.svg',
    },
    {
        key: 10,
        name: 'perl',
        value: false,
        alt: 'Perl',
        url: 'https://www.perl.org',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/perl.svg',
    },
    {
        key: 11,
        name: 'php',
        value: false,
        alt: 'PHP',
        url: 'https://www.php.net',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/php.svg',
    },
    {
        key: 12,
        name: 'python',
        value: false,
        alt: 'Python',
        url: 'https://www.python.org',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/python.svg',
    },
    {
        key: 13,
        name: 'r',
        value: false,
        alt: 'R',
        url: 'https://r-lang.com/what-is-r-language/',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/r.svg',
    },
    {
        key: 14,
        name: 'ruby',
        value: false,
        alt: 'Ruby',
        url: 'https://www.ruby-lang.org/en/',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/ruby.svg',
    },
    {
        key: 15,
        name: 'rust',
        value: false,
        alt: 'Rust',
        url: 'https://www.rust-lang.org',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/rust.svg',
    },
    {
        key: 16,
        name: 'swift',
        value: false,
        alt: 'Swift',
        url: 'https://www.apple.com/swift/',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/swift.svg',
    },
    {
        key: 17,
        name: 'typescript',
        value: false,
        alt: 'Typescript',
        url: 'https://www.typescriptlang.org',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/typescript.svg',
    },
])

export const frontendSkills = writable([
      {
        key: 1,
        name: 'html5',
        value: false,
        alt: 'HTML5',
        url: 'https://html.com/html5/',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/html5.svg',
    },
    {
        key: 2,
        name: 'css3',
        value: false,
        alt: 'CSS3',
        url: 'https://css3.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/css3.svg',
    },
    {
        key: 3,
        name: 'react',
        value: false,
        alt: 'React',
        url: 'https://reactjs.org',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/react.svg',
    },
    {
        key: 4,
        name: 'vue',
        value: false,
        alt: 'Vue',
        url: 'https://vuejs.org',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/vue.svg',
    },
    {
        key: 5,
        name: 'angular',
        value: false,
        alt: 'Angular',
        url: 'https://angularjs.org',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/angular.svg',
    },
    {
        key: 6,
        name: 'svelte',
        value: false,
        alt: 'Svelte',
        url: 'http://svelte.dev',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/svelte.svg',
    },
    {
        key: 7,
        name: 'qwik',
        value: false,
        alt: 'Qwik',
        url: 'https://qwik.builder.io',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/qwik.svg',
    },
    {
        key: 8,
        name: 'solidjs',
        value: false,
        alt: 'SolidJS',
        url: 'https://www.solidjs.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/solidjs.svg',
    },
    {
        key: 9,
        name: 'nextjs',
        value: false,
        alt: 'NextJS',
        url: 'https://nextjs.org',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/nextjs.svg',
    },
    {
        key: 10,
        name: 'nuxtjs',
        value: false,
        alt: 'NuxtJS',
        url: 'https://nuxtjs.org',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/nuxtjs.svg',
    },
    {
        key: 11,
        name: 'gatsby',
        value: false,
        alt: 'Gatsby',
        url: 'https://www.gatsbyjs.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/gatsby.svg',
    },
    {
        key: 12,
        name: 'jquery',
        value: false,
        alt: 'JQuery',
        url: 'https://jquery.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/jquery.svg',
    },
    {
        key: 13,
        name: 'sass',
        value: false,
        alt: 'SASS',
        url: 'https://sass-lang.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/sass.svg',
    },
    {
        key: 14,
        name: 'tailwind',
        value: false,
        alt: 'Tailwind',
        url: 'http://tailwindcss.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/tailwind.svg',
    },
    {
        key: 15,
        name: 'bootstrap',
        value: false,
        alt: 'Bootstrap',
        url: 'https://getbootstrap.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/bootstrap.svg',
    },
    {
        key: 16,
        name: 'mui',
        value: false,
        alt: 'Material UI',
        url: 'https://mui.com/material-ui/',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/mui.svg',
    },
    {
        key: 17,
        name: 'redux',
        value: false,
        alt: 'Redux',
        url: 'https://redux.js.org',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/redux.svg',
    },
    {
        key: 18,
        name: 'webpack',
        value: false,
        alt: 'Webpack',
        url: 'https://webpack.js.org',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/webpack.svg',
    },
    {
        key: 19,
        name: 'babel',
        value: false,
        alt: 'Babel',
        url: 'https://babeljs.io',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/babel.svg',
    },
    {
        key: 20,
        name: 'vite',
        value: false,
        alt: 'Vite',
        url: 'http://vitejs.dev/',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/vite.svg',
    },
])

export const backendSkills = writable([
    {
        key: 1,
        name: 'nodejs',
        value: false,
        alt: 'NodeJS',
        url: 'https://nodejs.org',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/nodejs.svg',
    },
    {
        key: 2,
        name: 'express',
        value: false,
        alt: 'Express',
        url: 'http://expressjs.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/express.svg',
    },
    {
        key: 3,
        name: 'graphql',
        value: false,
        alt: 'GraphQL',
        url: 'https://graphql.org',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/graphql.svg',
    },
    {
        key: 4,
        name: 'mongodb',
        value: false,
        alt: 'Mongo DB',
        url: 'https://www.mongodb.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/mongodb.svg',
    },
    {
        key: 5,
        name: 'mysql',
        value: false,
        alt: 'MySQL',
        url: 'https://www.mysql.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/mysql.svg',
    },
    {
        key: 6,
        name: 'postgresql',
        value: false,
        alt: 'PostgreSQL',
        url: 'https://www.postgresql.org',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/postgresql.svg',
    },
    {
        key: 7,
        name: 'firebase',
        value: false,
        alt: 'Firebase',
        url: 'https://firebase.google.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/firebase.svg',
    },
    {
        key: 8,
        name: 'heroku',
        value: false,
        alt: 'Heroku',
        url: 'https://www.heroku.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/heroku.svg',
    },
    {
        key: 9,
        name: 'supabase',
        value: false,
        alt: 'Supabase',
        url: 'https://supabase.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/supabase.svg',
    },
    {
        key: 10,
        name: 'planetscale',
        value: false,
        alt: 'PlanetScale',
        url: 'http://planetscale.com',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/planetscale.svg',
    },
    {
        key: 11,
        name: 'prisma',
        value: false,
        alt: 'Prisma',
        url: 'http://prisma.io',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/prisma.svg',
    },
    {
        key: 12,
        name: 'trpc',
        value: false,
        alt: 'tRPC',
        url: 'http://trpc.io',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/trpc.svg',
    },
    {
        key: 13,
        name: 'sanity',
        value: false,
        alt: 'Sanity',
        url: 'http://sanity.io',
        img: 'https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/sanity.svg',
    },
])
