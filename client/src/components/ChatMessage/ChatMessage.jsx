export default function ChatMessage(props) {
  const { user, body, uid, photoURL, createdAt } = props.message;

  return (
    <>
      <div>
        <img src={photoURL || "https://i.imgur.com/rFbS5ms.png"} />
      </div>
      <div>
        <p>{user}</p>
        <p>{body}</p>
      </div>
    </>
  );
}
