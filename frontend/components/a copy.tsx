export default function A() {
  return (
    <div className="top-nav" data-l1="1">
      <div className="box-center cf">
        <div className="login-box fr" id="login-box">
          <div className="sign-in hidden">
            <span>你好，</span>
            <a
              className="black"
              id="user-name"
              href="//my.qidian.com/"
              target="_blank"
              data-eid="qd_A08"
            ></a>
            <em>|</em>
            <a
              className="black"
              id="msg-btn"
              href="//my.qidian.com/message/sys/"
              target="_blank"
              data-eid="qd_A09"
            >
              消息
              <cite id="msg-box">
                (<i></i>)
              </cite>
            </a>
            <em>|</em>
            <a id="exit-btn" href="javascript:" data-eid="qd_A10">
              退出
            </a>
          </div>
          <div className="sign-out">
            <a
              id="login-btn"
              className="black"
              href="javascript:"
              data-eid="qd_A06"
            >
              登录
            </a>
            <em>|</em>
            <a
              id="reg-btn"
              href="//passport.qidian.com/reg.html?appid=10&amp;areaid=1&amp;target=iframe&amp;ticket=1&amp;auto=1&amp;autotime=30&amp;returnUrl=https%3A%2F%2Fwww.qidian.com"
              rel="nofollow"
              target="_blank"
              data-eid="qd_A07"
            >
              注册
            </a>
          </div>
        </div>
        <div className="nav-link fl">
          <a className="act" href="//www.qidian.com/" data-eid="qd_A01">
            起点中文网
          </a>
          <a
            className="third-remove"
            href="//www.qdmm.com/"
            rel="nofollow"
            target="_blank"
            data-eid="qd_A02"
          >
            起点女生网
          </a>
          <em className="third-remove">|</em>
          <a href="javascript:" id="switchEl" data-eid="qd_A182">
            繁体版
          </a>
        </div>
      </div>
    </div>
  );
}
