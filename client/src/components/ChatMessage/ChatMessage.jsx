export default function ChatMessage(props) {
  const { body } = props.message;
  //   console.log(user);
  let myStyle = {};

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
          Аноним:
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
