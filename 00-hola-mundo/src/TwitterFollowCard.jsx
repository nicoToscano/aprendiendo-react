export function TwitterFollowCard({
  children,
  userName = "unknown",
  name,
  isFollowing,
}) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-img"
          src={`https://unavatar.io/github/${userName}`}
          alt=""
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">
          {isFollowing ? "Seguiendo" : "Seguir"}
        </button>
      </aside>
    </article>
  );
}
