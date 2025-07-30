export default function A19() {
  return (
    <div className="page-bottom-fixed" id="pageBottmOprate">
      <div className="page-bottom-item">
        <a
          className="item-link-txt"
          id="bookShelf"
          href="//my.qidian.com/bookcase/"
          target="_blank"
        >
          <em className="iconfont icon-shelf"></em>
          <span className="txt">我的书架</span>
        </a>
      </div>
      <div className="page-bottom-item">
        <a className="go-qrcode jsFixedCode" href="javascript:">
          <span className="loop loop1">
            <em className="icon icon-code"></em>
            <p className="icon-txt">手机端</p>
          </span>
          <span className="loop loop2">
            <em className="icon icon-scan"></em>
            <p className="icon-txt">扫一扫</p>
          </span>
          <span className="loop loop3">
            <em className="icon icon-redbag"></em>
            <p className="icon-txt">领红包</p>
          </span>
        </a>
        <div className="bototm-qrcode">
          <p className="title">起点中文网发出的红包，新用户14天免费读</p>
          <div className="qrcode-panel">
            <i className="qd-logo"></i>
            <div
              id="pageBottomQRcode"
              className="qrcode-con"
              data-showbid=""
              data-chapter=""
              data-longlink=""
            ></div>
            <p className="desc">扫码下载APP领取</p>
            <p className="main">内存占用小看书更流畅</p>
          </div>
        </div>
      </div>
      <div className="page-bottom-item item-listen">
        <a
          id="bottomDeskDownload"
          data-l7="1"
          data-eid="qd_A_mall_zhuomiandownload"
          className="go-windows item-link-txt"
          href="https://down.pc.yyb.qq.com/packing/3c25016cde98caefd1e7c1d7db2886ed/com.qidian.QDReader_2500100000_installer.exe"
          rel="nofollow"
        >
          <em className="iconfont icon-windows"></em>
          <span className="txt">桌面版</span>
        </a>
        <p className="windows-tips" id="bottomDeskTips">
          桌面版已上线，客户端体验更丝滑
        </p>
      </div>
      <div className="page-bottom-item dn" id="pageBottomGoTop">
        <a className="go-top" href="javascript:" aria-label="返回顶部">
          <em className="icon icon-gotop"></em>
        </a>
      </div>
    </div>
  );
}
