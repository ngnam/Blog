/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Start your next react project in seconds',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      'Nếu bạn không học cách làm mới bản thân, tưới nước cho bản thân, cho cuộc sống mỗi ngày, thì cuộc sống sẽ trở nên thật nhàm chán, và bạn sẽ lại càng phải bám víu vào hình tượng người yêu tương lai nào đó, mong mỏi người đấy đến sẽ làm cuộc sống của bạn bớt chán đi.',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
