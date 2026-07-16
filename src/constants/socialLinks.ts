export type SocialLink = {
  name: string;
  href: string;
  handle: string;
  ariaLabel: string;
  color: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'X',
    href: 'https://x.com/SendMeAfrica',
    handle: '@SendMeAfrica',
    ariaLabel: 'Follow SendMe on X',
    color: '#000000',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sendmeallafrica/',
    handle: '@sendmeallafrica',
    ariaLabel: 'Follow SendMe on Instagram',
    color: '#E1306C',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@sendmeallafrica',
    handle: '@sendmeallafrica',
    ariaLabel: 'Follow SendMe on TikTok',
    color: '#010101',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/SendMeGroup',
    handle: 'SendMeGroup',
    ariaLabel: 'Follow SendMe on Facebook',
    color: '#1877F2',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@sendmeallafrica',
    handle: '@sendmeallafrica',
    ariaLabel: 'Subscribe on YouTube',
    color: '#FF0000',
  },
  {
    name: 'Pinterest',
    href: 'https://www.pinterest.com/SendMeGltd/',
    handle: 'SendMeGltd',
    ariaLabel: 'Follow SendMe on Pinterest',
    color: '#E60023',
  },
];
