import { APP_LOGO } from '../../config';

export const header = { iconLeft: 'close', title: 'Menu', logo: APP_LOGO };

export const contents = props => ([
  { element: 'static', label: 'Free Question', rightElement: props },
  { element: 'static', label: 'Question Price', rightElement: props },
  { element: 'separator', label: 'About astrology' },
  { element: 'touchable', iconLeft: 'people', label: 'Astrologers', iconRight: 'arrow-forward' },
  { element: 'touchable', iconLeft: 'help', label: 'Idea what to ask ', iconRight: 'arrow-forward'},
  { element: 'separator', label: 'Help & Supports' },
  { element: 'touchable', iconLeft: 'at', label: 'Customer Support', iconRight: 'arrow-forward'},
  { element: 'touchable', iconLeft: 'help', label: 'How Bidha works', iconRight: 'arrow-forward'},
  { element: 'touchable', iconLeft: 'document', label: 'Terms & Privacy', iconRight: 'arrow-forward'},
]);

export const footer = { footerNote: 'Our mission is make specialized Vedic astrology to all people in a convennient effective reliable and affordable way' };
