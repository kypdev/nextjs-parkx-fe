"use client"
import { Input, Form, Button } from "antd"

const login = () => {
    return (
        <div className=" rounded-11xl bg-white shadow-[0px_4px_4px_rgba(174,_174,_174,_0.25)] box-border flex flex-row items-center justify-start py-[0rem] pr-[0.13rem] pl-[4.88rem] gap-[4.69rem]  border-[1px] border-solid border-seconday-grey-e9e9e9 ">

            <div className="w-[25rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.56rem] box-border min-w-[25rem] max-w-full mq750:min-w-full mq1025:flex-1">
                <Form className="m-0 self-stretch flex flex-col items-start justify-start gap-[1.44rem]">
                    <div className="w-[13.25rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.44rem] box-border">
                        <h1 className="m-0  h-[2.81rem] flex-1 relative text-[1.5rem] font-medium font-kanit text-black text-left inline-block z-[2]">
                            ล็อกอินเข้าสู่ระบบ
                        </h1>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.63rem]">

                        <div className="w-[5.56rem] relative text-[1rem] font-kanit text-black text-left inline-block z-[2]">
                            อีเมล
                        </div>
                        <Form.Item style={{
                            width: "100%"

                        }}
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณากรอกอีเมล',
                                },
                            ]}

                        >
                            <Input placeholder="อีเมล" className="self-stretch rounded-8xs flex flex-row items-center justify-start py-[0.69rem] px-[0.94rem] z-[2] border-[1px] border-solid border-primary-green placeholder:font-kanit" />
                        </Form.Item>

                    </div>
                    <div className="m-0 h-[1.69rem] relative text-[1.13rem] font-normal font-kanit text-black text-left inline-block z-[2]">
                        รหัสผ่าน
                    </div>
                    <div className="self-stretch flex flex-col items-end justify-start gap-[0.38rem]">
                        <Input.Password placeholder="รหัสผ่าน" className="self-stretch rounded-8xs flex flex-row items-center justify-start py-[0.69rem] px-[0.94rem] z-[2] border-[1px] border-solid border-primary-green placeholder:font-kanit" />
                        <div className="relative text-[0.75rem] font-light font-kanit text-darkgray-100 text-right z-[2]">
                            ลืมรหัสผ่าน
                        </div>
                    </div>


                    <div className="self-stretch flex flex-col items-center justify-start gap-[1.25rem]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[0.63rem]">
                            
                            <button style={{
                                width: "100%",
                                height: "100%"
                            }}  className="self-stretch rounded-8xs bg-primary-green flex flex-row items-center justify-center py-[0.69rem] pr-[1.25rem] pl-[1.56rem] z-[2] hover:bg-primary-green">
                                <div className="relative  text-[1rem] font-semibold font-kanit text-white text-center">
                                    เข้าสู่ระบบ
                                </div>
                            </button>
                            <div className="self-stretch flex flex-row items-center justify-center py-[0rem] pr-[0.06rem] pl-[0rem] gap-[0.88rem] mq750:flex-wrap">
                                <img
                                    className="h-[0.03rem] w-[10.75rem] relative z-[2]"
                                    loading="eager"
                                    alt=""
                                    src="/vector-27.svg"
                                />
                                <div className="h-[1.5rem] relative text-[1rem] font-medium font-kanit text-black text-center flex items-center justify-center z-[2]">
                                    หรือ
                                </div>
                                <img
                                    className="h-[0.03rem] w-[10.75rem] relative z-[2]"
                                    loading="eager"
                                    alt=""
                                    src="/vector-28.svg"
                                />
                            </div>
                            <div className="self-stretch rounded-8xs flex flex-row items-start justify-center py-[0.69rem] pr-[1.25rem] pl-[1.56rem] gap-[0.94rem] whitespace-nowrap z-[2] border-[1px] border-solid border-seconday-grey-e9e9e9">
                                <img
                                    className="h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]"
                                    alt=""
                                    src="/images/icons/google-login.png"
                                />
                                <div className="relative text-[1rem] font-medium font-kanit text-gray text-center">
                                    เข้าสู่ระบบผ่าน Google
                                </div>
                            </div>
                            <div className="self-stretch rounded-8xs flex flex-row items-center justify-center py-[0.69rem] pr-[1.25rem] pl-[1.5rem] gap-[0.88rem] whitespace-nowrap z-[2] border-[1px] border-solid border-seconday-grey-e9e9e9">
                                <img
                                    className="h-[1.25rem] w-[1.25rem] relative object-cover"
                                    alt=""
                                    src="/images/icons/fb-login.png"
                                />
                                <div className="relative text-[1rem] font-medium font-kanit text-gray text-center">
                                    เข้าสู่ระบบผ่าน Facebook
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.31rem]">
                            <div className="relative text-[1rem] font-kanit text-left z-[2]">
                                <span className="text-black">{`คุณยังไม่ได้เป็นสมาชิกใช่ไหม? `}</span>
                                <span className="text-primary-green">สมัครสมาชิก</span>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
            <img
                className="h-[38.75rem] flex-1 relative rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none max-w-full overflow-hidden object-cover min-w-[22.56rem] z-[1] mq750:min-w-full"
                loading="eager"
                alt=""
                src="/images/login/imageLogin.png"
            />
        </div>)
}

export default login