# 📧 Email.js를 이용하여 만든 React Contact Us 페이지.

![light9639 github io_React-EmailJS-Form_](https://user-images.githubusercontent.com/95972251/217186396-0e984902-f447-4c89-b859-96712d48e3ff.png)

:sparkles: 📧 Email.js를 이용하여 만든 React Contact Us 페이지. :sparkles:
## :tada: React 프로젝트 생성
- React 생성
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면
```bash
npm create vite@latest
# or
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, Typescirpt-SWC 선택하면 생성 완료.
## 🏍️ @emailjs/browser 라이브러리 설치
- `form`에서 서버로 데이터롤 전송하여 이메일을 보내려면 `email.js`사이트에서 제공하는 `@emailjs/browser`를 설치해서 진행해야 한다. 따라서 아래 명령어로 라이브러리를 설치한다.
```bash
$ npm install @emailjs/browser
# or
$ yarn add @emailjs/browser
```
## ⚙️ .env 파일 세팅
### ⚡ .env
- `.env` 파일에는 3가지 key값을 넣어야 한다.
- 이에 대한 세부 사항은 <a href="https://velog.io/@nemo/emailjs">링크</a>를 참조하기 바란다.
```bash
VITE_YOUR_SERVICE_ID={Email Services 메뉴 - Service ID}
VITE_YOUR_TEMPLATE_ID={Email Templates 메뉴 - Template ID}
VITE_YOUR_USER_ID={Integration 메뉴 - API keys - User ID}
```
## ✒️ App.tsx, index.html 수정 및 작성
### ⚡ App.tsx
- `ContactUs` 컴포넌트를 `import` 하여 `App` 안에 넣어준다.
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
### ⚡ index.html
- `link`의 아이콘 `href`를 원하는 이미지 링크로 바꿔준다.
- `title` 태그의 텍스트를 `React-EmailJS-Form`로 바꿔준다
- `index.html` 부분에 `tailwind CSS` 스크립트 파일을 넣어준다.
```html
<head>
  {...options}
  <link rel="icon" type="image/svg+xml" href="https://avatars.githubusercontent.com/u/7377195?s=200&v=4" />
  <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
  <title>React-EmailJS-Form</title>
</head>
```
## 📝 src/components 파일 속 ContactUs.tsx 수정 및 작성
### ⚡ ContactUs.tsx
- `index.html` 파일에 `tailwind CSS` 스크립트 파일이 들어가 있기 때문에 `tailwind CSS`으로 스타일링을 하면 된다.
- `sendEmail` 함수는 <a href="https://www.emailjs.com/docs/examples/reactjs/">EmailJS React 설명</a> 부분을 참고하여 작성하면 된다.
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

        alert('메세지를 dong963939@gmail.com으로 전송했습니다.')

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
                                <h1 className="text-3xl font-extrabold pb-4">연락하기</h1>
                                <p className="mt-3">안녕하세요! 저는 프론트엔드 개발에 대한 관심이 많습니다. 만약 질문이 있으시거나, 연락을 원하신다면 연락 부탁드립니다.</p>
                                <hr className="mt-3 border-gray-300" />
                            </div>
                            <div className="divide-y divide-gray-200">
                                <form ref={form} onSubmit={sendEmail} className="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 -mb-8">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        이름 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        required
                                        className="appearance-none block w-full text-gray-700 border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name"
                                        type="text"
                                        name="name"
                                        placeholder="이름"
                                    />

                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        이메일 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        required
                                        className="appearance-none block w-full text-gray-700 border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name"
                                        type="email"
                                        name="email"
                                        placeholder="이메일"
                                    />

                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        메세지 <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        required
                                        className="resize-y py-3 px-4 border-gray-300 focus:outline-none rounded-md w-full"
                                        placeholder="메세지를 입력하세요..."
                                        cols={30}
                                        rows={6}
                                        name="message"
                                    ></textarea>

                                    <div className="flex items-center md:items-end justify-center md:justify-end">
                                        <button type="submit" className="bg-blue-500 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                                            보내기
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

## 📎 출처
- <a href="https://velog.io/@nemo/emailjs">정적 웹 페이지(Static web page)에서 Contact Form 만들기</a>
- <a href="https://www.emailjs.com/docs/examples/reactjs/">EmailJS React 설명서</a>
- <a href="https://www.youtube.com/watch?v=NgWGllOjkbs">How to send emails using React through EmailJs</a>
