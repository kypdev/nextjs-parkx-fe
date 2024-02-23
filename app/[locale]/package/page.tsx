import { Avatar, Button, Card, Pagination, Space } from 'antd'
import Image from 'next/image'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons';

const imgUrl = [
  '/images/package/1.png',
  '/images/package/2.png',
  '/images/package/3.png',
  '/images/package/4.png',
  '/images/package/5.png',
]

const avatarSrc =
  'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
const avatarName = 'Welcome, Arkom'
const Page = () => {
  return (
    <>
      <div className='flex flex-row px-10'>
        <Image
          src={imgUrl[0]}
          className='mx-10'
          alt={'empty'}
          width={253}
          height={80}
        />
        <Image
          src={imgUrl[1]}
          className='mx-10'
          alt={'empty'}
          width={253}
          height={80}
        />
        <Image
          src={imgUrl[2]}
          className='mx-10'
          alt={'empty'}
          width={253}
          height={80}
        />
        <Image
          src={imgUrl[3]}
          className='mx-10'
          alt={'empty'}
          width={253}
          height={80}
        />
      </div>
      <div className='flex flex-row'>
        {/* <Card style={{width: 1184, height: 815, padding: 0, margin: 0}} > */}
        <div
          className='bg-primary-blue rounded-l-lg'
          style={{ width: 369, height: 815 }}
        >
          <Space className='mx-7 mt-7'>
            <Avatar
              size='large'
              src={avatarSrc}
            />
            <p className='text-white text-xl' style={{fontSize: 16}}>{avatarName}</p>
          </Space>
          <p className='text-white text-xl mx-8 mt-7 mb-4' style={{fontSize: 14}}>จัดการบัญชี</p>
          <Button className='text-white text-xl mx-12' style={{fontSize: 14, border: 'none'}} icon={<SearchOutlined />}>ข้อมูลสมาชิก</Button>
          <Button className='text-white text-xl mx-12 border-none' style={{fontSize: 14}} icon={<SearchOutlined />}>เปลี่ยนรหัสผ่าน</Button>
          <p className='text-white text-xl mx-8 mt-7 mb-4' style={{fontSize: 14}}>ระบบสมาชิก</p>
          <Button className='text-white text-xl mx-12 border-none' style={{fontSize: 14}} icon={<SearchOutlined />}>ข้อมูลรถ</Button>
          <Button className='text-white text-xl mx-12 border-none' style={{fontSize: 14}} icon={<SearchOutlined />}>สมัครแพคเกจ</Button>
          <Button className='text-white text-xl mx-12 border-none' style={{fontSize: 14}} icon={<SearchOutlined />}>ประวัติการใช้งาน</Button>
          <Button className='text-white text-xl mx-12 border-none' style={{fontSize: 14}} icon={<SearchOutlined />}>ใบเสร็จ/ใบแจ้งหนี้</Button>
          <Button className='text-white text-xl mx-12 border-none' style={{fontSize: 14}} icon={<SearchOutlined />}>สถานะ/ต่ออยู่</Button>
          <Button className='text-white text-xl mx-6 mt-20 border-none hover:text-black' style={{fontSize: 14}} ><p>ออกจากระบบ</p></Button>

        </div>
        <div
          className='bg-white rounded-r-lg border-dashed'
          style={{ width: 692, height: 815 }}
        >
          <p className='text-danger flex justify-center mt-10 text-xl' style={{fontSize: 16}}>ขณะนี้คุณมีแพกเกจที่ใกล้ถึงกำหนดต่ออายุ ในวันที่ 31 มกราคม 2567</p>
          <div className='flex flex-row justify-between mx-8 mt-4'>
            <Button className='px-16'>ส่วนบุคคล</Button>
            <Button className='px-16'>นิติบุคคล</Button>
            <Button className='px-16'>event</Button>
          </div>
          <p className='mx-8 mt-4 text-[2]' style={{fontSize: 16}}>แพคเกจปัจจุบัน</p>
          <div className='mx-8 mt-4 rounded-md bg-grey' style={{fontSize: 16}}>คุณยังไม่มีแพคเกจหรือการการจอง คุณสามารถเริ่ม สมัครแพคเกจ หรือ จองก่อนจอง ได้ที่นี่</div>
          <p className='mx-8 mt-4 text-[2]' style={{fontSize: 16}}>สมัครแพคเกจ</p>
          <div className='mx-8 mt-4 flex flex-col justify-between'>
            <div className='flex justify-between'>
              <p>ส่วนบุคคล</p>
              <p>โปรโมชัน 1/02/2024 -  31/03/2024</p>
            </div>
            <Image src={imgUrl[4]} width={636} height={114} alt={'empty'} />
            <div className='flex justify-between'>
              <p>ส่วนบุคคล</p>
              <p>โปรโมชัน 1/02/2024 -  31/03/2024</p>
            </div>
            <Image src={imgUrl[4]} width={636} height={114} alt={'empty'} />
            <div className='flex justify-between'>
              <p>ส่วนบุคคล</p>
              <p>โปรโมชัน 1/02/2024 -  31/03/2024</p>
            </div>
            <Image src={imgUrl[4]} width={636} height={114} alt={'empty'} />
          </div>
          <Pagination className='mx-8 mt-32 flex justify-center' defaultCurrent={1} total={50} />
        </div>
        {/* </Card> */}
      </div>
    </>
  )
}

export default Page
