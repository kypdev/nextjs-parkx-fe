import Image from 'next/image'
import Link from 'next/link'

const Menubar = () => {
  return (
    <header className='w- flex flex-row items-start justify-start py-[0rem] pr-[2.38rem] pl-[1.25rem] box-border max-w-full text-left text-[1.25rem] text-darkslategray-200 font-kanit'>
      <div className='flex-1 flex flex-row items-end justify-start gap-[2rem] max-w-full mq750:gap-[1rem]'>
        <Link href={'/'}>
          <Image src={'/images/parkX-logo.png'} alt={''} width={240} height={72} />
        </Link>
        <div className='flex-1 flex flex-col items-start justify-start pt-[0rem] pb-[0.38rem] pr-[2.5rem] pl-[0rem] box-border max-w-full md:w-full '>
          <div className='self-stretch flex flex-row items-start justify-start gap-[4.13rem] mq450:gap-[1rem] mq750:gap-[2.06rem] mq1050:hidden'>
            <div className='h-[1.88rem] relative font-semibold inline-block whitespace-nowrap'>
              <Link href={'/about'}>ABOUT PARK X</Link>
            </div>
            <div className='flex-[0.9412] flex flex-col items-start justify-start py-[0rem] pr-[0.75rem] pl-[0rem]'>
              <div className='h-[1.88rem] relative font-semibold inline-block whitespace-nowrap'>
                <Link href={'/parking-solution'}>PARKING SOLUTIONS</Link>
              </div>
            </div>
            <div className='h-[1.88rem] flex-1 relative font-semibold inline-block whitespace-nowrap'>{`NEWS & PROMOTIONS`}</div>
          </div>
        </div>
        <div className='flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.38rem]'>
          <div className='h-[1.88rem] relative font-semibold inline-block whitespace-nowrap'>
            CONTACT US
          </div>
        </div>
        <div className='flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.38rem]'>
          <div className='h-[1.88rem] relative font-semibold inline-block whitespace-nowrap'>
            {/* <Button shape="circle" className='bg-[#1da1f2]'>Signin | Signup</Button> */}
          </div>
        </div>

      </div>
     
      <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.38rem] text-[0.81rem] text-white mt-4">
        <div className="rounded-xl bg-primary-blue flex flex-row items-end justify-start pt-[0.69rem] pb-[0.63rem] pr-[0.44rem] pl-[1.25rem] gap-[0.81rem]">
         
          <div className="relative font-medium z-[1] hover:underline"><Link href="/register">สมัครสมาชิก</Link> </div>
          |
          <div className="relative font-medium z-[1] hover:underline"> <Link href="/register">เข้าสู่ระบบ</Link> </div>
        </div>
      </div>
    </header>
  )
}

export default Menubar
