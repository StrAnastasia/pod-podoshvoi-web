export default function ChatMessage(props) {
  const { nickname } = props;
  const { user, body, photoURL, createdAt } = props.message;
  //   console.log(user);
  let myStyle = {};
  if (nickname === user) {
    console.log("ya v ife");
    myStyle = {
      color: "white",
      ["allign-self"]: "flex-end",
    };
  } else {
    myStyle = {
      display: "flex",
      color: "white",
    };
  }

  return (
    <div style={myStyle}>
      <div
        style={{
          display: "flex",
        }}
      >
        <p
          style={{
            marginLeft: "0.5vw",
            marginRight: "0.5vw",
            fontFamily: `"Russo One", sans-serif`,
          }}
        >
          {user}:
        </p>

        <p
          style={{
            width: "20vw",
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
