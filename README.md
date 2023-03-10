# ๐ง Email.js๋ฅผ ์ด์ฉํ์ฌ ๋ง๋  React Contact Us ํ์ด์ง.

![light9639 github io_React-EmailJS-Form_](https://user-images.githubusercontent.com/95972251/217186396-0e984902-f447-4c89-b859-96712d48e3ff.png)

:sparkles: ๐ง Email.js๋ฅผ ์ด์ฉํ์ฌ ๋ง๋  React Contact Us ํ์ด์ง. :sparkles:
## :tada: React ํ๋ก์ ํธ ์์ฑ
- React ์์ฑ
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite๋ฅผ ์ด์ฉํ์ฌ ํ๋ก์ ํธ๋ฅผ ์์ฑํ๋ ค๋ฉด
```bash
npm create vite@latest
# or
yarn create vite
```
- ํฐ๋ฏธ๋์์ ์คํ ํ ํ๋ก์ ํธ ์ด๋ฆ ๋ง๋  ํ React ์ ํ, Typescirpt-SWC ์ ํํ๋ฉด ์์ฑ ์๋ฃ.
## ๐๏ธ @emailjs/browser ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น
- `form`์์ ์๋ฒ๋ก ๋ฐ์ดํฐ๋กค ์ ์กํ์ฌ ์ด๋ฉ์ผ์ ๋ณด๋ด๋ ค๋ฉด `email.js`์ฌ์ดํธ์์ ์ ๊ณตํ๋ `@emailjs/browser`๋ฅผ ์ค์นํด์ ์งํํด์ผ ํ๋ค. ๋ฐ๋ผ์ ์๋ ๋ช๋ น์ด๋ก ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ค์นํ๋ค.
```bash
$ npm install @emailjs/browser
# or
$ yarn add @emailjs/browser
```
## โ๏ธ .env ํ์ผ ์ธํ
### โก .env
- `.env` ํ์ผ์๋ 3๊ฐ์ง key๊ฐ์ ๋ฃ์ด์ผ ํ๋ค.
- ์ด์ ๋ํ ์ธ๋ถ ์ฌํญ์ <a href="https://velog.io/@nemo/emailjs">๋งํฌ</a>๋ฅผ ์ฐธ์กฐํ๊ธฐ ๋ฐ๋๋ค.
```bash
VITE_YOUR_SERVICE_ID={Email Services ๋ฉ๋ด - Service ID}
VITE_YOUR_TEMPLATE_ID={Email Templates ๋ฉ๋ด - Template ID}
VITE_YOUR_USER_ID={Integration ๋ฉ๋ด - API keys - User ID}
```
## โ๏ธ App.tsx, index.html ์์  ๋ฐ ์์ฑ
### โก App.tsx
- `ContactUs` ์ปดํฌ๋ํธ๋ฅผ `import` ํ์ฌ `App` ์์ ๋ฃ์ด์ค๋ค.
```typescript
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ContactUs from './components/ContactUs'

export default function App(): JSX.Element {
  return (
    <div className="App">
      <ContactUs />
    </div>
  )
}
```
### โก index.html
- `link`์ ์์ด์ฝ `href`๋ฅผ ์ํ๋ ์ด๋ฏธ์ง ๋งํฌ๋ก ๋ฐ๊ฟ์ค๋ค.
- `title` ํ๊ทธ์ ํ์คํธ๋ฅผ `React-EmailJS-Form`๋ก ๋ฐ๊ฟ์ค๋ค
- `index.html` ๋ถ๋ถ์ `tailwind CSS` ์คํฌ๋ฆฝํธ ํ์ผ์ ๋ฃ์ด์ค๋ค.
```html
<head>
  {...options}
  <link rel="icon" type="image/svg+xml" href="https://avatars.githubusercontent.com/u/7377195?s=200&v=4" />
  <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
  <title>React-EmailJS-Form</title>
</head>
```
## ๐ src/components ํ์ผ ์ ContactUs.tsx ์์  ๋ฐ ์์ฑ
### โก ContactUs.tsx
- `index.html` ํ์ผ์ `tailwind CSS` ์คํฌ๋ฆฝํธ ํ์ผ์ด ๋ค์ด๊ฐ ์๊ธฐ ๋๋ฌธ์ `tailwind CSS`์ผ๋ก ์คํ์ผ๋ง์ ํ๋ฉด ๋๋ค.
- `sendEmail` ํจ์๋ <a href="https://www.emailjs.com/docs/examples/reactjs/">EmailJS React ์ค๋ช</a> ๋ถ๋ถ์ ์ฐธ๊ณ ํ์ฌ ์์ฑํ๋ฉด ๋๋ค.
```typescript
import emailjs from '@emailjs/browser';
import React from 'react';

export default function ContactUs(): JSX.Element {
    const form = React.useRef(null);

    function sendEmail(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, e.currentTarget, import.meta.env.VITE_YOUR_USER_ID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });

        alert('๋ฉ์ธ์ง๋ฅผ dong963939@gmail.com์ผ๋ก ์ ์กํ์ต๋๋ค.')

        e.target.reset()
    }

    return (
        <React.Fragment>
            <div className='m-8 md:my-20'>
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto text-center sm:text-left py-6 md:py-0">
                            <div>
                                <h1 className="text-3xl font-extrabold pb-4">์ฐ๋ฝํ๊ธฐ</h1>
                                <p className="mt-3">์๋ํ์ธ์! ์ ๋ ํ๋ก ํธ์๋ ๊ฐ๋ฐ์ ๋ํ ๊ด์ฌ์ด ๋ง์ต๋๋ค. ๋ง์ฝ ์ง๋ฌธ์ด ์์ผ์๊ฑฐ๋, ์ฐ๋ฝ์ ์ํ์ ๋ค๋ฉด ์ฐ๋ฝ ๋ถํ๋๋ฆฝ๋๋ค.</p>
                                <hr className="mt-3 border-gray-300" />
                            </div>
                            <div className="divide-y divide-gray-200">
                                <form ref={form} onSubmit={sendEmail} className="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 -mb-8">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        ์ด๋ฆ <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        required
                                        className="appearance-none block w-full text-gray-700 border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name"
                                        type="text"
                                        name="name"
                                        placeholder="์ด๋ฆ"
                                    />

                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        ์ด๋ฉ์ผ <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        required
                                        className="appearance-none block w-full text-gray-700 border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name"
                                        type="email"
                                        name="email"
                                        placeholder="์ด๋ฉ์ผ"
                                    />

                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        ๋ฉ์ธ์ง <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        required
                                        className="resize-y py-3 px-4 border-gray-300 focus:outline-none rounded-md w-full"
                                        placeholder="๋ฉ์ธ์ง๋ฅผ ์๋ ฅํ์ธ์..."
                                        cols={30}
                                        rows={6}
                                        name="message"
                                    ></textarea>

                                    <div className="flex items-center md:items-end justify-center md:justify-end">
                                        <button type="submit" className="bg-blue-500 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                                            ๋ณด๋ด๊ธฐ
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}
```

## ๐ ์ถ์ฒ
- <a href="https://velog.io/@nemo/emailjs">์ ์  ์น ํ์ด์ง(Static web page)์์ Contact Form ๋ง๋ค๊ธฐ</a>
- <a href="https://www.emailjs.com/docs/examples/reactjs/">EmailJS React ์ค๋ช์</a>
- <a href="https://www.youtube.com/watch?v=NgWGllOjkbs">How to send emails using React through EmailJs</a>
