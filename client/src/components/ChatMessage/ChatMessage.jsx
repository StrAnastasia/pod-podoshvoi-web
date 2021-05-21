export default function ChatMessage(props) {
  const { user, body, uid, photoURL, createdAt } = props.message;
  //   console.log(user);

  return (
    <div
      style={{
        display: "flex",
        color: "white",
      }}
    >
      <div>
        <img
          height="70px"
          width="70px"
          style={{ borderRadius: 20 }}
          src={
            photoURL ||
            "https://sun9-49.userapi.com/impg/lu4nxM5hQREvQNWSCNNVGO9omZF1Z9zwnZ6Ewg/keEZ2nwIVmU.jpg?size=1073x1137&quality=96&sign=30aa1c6e2f3125aa88363fe32b15c7b3&type=album"
          }
        />
      </div>
      <div
        style={{
          border: "1px solid",
          borderColor: "orange",
          borderRadius: 8,
        }}
      >
        <p
          style={{
            marginLeft: "0.5vw",
            marginRight: "0.5vw",
            fontFamily: `"Russo One", sans-serif`,
          }}
        >
          {user}
        </p>
        <div>{body}</div>
      </div>
    </div>
  );
}
