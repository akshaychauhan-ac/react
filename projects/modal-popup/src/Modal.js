function Modal(props) {
  const modelStyle = {
    position: "fixed",
    height: "400px",
    width: "400px",
    border: "1px solid #c2c2c2",
    boxShadow: "1px 1px 1px #c2c2c245",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#f0f0f0",
  };
  return (
    <div style={modelStyle}>
      <header
        style={{
          height: "2.5rem",
          borderBottom: "1px solid #c2c2c2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Title
      </header>
      <section style={{ height: "calc(100% - 5rem)" }}>aa</section>
      <footer
        style={{
          height: "2.5rem",
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #c2c2c2",
        }}
      >
        <div></div>
        <div
          style={{
            display: "flex",
            width: "50%",
            alignItems: "center",
            justifyContent: "end",
            paddingRight: "10px",
          }}
        >
          <button
            onClick={() => {
              props.close();
            }}
          >
            Close
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Modal;
