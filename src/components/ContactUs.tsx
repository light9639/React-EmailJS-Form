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