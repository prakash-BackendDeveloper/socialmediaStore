import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timeStamp }) => {
  let timeAgo = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return <span>&nbsp; created {timeAgo}</span>;
};
export default TimeAgo;
