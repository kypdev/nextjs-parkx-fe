import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import CookieConsent from '@/components/CookieConsent';
import ModalMessages from '@/components/modal/ModalMessages';
import { CustomProvider } from '../provider';

const kanit = Kanit({
  subsets: ['latin', 'latin-ext', 'thai'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'ParkX',
  description:
    'ParkX  - บริการจอดรถอัจฉริยะ ที่ช่วยให้คุณจอดรถได้ง่ายขึ้น และช่วยให้คุณประหยัดเงินได้มากขึ้น ด้วยการจอดรถแบบอัจฉริยะ ที่คุณสามารถจอดรถได้ทุกที่ ทุกเวลา และไม่ต้องเสียเวลาในการหาที่จอดรถอีกต่อไป',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  return (
    <>
      <html lang={locale}>
        <head>
          <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        </head>
        <body className={kanit.className}>
          <NextIntlClientProvider messages={messages}>
            <div className="w-full relative bg-[#ffffff] overflow-hidden flex flex-col items-center justify-start gap-[2.56rem] tracking-[normal] text-left text-[0.63rem]  font-p6-prompt-reg-12 mq450:gap-[1.25rem]">
              <div className="w-[13.13rem] h-[1.25rem] relative bg-firebrick hidden" />
              <CustomProvider>
                <Navbar />
              </CustomProvider>

              {children}
              <section className="w-[79.75rem] flex flex-row items-start justify-end py-[0rem] px-[1.25rem] box-border max-w-full">
                <div className="w-[71.31rem] flex flex-col items-start justify-start gap-[3.38rem] max-w-full mq900:gap-[1.69rem]"></div>
              </section>
              <ModalMessages />
              <Footer />
            </div>
            <CookieConsent />
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  );
}
