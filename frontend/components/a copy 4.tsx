export default function A4() {
  return (
    <div className="main-nav-wrap" data-l1="3">
      <div className="main-nav box-center cf">
        <ul>
          <li className="first">
            <span>
              <em>
                <i></i> <i></i> <i></i>
              </em>
              作品分类
            </span>
          </li>
          <li className="nav-li">
            <a href="//www.qidian.com/all/" data-eid="qd_A15">
              全部作品
            </a>
          </li>
          <li className="nav-li">
            <a href="//www.qidian.com/rank/" data-eid="qd_A16">
              排行
            </a>
          </li>
          <li className="nav-li">
            <a href="//www.qidian.com/finish/" data-eid="qd_A17">
              完本
            </a>
          </li>
          <li className="nav-li">
            <a href="//www.qidian.com/free/" data-eid="qd_A18">
              免费
            </a>
          </li>
          <li className="nav-li">
            <a
              className="third-remove"
              href="https://write.qq.com/?siteid=1"
              target="_blank"
              data-eid="qd_A19"
            >
              作家专区
            </a>
          </li>
          <li className="nav-li">
            <a href="//www.qidian.com/soushu/" data-eid="qd_A13">
              搜索
            </a>
          </li>
          <li className="nav-li">
            <a href="//www.qdmm.com/" target="_blank" data-eid="qd_A83">
              女生网
            </a>
          </li>
          <li className="nav-li">
            <a
              className="third-remove trigger-download"
              id="homeHeaderDownload"
              href="javascript:"
              rel="nofollow"
              target="_blank"
              data-eid=""
            >
              <b className="iconfont client"></b>客户端
              <div
                className="all-download-panel"
                id="allDownloadPanel"
                data-position="bottom"
                style={{ left: "-125.5px" }}
              >
                <ul className="all-download-con" style={{ width: "384px" }}>
                  <li className="list">
                    <h4 className="title">
                      <em className="iconfont icon-title"></em>手机版
                    </h4>
                    <p className="desc">扫码下载手机APP</p>
                    <div className="download-panel">
                      <i className="qd-logo"></i>
                      <div
                        id="downloadQrCode"
                        className="download-qr-code"
                        data-eid="qd_H_Phonedaoliubaoguang"
                        data-longlink="https://qidian.gtimg.com/QDReader/app/openBookshelf?query=%7B%22_report%22%3A%22qidian_pc%22%2C%22_pc%22%3A%221753791939_1455138749%24qd_p_qidian%24%24%24%244099741200000%24qd_H_Phonedaoliubaoguang%24%22%2C%22bookId%22%3A%22%22%2C%22chapterId%22%3A%22%22%7D&amp;page=qidian-pc&amp;source=qidianPC&amp;reuId=1753791939_1455138749&amp;__self_redirect__=1"
                        title="https://qdd.gg/t1/t7jLf0ff"
                      >
                        <canvas
                          width="320"
                          height="320"
                          style={{ display: "none" }}
                        ></canvas>
                        <img
                          alt="Scan me!"
                          src="data:image/png;base64,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"
                          style={{ display: "block" }}
                        />
                      </div>
                    </div>
                  </li>
                  <li
                    className="list "
                    data-iswin="true"
                    id="downloadWin"
                    data-eid="qd_A_zhuomiandaoliuclick"
                  >
                    <h4 className="title">
                      <em className="icon-windows iconfont"></em>桌面版
                    </h4>
                    <p className="desc">适合Windows系统设备</p>
                    <div className="download-panel">
                      <img
                        className="qd-img"
                        src="https://imgservices-1252317822.image.myqcloud.com/coco/s11022022/43dddf20.il61if.svg"
                        alt=""
                      />
                      <a
                        className="download-desk jsDownloadDesk"
                        data-l7="1"
                        data-eid="qd_A_zhuomiandaoliuclick"
                        href="https://down.pc.yyb.qq.com/packing/3c25016cde98caefd1e7c1d7db2886ed/com.qidian.QDReader_2500100000_installer.exe"
                        rel="nofollow"
                      >
                        立即下载
                      </a>
                      <p className="download-hover-tips">
                        由腾讯应用宝移动引擎提供电脑版体验能力
                      </p>
                    </div>
                  </li>
                </ul>

                <p className="download-website">
                  <a
                    className="download-link"
                    data-l7="1"
                    data-eid="qd_A_daoliuquguanwang"
                    href="https://www.yuewen.com/app/?type=appqd"
                    target="_blank"
                    rel="nofollow"
                  >
                    去官网了解更多品牌信息<em className="iconfont"></em>
                  </a>
                </p>
              </div>
            </a>
          </li>
          <li className="game web" id="game-web">
            <a
              className="web-game"
              href="https://game.qidian.com?qd_game_key=qdzw_homepage_Topbar"
              rel="nofollow"
              target="_blank"
              data-eid="qd_A21"
            >
              <b className="iconfont"></b>页游
            </a>
            <div className="game-dropdown hidden" id="web-dropdown">
              <cite></cite>
              <div className="web-game-list">
                <dl className="lately" id="lately">
                  <dt>最近玩过</dt>
                  <dd data-rid="1">
                    <a
                      className="name"
                      href="javascript:"
                      target="_blank"
                      data-eid="qd_A29"
                    ></a>
                    <strong></strong>
                    <a
                      className="link"
                      href="javascript:"
                      target="_blank"
                      data-eid="qd_A29"
                    >
                      GO<i>&gt;</i>
                    </a>
                  </dd>
                  <dd data-rid="2">
                    <a
                      className="name"
                      href="javascript:"
                      target="_blank"
                      data-eid="qd_A30"
                    ></a>
                    <strong></strong>
                    <a
                      className="link"
                      href="javascript:"
                      target="_blank"
                      data-eid="qd_A30"
                    >
                      GO<i>&gt;</i>
                    </a>
                  </dd>
                </dl>
                <dl className="web-list" id="log-web-list">
                  <dt>今日开服</dt>
                  <dd className="act" data-rid="1">
                    <h3>
                      <span></span> <i>07-29</i>
                      <a
                        href="https://game.qidian.com/CpGameHome/ServerList/list/name/smztweb?qd_game_key=1-991001"
                        data-eid="qd_A31"
                        target="_blank"
                      >
                        神魔诛天web
                      </a>
                      <strong>56区</strong>
                    </h3>
                    <p>
                      <a
                        href="https://game.qidian.com/CpGameHome/ServerList/list/name/smztweb?qd_game_key=1-991001"
                        data-eid="qd_A31"
                        target="_blank"
                      >
                        <img src="//gameapp-1252317822.file.myqcloud.com/yuewen/game/web/smztweb/192x46.jpg" />
                        <i className="op-tag"></i>
                      </a>
                    </p>
                  </dd>
                  <dd data-rid="2">
                    <h3>
                      <span></span> <i>07-29</i>
                      <a
                        href="https://game.qidian.com/CpGameHome/ServerList/list/name/qktd?qd_game_key=1-991001"
                        data-eid="qd_A32"
                        target="_blank"
                      >
                        乾坤天地
                      </a>
                      <strong>19区</strong>
                    </h3>
                    <p>
                      <a
                        href="https://game.qidian.com/CpGameHome/ServerList/list/name/qktd?qd_game_key=1-991001"
                        data-eid="qd_A32"
                        target="_blank"
                      >
                        <img src="//gameapp-1252317822.file.myqcloud.com/yuewen/game/web/qktd/192x46.jpg" />
                        <i className="op-tag"></i>
                      </a>
                    </p>
                  </dd>
                  <dd data-rid="3">
                    <h3>
                      <span></span> <i>07-29</i>
                      <a
                        href="https://game.qidian.com/CpGameHome/ServerList/list/name/qjzh?qd_game_key=1-991001"
                        data-eid="qd_A33"
                        target="_blank"
                      >
                        千军纵横
                      </a>
                      <strong>84区</strong>
                    </h3>
                    <p>
                      <a
                        href="https://game.qidian.com/CpGameHome/ServerList/list/name/qjzh?qd_game_key=1-991001"
                        data-eid="qd_A33"
                        target="_blank"
                      >
                        <img src="//gameapp-1252317822.file.myqcloud.com/yuewen/game/web/qjzh/192x46.jpg" />
                        <i className="op-tag"></i>
                      </a>
                    </p>
                  </dd>
                  <dd data-rid="4">
                    <h3>
                      <span></span> <i>07-29</i>
                      <a
                        href="https://game.qidian.com/CpGameHome/ServerList/list/name/mhjh?qd_game_key=1-991001"
                        data-eid="qd_A34"
                        target="_blank"
                      >
                        梦回江湖
                      </a>
                      <strong>400区</strong>
                    </h3>
                    <p>
                      <a
                        href="https://game.qidian.com/CpGameHome/ServerList/list/name/mhjh?qd_game_key=1-991001"
                        data-eid="qd_A34"
                        target="_blank"
                      >
                        <img src="//gameimg.qidian.com/v1/webgame/game2/mhjh/mhjh192x46.jpg" />
                        <i className="op-tag"></i>
                      </a>
                    </p>
                  </dd>
                  <dd data-rid="5">
                    <h3>
                      <span></span> <i>07-29</i>
                      <a
                        href="https://game.qidian.com/CpGameHome/ServerList/list/name/ktxy?qd_game_key=1-991001"
                        data-eid="qd_A35"
                        target="_blank"
                      >
                        开天西游
                      </a>
                      <strong>141区</strong>
                    </h3>
                    <p>
                      <a
                        href="https://game.qidian.com/CpGameHome/ServerList/list/name/ktxy?qd_game_key=1-991001"
                        data-eid="qd_A35"
                        target="_blank"
                      >
                        <img src="//gameapp-1252317822.file.myqcloud.com/yuewen/game/web/ktxy/192x46.jpg" />
                        <i className="op-tag"></i>
                      </a>
                    </p>
                  </dd>
                  <dd data-rid="6">
                    <h3>
                      <span></span> <i>07-29</i>
                      <a
                        href="https://game.qidian.com/CpGameHome/ServerList/list/name/cqsy?qd_game_key=1-991001"
                        data-eid="qd_A36"
                        target="_blank"
                      >
                        传奇岁月
                      </a>
                      <strong>78区</strong>
                    </h3>
                    <p>
                      <a
                        href="https://game.qidian.com/CpGameHome/ServerList/list/name/cqsy?qd_game_key=1-991001"
                        data-eid="qd_A36"
                        target="_blank"
                      >
                        <img src="//gameapp-1252317822.file.myqcloud.com/yuewen/game/web/cqsy/192x46.jpg" />
                        <i className="op-tag"></i>
                      </a>
                    </p>
                  </dd>
                  <dd data-rid="7">
                    <h3>
                      <span></span> <i>07-29</i>
                      <a
                        href="https://game.qidian.com/CpGameHome/ServerList/list/name/ns?qd_game_key=1-991001"
                        data-eid="qd_A37"
                        target="_blank"
                      >
                        逆神
                      </a>
                      <strong>119区</strong>
                    </h3>
                    <p>
                      <a
                        href="https://game.qidian.com/CpGameHome/ServerList/list/name/ns?qd_game_key=1-991001"
                        data-eid="qd_A37"
                        target="_blank"
                      >
                        <img src="//gameapp-1252317822.file.myqcloud.com/yuewen/game/web/ns/192x46.jpg" />
                        <i className="op-tag"></i>
                      </a>
                    </p>
                  </dd>
                </dl>
                <div className="bottom">
                  <p>
                    <a
                      href="https://game.qidian.com/Home/SyGame/syTopList?qd_game_key=pch5&amp;qd_dd_p1=124"
                      data-eid="qd_A38"
                      target="_blank"
                    >
                      <img src="//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/f293b1cd7eb1f676af36d22c2ca6a191.gif" />
                      <span className="op-tag"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
