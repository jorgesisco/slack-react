import MessageIcon from '@material-ui/icons/Message';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleIcon from '@material-ui/icons/People';
import AppsIcon from '@material-ui/icons/Apps';
import AddIcon from '@material-ui/icons/Add';
export const sidebarItemsData = [
  {
    icon: <MessageIcon />,
    text: 'Thread',
  },
  {
    icon: <InboxIcon />,
    text: 'All DMs',
  },
  {
    icon: <DraftsIcon />,
    text: 'Mentions & Reactions',
  },
  {
    icon: <BookmarkBorderIcon />,
    text: 'Save Items',
  },
  {
    icon: <PeopleIcon />,
    text: 'Peoples & Groups',
  },
];

export const sidebarChannel = [
  {
    icon: <AddIcon />,
    text: 'Channels',
  },
];

export const sidebarChannelItem = [
  {
    text: 'Channel #1',
  },
  {
    text: 'Channel #2',
  },
  {
    text: 'Channel #3',
  },
];
