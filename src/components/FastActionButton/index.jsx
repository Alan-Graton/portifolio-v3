import guestbooksvg from "../../assets/guestbook.svg";

export function FastActionButton({ handleOnClick }) {
  return (
    <div className="fab-container">
      <button className="guestbook-btn" onClick={handleOnClick}>
        <img
          className="tech-logo guestbook"
          src={guestbooksvg}
          alt="guestbook icon"
        />
      </button>
    </div>
  );
}
