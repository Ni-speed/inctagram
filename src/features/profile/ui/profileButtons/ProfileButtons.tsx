import { FC } from 'react'

import { Button, Typography } from '@/shared'
import { useRouter } from 'next/router'

import s from './profileButtons.module.scss'

type ProfileButtonsProps = {
  isFriend: boolean
  isOwnProfile: boolean
  onFollow: () => void
  onSendMessage: () => void
  onUnfollow: () => void
}

export const ProfileButtons: FC<ProfileButtonsProps> = ({
  isFriend,
  isOwnProfile,
  onFollow,
  onSendMessage,
  onUnfollow,
}) => {
  const router = useRouter()

  return (
    <>
      {isOwnProfile ? (
        <Button
          as={'a'}
          onClick={() => router.push('/profile/profileSettings/generalInfo')}
          variant={'secondary'}
        >
          <Typography variant={'h3'}>Profile Settings</Typography>
        </Button>
      ) : (
        <>
          {isFriend ? (
            <div className={s.buttonsWrapper}>
              <Button as={'a'} onClick={onUnfollow} variant={'text'}>
                <Typography variant={'h3'}>Unfollow</Typography>
              </Button>
              <Button as={'a'} onClick={onSendMessage} variant={'secondary'}>
                <Typography variant={'h3'}>Send Message</Typography>
              </Button>
            </div>
          ) : (
            <div className={s.buttonsWrapper}>
              <Button as={'a'} onClick={onFollow} variant={'primary'}>
                <Typography variant={'h3'}>Follow</Typography>
              </Button>
              <Button as={'a'} onClick={onSendMessage} variant={'secondary'}>
                <Typography>Send Message</Typography>
              </Button>
            </div>
          )}
        </>
      )}
    </>
  )
}
