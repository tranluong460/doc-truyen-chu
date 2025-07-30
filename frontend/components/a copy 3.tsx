export default function A3() {
  return (
    <div
      className="logo-wrap box-center"
      data-l1="2"
      style={{
        backgroundPosition: "0 7px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="home-top-picture"></div>
      <div className="box-center cf">
        <div className="book-shelf fr">
          <a
            href="//my.qidian.com/bookcase/"
            rel="nofollow"
            target="_blank"
            data-eid="qd_A14"
            id="numero2"
          >
            <em className="iconfont shelf"></em>
            <i>我的书架</i>
          </a>
        </div>
        <div className="logo fl">
          <a
            href="//www.qidian.com/"
            alt="起点中文小说网"
            data-eid="qd_A11"
          ></a>
        </div>
        <div className="search-wrap fl">
          <form id="formUrl" action="//www.qidian.com/so/">
            <p>
              <input
                className="search-box"
                id="s-box"
                name="kw"
                placeholder="我独享卡池"
                autoComplete="off"
              />
            </p>
            <input className="submit-input" type="submit" id="searchSubmit" />
            <a
              // onClick="return!1"
              href="//www.qidian.com/soushu/"
            >
              <label id="search-btn" className="search-btn">
                <em className="iconfont"></em>
              </label>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
