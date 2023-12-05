import { PublicPost } from '../entities/publicPost/ui/PublicPost'
import { getLayout } from '../widgets'
import { CountUser } from '../widgets/countUsers/CountUser'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { Profile } from '@/widgets/profile/ui/Profile'

import s from './publicPage.module.scss'
function Home() {
  return (
    <div className={s.container}>
      <HeadMeta title={'Home'} />
      <div className={s.content}>
        <CountUser />
        <div className={s.posts}>
          <PublicPost
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incd...Show more'
            }
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
            time={'22 min ago'}
            user={{
              avatar:
                'https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg',
              name: 'URLProfile',
            }}
          />
          <PublicPost
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incd'
            }
            items={[
              {
                title: 'qwe',
                url: 'https://cs11.livemaster.ru/storage/topic/NxN/48/72/51ca01280af65e4ef909ed524902f4cfaf44vc.jpg?h=YsmDTRGuAl-rn9pK1vTgCA',
              },
              //   {
              //     title: 'qwe',
              //     url: 'https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg',
              //   },
              //   {
              //     title: 'qwe',
              //     url: 'https://img.championat.com/c/900x900/news/big/k/c/world-of-warcraft-wrath-of-the-lich-king-classic-reklamiruyut-milye-kotiki_16628211961568633755.jpg',
              //   },
            ]}
            time={'22 min ago'}
            user={{
              avatar:
                'https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg',
              name: 'URLProfile',
            }}
          />
          <PublicPost
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incd...Show more'
            }
            items={[
              {
                title: 'qwe',
                url: 'https://cs11.livemaster.ru/storage/topic/NxN/48/72/51ca01280af65e4ef909ed524902f4cfaf44vc.jpg?h=YsmDTRGuAl-rn9pK1vTgCA',
              },
              //   {
              //     title: 'qwe',
              //     url: 'https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg',
              //   },
              {
                title: 'qwe',
                url: 'https://img.championat.com/c/900x900/news/big/k/c/world-of-warcraft-wrath-of-the-lich-king-classic-reklamiruyut-milye-kotiki_16628211961568633755.jpg',
              },
            ]}
            time={'22 min ago'}
            user={{
              avatar:
                'https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg',
              name: 'URLProfile',
            }}
          />
          <PublicPost
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incd...Show more'
            }
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
            time={'22 min ago'}
            user={{
              avatar:
                'https://png.pngtree.com/png-vector/20191116/ourlarge/pngtree-businessman-avatar-icon-vector-download-vector-user-icon-avatar-silhouette-social-png-image_1991050.jpg',
              name: 'URLProfile',
            }}
          />
        </div>
        <Profile
          user={{
            avatar:
              'https://s3-alpha-sig.figma.com/img/0864/e8b2/ce4393ce58c5a816b9c5719f6c95e12f?Expires=1701648000&Signature=UTkHB1b8st5qxm4hIryCgZ~nq4Ga7xAQ593q9bYQMpVrbISvm5Q17nPEQ1Hr9BiCYtVmaY5LcBoBx2mGhboK6JAsoTxzMXbtTChsn0vSaL4BVkcfSnvDANafnvwCY3K8-qjpgoMd~figRZQ0szqSVL-adOTU-cG73bRFWC9EFrfC92UlxX5KTQYDmlwD69gp2BpkzMsxwWJR9Y2X~nn6EUnBniE-STXovYwgn8MvrYHMvRzXegI16To6az7NIKUVa6OG6kJjXbsX2ZvKq6GCyK3ymVrA5EqzPM1tCQAOfOBTymN8s1QSk8Q-qNF21DkohDgXGfdeeezVThfqVc8Cwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'URLProfile',
          }}
        />
      </div>
    </div>
  )
}

Home.getLayout = getLayout
export default Home
