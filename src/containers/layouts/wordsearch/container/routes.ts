import {
  imageArticleList2Layout,
  wordSearchLayout,
  imageChat2Layout,
  imageChat3Layout,
  imageConversationListLayout,
} from '@src/assets/images';
import { MessagingContainerData } from './type';

export const routes: MessagingContainerData[] = [
  // {
  //   title: 'Conversations List',
  //   description: 'Option 1',
  //   image: imageConversationListLayout.imageSource,
  //   route: 'Conversations List',
  // },
  {
    title: 'Word Search',
    description: 'Think words or expressions',
    image: wordSearchLayout.imageSource,
    route: 'Chat 1',
  },
  // {
  //   title: 'Chat',
  //   description: 'Option 2',
  //   image: imageChat2Layout.imageSource,
  //   route: 'Chat 2',
  // },
  // {
  //   title: 'Chat',
  //   description: 'Option 3',
  //   image: imageChat3Layout.imageSource,
  //   route: 'Chat 3',
  // },
];
