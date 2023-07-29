import Head from 'next/head'
import { Fragment, useEffect, useRef, useState } from 'react'
import { AnimateSharedLayout, motion, useScroll } from 'framer-motion'
import { clamp } from 'lodash'
import Link from 'next/link'
import Pdfcard from '../components/pdfcard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBook,
  faCircleXmark,
  faFileInvoice,
  faFlaskVial,
  faPeopleRobbery,
  faPuzzlePiece,
} from '@fortawesome/free-solid-svg-icons'
const meta = {
    title: 'Document | MWIT Open House 2023',
    url: 'document',
    description:
      'รวมเอกสารทั้งหมดที่จำเป็นสำหรับการเข้าร่วมงาน MWIT Open House 2023',
    img: 'ogimage.png',
  }
const File = [
    {
        name : "Google Form ลงทะเบียนเข้าร่วม MWIT OPEN HOUSE 2023: DISCOVERY",
        href : "https://forms.gle/9r7ax1gAwxDK5Hov6",
        src: "logo",
        desc: "ขอความกรุณาทุกท่านที่มีความประสงค์เข้าร่วมกิจกรรมร่วมมือกรอกข้อมูลลงทะเบียนเข้างานเพื่อความสะดวกในการเข้างานในวันจริง",
        button: "ฟอร์ม"
    },
    {
        name : "Google Form ลงทะเบียนเข้าแข่งขัน MWIT SPELLING BEE",
        href : "https://docs.google.com/forms/d/e/1FAIpQLSfKl3SQ5HzlAsrQ7BIPtD6Un0_LnH3VJBwxhOBglF0Ifd40Rw/closedform",
        src: "SpellingBee",
        desc: "สำหรับผู้ที่สนใจเข้าแข่งขันในกิจกรรม Spelling bee ในวันที่ 25 สิงหาคม 2566",
        button: "ฟอร์ม"
    }

]
export default function eventregis() {
  return (
    <>
    <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property='og:url'
          content={'https://openhouse.mwit.ac.th/' + meta.url}
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta
          property='og:image'
          content={'https://mwitophcdn.woyiswoy.com/img/' + meta.img}
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='openhouse.mwit.ac.th' />
        <meta property='twitter:url' content={meta.url} />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta
          name='twitter:image'
          content={'https://mwitophcdn.woyiswoy.com/img/' + meta.img}
        />
    </Head>
        <main className='flex flex-col items-center w-full max-w-7xl px-8 py-6 gap-4 mx-auto'>
            <span
              className='font-CS font-bold text-2xl md:text-3xl lg:text-4xl pt-16'
            >
              All documents
            </span>
            <div className='w-full flex flex-wrap justify-center gap-3 pb-8'>
              {File.map((a, ai) => (
                <Pdfcard
                  key={ai}
                  src={a.src}
                  name={a.name}
                  desc={a.desc}
                  href={a.href}
                  button={a.button}
                />
              ))}
              </div>
        </main>
    </>
      
  )
}