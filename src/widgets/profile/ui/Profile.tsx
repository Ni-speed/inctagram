import { FC } from 'react'

import { useGetMeQuery, useGetProfileQuery } from '@/features'
import { Typography } from '@/shared'
import { HeroProfilePlaceholder } from '@/widgets/heroProfilePlaceholder/HeroProfilePlaceholder'
import { ProfileButtons } from '@/widgets/profile/ui/ProfileButtons'
import { ProfileStatistic } from '@/widgets/profile/ui/ProfileStatistic'
import Image from 'next/image'

import s from './profile.module.scss'

type PropsType = {}

export const Profile: FC<PropsType> = () => {
  //TODO need fix Internationalization & add useTranslation
  const { data: profileData, isLoading } = useGetProfileQuery({ id: 1 })
  const { data: meData } = useGetMeQuery()

  const isOwnProfile = meData?.id === profileData?.id
  const isFriend = profileData?.isFriend ?? true

  if (isLoading) {
    return <>Loading...</>
  }

  const imgUrl =
    'https://s3-alpha-sig.figma.com/img/0864/e8b2/ce4393ce58c5a816b9c5719f6c95e12f?Expires=1701648000&Signature=UTkHB1b8st5qxm4hIryCgZ~nq4Ga7xAQ593q9bYQMpVrbISvm5Q17nPEQ1Hr9BiCYtVmaY5LcBoBx2mGhboK6JAsoTxzMXbtTChsn0vSaL4BVkcfSnvDANafnvwCY3K8-qjpgoMd~figRZQ0szqSVL-adOTU-cG73bRFWC9EFrfC92UlxX5KTQYDmlwD69gp2BpkzMsxwWJR9Y2X~nn6EUnBniE-STXovYwgn8MvrYHMvRzXegI16To6az7NIKUVa6OG6kJjXbsX2ZvKq6GCyK3ymVrA5EqzPM1tCQAOfOBTymN8s1QSk8Q-qNF21DkohDgXGfdeeezVThfqVc8Cwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'

  const handleUnfollow = () => {
    // Логика отписки
  }

  const handleSendMessage = () => {
    // Логика отправки сообщения
  }

  const handleFollow = () => {
    // Логика подписки
  }

  return (
    <>
      <div className={s.profilePageHeaderWrapper}>
        <Image
          alt={'avatar'}
          className={s.avatar}
          height={204}
          src={profileData?.avatars[0].url || imgUrl}
          width={204}
        />

        <div className={s.statisticWrapper}>
          <div className={s.profileURL}>
            <Typography variant={'h1'}>URLProfile</Typography>
            <div className={s.profileButtonsContainer}>
              <ProfileButtons
                isFriend={isFriend}
                isOwnProfile={isOwnProfile}
                onFollow={handleFollow}
                onSendMessage={handleSendMessage}
                onUnfollow={handleUnfollow}
              />
            </div>
          </div>
          <ul className={s.profileStatistics}>
            <ProfileStatistic count={2218} label={'Following'} />
            <ProfileStatistic count={3358} label={'Followers'} />
            <ProfileStatistic count={4764} label={'Publications'} />
          </ul>
          <div className={s.textBlock}>
            <Typography variant={'regularText16'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco
            </Typography>{' '}
            <Typography as={'a'} href={'https://leetcode.com/'} variant={'regularLink'}>
              laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </div>
        </div>
      </div>
      <HeroProfilePlaceholder />
    </>
  )
}
