'use client'
import { Input, Form, Button, Checkbox, Card } from 'antd'
const Home = () => {
    return (
        <div className=' rounded-11xl bg-white shadow-[0px_4px_4px_rgba(174,_174,_174,_0.25)] box-border flex flex-row items-center justify-start
        py-3 pl-6 lg:py-[0rem] pr-[0.13rem] lg:pl-[4.88rem] gap-[4.69rem]  border-[1px] border-solid border-secondary-gray '>
            <div className='w-[25rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.56rem] box-border min-w-[25rem] max-w-full'>
                <Form className='m-0 self-stretch flex flex-col items-start justify-start gap-[1.44rem]'>
                    <div className='w-[13.25rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.44rem] box-border'>
                        <h1 className='m-0  mt-4 h-[2.81rem] flex-1 relative text-[1.5rem] font-medium font-kanit text-black text-left inline-block z-[2]'>
                            Let Get Started
                        </h1>
                    </div>
                    <div className='self-stretch flex flex-col items-start justify-start gap-[0.63rem]'>
                        <div className='w-[5.56rem] relative text-[1rem] font-kanit text-black text-left inline-block z-[2]'>
                            ชื่อ - นามสกุล
                        </div>
                        <Form.Item
                            style={{
                                width: '100%',

                            }}
                            name='fullname'
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณากรอกอีเมล',

                                },
                            ]}
                        >
                            <Input
                                placeholder='ชื่อ - นามสกุล'
                                className=' w-11/12 lg:w-full  self-stretch rounded-8xs flex flex-row items-center justify-start py-[0.69rem] px-[0.94rem] z-[2] border-[1px] border-solid border-primary-green placeholder:font-kanit '
                            />
                        </Form.Item>
                    </div>
                    <div className='self-stretch flex flex-col items-start justify-start gap-[0.63rem]'>
                        <div className='w-[5.56rem] relative text-[1rem] font-kanit text-black text-left inline-block z-[2]'>
                            อีเมล
                        </div>
                        <Form.Item
                            style={{
                                width: '100%',

                            }}
                            name='email'
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณากรอกอีเมล',

                                },
                            ]}
                        >
                            <Input
                                placeholder='อีเมล'
                                className=' w-11/12 lg:w-full  self-stretch rounded-8xs flex flex-row items-center justify-start py-[0.69rem] px-[0.94rem] z-[2] border-[1px] border-solid border-primary-green placeholder:font-kanit '
                            />
                        </Form.Item>
                    </div>



                    <div className='m-0 h-[1.69rem] relative text-[1.13rem] font-normal font-kanit text-black text-left inline-block z-[2]'>
                        รหัสผ่าน
                    </div>
                    <div className='self-stretch flex flex-col items-end justify-start gap-[0.38rem]'>
                        <Input.Password
                            placeholder='รหัสผ่าน'
                            className='w-11/12 lg:w-full self-stretch rounded-8xs flex flex-row items-center justify-start py-[0.69rem] px-[0.94rem] z-[2] border-[1px] border-solid border-primary-green placeholder:font-kanit'
                        />

                    </div>
                    <div className='m-0 h-[1.69rem] relative text-[1.13rem] font-normal font-kanit text-black text-left inline-block z-[2]'>
                        ยืนยันรหัสผ่าน
                    </div>
                    <div className='self-stretch flex flex-col items-end justify-start gap-[0.38rem]'>
                        <Input.Password
                            placeholder='ยืนยันรหัสผ่าน'
                            className='w-11/12 lg:w-full self-stretch rounded-8xs flex flex-row items-center justify-start py-[0.69rem] px-[0.94rem] z-[2] border-[1px] border-solid border-primary-green placeholder:font-kanit'
                        />

                    </div>

                    <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.81rem] gap-[0.56rem]">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[0.38rem]">
                            <div className="flex-1 flex flex-row items-end justify-start gap-[1rem]">

                                <div className="h-[1.25rem] w-[1.25rem] relative z-[2]">
                                 <Checkbox className='checkbox-parkX absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]' />
                                 </div>
                                <div className="relative text-[0.88rem] font-kanit text-left z-[2]">
                                    <span className="text-black">{`ข้าพเจ้ายอมรับ `}</span>
                                    <span className="text-primary-green">
                                        ข้อกำหนดการใช้งาน
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-row items-end justify-start gap-[1rem]">
                                <div className="h-[1.25rem] w-[1.25rem] relative z-[2]">
                                <Checkbox className='checkbox-parkX absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]' />
                                </div>
                                <div className="relative text-[0.88rem] font-kanit text-left z-[2]">
                                    <span className="text-black">{`ข้าพเจ้ายอมรับ `}</span>
                                    <span className="text-primary-green">
                                        นโยบายของบริษัท
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-row items-end justify-start gap-[1rem]">
                                <div className="h-[1.25rem] w-[1.25rem] relative z-[2]">
                                <Checkbox className='checkbox-parkX absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]' />
                                </div>
                                <div className="relative text-[0.88rem] font-kanit text-black text-left z-[2]">
                                    ต้องการรับข่าวสารและโปรโมชันจาก ParkX
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='self-stretch flex flex-col items-center justify-start gap-[1.25rem]'>
                        <div className='w-11/12 lg:w-full self-stretch flex flex-col items-start justify-start gap-[0.63rem]'>
                            <button
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                className='self-stretch rounded-8xs bg-primary-green flex flex-row items-center justify-center py-[0.69rem] pr-[1.25rem] pl-[1.56rem] z-[2] hover:bg-primary-green'
                            >
                                <div className='relative  text-[1rem] font-semibold font-kanit text-white text-center'>
                                    เข้าสู่ระบบ
                                </div>
                            </button>
                            <div className='self-stretch flex flex-row items-center justify-center py-[0rem] pr-[0.06rem] pl-[0rem] gap-[0.88rem] '>
                                <div className='h-[1.5rem] relative text-[1rem] font-medium font-kanit text-black text-center flex items-center justify-center z-[2]'>
                                    หรือ
                                </div>
                            </div>
                            <button className='self-stretch rounded-8xs flex flex-row items-start justify-center py-[0.69rem] pr-[1.25rem] pl-[1.56rem] gap-[0.94rem] whitespace-nowrap z-[2] border-[1px] border-solid border-secondary-gray'>
                                <img
                                    className='h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]'
                                    alt=''
                                    src='/images/icons/google-login.png'
                                />
                                <div className='relative text-[1rem] font-medium font-kanit text-gray text-center'>
                                    เข้าสู่ระบบผ่าน Google
                                </div>
                            </button>
                            <div className='self-stretch rounded-8xs flex flex-row items-center justify-center py-[0.69rem] pr-[1.25rem] pl-[1.5rem] gap-[0.88rem] whitespace-nowrap z-[2] border-[1px] border-solid border-secondary-gray'>
                                <img
                                    className='h-[1.25rem] w-[1.25rem] relative object-cover'
                                    alt=''
                                    src='/images/icons/fb-login.png'
                                />
                                <button className='relative text-[1rem] font-medium font-kanit text-gray text-center'>
                                    เข้าสู่ระบบผ่าน Facebook
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.31rem]'>
                            <div className='relative text-[1rem] font-kanit text-left z-[2]'>
                                <span className='text-black'>{`มีบัญชีแล้ว? `}</span>
                                <span className='text-primary-green hover:underline hover:cursor-pointer'>
                                เข้าสู่ระบบที่นี่
                                </span>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
            <img
                className='hidden sm:block h-[58.75rem] flex-1 relative rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none max-w-full overflow-hidden object-cover min-w-[22.56rem] z-[1] '
                loading='eager'
                alt=''
                src='/images/login/imageLogin.png'
            />
        </div>

    )
}

export default Home;