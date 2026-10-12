export const CONTACT = {
  hotline: '0824713789',
  hotlineDisplay: '082 471 3789',
  facebookPage: 'https://www.facebook.com/share/1M3enyZBmY/?mibextid=wwXIfr',
  zaloPrimary: '0372976979',
  zaloSecondary: '0824713789'
} as const;

export const CONTACT_LINKS = {
  hotline: `tel:${CONTACT.hotline}`,
  facebookPage: CONTACT.facebookPage,
  zaloPrimary: `https://zalo.me/${CONTACT.zaloPrimary}`,
  zaloSecondary: `https://zalo.me/${CONTACT.zaloSecondary}`
} as const;
