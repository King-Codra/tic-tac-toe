import { helper } from '@ember/component/helper';

function formatDate([dateString], { formatType = 'default' }) {
  const date = new Date(dateString);
  let formattedDate;

  switch (formatType) {
    case 'default':
      formattedDate = date.toLocaleDateString('en-GB', {
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
      break;
    default:
      formattedDate = date.toString();
  }

  return formattedDate;
}

export default helper(formatDate);
