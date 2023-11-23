import { FC } from 'react'

import { Slider, Typography } from '@/shared'
import { Sidebar } from '@/widgets/sidebar'
import Image from 'next/image'

import s from './profile.module.scss'
type Props = {
  user: { avatar: string; name: string }
}
export const Profile: FC<Props> = ({ user }) => {
  return (
    <>
      <Image alt={'avatar'} className={s.avatar} height={204} src={user.avatar} width={204} />
      <Typography>URLProfile</Typography>
      <ul>
        <li>
          <span className={s.counterStats}>2218</span>
          <Typography className={s.listText}>Following</Typography>
        </li>
        <li>
          <span className={s.counterStats}>3358</span>
          <Typography className={s.listText}>Followers</Typography>
        </li>
        <li>
          <span className={s.counterStats}>4764</span>
          <Typography className={s.listText}>Publications</Typography>
        </li>
      </ul>
      <div className={s.textBlock}>
        <span className={s.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco
        </span>
        <a className={s.link} href={'#'}>
          laboris nisi ut aliquip ex ea commodo consequat.
        </a>
      </div>
      <div className={s.posts}>
        <Slider
          items={[
            {
              title: 'qwe',
              url: 'https://cs11.livemaster.ru/storage/topic/NxN/48/72/51ca01280af65e4ef909ed524902f4cfaf44vc.jpg?h=YsmDTRGuAl-rn9pK1vTgCA',
            },
            {
              title: 'qwe',
              url: 'https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg',
            },
            {
              title: 'qwe',
              url: 'https://img.championat.com/c/900x900/news/big/k/c/world-of-warcraft-wrath-of-the-lich-king-classic-reklamiruyut-milye-kotiki_16628211961568633755.jpg',
            },
          ]}
        ></Slider>
        <Slider
          items={[
            {
              title: 'qwe',
              url: 'https://cs11.livemaster.ru/storage/topic/NxN/48/72/51ca01280af65e4ef909ed524902f4cfaf44vc.jpg?h=YsmDTRGuAl-rn9pK1vTgCA',
            },
            {
              title: 'qwe',
              url: 'https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg',
            },
            {
              title: 'qwe',
              url: 'https://img.championat.com/c/900x900/news/big/k/c/world-of-warcraft-wrath-of-the-lich-king-classic-reklamiruyut-milye-kotiki_16628211961568633755.jpg',
            },
          ]}
        ></Slider>
        <Slider
          items={[
            {
              title: 'qwe',
              url: 'https://cs11.livemaster.ru/storage/topic/NxN/48/72/51ca01280af65e4ef909ed524902f4cfaf44vc.jpg?h=YsmDTRGuAl-rn9pK1vTgCA',
            },
            {
              title: 'qwe',
              url: 'https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg',
            },
            {
              title: 'qwe',
              url: 'https://img.championat.com/c/900x900/news/big/k/c/world-of-warcraft-wrath-of-the-lich-king-classic-reklamiruyut-milye-kotiki_16628211961568633755.jpg',
            },
          ]}
        ></Slider>
        <Slider
          items={[
            {
              title: 'qwe',
              url: 'https://cs11.livemaster.ru/storage/topic/NxN/48/72/51ca01280af65e4ef909ed524902f4cfaf44vc.jpg?h=YsmDTRGuAl-rn9pK1vTgCA',
            },
            {
              title: 'qwe',
              url: 'https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg',
            },
            {
              title: 'qwe',
              url: 'https://img.championat.com/c/900x900/news/big/k/c/world-of-warcraft-wrath-of-the-lich-king-classic-reklamiruyut-milye-kotiki_16628211961568633755.jpg',
            },
          ]}
        ></Slider>
        <Slider
          items={[
            {
              title: 'qwe',
              url: 'https://cs11.livemaster.ru/storage/topic/NxN/48/72/51ca01280af65e4ef909ed524902f4cfaf44vc.jpg?h=YsmDTRGuAl-rn9pK1vTgCA',
            },
            {
              title: 'qwe',
              url: 'https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg',
            },
            {
              title: 'qwe',
              url: 'https://img.championat.com/c/900x900/news/big/k/c/world-of-warcraft-wrath-of-the-lich-king-classic-reklamiruyut-milye-kotiki_16628211961568633755.jpg',
            },
          ]}
        ></Slider>
      </div>
    </>
  )
}
