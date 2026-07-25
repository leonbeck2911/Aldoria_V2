export default function CodexBookmark({ onOpen }) {
    return (
        <button
            className="codex-bookmark"
            onClick={onOpen}
        >
            <div className="bookmark-leather">

                <div className="bookmark-rune">
                    ✦
                </div>

                <div className="bookmark-title">
                    C<br />
                    O<br />
                    D<br />
                    E<br />
                    X
                </div>

                <div className="bookmark-tip"></div>

            </div>
        </button>
    );
}