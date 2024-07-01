function Reloader() {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <button id="new-topik" onClick={reloadPage}>
      <img
        id="light-mode-icon"
        src="icons/add-new.png"
        alt="Light Mode"
        style={{ position: "relative", top: 2, width: 30 }}
      />
    </button>
  );
}

export default Reloader;
