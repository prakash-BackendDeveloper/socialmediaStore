import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const ReactionButtons = ({ post }) => {
  const reactionsEmoji = {
    thumbsUp: "👍",
    wow: "🤩",
    heart: "❤️",
    rocket: "🚀",
    coffee: "🍵",
  };
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionsEmoji).map(
    ([name, emoji]) => {
      return (
        <button
          key={name}
          type="button"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }
        >
          {emoji} {post.reactions[name]}
        </button>
      );
    }
  );

  return <div>{reactionButtons}</div>;
};
export default ReactionButtons;
