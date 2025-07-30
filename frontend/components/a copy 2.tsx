import Image from "next/image";

export default function A2() {
  return (
    <div className="top-op-box" id="j-topOpBox">
      <div
        className="top-game-op"
        id="topGameOp"
        data-l1="34"
        style={{ display: "block" }}
      >
        <div className="game-wrap">
          <a
            className="close"
            id="closeTopGame"
            href="javascript:"
            data-eid="qd_A184"
          >
            <em className="iconfont"></em>
          </a>
          <a
            href="https://game.qidian.com/CpGameHome/Ad/directLogin/name/wcbz1/way/1?qd_game_key=wcbz1200x60.jpg&amp;qd_dd_p1=150876"
            target="_blank"
            data-kw="https://game.qidian.com/CpGameHome/Ad/directLogin/name/wcbz1/way/1?qd_game_key=wcbz1200x60.jpg&amp;qd_dd_p1=150876"
            data-eid="qd_A183"
            data-qd_dd_p1="1"
          >
            <Image
              src="https://gameapp-1252317822.file.myqcloud.com/yuewen/game/images/1256156e096a22dff43c3660b2183eff.jpg"
              alt="游戏广告"
              width={200}
              height={100}
            />
            <span className="op-tag"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
