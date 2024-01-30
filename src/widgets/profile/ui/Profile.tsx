import { FC } from 'react'

import { useGetMeQuery, useGetProfileQuery } from '@/features'
import { ProfileButtons } from '@/features/profile/ui/profileButtons/ProfileButtons'
import { ProfileStatistic } from '@/features/profile/ui/profileStatisric/ProfileStatistic'
import { Typography } from '@/shared'
import { HeroProfilePlaceholder } from '@/widgets/heroProfilePlaceholder/HeroProfilePlaceholder'
import { skipToken } from '@reduxjs/toolkit/query'
import Image from 'next/image'

import s from './profile.module.scss'

type PropsType = {}

export const Profile: FC<PropsType> = () => {
  //TODO need fix Internationalization & add useTranslation

  const { data: meData, isLoading: isLoadingMe } = useGetMeQuery()
  const { data: profileData, isLoading: isLoadingProfile } = useGetProfileQuery({
    profileId: meData?.id ?? skipToken,
  })

  const isOwnProfile = meData?.id === profileData?.id
  const isFriend = profileData?.isFriend ?? true

  if (isLoadingMe || isLoadingProfile) {
    return <>Loading...</>
  }

  const imgUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Ctio9d7UbPoFkuH6-h1kqcruqY3kgjwBSA&usqp=CAU'

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
          src={profileData?.avatars[0]?.url || imgUrl}
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
