import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Trang Chủ",
  description:
    "Khám phá thế giới tu tiên với những truyện hay nhất. Đọc truyện online miễn phí.",
};

export default function HomePage() {
  return (
    <div className="wrap">
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
                  autocomplete="off"
                />
              </p>
              <input className="submit-input" type="submit" id="searchSubmit" />
              <a onclick="return!1" href="//www.qidian.com/soushu/">
                <label id="search-btn" className="search-btn">
                  <em className="iconfont"></em>
                </label>
              </a>
            </form>
          </div>
        </div>
      </div>

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
                  style="left: -125.5px;"
                >
                  <ul className="all-download-con" style="width: 384px;">
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
                            style="display: none;"
                          ></canvas>
                          <img
                            alt="Scan me!"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAYAAADNkKWqAAAAAXNSR0IArs4c6QAAIABJREFUeF7t3dt23MgOA9Dk/z86Z9kns+K7dlVDprqNeTUFgCALXepJ4t+/fv3686v/PTvw58/3W/H7929yX7Wl8UgcFqk2gVM/BEt1JTmfdCmv9KDakpyi6+o1T6fv+0/9RV3RJUrK14VUbWm8iV6FU/0QrCnPlFd6UD+SnKLr6jUNwBcT0iVKDlUXUrWl8SZ6FU71Q7CmPFNe6UH9SHKKrqvXNAAbgN+2o8nDpwdemlNdSc6+Astkzq9pADYAz9+yvwwaNCIoGUaqK8nZAJQpn1/TAGwAnr9lDcAPPdbglQFpOCc5RdfVaxqADcBv29Hk4dMDL82priRnb4AymfNrGoANwPO3rDfA3gC/bcvWiBqADcC1jbmhWm9aQpG8jamuJGdvgDLl82soANODP7+t9wyy5Ok+hTPthfYg2hRLe7gqp+qfqHuEGUz4Jrv2/CEkfxA6PYSrGpLuU4eQ9EN7EG2Kpfqvyqn6J+oeYQYTvsmuNQDfTGZi2dLLoT3IgiiW9nBVTtU/UfcIM5jwTXatAdgA/HI3H+Hw6UGYOKTC+QgzkD7TNTr3vgK/cH5i2dKD1x5kQRRLe7gqp+qfqHuEGUz4JrvWG2BvgL0BTpzOBc4G4IJZL0obgG98E0Mmlm1vvJ8/pT1c1Q/Vr75Jn4o1UTfhR5pzwjede1+B+wr86X6mD4Is5QTnxAFVzgk/0pzaa7JOdq2vwH0F7itw8tSdgJUOIwmGNOcJthxCSp8NwAZgA/DwKM0WpMNIgiHNOeGg9BkPQCVNGqLDEm2KpfqFU7G0TntIaiunTud1ncxAvVUFSU7BUl1ap36otuh3gEqqzUpd0hDFEl3Pny74+z4UT+q0h6S2cspk3tfIDNRbVZDkFCzVpXXqh2prAL5wXs3VYekQFE/qtIektnLKZBqAey69fiq9aw3ABuDNe5leShF0ZU7Rr28I2ucEZ/JDVPWrH6qtAdgA1N37tC69lCLoypyivwGoLvUG+KVTyYOgWDo6/RRSPKnTHpLayimT6SvwnksNwAbgwuY0jF6bNRH0Oi7RpvOc4BT9qkvr1A/V1lfgvgLr7vUV+M+fm716CSCHVA+8CktyCpbq0jr1Q7U1ABuAunsNwAbgqx3QkLl5wTbOqGprAG6YqwPVISie1KU/Icv5zwH1Vjx7qpH9uDKn6FcvtE79UG0NwBMDUIaqg9LBC6fWqDbFkx4mOFW/1iV7EM9UVzp0k31qD+qHamsANgA/3T1douTyTnCqfq1L9qAHPqlNOZN9qv60tgZgA7ABqKcP65LBoAcepUVfu5N9qn71Q7U1ABuADUA9fVinh0/g9MALVl+B37vUAGwANgA1PbCuAYhGbZTpB4LOoAHYAGwAbhzErx7Rwye0euAFqzfA3gC/3JP0sslS6mG5sjbp86lGelA/kpyKpXXJHsQz1dUAbAA2ABdOS/IgNwAXjD/xrURmqqErWHtdf/5UWltfgU9cNhm+LpEOXji1RrUpnvQwwan6tS7Zg3imunoD7A0wcgNMLrgub/ogCK/2qdoUT7SVU1z64MDDv1I+4a12k9bWG+DGDTB5kNODVzyp0z7TSynayikuNQCPXGoANgA/3ZEG4Gtrrhy6Rwf9v5/LTCf6VP1pbQ3ABmADEE9f+vAJrXIKVr8D7HeA/Q5QTwr+ayVPcHpI5fah8sqpTr2ukxlMeKvdpLX1BtgbYG+AePrSh09olVOwegPsDbA3QD0pvQG+c0rDSG5ZOgblVDzRppyCpbq0Lq2tN8DeAHsDxNOXPnxCq5yC1Rtgb4C9AepJ6Q2wN8CDXekN8I1B926Iftpeuc+FfDss1T4nfCvn4fg+LJCZTnir3aS1RV+BtYmJuuTgVf9VOVV/uk6WVzxb0SWcK3hSqz2ItiRW+hVYvJiqUd8agBvfAepQZQhyCJRPF3wFL1krvYpnK5qEcwVParUH0ZbE0v0QXeLDZI361gBsAH7bnsrB0sVV0cKpWFqnPYi2JFYD8P0EG4ANQD3XN9clD7yKEU7F0rpkaCWxGoANwC93OH1YZHknOPUgp+ukV/FsRZdwruBJrfYg2pJYDcAGYANQTvBJNckDrxKFU7G0LhlaSawGYAOwAain+IQ6CSM98CpPOBVL67QH0ZbEagA2ABuAeopPqEseeJUnnIqldcnQSmI1ABuADUA9xSfUSRjpgVd5wqlYWqc9iLYkVgOwAdgA1FN8Ql3ywKs84VQsrUuGVhKrAbgZgDr4e6/Tw5JcyiSWLvhTnfQ6oU10PUKfV57BvZ/jFf305wBXAO+5tofv9fQagK/9+En7cc/neEV7A/CFWz9pwaXXBmADcCVM7rG2AdgA/HRvG4ANwHsMtRXNDcAGYAMQfleufmf3KN9ProTIPdc2ABuADcAG4D1n2E3aG4ANwAZgA/CmELnnhxuADcAGYAPwnjPsJu0NwAZgA7ABeFOI3PPDv//In4e45w5P0J7+v6NJiUltSaxkj4+CJf72eJ477Qbghr+yuCv/13BDwrfc2q7cZ9KzKSzxtwF47nQagBv+yuI2ADeM/WGPyB41AM9digbghr+yuA3ADWN/2COyRw3Ac5eiAbjhryxuA3DD2B/2iOxRA/DcpWgAbvgri9sA3DD2hz0ie9QAPHcpGoAb/sriNgA3jP1hj8geNQDPXYoG4Ia/srgNwA1jf9gjskcNwHOXogG44a8sbgNww9gf9ojsUQPw3KVoAG74K4vbANww9oc9InvUADx3KaIBKAPVdtKDT2rTHpJ16keyzzSn4Kl+wXryX/CSWOkPPtGf3LMV/apN/U33IXgNQHHpAjW6RLqU0lKaU/BUv2A1AGXK72uS3q4E6p7a255qAN7m37c9nV5KEZ7mFLwG4OvJqB8yT62ROemHSwNQXX9Tp0NQ+IlFUm1Sp34k+0xzCp7qFyw9pEms9IFXP2SHtObKfmgPWtcboDo1XJdeSmknzSl4euAFqwEoU+4r8J89m94/pcsrfLrggqUHQbEm6tSPiRkop/SQxNK5iy7F6g1wP1AnzlVvgBOub3CmD6lISHMKXgPw9WTUD5mn1sicpj4QtAetawCqU8N16aWUdtKcgqcHXrD0kCaxegPsDVDO1mGNLuUh0N8CPViK99116keyzzSn4Kl+wWoA7m1p0tv0B8JeR58/1Rtg2tGT8NJLKTLTnILXAOwrsOxmqoZ+KZIsrn7apoSv4mgPq7hf1ethFk7Vf2VO7UH8eISa5KySfqTnJH1OcD5n1q9fvw7/L7CKk0aTg1rB0h5WMI9qk36o/itzag9Hvj7Kz5OzSnqSnpP0OcHZAExuzQdYMniVoAtyZU7tQT2597rkrJJepOckfU5wNgCTW9MAPHQzveSHhBcvkGCYaCE9J+lzgrMBePJ2yeBVgi7IlTm1B/Xk3uuSs0p6kZ6T9DnB2QBMbk1vgIduppf8kPDiBRIMEy2k5yR9TnA2AE/eLhm8StAFuTKn9qCe3HtdclZJL9Jzkj4nOBuAya3pDfDQzfSSHxJevECCYaKF9JykzwnOBuDJ2yWDVwm6IFfm1B7Uk3uvS84q6UV6TtLnBOdzAP4BZmlgZQBAyXBpbUKs+kVbEutJu+JJn1ojfSpWWr9oU07B0j61Lq1N8VRfqm7C2wbg5vR0iWSoSawG4PuBTsxgc60+fOwR9kP8kDkJzmpNb4Crji3csmSoj7Dg0qfarH4onmhTTsFSXVqX1qZ4qi9VN+Ftb4Cb09MlkqEmsXoD7A3waKV1345w0j+Xs5LmbABuOqpLJENNYjUAG4BHK637doST/rmclTRnA3DTUV0iGWoSqwHYADxaad23I5z0z+WspDkbgJuO6hLJUJNYDcAG4NFK674d4aR/LmclzdkA3HRUl0iGmsRqADYAj1Za9+0IJ/1zOStpzgbgpqO6RDLUJFYDsAF4tNK6b0c46Z/LWUlzNgA3HdUlkqEmsRqADcCjldZ9O8JJ/1zOSpozHoBJc9OGJLUlB6F9qv40nvSqnIKVrhHfrqw/7cdV8WROZ2iP/kHoZBPppUxqSw5C+1T9aTzpVTkFK10jvl1Zf9qPq+LJnM7Q3gA8w9UFTD18uiBpPGlFOQUrXSO+XVl/2o+r4smcztDeADzD1QVMPXy6IGk8aUU5BStdI75dWX/aj6viyZzO0N4APMPVBUw9fLogaTxpRTkFK10jvl1Zf9qPq+LJnM7Q3gA8w9UFTD18uiBpPGlFOQUrXSO+XVl/2o+r4smcztDeADzD1QVMPXy6IGk8aUU5BStdI75dWX/aj6viyZzO0N4APMPVBUw9fLogaTxpRTkFK10jvl1Zf9qPq+LJnM7Q3gA8w9UFTD18uiBpPGlFOQUrXSO+XVl/2o+r4smcztDeADzD1QVMPXy6IGk8aUU5BStdI75dWX/aj6viyZzO0E4BeAbxd2NedcnTg5/oU3sQbUks3bEJzidtwiueaZ9pTtH/xCk9KNZKr1LbABSXTqxJD16WLd2O9iDaklja5wRnOoySvcqcVH8DUCdzcp0O9WQZ7+D18KmuiT61B9GWxFLPJjg1QMQz7TPNmfRNsVZ6ldreAMWlE2vSg08fGGldexBtSSzRrqGgNxnlVF7xbIozOSvFWulVahuA4tKJNenBpw+MtK49iLYklmjXIGoAvnczOSvF0plqXQNQnTqpLj14CZl0K9qDaEtiaZ8TnBq84pn2meZM+qZYK71KbQNQXDqxJj349IGR1rUH0ZbEEu0aCr0B9gao+3TJOjl8E8L1wKu2iT61B9GWxFLPJjg1eMUz7TPNmfRNsVZ6ldreAMWlE2vSg08fGGldexBtSSzRrqHQG2BvgLpPl6yTwzchXA+8apvoU3sQbUks9WyCU4NXPNM+05xJ3xRrpVeppRugDkGbELwk1tTgaQC/f0tZvEb9TRIn557UpViiX3dNOSfqtE/VJrumnIKlup5v9X8AMS1O8EDWc5+CpUuZxNIhKKfiaZ36q3hSJ71O6BLt6V1Tzok6mdOKLpmpcgrWirYG4Au3JoagnCtDldr0Igmn9DqhS7Q3ANWl93UyU9kNvcisKG0ANgBX9uWmWllyOSw3ibjhYdF/xiG9QfLWo9qngstMlVOwVNfzh1pfgf/ZNTEE5VwZqtSmF0k4pdcJXaK9N0B1qTfAQ6eSB0Gw9FM5iXVowt8C5VQ8rZsIGul1Qpd6Jvp115Rzok77VG0yU+UULNXVG+AbpyaGoJwrQ5Xa9CIJp/Q6oUu09waoLvUGeOhU8iAIln4qJ7EOTegN8EOLGoC6OefV6TlQBTJT5RQs1dUbYG+AK7tyc60seXrBbxb9AkD064dtUlcaS/tUXpmpcgqW6uIAVEBtQvGkTg0RbUksPQiiS3xYrZFeVZtg6StkEktnoN6l/RBe5RQsrdEZKJ7UaZ9pbfR/gaUBXXDF0jo1RAxOYunhE13qxUqd9KraBEv3I4mlM1Df0n4Ir3IKltboDBRP6rTPtLYG4IvpqLnJYSmWLNFKjfSq2gSrAbgynX+1OoM99I+f0nkmObXPtLYGYAPw0z1OL6Xg6YILVm+AexGlM9hD//ipiXk+fyjLH4TWRrUJxZM6HZZoS2Lp4RNd4sNqjfSq2gSrN8DVCf2/Xmewh94bYAOwN8DeADE9NIz0A0FolVOwtCapXzm1z7S2BmADsAGIp3TikContkBl6ZARUu0zra0B2ABsAMoJXXgdTR5SDQZsgcqS+olwyNvnrxj6HeC/EengdSkFT7F0kbQuqU2w9PusJNYTp+KJbzqrCU7RrzVJ/co54W0D8M10dPDJYSmWLpLWSa+qTbAagDqZ13U6gz30j5/SeSY5tc+0tugN8BEMkR50WIKlNTr4e9c20ecEZ3ruiif7MeGHcib7jN8AVZzUyaDSrziiS28yiqV1uiDqm/JKXVJbEku0r+zQlb3VXqWHK88g2WcDUN18UydLtAn96WMTS6k9JLUlsSb0K6fWqR+KJ7urnIKlupRT8VRbX4HV0Rd1au4GdAPwzx+yLTkDPXxJTmoy/D9x9O1lwg/lVN90Vg1AdbQB+C3hrAdBF1zGO8EpulZezxVPfJvwQzmTffYVWN3sK/CXTuny3vvhE/2bK3Xzh4vySg/Jeaou5VQ86bMBqG42ABuAC39Yd3OtPnxsIhiUU0NG/FBOwdJX/QagutkAbAA2AN/tQANwM0DkMTU3/cmR1CZYWqN9qm/KK3VJbUks0f5UM8GZ1qZ4sh8Tfihnss/eANXN3gB7A+wN8DFvgE8fgJs5sP1YMu3lE02FJnUpp9Zpn9qD4CWxtE/lVDypEy8E578a7SHNu6Lxq9oJ/cqZ6vE/nN8NwH+WTg1BhqqHRXsQvCSW9LjyOqp4UideCE4DcMWl17W6a/sMHz/ZAHzhy9QQZKh6SLUHwUtiSY8NQHXp3LqfMvcnFxuADcBPT9NPOQjyYbASORO+reg7qp3Qr5xH2ld/3gBsADYAfz8dg9x/epjTwZvqYEK/cqZ6/A+nAdgAbAA2AF/tgIZRMsCVswH4xoFHGIIMVfvURRK8JJb02O8A1aVz637K3Psd4Js90sGfu34fo0tgrQSI4KkfgqWeKafiSV1Sf3oGoj9dozNI+qac6V77CtxX4L4C9xX4574CJ38pkqazfHLoJ4JgrXwqSw8TnKJrqibph2Jpr7JHyilYz69VwUBNcwpeUr+evQnO51k1APUo/avTYcmyrbNf74mkH4qlLsgMlFOwGoDvJyO+6QySc28Aqptv6nRYMvhNCZd6LOmHYqkBMgPlFKwGYAPwcDdl4dLLpniH4hdecZKcomuqRuZ55VehpP4GYAPw8BzKwml4CJYevkPhfwsmOFXbRF3SD8XSPmWPlFOwGoANwMPdlIVLL5viHYrvDfCdRTJP/RBSLJlTmlN3KNlDmlPwkvrTM0jOvd8Bqpv9DvBLp/TA3PvhE/29AfYGeBgrcmDSy6Z4h+J7A+wN8GBJZL9lz/T2tBK6cg6S+rWHCc7eAHULewPsDXDon86XwGoA7t06G4ANwE0HXj+mn95ymBVLhSc5BWsljKSHNKfgXXkG4pneOp9nJf8itJg2NXg1RIaa7lPxpAfRvzJ44XyEGvFN5yRYK54p7wrmd9aqH9JnEmvFgwbgC7dkUCtBr3gysKkFEW1XrhHfdE6CteKF8q5gfmet+iF9JrFWPGgANgBX9uXuauVgyQFd+eBTk5RX8b67TrzVt5Ik1ooPDcAG4Mq+3F2tHCwNIsFaMUh5VzC/s1b9kD6TWCseNAAbgCv7cne1crDkgPYG+H704m1vgJtHRpdS4WVYyilYOvik/jSnartyncwqPXf1Q3kV77vrxFvdySTWig+9AfYGuLIvd1crB0uDSLBWDFLeFczvrFU/pM8k1ooHDcAG4Mq+3F2tHCw5oH0F7ivw4fLLsh2C/C3QpVQ80aacgqVX/6T+NKdqu3KdzCo9d/VDeRXvu+vEW93JJNaKD70B9ga4si93VysHS4NIsFYMUt4VzO+sVT+kzyTWigcj/yT+isDvrE0PQfBkOVZev9J44v8Ep+jS24diXblOdi2tX+ee5k3iNQBfuKlLpIMXvCTWyoEXbbpo6R6UV+pUm2BduSY5T+3zEbxtADYAdd8/rdOD0EN6s9WfAtTbPW8bgA3Avc158VQD8GYLbwZoAO5Z2ABsAO5tTgPwZt+SAA3APTcbgA3Avc1pAN7sWxKgAbjnZgOwAbi3OQ3Am31LAjQA99xsADYA9zanAXizb0mABuCemw3ABuDe5jQAb/YtCdAA3HNzJAAnhrVnz21P6f8dFZYJz1R/UtsEp/h/Ro32Ktw6gySn6HqqUW2Cl9bfABTXN2uSw0oukbaj+pPaJjjVj3Sd9iq8OoMkp+hqAH7gkg5LDb5qXXLZJjxT/UltE5xT+6O9ij6dQZJTdDUAG4C6J1/W6YJHyP6C6GFJapvgTHq2gqW9CqbOIMkpuhqADUDdkwbg0C8fjwxoAyQZRg3AjQE8fT/5JzkF1KDDQrjLliWtnfBM9Se1TXBOLZD2Kvp0BklO0dUbYG+Auie9AfYGuL0rDcA963oD3PONnkp+2uqCkzAsUv1JbROcaEe8THsVYp1BklN09QbYG6DuSW+AvQFu70oDcM+63gD3fKOnkp+2uuAkDItUf1LbBCfaES/TXoVYZ5DkFF2XvwE+fehqI99Zp4O68uCTfqX7FDydwZX7FG3iheCs1iT91R6EM4k1FYDaA/1SpNXBJuplUCvmKl5C+xkYOlDtU/AUK9mv6HriS2pTzmSfUz2Ib+qHYK2cUfE3zdkAFNcvUDOxlLpsSXvSfYo25RSslZqkv9qDcCaxGoArG/GiVga1Yq7ibco9/bGJpZzwLN2nDEY5BWulJumv9iCcSayVMyreif4Vzt4AxfUL1EwspS5b0p50n6JNOQVrpSbpr/YgnEmslTAS70T/CmcDUFy/QM3EUuqyJe1J9ynalFOwVmqS/moPwpnEWgkj8U70r3A2AMX1C9RMLKUuW9KedJ+iTTkFa6Um6a/2IJxJrJUwEu9E/wpnA1Bcv0DNxFLqsiXtSfcp2pRTsFZqkv5qD8KZxFoJI/FO9K9wNgDF9QvUTCylLlvSnnSfok05BWulJumv9iCcSayVMBLvRP8KZwNQXL9AzcRS6rIl7Un3KdqUU7BWapL+ag/CmcRaCSPxTvSvcEb/KpwaJ41O1Ki5SW1pz7QH4VWsCT9UW7JPwVrxQntYwTyqlR7Suq7K+RyUyX8PUBo9GtDkz9ODl17SnmkPwqtY0qfWiK4nLNUmeEks7XOlhxXMo9qkH0dc//38qpwNwDcT1IOgg5c6WQ7B+a9GexBexVrRd1QrulbCQ/C0T8E66u/lz5V3BfOoVnpI67oqZwOwAfjleUkfhKPD+byQv5++lj7+T7UJXhLrWPm/CuVdwTyqTfpxxNUboDp0kbqrLuSKPdrDxEGQPkRXb4Di5Mc14q/ukKq4KmdvgL0B9gYY/j5RQ2ElxFcwj2qvGkYTodsAbAA2ABuA73ZgIowmOBuADcAGYAOwAXh0bdafy/VasSbq0p9C0kPaM+1BeBVL+tQa0bXy+ih42qdgaZ8rPaxgHtVKD+rHEdd/P78qZ2+AvQH2BtgbYG+AR0kuCT71iXakfeXn2qdiyifpBKfq1zrtYcIP7UHqRP/zrQL/KI9wpmukhwn9oivtBd8A1ZCpJlLGaJ/KJ35McKp+rdMeJvzQHqRO9DcAxcn3NertHvrnT9FfhUsueLqBJJ72qZwy1AlO1a912sOEH9qD1In+BqA42QDcc+nkp/Qgqww5MBOcql/rtIcJP7QHqRP9DUBxsgG459LJT+lBVhlyYCY4Vb/WaQ8TfmgPUif6G4DiZANwz6WTn9KDrDLkwExwqn6t0x4m/NAepE70NwDFyQbgnksnP6UHWWXIgZngVP1apz1M+KE9SJ3obwCKkw3APZdOfkoPssqQAzPBqfq1TnuY8EN7kDrR3wAUJxuAey6d/JQeZJUhB2aCU/VrnfYw4Yf2IHWivwEoTl4oAJ/+IPyR5PTgBU8P1ZH2R/m5eJY+fMqpHstM05yiTXQ94ag2xRNtj1Cjvk30Sr8USRvQwQueYk2YNsEpnjUA9yajuzYxg72OrvWU+jahugE44foGpy6RHmaRoJyCpeGc5hRt6plqUzzR9gg16ttErw3ACdc3OHWJkodPObUd0ZbmFG2iq6/A4uTHNRMzVbUNQHVquE6XSA+ztKOcgtUboLr0eHXpPUo61ABMunkili5RA3B9COrZxAzWu7neE+rbhPIG4ITrG5y6RHqYRYJyClZvgOrS49Wl9yjpUAMw6eaJWLpEDcD1IahnEzNY7+Z6T6hvE8obgBOub3DqEulhFgnKKVi9AapLj1eX3qOkQw3ApJsnYukSNQDXh6CeTcxgvZvrPaG+TSinfxB1QtiVOdMHJtmrahNOXVzlVDzRppyCpTVJ/XojntImvDqDpG9pzgagTPpNTXoIGxI+fUS1CacurnIqnmhTTsHSmqT+BqC6/rpO566zagBuzCE9hA0JDcCBXzykh0rnqXskeGltwqn6k9rSnA1AmXRvgF+6lF5KGYlyCpbWJA9yb4Dqem+Ae06d+JQevvSBkZZUm2CpfuVUPNGmnIKlNUn9DUB1vQG459SJT+nhSx8YaUm1CZbqV07FE23KKVhak9TfAFTXG4B7Tp34lB6+9IGRllSbYKl+5VQ80aacgqU1Sf0NQHW9Abjn1IlP6eFLHxhpSbUJlupXTsUTbcopWFqT1N8AVNcbgHtOnfiUHr70gZGWVJtgqX7lVDzRppyCpTVJ/Q1Adb0BuOfUiU/p4UsfGGlJtQmW6ldOxRNtyilYWpPU3wBU108OQPmdIHtS7+8pXXA9fIKXxEo7rtrSvEm8iRlM+CZ9augmsZ44FS85d8WivwusYPdep4PSBRe8JFbaf9WW5k3iTcxgwjfpswH4frMagC88SS6RfvLpYVFtyfBQbUnONJb4pn0KlobMRJ+qLd2n4qU9EbwGYAPw0z3RYJBFm6qRw6d9CpaGTNqPpLYkll4E0n4oXgOwAdgAxL9XnA4GPaRSl9SWxGoAyvQuUjMx+PTtI2mlaktyprFkptqnYPUG+H6C6lt69oLXG2BvgL0B9gb4agc0sNIfHBJY6ZoGYAOwAdgAbACmk/Ue8SY++a78Kararjxrman2KVh9BX7AV2Ad/JUPgix5uk/hTHumPYg2xUr3IHiiP/0FvHKK/nTNxKzUD9GmWGnf6BVYGkgLS+OJwek+hTPdp/Yg2hQr3YPgif4GoDi5X5OcgWLtq/34yQbgxneAOoSJoWpoiTbFUj+SdaK/AZh0/D1WcgaKle6oAdgA/HSnGoCvrZk6pHLoJ2alfog2xRIvVmoagA3ABiCemKlDKvIkZARnpUb9EG2KtaJPahuADcAGoJyUX79+TR1SkSchIzgrNeq/NdzGAAAGcUlEQVSHaFOsFX1S2wBsADYA5aQ0AN+5pKHVAMQFO7NMhiWDWtEonCt4Uqs9iDbFEl3pGtH/xJnsQTnTvQpesk/he6pRP0SbYqk2resNsDfA3gDxtEwdUpEnISM4KzXqh2hTrBV9UtsAbAA2AOWkLNx4EC5aJiETJVzwQ7Q9RABONCHm6nVdsXSRxA/lFKyVVz7Fk16TPSiW6NK5K9aVtWkPE3XiW3Ifl86B/E4QaSC9bDqopDbFUm0yVOUUrKXB4z8AIL0me1As0ZXeyStrUz8m6sQ33W/VL5zP+9EA/GepmqZDkKEqp2A1AN9PRn2TmeqsBCsdzso5USe+Jee0dA4agA3AWw+FLLgeeMVSzcmDdWVt6sdEnfiWnFMD8IMpi8EyqJUFSnIK1tLg+wq8Msrn2on9WBZ5wQfEN91vbU84+wr8xk01TYcgQ1VOwVo5pIonvSZ7UCzRpbdOxbqyNu1hok58S+7j0jnoK3BfgW89FLLgGkaKpZqTB+vK2tSPiTrxLTmnBmBfgQ/3PLlwsuANwPcjSc7gcOCDBbIfaS+Es6/AfQWOHAteNvjeUbFUePJgXVmb+jFRJ74l59QbYG+Ah3ueXDhZ8N4AewP8aimT+9gAPDkAdVgaDIdpFf5rRxpGomtl2QRPvRUsrdE5qTbFU33fXfdT+uwr8OYr8MSCpDkVTw5f8sAndYn2lQBXbUk/tIdk3U/pswHYAIycm+SB18MXEf4XRPWrNsVL9pDE+il9NgAbgJFzkzzwevgiwhuAH9qoM0jOPTnPFaz+XeAXbulAJxYkzal4skzqm2AldQlfX4Hfu6QzSM5dZ5WuawA2AG/eqeRB0MN3s+g7mXuyT8XSGSTnrtrSdQ3AOzkI6aVUPFm45EFI6hLtvQH2BvjnaFF0we99edN9Kt6R/89f1sIfIj7jMIu2iT5Fl9ao/vQMVN931/2UPp/PVf8u8L/1uvJBSC+l4snhU98EK6lL+M740Ej6oT0k63QG995nA/DN1uhAf9KCyMGa8GOCU7xYua0LXnonk5yCNeUHa+sN8D5ugDrQibqJMJrgVG9Vm+A1AF+7pH6It70B9gaoe/JlnR745PJOcKpZqk3w1LMJTtHfG6C6tFmXXJAk1sp3S5utX+YxPXzqrzQ2wSm6pg68+iE9JOc05Yf02Rtgb4C6J70BLjg1EUYTnGrJpbX1O8B+B6iL/FmdLnjyZjHBqT6pNsFTzyY4RX9vgOrSZl1yQZJYfQV+P1D1V1ZBD3ySU3RNHXj1Q3pIe3Zpbb0B9gYoh+KrGl3w5MGa4FSfVJvgqWcTnKJ/6gOBtTUAG4C6LH0FNqcmwmiC09zwv8UkePqBIFjP4dwAbADqsjQAzamJMJrgNDd+UACqIRN1siDpTxfpU3StfJ+oeKIt7YdoU07BUt8USzxTzvSroWqTOp2BYGmfE5zxG6AaMlEnS54egvQpuqYOVdoP6VU5BUt9UyyZp3JqMChnsk5noJzi7wRnA/DNBNNDkAWR5Zg6VGk/pFflFCz1TbFknsrZAHztps5dZ6AzjX4HqOIm6sSQ9BCkT9E1dajSfkivyilY6ptiyTyVswHYANR9itTJkuvhiwj6CyK6pg5V2g/pVTkFS31TLJ17ugflTdWpfuUTfyc4+wrcV+Avd3hiKZVTDlUDUCNq/jamc9eOdD/6CvzC0fQQZFg6KNWmeKJNOQVLX/mUU/sUPMXSPoVT/VDOZJ3qV07xd4KzN8DeAHsDXPh1A3rg9TBLMChnsk71K6f0OcHZAGwANgAbgO92YCKMJjgbgA3ABmADsAGoV9lHr0t/Cj26X//1J6846oXOYIJTe9A66UH9SHIqVrIu3adqo/8JomD3Xjc1hHv3TQ6y9qgzmODUHrROelA/kpyKlaxL96naGoAvnJoagg7rqnVykFW7zmCCU3vQOulB/UhyKlayLt2namsANgB1Vz6tk4OsJHoQJji1B62THtSPJKdiJevSfaq2BmADUHelAXizU68BGoD//GgAhpdrB25qCDtar/SMHGTVqzOY4NQetE56UD+SnIqVrEv3qdp6A+wNUHelN8CbneoN8DMLG4Dh5dqBmxrCjtYrPSM3GdWrM5jg1B60TnpQP5KcipWsS/ep2noD7A1Qd6U3wJud6g2wN8DwEiXhpj6Fkj1MYMlNRnXpDCY4tQetkx7UjySnYiXr0n2qtv8BWNa/uV2qH9gAAAAASUVORK5CYII="
                            style="display: block;"
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

      <div className="home-picture-wrap box-center">
        <div className="home-picture-img left"></div>
        <div className="home-picture-img right"></div>
      </div>

      <div className="festival-wrap">
        <div className="focus-wrap box-center mb40 cf">
          <div
            className="classNameify-list fl so-awesome"
            id="classNameify-list"
            data-l1="3"
          >
            <dl className="cf">
              <dd className="left">
                <a
                  href="/xuanhuan/"
                  title="玄幻小说"
                  target="_blank"
                  data-eid="qd_A71"
                >
                  <cite>
                    <em className="iconfont"></em>
                    <span className="info">
                      <i>玄幻</i>
                      <b>721722</b>
                    </span>
                  </cite>
                </a>
              </dd>
              <dd>
                <a
                  href="/qihuan/"
                  title="奇幻小说"
                  target="_blank"
                  data-eid="qd_A72"
                >
                  <cite>
                    <em className="iconfont"></em>
                    <span className="info">
                      <i>奇幻 </i>
                      <b>159241</b>
                    </span>
                  </cite>
                </a>
              </dd>
              <dd className="even left">
                <a
                  href="/wuxia/"
                  title="武侠小说"
                  target="_blank"
                  data-eid="qd_A73"
                >
                  <cite>
                    <em className="iconfont"></em>
                    <span className="info">
                      <i>武侠</i>
                      <b>45378</b>
                    </span>
                  </cite>
                </a>
              </dd>
              <dd className="even">
                <a
                  href="/xianxia/"
                  title="仙侠小说"
                  target="_blank"
                  data-eid="qd_A74"
                >
                  <cite>
                    <em className="iconfont"></em>
                    <span className="info">
                      <i>仙侠</i>
                      <b>236460</b>
                    </span>
                  </cite>
                </a>
              </dd>
              <dd className="left">
                <a
                  href="/dushi/"
                  title="都市小说"
                  target="_blank"
                  data-eid="qd_A75"
                >
                  <cite>
                    <em className="iconfont"></em>
                    <span className="info">
                      <i>都市</i>
                      <b>374244</b>
                    </span>
                  </cite>
                </a>
              </dd>
              <dd>
                <a
                  href="/xianshi/"
                  title="现实小说"
                  target="_blank"
                  data-eid="qd_A76"
                >
                  <cite>
                    <em className="iconfont"></em>
                    <span className="info">
                      <i>现实</i>
                      <b>43492</b>
                    </span>
                  </cite>
                </a>
              </dd>
              <dd className="even left">
                <a
                  href="/junshi/"
                  title="军事小说"
                  target="_blank"
                  data-eid="qd_A77"
                >
                  <cite>
                    <em className="iconfont"></em>
                    <span className="info">
                      <i>军事</i>
                      <b>20623</b>
                    </span>
                  </cite>
                </a>
              </dd>
              <dd className="even">
                <a
                  href="/lishi/"
                  title="历史小说"
                  target="_blank"
                  data-eid="qd_A78"
                >
                  <cite>
                    <em className="iconfont"></em>
                    <span className="info">
                      <i>历史</i>
                      <b>77225</b>
                    </span>
                  </cite>
                </a>
              </dd>
              <dd className="left">
                <a
                  href="/youxi/"
                  title="游戏小说"
                  target="_blank"
                  data-eid="qd_A79"
                >
                  <cite>
                    <em className="iconfont"></em>
                    <span className="info">
                      <i>游戏</i>
                      <b>108311</b>
                    </span>
                  </cite>
                </a>
              </dd>
              <dd>
                <a
                  href="/tiyu/"
                  title="体育小说"
                  target="_blank"
                  data-eid="qd_A80"
                >
                  <cite>
                    <em className="iconfont tiyu"></em>
                    <span className="info">
                      <i>体育</i>
                      <b>9109</b>
                    </span>
                  </cite>
                </a>
              </dd>
              <dd className="even left">
                <a
                  href="/kehuan/"
                  title="科幻小说"
                  target="_blank"
                  data-eid="qd_A81"
                >
                  <cite>
                    <em className="iconfont"></em>
                    <span className="info">
                      <i>科幻</i>
                      <b>157333</b>
                    </span>
                  </cite>
                </a>
              </dd>
              <dd className="even">
                <a
                  href="/zhutianwuxian/"
                  title="诸天无限小说"
                  target="_blank"
                  data-eid="qd_A81"
                >
                  <cite>
                    <em className="iconfont"></em>
                    <span className="info">
                      <i>诸天无限</i>
                      <b>52280</b>
                    </span>
                  </cite>
                </a>
              </dd>
              <dd className="left">
                <a
                  href="/lingyi/"
                  title="悬疑小说"
                  target="_blank"
                  data-eid="qd_A82"
                >
                  <cite>
                    <em className="iconfont lingyi"></em>
                    <span className="info">
                      <i>悬疑</i>
                      <b>66996</b>
                    </span>
                  </cite>
                </a>
              </dd>
              <dd>
                <a
                  href="/2cy/"
                  title="轻小说"
                  target="_blank"
                  data-eid="qd_A84"
                >
                  <cite>
                    <em className="iconfont erciyuan"></em>
                    <span className="info">
                      <i>轻小说</i>
                      <b>113490</b>
                    </span>
                  </cite>
                </a>
              </dd>
            </dl>
          </div>
          <div className="focus-box fl" data-l1="6">
            <div className="focus-slider">
              <div
                className="lbf-slides switchable-slides"
                id="switchable-slides"
              >
                <a
                  className="more"
                  href="//www.qidian.com/coverrec/"
                  target="_blank"
                  data-eid="qd_A173"
                >
                  <i>
                    <em></em>
                    <em></em>
                    <em></em>
                  </i>
                </a>
                <ul>
                  <li
                    id="item1"
                    data-rid="1"
                    style="transition: transform 300ms linear; backface-visibility: hidden; transform: translateX(-100%);"
                  >
                    <a
                      href="https://www.qidian.com/book/1043735998/ "
                      target="_blank"
                      data-eid="qd_A85"
                      data-cid="https://www.qidian.com/book/1043735998/ "
                    >
                      <img
                        src="//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/ab761b669a74371cc87c3fb1a8082c8c.jpg"
                        alt="一心退休的我却成"
                        width="100%"
                      />
                    </a>
                  </li>
                  <li
                    id="item2"
                    data-rid="2"
                    style="display: list-item; transition: transform 300ms linear; transform: translateX(0%); backface-visibility: hidden;"
                  >
                    <a
                      href="https://www.qidian.com/book/1043353212/ "
                      target="_blank"
                      data-eid="qd_A86"
                      data-cid="https://www.qidian.com/book/1043353212/ "
                    >
                      <img
                        className="load"
                        data-src=" //bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/2f62c0f89628ada6fc43d82da1266156.jpg"
                        alt="明末，从西北再造"
                        width="100%"
                        src=" //bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/2f62c0f89628ada6fc43d82da1266156.jpg"
                      />
                    </a>
                  </li>
                  <li
                    id="item3"
                    data-rid="3"
                    style="display: list-item; transition: transform 300ms linear; transform: translateX(-100%); backface-visibility: hidden;"
                  >
                    <a
                      href="https://www.qidian.com/book/1044421650/ "
                      target="_blank"
                      data-eid="qd_A87"
                      data-cid="https://www.qidian.com/book/1044421650/ "
                    >
                      <img
                        className="load"
                        data-src=" //bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/46147de20b9828f7249adbdf595b4f60.jpg"
                        alt="咒禁山海"
                        width="100%"
                        src=" //bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/46147de20b9828f7249adbdf595b4f60.jpg"
                      />
                    </a>
                  </li>
                  <li
                    id="item4"
                    data-rid="4"
                    style="display: list-item; transition: transform 300ms linear; transform: translateX(-100%); backface-visibility: hidden;"
                  >
                    <a
                      href="https://www.qidian.com/book/1044208566/ "
                      target="_blank"
                      data-eid="qd_A88"
                      data-cid="https://www.qidian.com/book/1044208566/ "
                    >
                      <img
                        className="load"
                        data-src=" //bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/da9fab5c16b4b1cddd175a9317eec81f.jpg"
                        alt="无限神职"
                        width="100%"
                        src=" //bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/da9fab5c16b4b1cddd175a9317eec81f.jpg"
                      />
                    </a>
                  </li>
                  <li
                    id="item5"
                    data-rid="5"
                    style="display: list-item; transition: transform 300ms linear; transform: translateX(-100%); backface-visibility: hidden;"
                  >
                    <a
                      href="https://game.qidian.com/CpGameHome/Ad/directLogin/name/wcbz1/way/1?qd_game_key=wcbz1080x375.jpg&amp;qd_dd_p1=150879 "
                      target="_blank"
                      data-eid="qd_A89"
                      data-qd_dd_p1="1"
                    >
                      <img
                        className="load"
                        data-src=" https://gameapp-1252317822.file.myqcloud.com/yuewen/game/images/f59e8ab6bfdbad407c4839557178bc0f.jpg"
                        alt="王城霸主"
                        width="100%"
                        src=" https://gameapp-1252317822.file.myqcloud.com/yuewen/game/images/f59e8ab6bfdbad407c4839557178bc0f.jpg"
                      />
                    </a>
                    <span className="op-tag"></span>
                  </li>
                </ul>
                <div className="thumb lbf-button-group nav" id="thumb">
                  <a href="#item1" className="lbf-button" data-eid="qd_A185">
                    <span></span> 一心退休的我却成
                  </a>
                  <a
                    href="#item2"
                    className="lbf-button active"
                    data-eid="qd_A186"
                  >
                    明末，从西北再造
                  </a>
                  <a href="#item3" className="lbf-button" data-eid="qd_A187">
                    咒禁山海
                  </a>
                  <a href="#item4" className="lbf-button" data-eid="qd_A188">
                    无限神职
                  </a>
                  <a
                    href="#item5"
                    className="lbf-button game-link"
                    target="_blank"
                    data-eid="qd_A189"
                  >
                    <em className="iconfont yxtd"></em>王城霸主
                  </a>
                </div>
              </div>
            </div>
            <div className="focus-img cf">
              <ul>
                <li>
                  <span className="op-tag"></span>
                  <a
                    href="https://www.yuewen.com/app/?type=appqd"
                    rel="nofollow"
                    target="_blank"
                    data-eid="qd_A90"
                    data-qd_dd_p1="1"
                  >
                    <img
                      src="//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/fb250af71c395f14ef8f11a69382a5c4.png"
                      alt="填坑节引流-换为普通"
                    />
                  </a>
                </li>
                <li className="middle">
                  <span className="op-tag"></span>
                  <a
                    href="https://game.qidian.com/CpGameHome/Ad/directLogin/name/yslz/way/1?qd_game_key=yslz180x140.png&amp;qd_dd_p1=150869"
                    target="_blank"
                    data-eid="qd_A91"
                    data-qd_dd_p1="1"
                  >
                    <img
                      src="https://gameapp-1252317822.file.myqcloud.com/yuewen/game/images/f30fc6d1202e3e0042229764b9c874ab.png"
                      alt="野兽领主：新世界"
                    />
                  </a>
                </li>
                <li>
                  <span className="op-tag"></span>
                  <a
                    href="https://zuojia.write.qq.com/?siteid=qidian"
                    target="_blank"
                    data-eid="qd_A92"
                    data-qd_dd_p1="1"
                  >
                    <img
                      src="//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/02d5665834ee5884dbd0d20fd9ad93fa.png"
                      alt="我要写作"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="notice-wrap fr">
            <div className="notice" id="notice" data-l1="7">
              <h3>
                <a
                  href="https://book.qidian.com/info/1044394624/"
                  target="_blank"
                  data-eid="qd_A93"
                >
                  三戒大师《状元郎》
                </a>
              </h3>
              <div className="notice-list">
                <ul>
                  <li className="color-type_0" data-rid="1">
                    <a
                      href="https://www.qidian.com/book/1045526336/"
                      target="_blank"
                      data-eid="qd_A94"
                    >
                      <i>「</i>资讯<i>」</i>大哥说我天下无敌
                    </a>
                  </li>
                  <li className="color-type_0" data-rid="2">
                    <a
                      href="https://www.qidian.com/book/1045575663/"
                      target="_blank"
                      data-eid="qd_A95"
                    >
                      <i>「</i>资讯<i>」</i>曾经拥有的方向感新书
                    </a>
                  </li>
                  <li className="color-type_0" data-rid="3">
                    <a
                      href="https://www.qidian.com/book/1045391192/"
                      target="_blank"
                      data-eid="qd_A96"
                    >
                      <i>「</i>资讯<i>」</i>流浪的蛤蟆《俗仙》
                    </a>
                  </li>
                  <li className="color-type_0" data-rid="4">
                    <a
                      href="https://ataru.qidian.com/noah/362509380"
                      target="_blank"
                      data-eid="qd_A97"
                    >
                      <i>「</i>资讯<i>」</i>2025新晋白金大神
                    </a>
                  </li>
                  <li className="color-type_0" data-rid="5">
                    <a
                      className="red"
                      href="https://game.qidian.com/CpGameHome/Ad/directLogin/name/wcbz1/way/1?qd_game_key=-7&amp;qd_dd_p1=150904"
                      target="_blank"
                      data-eid="qd_A98"
                      data-qd_dd_p1="1"
                    >
                      <em>页游</em>王者归来，霸主崛起！
                    </a>
                  </li>
                  <li className="color-type_0" data-rid="6">
                    <a
                      className="red"
                      href="https://game.qidian.com/CpGameHome/Ad/directLogin/name/qjzh/way/1?qd_game_key=-7&amp;qd_dd_p1=150903"
                      target="_blank"
                      data-eid="qd_A99"
                      data-qd_dd_p1="1"
                    >
                      <em>页游</em>千军纵横，气吞天下
                    </a>
                  </li>
                </ul>
              </div>
              <div className="attention">
                <em className="iconfont"></em>
                <marquee
                  direction="left"
                  behavior="scroll"
                  scrollamount="4"
                  loop="0"
                  onmouseover="this.stop()"
                  onmouseout="this.start()"
                >
                  <span>
                    恰恰好好好支持
                    <a href="//www.qidian.com/book/1041637443/" target="_blank">
                      捞尸人
                    </a>
                    100W点
                  </span>
                </marquee>
              </div>
            </div>
            <div className="notice-banner" id="tr-banner" data-l1="30">
              <div className="op-tag"></div>
              <a
                href="https://game.qidian.com/Game/Play/index?gameId=201796&amp;qd_game_key=216x150&amp;qd_dd_p1=135755"
                target="_blank"
                data-eid="qd_A101"
                data-qd_dd_p1="1"
                style="display:block"
              >
                <img src="//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/35fee49fbc08763cf7a6fc6a7c70cc70.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="index-two-wrap box-center mb40 cf">
        <div className="book-list-wrap mr30 fl" data-l1="8">
          <h3 className="wrap-title lang">
            本周强推
            <a
              className="more"
              href="//www.qidian.com/strongrec/"
              data-eid="qd_A105"
              target="_blank"
            >
              更多<em className="iconfont"></em>
            </a>
          </h3>
          <div className="book-list">
            <ul>
              <li className="" data-rid="1">
                <a
                  className="channel"
                  href="//www.qidian.com/dushi/"
                  target="_blank"
                  data-eid="qd_A102"
                >
                  <em>「</em>都市<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1044986725/"
                    target="_blank"
                    data-eid="qd_A103"
                    data-bid="1044986725"
                    title="华娱的盛宴"
                  >
                    华娱的盛宴
                  </a>
                </strong>
                <a
                  className="author"
                  href="//my.qidian.com/author/4609396/"
                  data-eid="qd_A104"
                  target="_blank"
                >
                  刀一耕
                </a>
              </li>
              <li className="" data-rid="2">
                <a
                  className="channel"
                  href="//www.qidian.com/xuanhuan/"
                  target="_blank"
                  data-eid="qd_A102"
                >
                  <em>「</em>玄幻<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045076554/"
                    target="_blank"
                    data-eid="qd_A103"
                    data-bid="1045076554"
                    title="我于人间证不朽"
                  >
                    我于人间证不朽
                  </a>
                </strong>
                <a
                  className="author"
                  href="//my.qidian.com/author/8011607/"
                  data-eid="qd_A104"
                  target="_blank"
                >
                  夜南听风
                </a>
              </li>
              <li className="" data-rid="3">
                <a
                  className="channel"
                  href="//www.qidian.com/dushi/"
                  target="_blank"
                  data-eid="qd_A102"
                >
                  <em>「</em>都市<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045033637/"
                    target="_blank"
                    data-eid="qd_A103"
                    data-bid="1045033637"
                    title="重生的我没有梦想"
                  >
                    重生的我没有梦想
                  </a>
                </strong>
                <a
                  className="author"
                  href="//my.qidian.com/author/2059385/"
                  data-eid="qd_A104"
                  target="_blank"
                >
                  鲸鱼禅师
                </a>
              </li>
              <li className="str3" data-rid="4">
                <a
                  className="channel"
                  href="//www.qidian.com/2cy/"
                  target="_blank"
                  data-eid="qd_A102"
                >
                  <em>「</em>轻小说<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045039121/"
                    target="_blank"
                    data-eid="qd_A103"
                    data-bid="1045039121"
                    title="教皇阁下从不伟大"
                  >
                    教皇阁下从不伟大
                  </a>
                </strong>
                <a
                  className="author"
                  href="//my.qidian.com/author/433954391/"
                  data-eid="qd_A104"
                  target="_blank"
                >
                  不会写书1
                </a>
              </li>
              <li className="" data-rid="5">
                <a
                  className="channel"
                  href="//www.qidian.com/xuanhuan/"
                  target="_blank"
                  data-eid="qd_A102"
                >
                  <em>「</em>玄幻<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045003390/"
                    target="_blank"
                    data-eid="qd_A103"
                    data-bid="1045003390"
                    title="苟在武道世界成圣"
                  >
                    苟在武道世界成圣
                  </a>
                  <cite className="hot"></cite>
                </strong>
                <a
                  className="author"
                  href="//my.qidian.com/author/433334262/"
                  data-eid="qd_A104"
                  target="_blank"
                >
                  在水中的纸老虎
                </a>
              </li>
              <li className="" data-rid="6">
                <a
                  className="channel"
                  href="//www.qidian.com/tiyu/"
                  target="_blank"
                  data-eid="qd_A102"
                >
                  <em>「</em>体育<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045294510/"
                    target="_blank"
                    data-eid="qd_A103"
                    data-bid="1045294510"
                    title="NBA之绝对统治力"
                  >
                    NBA之绝对统治力
                  </a>
                </strong>
                <a
                  className="author"
                  href="//my.qidian.com/author/404115738/"
                  data-eid="qd_A104"
                  target="_blank"
                >
                  东王一
                </a>
              </li>
              <li className="" data-rid="7">
                <a
                  className="channel"
                  href="//www.qidian.com/dushi/"
                  target="_blank"
                  data-eid="qd_A102"
                >
                  <em>「</em>都市<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1044938923/"
                    target="_blank"
                    data-eid="qd_A103"
                    data-bid="1044938923"
                    title="从投资小白到金融巨头"
                  >
                    从投资小白到金融巨头
                  </a>
                </strong>
                <a
                  className="author"
                  href="//my.qidian.com/author/433434872/"
                  data-eid="qd_A104"
                  target="_blank"
                >
                  请你吃大面
                </a>
              </li>
              <li className="str3" data-rid="8">
                <a
                  className="channel"
                  href="//www.qidian.com/2cy/"
                  target="_blank"
                  data-eid="qd_A102"
                >
                  <em>「</em>轻小说<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045267415/"
                    target="_blank"
                    data-eid="qd_A103"
                    data-bid="1045267415"
                    title="漫威：开局觉醒小宇宙"
                  >
                    漫威：开局觉醒小宇宙
                  </a>
                </strong>
                <a
                  className="author"
                  href="//my.qidian.com/author/403007506/"
                  data-eid="qd_A104"
                  target="_blank"
                >
                  米一克
                </a>
              </li>
              <li className="" data-rid="9">
                <a
                  className="channel"
                  href="//www.qidian.com/xuanhuan/"
                  target="_blank"
                  data-eid="qd_A102"
                >
                  <em>「</em>玄幻<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045193800/"
                    target="_blank"
                    data-eid="qd_A103"
                    data-bid="1045193800"
                    title="从采珠疍户开始无限就职"
                  >
                    从采珠疍户开始无限就职
                  </a>
                </strong>
                <a
                  className="author"
                  href="//my.qidian.com/author/432375805/"
                  data-eid="qd_A104"
                  target="_blank"
                >
                  来一块钱月光
                </a>
              </li>
              <li className="" data-rid="10">
                <a
                  className="channel"
                  href="//www.qidian.com/dushi/"
                  target="_blank"
                  data-eid="qd_A102"
                >
                  <em>「</em>都市<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045066326/"
                    target="_blank"
                    data-eid="qd_A103"
                    data-bid="1045066326"
                    title="我才刚进组，你说我穿越了？"
                  >
                    我才刚进组，你说我穿越了？
                  </a>
                </strong>
                <a
                  className="author"
                  href="//my.qidian.com/author/433932192/"
                  data-eid="qd_A104"
                  target="_blank"
                >
                  抓住那只蓝胖砸
                </a>
              </li>
              <li className="" data-rid="11">
                <a
                  className="channel"
                  href="//www.qidian.com/kehuan/"
                  target="_blank"
                  data-eid="qd_A102"
                >
                  <em>「</em>科幻<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045126130/"
                    target="_blank"
                    data-eid="qd_A103"
                    data-bid="1045126130"
                    title="重生2013：超级科技帝国"
                  >
                    重生2013：超级科技帝国
                  </a>
                </strong>
                <a
                  className="author"
                  href="//my.qidian.com/author/401750405/"
                  data-eid="qd_A104"
                  target="_blank"
                >
                  昭灵驷玉
                </a>
              </li>
              <li className="" data-rid="12">
                <a
                  className="channel"
                  href="//www.qidian.com/lishi/"
                  target="_blank"
                  data-eid="qd_A102"
                >
                  <em>「</em>历史<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045148074/"
                    target="_blank"
                    data-eid="qd_A103"
                    data-bid="1045148074"
                    title="刘宋：未满十二，是关中之主"
                  >
                    刘宋：未满十二，是关中之主
                  </a>
                  <cite className="hot"></cite>
                </strong>
                <a
                  className="author"
                  href="//my.qidian.com/author/433959610/"
                  data-eid="qd_A104"
                  target="_blank"
                >
                  夏天就是要吃西瓜
                </a>
              </li>
              <li className="" data-rid="13">
                <a
                  className="channel"
                  href="//www.qidian.com/xuanhuan/"
                  target="_blank"
                  data-eid="qd_A102"
                >
                  <em>「</em>玄幻<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045018157/"
                    target="_blank"
                    data-eid="qd_A103"
                    data-bid="1045018157"
                    title="亡灵法师，召唤055什么鬼？"
                  >
                    亡灵法师，召唤055什么鬼？
                  </a>
                  <cite className="hot"></cite>
                </strong>
                <a
                  className="author"
                  href="//my.qidian.com/author/432777395/"
                  data-eid="qd_A104"
                  target="_blank"
                >
                  卧雪观星
                </a>
              </li>
              <li className="" data-rid="14">
                <a
                  className="channel"
                  href="//www.qidian.com/xianxia/"
                  target="_blank"
                  data-eid="qd_A102"
                >
                  <em>「</em>仙侠<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045043919/"
                    target="_blank"
                    data-eid="qd_A103"
                    data-bid="1045043919"
                    title="西游：从拜师太乙救苦天尊开始"
                  >
                    西游：从拜师太乙救苦天尊开始
                  </a>
                </strong>
                <a
                  className="author"
                  href="//my.qidian.com/author/433943843/"
                  data-eid="qd_A104"
                  target="_blank"
                >
                  清风映明月
                </a>
              </li>
              <li className="" data-rid="15">
                <a
                  className="channel"
                  href="//www.qidian.com/qihuan/"
                  target="_blank"
                  data-eid="qd_A102"
                >
                  <em>「</em>奇幻<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045136683/"
                    target="_blank"
                    data-eid="qd_A103"
                    data-bid="1045136683"
                    title="暮年骑士，从抚养血族徒弟开始"
                  >
                    暮年骑士，从抚养血族徒弟开始
                  </a>
                </strong>
                <a
                  className="author"
                  href="//my.qidian.com/author/433938752/"
                  data-eid="qd_A104"
                  target="_blank"
                >
                  耄真人
                </a>
              </li>
              <li className="" data-rid="16">
                <a
                  className="channel"
                  href="//www.qidian.com/dushi/"
                  target="_blank"
                  data-eid="qd_A102"
                >
                  <em>「</em>都市<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045195310/"
                    target="_blank"
                    data-eid="qd_A103"
                    data-bid="1045195310"
                    title="这顶流醉酒发癫，内娱都笑喷了！"
                  >
                    这顶流醉酒发癫，内娱都笑喷了！
                  </a>
                </strong>
                <a
                  className="author"
                  href="//my.qidian.com/author/433863508/"
                  data-eid="qd_A104"
                  target="_blank"
                >
                  暴更
                </a>
              </li>
              <li className="" data-rid="17">
                <a
                  className="channel"
                  href="//www.qidian.com/dushi/"
                  target="_blank"
                  data-eid="qd_A102"
                >
                  <em>「</em>都市<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045235060/"
                    target="_blank"
                    data-eid="qd_A103"
                    data-bid="1045235060"
                    title="警局倒霉货？这一堆一等功什么鬼"
                  >
                    警局倒霉货？这一堆一等功什么鬼
                  </a>
                </strong>
                <a
                  className="author"
                  href="//my.qidian.com/author/433974707/"
                  data-eid="qd_A104"
                  target="_blank"
                >
                  两王四二怎么输
                </a>
              </li>
              <li data-rid="18">
                <a
                  className="channel"
                  href="http://game.qidian.com"
                  target="_blank"
                  data-eid="qd_A106"
                >
                  <em>「</em>页游<em>」</em>
                </a>
                <a
                  className="name"
                  href="https://game.qidian.com/CpGameHome/Ad/directLogin/name/wcbz1/way/1?qd_game_key=-8&amp;qd_dd_p1=150900"
                  target="_blank"
                  data-eid="qd_A106"
                  data-qd_dd_p1="1"
                >
                  王者归来，霸主崛起！
                </a>
                <span className="author">广告</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="edit-rec-wrap fl" data-l1="9">
          <h3 className="wrap-title lang">编辑推荐</h3>
          <div className="focus-today cf" data-l2="1">
            <div className="slider-wrap fl">
              <div id="carousel" className="carousel">
                <div className="slides" style="width: 93px; height: 124px;">
                  <div
                    className="slideItem item1"
                    data-rid="1"
                    style="width: 59.52px; height: 87.296px; top: 22.32px; right: -80.352px; opacity: 1; z-index: 4;"
                  >
                    <a
                      href="//www.qidian.com/book/1045043919/"
                      data-eid="qd_A107"
                      data-bid="1045043919"
                      target="_blank"
                    >
                      <img
                        src="//bookcover.yuewen.com/qdbimg/349573/1045043919/90.webp"
                        title="西游：从拜师太乙救苦天尊开始"
                        alt="西游：从拜师太乙救苦天尊开始"
                        style="width: 59.52px; height: 79.36px; display: inline-block;"
                      />
                    </a>
                    <div
                      className="shadow"
                      style="width: 93px; z-index: -1; position: absolute; margin: 0px; padding: 0px; border: none; overflow: hidden; left: 0px; bottom: 0px;"
                    >
                      <div
                        className="shadowLeft"
                        style="position: relative; float: left;"
                      ></div>
                      <div
                        className="shadowMiddle"
                        style="position: relative; float: left; width: 59.52px;"
                      ></div>
                      <div
                        className="shadowRight"
                        style="position: relative; float: left;"
                      ></div>
                    </div>
                  </div>
                  <div
                    className="slideItem item2"
                    data-rid="2"
                    style="width: 47.616px; height: 69.8368px; top: 30.256px; right: -108.922px; opacity: 0; z-index: 3; display: none;"
                  >
                    <a
                      href="//www.qidian.com/book/1044418266/"
                      data-eid="qd_A107"
                      data-bid="1044418266"
                      target="_blank"
                    >
                      <img
                        src="//bookcover.yuewen.com/qdbimg/349573/1044418266/90.webp"
                        title="地仙只想种田"
                        alt="地仙只想种田"
                        style="width: 47.616px; height: 63.488px;"
                      />
                    </a>
                    <div
                      className="shadow"
                      style="width: 93px; z-index: -1; position: absolute; margin: 0px; padding: 0px; border: none; overflow: hidden; left: 0px; bottom: 0px;"
                    >
                      <div
                        className="shadowLeft"
                        style="position: relative; float: left;"
                      ></div>
                      <div
                        className="shadowMiddle"
                        style="position: relative; float: left; width: 47.616px;"
                      ></div>
                      <div
                        className="shadowRight"
                        style="position: relative; float: left;"
                      ></div>
                    </div>
                  </div>
                  <div
                    className="slideItem item3"
                    data-rid="3"
                    style="width: 47.616px; height: 69.8368px; top: 30.256px; right: 154.306px; opacity: 0; z-index: 3; display: none;"
                  >
                    <a
                      href="//www.qidian.com/book/1044696662/"
                      data-eid="qd_A107"
                      data-bid="1044696662"
                      target="_blank"
                    >
                      <img
                        src="//bookcover.yuewen.com/qdbimg/349573/1044696662/90.webp"
                        title="没有奥特曼？我将以怪兽形态出击"
                        alt="没有奥特曼？我将以怪兽形态出击"
                        style="width: 47.616px; height: 63.488px; display: inline-block;"
                      />
                    </a>
                    <div
                      className="shadow"
                      style="width: 93px; z-index: -1; position: absolute; margin: 0px; padding: 0px; border: none; overflow: hidden; left: 0px; bottom: 0px;"
                    >
                      <div
                        className="shadowLeft"
                        style="position: relative; float: left;"
                      ></div>
                      <div
                        className="shadowMiddle"
                        style="position: relative; float: left; width: 47.616px;"
                      ></div>
                      <div
                        className="shadowRight"
                        style="position: relative; float: left;"
                      ></div>
                    </div>
                  </div>
                  <div
                    className="slideItem item4"
                    data-rid="4"
                    style="width: 59.52px; height: 87.296px; top: 22.32px; right: 113.832px; opacity: 1; z-index: 4; display: block;"
                  >
                    <a
                      href="//www.qidian.com/book/1039855223/"
                      data-eid="qd_A107"
                      data-bid="1039855223"
                      target="_blank"
                    >
                      <img
                        src="//bookcover.yuewen.com/qdbimg/349573/1039855223/90.webp"
                        title="年代：巨额私房钱被媳妇儿发现了"
                        alt="年代：巨额私房钱被媳妇儿发现了"
                        style="width: 59.52px; height: 79.36px; display: inline-block;"
                      />
                    </a>
                    <div
                      className="shadow"
                      style="width: 93px; z-index: -1; position: absolute; margin: 0px; padding: 0px; border: none; overflow: hidden; left: 0px; bottom: 0px;"
                    >
                      <div
                        className="shadowLeft"
                        style="position: relative; float: left;"
                      ></div>
                      <div
                        className="shadowMiddle"
                        style="position: relative; float: left; width: 59.52px;"
                      ></div>
                      <div
                        className="shadowRight"
                        style="position: relative; float: left;"
                      ></div>
                    </div>
                  </div>
                  <div
                    className="slideItem item5"
                    data-rid="5"
                    style="width: 74.4px; height: 109.12px; top: 12.4px; right: 63.24px; opacity: 1; z-index: 5; display: block;"
                  >
                    <a
                      href="//www.qidian.com/book/1041387804/"
                      data-eid="qd_A107"
                      data-bid="1041387804"
                      target="_blank"
                    >
                      <img
                        src="//bookcover.yuewen.com/qdbimg/349573/1041387804/90.webp"
                        title="这阴间地下城谁设计的！"
                        alt="这阴间地下城谁设计的！"
                        style="width: 74.4px; height: 99.2px; display: inline-block;"
                      />
                    </a>
                    <div
                      className="shadow"
                      style="width: 93px; z-index: -1; position: absolute; margin: 0px; padding: 0px; border: none; overflow: hidden; left: 0px; bottom: 0px;"
                    >
                      <div
                        className="shadowLeft"
                        style="position: relative; float: left;"
                      ></div>
                      <div
                        className="shadowMiddle"
                        style="position: relative; float: left; width: 74.4px;"
                      ></div>
                      <div
                        className="shadowRight"
                        style="position: relative; float: left;"
                      ></div>
                    </div>
                  </div>
                  <div
                    className="slideItem item6"
                    data-rid="6"
                    style="width: 93px; height: 136.4px; top: 0px; right: 0px; opacity: 1; z-index: 6;"
                  >
                    <a
                      href="//www.qidian.com/book/1044473902/"
                      data-eid="qd_A107"
                      data-bid="1044473902"
                      target="_blank"
                    >
                      <img
                        src="//bookcover.yuewen.com/qdbimg/349573/1044473902/90.webp"
                        title="重生：我是县城婆罗门"
                        alt="重生：我是县城婆罗门"
                        style="width: 93px; height: 124px; display: inline-block;"
                      />
                    </a>
                    <div
                      className="shadow"
                      style="width: 93px; z-index: -1; position: absolute; margin: 0px; padding: 0px; border: none; overflow: hidden; left: 0px; bottom: 0px;"
                    >
                      <div
                        className="shadowLeft"
                        style="position: relative; float: left;"
                      ></div>
                      <div
                        className="shadowMiddle"
                        style="position: relative; float: left; width: 93px;"
                      ></div>
                      <div
                        className="shadowRight"
                        style="position: relative; float: left;"
                      ></div>
                    </div>
                  </div>
                  <div
                    className="slideItem item7"
                    data-rid="7"
                    style="width: 74.4px; height: 109.12px; top: 12.4px; right: -44.64px; opacity: 1; z-index: 5;"
                  >
                    <a
                      href="//www.qidian.com/book/1043144298/"
                      data-eid="qd_A107"
                      data-bid="1043144298"
                      target="_blank"
                    >
                      <img
                        src="//bookcover.yuewen.com/qdbimg/349573/1043144298/90.webp"
                        title="大唐：母后，我太想进步了"
                        alt="大唐：母后，我太想进步了"
                        style="width: 74.4px; height: 99.2px; display: inline-block;"
                      />
                    </a>
                    <div
                      className="shadow"
                      style="width: 93px; z-index: -1; position: absolute; margin: 0px; padding: 0px; border: none; overflow: hidden; left: 0px; bottom: 0px;"
                    >
                      <div
                        className="shadowLeft"
                        style="position: relative; float: left;"
                      ></div>
                      <div
                        className="shadowMiddle"
                        style="position: relative; float: left; width: 74.4px;"
                      ></div>
                      <div
                        className="shadowRight"
                        style="position: relative; float: left;"
                      ></div>
                    </div>
                  </div>
                  <div
                    className="spinner"
                    style="display: none; width: 93px; height: 124px; top: 0px; right: 0px; opacity: 1; z-index: 10; position: absolute; cursor: pointer; overflow: hidden; padding: 0px; margin: 0px; border: none;"
                  ></div>
                  <div
                    className="videoOverlay"
                    style="display: none; width: 93px; height: 124px; top: 0px; right: 0px; opacity: 1; z-index: 9; position: absolute; cursor: pointer; overflow: hidden; padding: 0px; margin: 0px; border: none;"
                  ></div>
                </div>
                <div className="prevButton iconfont" data-eid="qd_A180">
                  
                </div>
                <div className="nextButton iconfont" data-eid="qd_A170">
                  
                </div>
                <div className="description">
                  <div
                    className="desc-wrap item1"
                    data-rid="1"
                    style="position: absolute; top: 0px; left: 0px; display: none;"
                  >
                    <h3>
                      <a
                        href="//www.qidian.com/book/1045043919/"
                        target="_blank"
                        data-eid="qd_A108"
                        data-bid="1045043919"
                      >
                        西游：从拜师太乙救苦天尊开始
                      </a>
                    </h3>
                    <p>
                      若惹出祸来，你且呼为师名讳，为师自会寻声赴感，前来救你。
                    </p>
                    <a
                      className="read-btn"
                      href="//www.qidian.com/book/1045043919/"
                      target="_blank"
                      data-eid="qd_A109"
                      data-bid="1045043919"
                    >
                      书籍详情
                    </a>
                  </div>
                  <div
                    className="desc-wrap item2"
                    data-rid="2"
                    style="position: absolute; top: 0px; left: 0px; display: none;"
                  >
                    <h3>
                      <a
                        href="//www.qidian.com/book/1044418266/"
                        target="_blank"
                        data-eid="qd_A108"
                        data-bid="1044418266"
                      >
                        地仙只想种田
                      </a>
                    </h3>
                    <p>吾乃此世地仙之祖也！</p>
                    <a
                      className="read-btn"
                      href="//www.qidian.com/book/1044418266/"
                      target="_blank"
                      data-eid="qd_A109"
                      data-bid="1044418266"
                    >
                      书籍详情
                    </a>
                  </div>
                  <div
                    className="desc-wrap item3"
                    data-rid="3"
                    style="position: absolute; top: 0px; left: 0px; display: none;"
                  >
                    <h3>
                      <a
                        href="//www.qidian.com/book/1044696662/"
                        target="_blank"
                        data-eid="qd_A108"
                        data-bid="1044696662"
                      >
                        没有奥特曼？我将以怪兽形态出击
                      </a>
                    </h3>
                    <p>
                      什么叫从没听说过奥特曼，只知道基里艾洛德神会保护人类？
                    </p>
                    <a
                      className="read-btn"
                      href="//www.qidian.com/book/1044696662/"
                      target="_blank"
                      data-eid="qd_A109"
                      data-bid="1044696662"
                    >
                      书籍详情
                    </a>
                  </div>
                  <div
                    className="desc-wrap item4"
                    data-rid="4"
                    style="position: absolute; top: 0px; left: 0px; display: none;"
                  >
                    <h3>
                      <a
                        href="//www.qidian.com/book/1039855223/"
                        target="_blank"
                        data-eid="qd_A108"
                        data-bid="1039855223"
                      >
                        年代：巨额私房钱被媳妇儿发现了
                      </a>
                    </h3>
                    <p>
                      媳妇儿你数数，全在这里了！真的，一分没花，我一分都没敢花……
                    </p>
                    <a
                      className="read-btn"
                      href="//www.qidian.com/book/1039855223/"
                      target="_blank"
                      data-eid="qd_A109"
                      data-bid="1039855223"
                    >
                      书籍详情
                    </a>
                  </div>
                  <div
                    className="desc-wrap item5"
                    data-rid="5"
                    style="position: absolute; top: 0px; left: 0px; display: none;"
                  >
                    <h3>
                      <a
                        href="//www.qidian.com/book/1041387804/"
                        target="_blank"
                        data-eid="qd_A108"
                        data-bid="1041387804"
                      >
                        这阴间地下城谁设计的！
                      </a>
                    </h3>
                    <p>不是，这地下城的设计真的合理吗！</p>
                    <a
                      className="read-btn"
                      href="//www.qidian.com/book/1041387804/"
                      target="_blank"
                      data-eid="qd_A109"
                      data-bid="1041387804"
                    >
                      书籍详情
                    </a>
                  </div>
                  <div
                    className="desc-wrap item6"
                    data-rid="6"
                    style="position: absolute; top: 0px; left: 0px; display: block;"
                  >
                    <h3>
                      <a
                        href="//www.qidian.com/book/1044473902/"
                        target="_blank"
                        data-eid="qd_A108"
                        data-bid="1044473902"
                      >
                        重生：我是县城婆罗门
                      </a>
                    </h3>
                    <p>懂不懂县城最后一波婆罗门的含金量啊？</p>
                    <a
                      className="read-btn"
                      href="//www.qidian.com/book/1044473902/"
                      target="_blank"
                      data-eid="qd_A109"
                      data-bid="1044473902"
                    >
                      书籍详情
                    </a>
                  </div>
                  <div
                    className="desc-wrap item7"
                    data-rid="7"
                    style="display: none; position: absolute; top: 0px; left: 0px;"
                  >
                    <h3>
                      <a
                        href="//www.qidian.com/book/1043144298/"
                        target="_blank"
                        data-eid="qd_A108"
                        data-bid="1043144298"
                      >
                        大唐：母后，我太想进步了
                      </a>
                    </h3>
                    <p>他一个太子，要节制天下兵马干什么？</p>
                    <a
                      className="read-btn"
                      href="//www.qidian.com/book/1043144298/"
                      target="_blank"
                      data-eid="qd_A109"
                      data-bid="1043144298"
                    >
                      书籍详情
                    </a>
                  </div>
                </div>
                <div className="nextButton"></div>
                <div className="prevButton"></div>
                <div
                  className="buttonNav"
                  style="width: 127.4px; height: 9.2px;"
                >
                  <div className="bullet" style="text-align: center;"></div>
                  <div className="bullet" style="text-align: center;"></div>
                  <div className="bullet" style="text-align: center;"></div>
                  <div className="bullet" style="text-align: center;"></div>
                  <div className="bullet" style="text-align: center;"></div>
                  <div
                    className="bullet bulletActive"
                    style="text-align: center;"
                  ></div>
                  <div className="bullet" style="text-align: center;"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="edit-rec">
            <ul className="edit-rec-list bd cf" data-l2="2">
              <li data-rid="1">
                <h3>
                  <a
                    href="//www.qidian.com/book/1044511823/"
                    data-eid="qd_A110"
                    data-bid="1044511823"
                    target="_blank"
                  >
                    篮球：从克莱汤普森开始！
                  </a>
                </h3>
                <em className="total">
                  <cite>24,769</cite>
                  <i>人在追</i>
                </em>
                <p>2K系统绑定，融合35岁克莱-汤普森天赋！</p>
              </li>
              <li data-rid="2">
                <h3>
                  <a
                    href="//www.qidian.com/book/1044930090/"
                    data-eid="qd_A110"
                    data-bid="1044930090"
                    target="_blank"
                  >
                    美利坚打猎：从荒野独居开始
                  </a>
                </h3>
                <em className="total">
                  <cite>68,802</cite>
                  <i>人在追</i>
                </em>
                <p>冰天雪地的奇尔科湖，广袤的德克萨斯州，始祖鸟顶级装备傍身</p>
              </li>
              <li data-rid="3">
                <h3>
                  <a
                    href="//www.qidian.com/book/1043364791/"
                    data-eid="qd_A110"
                    data-bid="1043364791"
                    target="_blank"
                  >
                    人到中年，我的情报每日刷新
                  </a>
                </h3>
                <em className="total">
                  <cite>40,868</cite>
                  <i>人在追</i>
                </em>
                <p>
                  今日情报（红色）：邱远山将两根金条（200g），藏在了旧洗衣机的内壳里
                </p>
              </li>
            </ul>
            <div className="rel">
              <p className="line"></p>
            </div>
            <ul className="edit-rec-list cf" data-l2="2">
              <li data-rid="4">
                <h3>
                  <a
                    href="//www.qidian.com/book/1044692692/"
                    data-eid="qd_A110"
                    data-bid="1044692692"
                    target="_blank"
                  >
                    海贼：灾祸之主
                  </a>
                </h3>
                <em className="total">
                  <cite>27,798</cite>
                  <i>人在追</i>
                </em>
                <p>化身穷奇，与天灾人祸相伴</p>
              </li>
              <li data-rid="5">
                <h3>
                  <a
                    href="//www.qidian.com/book/1044147413/"
                    data-eid="qd_A110"
                    data-bid="1044147413"
                    target="_blank"
                  >
                    我大海贼，你说我刚出海？
                  </a>
                </h3>
                <em className="total">
                  <cite>39,754</cite>
                  <i>人在追</i>
                </em>
                <p>快退休的大海贼又要扬帆出海啦！</p>
              </li>
              <li data-rid="6">
                <h3>
                  <a
                    href="//www.qidian.com/book/1044561694/"
                    data-eid="qd_A110"
                    data-bid="1044561694"
                    target="_blank"
                  >
                    抗战：重整山河
                  </a>
                </h3>
                <em className="total">
                  <cite>4,078</cite>
                  <i>人在追</i>
                </em>
                <p>以血肉之躯捍卫祖国大好山河！</p>
              </li>
            </ul>
            <div className="edit-rec-img-list cf" data-l2="3">
              <ul>
                <li data-rid="1">
                  <div className="hover-box">
                    <div className="book-info">
                      <h3>
                        <a
                          href="//www.qidian.com/book/1045165156/"
                          data-eid="qd_A172"
                          data-bid="1045165156"
                          target="_blank"
                        >
                          借剑
                        </a>
                      </h3>
                      <p>我的剑被一声【万剑归宗】给叫走了？</p>
                    </div>
                    <div className="book-img">
                      <a
                        href="//www.qidian.com/book/1045165156/"
                        target="_blank"
                        data-eid="qd_A171"
                        data-bid="1044511823"
                      >
                        <img
                          className="lazy"
                          src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                          data-original="//bookcover.yuewen.com/qdbimg/349573/1045165156/90.webp"
                          alt="借剑"
                        />
                      </a>
                    </div>
                  </div>
                </li>
                <li data-rid="2">
                  <div className="hover-box">
                    <div className="book-info">
                      <h3>
                        <a
                          href="//www.qidian.com/book/1045149879/"
                          data-eid="qd_A172"
                          data-bid="1045149879"
                          target="_blank"
                        >
                          太渊之烬
                        </a>
                      </h3>
                      <p>少年掌岁阴命盘，自冰渊而出。</p>
                    </div>
                    <div className="book-img">
                      <a
                        href="//www.qidian.com/book/1045149879/"
                        target="_blank"
                        data-eid="qd_A171"
                        data-bid="1044930090"
                      >
                        <img
                          className="lazy"
                          src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                          data-original="//bookcover.yuewen.com/qdbimg/349573/1045149879/90.webp"
                          alt="太渊之烬"
                        />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="book-list-wrap fr" data-l1="10">
          <h3 className="wrap-title lang">
            三江<i>·</i>网文新风
            <a
              className="more"
              href="//www.qidian.com/sanjiang/"
              data-eid="qd_A114"
              target="_blank"
            >
              更多<em className="iconfont"></em>
            </a>
          </h3>
          <div className="book-list">
            <ul>
              <li className="" data-rid="1">
                <a
                  className="channel"
                  href="//www.qidian.com/xianxia/"
                  data-eid="qd_A112"
                  target="_blank"
                >
                  <em>「</em>仙侠<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045165156/"
                    data-eid="qd_A113"
                    target="_blank"
                    data-bid="1045165156"
                    title="借剑"
                  >
                    借剑
                  </a>
                  <cite className="hot"></cite>
                </strong>
                <span className="rec" target="_blank">
                  大神
                </span>
              </li>
              <li className="str3" data-rid="2">
                <a
                  className="channel"
                  href="//www.qidian.com/2cy/"
                  data-eid="qd_A112"
                  target="_blank"
                >
                  <em>「</em>轻小说<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045158023/"
                    data-eid="qd_A113"
                    target="_blank"
                    data-bid="1045158023"
                    title="摸奖术士"
                  >
                    摸奖术士
                  </a>
                </strong>
                <span className="rec" target="_blank">
                  术士
                </span>
              </li>
              <li className="" data-rid="3">
                <a
                  className="channel"
                  href="//www.qidian.com/dushi/"
                  data-eid="qd_A112"
                  target="_blank"
                >
                  <em>「</em>都市<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1043767853/"
                    data-eid="qd_A113"
                    target="_blank"
                    data-bid="1043767853"
                    title="中东暴君"
                  >
                    中东暴君
                  </a>
                </strong>
                <span className="rec" target="_blank">
                  军事
                </span>
              </li>
              <li className="" data-rid="4">
                <a
                  className="channel"
                  href="//www.qidian.com/tiyu/"
                  data-eid="qd_A112"
                  target="_blank"
                >
                  <em>「</em>体育<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045283374/"
                    data-eid="qd_A113"
                    target="_blank"
                    data-bid="1045283374"
                    title="最长的河"
                  >
                    最长的河
                  </a>
                </strong>
                <span className="rec" target="_blank">
                  篮球
                </span>
              </li>
              <li className="" data-rid="5">
                <a
                  className="channel"
                  href="//www.qidian.com/xianxia/"
                  data-eid="qd_A112"
                  target="_blank"
                >
                  <em>「</em>仙侠<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045149879/"
                    data-eid="qd_A113"
                    target="_blank"
                    data-bid="1045149879"
                    title="太渊之烬"
                  >
                    太渊之烬
                  </a>
                  <cite className="hot"></cite>
                </strong>
                <span className="rec" target="_blank">
                  修仙
                </span>
              </li>
              <li className="" data-rid="6">
                <a
                  className="channel"
                  href="//www.qidian.com/lishi/"
                  data-eid="qd_A112"
                  target="_blank"
                >
                  <em>「</em>历史<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045142477/"
                    data-eid="qd_A113"
                    target="_blank"
                    data-bid="1045142477"
                    title="这个崇祯太过极端"
                  >
                    这个崇祯太过极端
                  </a>
                </strong>
                <span className="rec" target="_blank">
                  大明
                </span>
              </li>
              <li className="str4" data-rid="7">
                <a
                  className="channel"
                  href="//www.qidian.com/zhutianwuxian/"
                  data-eid="qd_A112"
                  target="_blank"
                >
                  <em>「</em>诸天无限<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045207104/"
                    data-eid="qd_A113"
                    target="_blank"
                    data-bid="1045207104"
                    title="我的真实模拟游戏"
                  >
                    我的真实模拟游戏
                  </a>
                </strong>
                <span className="rec" target="_blank">
                  诸天
                </span>
              </li>
              <li className="str3" data-rid="8">
                <a
                  className="channel"
                  href="//www.qidian.com/2cy/"
                  data-eid="qd_A112"
                  target="_blank"
                >
                  <em>「</em>轻小说<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045148195/"
                    data-eid="qd_A113"
                    target="_blank"
                    data-bid="1045148195"
                    title="我拐跑了星穹列车"
                  >
                    我拐跑了星穹列车
                  </a>
                </strong>
                <span className="rec" target="_blank">
                  无限流
                </span>
              </li>
              <li className="" data-rid="9">
                <a
                  className="channel"
                  href="//www.qidian.com/xuanhuan/"
                  data-eid="qd_A112"
                  target="_blank"
                >
                  <em>「</em>玄幻<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045335204/"
                    data-eid="qd_A113"
                    target="_blank"
                    data-bid="1045335204"
                    title="至圣先师他太稳重了"
                  >
                    至圣先师他太稳重了
                  </a>
                </strong>
                <span className="rec" target="_blank">
                  大神
                </span>
              </li>
              <li className="" data-rid="10">
                <a
                  className="channel"
                  href="//www.qidian.com/qihuan/"
                  data-eid="qd_A112"
                  target="_blank"
                >
                  <em>「</em>奇幻<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045339766/"
                    data-eid="qd_A113"
                    target="_blank"
                    data-bid="1045339766"
                    title="我的设定在你之上！"
                  >
                    我的设定在你之上！
                  </a>
                </strong>
                <span className="rec" target="_blank">
                  神秘学
                </span>
              </li>
              <li className="" data-rid="11">
                <a
                  className="channel"
                  href="//www.qidian.com/lishi/"
                  data-eid="qd_A112"
                  target="_blank"
                >
                  <em>「</em>历史<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045113410/"
                    data-eid="qd_A113"
                    target="_blank"
                    data-bid="1045113410"
                    title="朱元璋的官，狗都不当"
                  >
                    朱元璋的官，狗都不当
                  </a>
                </strong>
                <span className="rec" target="_blank">
                  大明
                </span>
              </li>
              <li className="" data-rid="12">
                <a
                  className="channel"
                  href="//www.qidian.com/xuanhuan/"
                  data-eid="qd_A112"
                  target="_blank"
                >
                  <em>「</em>玄幻<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045255629/"
                    data-eid="qd_A113"
                    target="_blank"
                    data-bid="1045255629"
                    title="我的功法都太有主见了"
                  >
                    我的功法都太有主见了
                  </a>
                </strong>
                <span className="rec" target="_blank">
                  爽文
                </span>
              </li>
              <li className="" data-rid="13">
                <a
                  className="channel"
                  href="//www.qidian.com/youxi/"
                  data-eid="qd_A112"
                  target="_blank"
                >
                  <em>「</em>游戏<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045175277/"
                    data-eid="qd_A113"
                    target="_blank"
                    data-bid="1045175277"
                    title="赛博朋克里的锻体独狼"
                  >
                    赛博朋克里的锻体独狼
                  </a>
                </strong>
                <span className="rec" target="_blank">
                  赛博
                </span>
              </li>
              <li className="" data-rid="14">
                <a
                  className="channel"
                  href="//www.qidian.com/xianxia/"
                  data-eid="qd_A112"
                  target="_blank"
                >
                  <em>「</em>仙侠<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045199663/"
                    data-eid="qd_A113"
                    target="_blank"
                    data-bid="1045199663"
                    title="哪有啥祖宗，都是我编的"
                  >
                    哪有啥祖宗，都是我编的
                  </a>
                </strong>
                <span className="rec" target="_blank">
                  仙侠
                </span>
              </li>
              <li className="" data-rid="15">
                <a
                  className="channel"
                  href="//www.qidian.com/lishi/"
                  data-eid="qd_A112"
                  target="_blank"
                >
                  <em>「</em>历史<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045279264/"
                    data-eid="qd_A113"
                    target="_blank"
                    data-bid="1045279264"
                    title="文豪1879：独行法兰西"
                  >
                    文豪1879：独行法兰西
                  </a>
                </strong>
                <span className="rec" target="_blank">
                  文豪
                </span>
              </li>
              <li className="" data-rid="16">
                <a
                  className="channel"
                  href="//www.qidian.com/lishi/"
                  data-eid="qd_A112"
                  target="_blank"
                >
                  <em>「</em>历史<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045205204/"
                    data-eid="qd_A113"
                    target="_blank"
                    data-bid="1045205204"
                    title="子不类父？爱你老爹，玄武门见！"
                  >
                    子不类父？爱你老爹，玄武门见！
                  </a>
                </strong>
                <span className="rec" target="_blank">
                  戾太子
                </span>
              </li>
              <li className="" data-rid="17">
                <a
                  className="channel"
                  href="//www.qidian.com/xuanhuan/"
                  data-eid="qd_A112"
                  target="_blank"
                >
                  <em>「</em>玄幻<em>」</em>
                </a>
                <strong>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045255548/"
                    data-eid="qd_A113"
                    target="_blank"
                    data-bid="1045255548"
                    title="我的转生不对劲"
                  >
                    我的转生不对劲
                  </a>
                </strong>
                <span className="rec" target="_blank">
                  转生
                </span>
              </li>
              <li>
                <a
                  className="channel"
                  href="http://game.qidian.com"
                  target="_blank"
                  data-eid="qd_A115"
                >
                  <em>「</em>页游<em>」</em>
                </a>
                <a
                  className="name"
                  href="https://game.qidian.com/CpGameHome/Ad/directLogin/name/mhjh/way/1?qd_game_key=-9&amp;qd_dd_p1=150902"
                  target="_blank"
                  data-eid="qd_A115"
                  data-qd_dd_p1="1"
                >
                  侠义江湖，梦回千年
                </a>
                <span className="rec">广告</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="banner-wrap box-center mb30" id="banner-two" data-l1="31">
        <a
          href="https://game.qidian.com/CpGameHome/Ad/directLogin/name/wcbz1/way/1?qd_game_key=wcbz1200x100s.jpg&amp;qd_dd_p1=150880"
          target="_blank"
          data-eid="qd_A116"
          data-qd_dd_p1="1"
          style="display: inline;"
        >
          <img
            src="https://gameapp-1252317822.file.myqcloud.com/yuewen/game/images/75d8dbd4c9e75b90cd15952159f3e7f5.jpg"
            alt="王城霸主"
          />
          <span className="op-tag"></span>
        </a>
        <a
          href="javascript:"
          target="_blank"
          data-eid="qd_A116"
          data-qd_dd_p1="1"
        >
          <span className="op-tag"></span>
        </a>
      </div>

      <div className="rank-wrap box-center mb20" data-l1="11">
        <div id="numero3">
          <div id="rank-list-row" className="rank-list-row cf mb20">
            <div className="rank-list" data-l2="1">
              <h3 className="wrap-title lang">
                <a href="https://www.qidian.com/rank/yuepiao/" target="_blank">
                  月票榜<i>·</i>VIP新作
                </a>
                <a
                  className="more"
                  href="//www.qidian.com/rank/yuepiao/chn0/"
                  data-eid="qd_A118"
                  rel="nofollow"
                  target="_blank"
                >
                  更多<em className="iconfont"> </em>
                </a>
              </h3>
              <div className="book-list">
                <ul>
                  <li className="unfold" data-rid="1">
                    <div className="book-wrap cf">
                      <div className="book-info fl">
                        <h3>NO.1</h3>
                        <h2>
                          <a
                            href="//www.qidian.com/book/1044900108/"
                            target="_blank"
                            data-eid="qd_A117"
                            data-bid="1044900108"
                          >
                            神明调查报告
                          </a>
                        </h2>
                        <p className="digital">
                          <em>18418</em>月票
                        </p>
                        <p className="author">
                          <a
                            className="type"
                            href="//www.qidian.com/kehuan/"
                            target="_blank"
                          >
                            科幻
                          </a>
                          <i>·</i>
                          <a
                            className="writer"
                            href="//my.qidian.com/author/4152773/"
                            target="_blank"
                          >
                            黑山老鬼
                          </a>
                        </p>
                      </div>
                      <div className="book-cover">
                        <a
                          className="link"
                          href="//www.qidian.com/book/1044900108/"
                          data-eid="qd_A117"
                          target="_blank"
                          data-bid="1044900108"
                        >
                          <img
                            src="//bookcover.yuewen.com/qdbimg/349573/1044900108/90.webp"
                            alt="神明调查报告"
                          />
                        </a>
                        <span></span>
                      </div>
                    </div>
                  </li>
                  <li data-rid="2">
                    <div className="num-box">
                      <span className="num2">2</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044818845/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1044818845"
                      >
                        1984：从破产川菜馆开始
                      </a>
                      <i className="total">15416</i>
                    </div>
                  </li>
                  <li data-rid="3">
                    <div className="num-box">
                      <span className="num3">3</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044839471/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1044839471"
                      >
                        真君驾到
                      </a>
                      <i className="total">15212</i>
                    </div>
                  </li>
                  <li data-rid="4">
                    <div className="num-box">
                      <span className="num4">4</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044988737/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1044988737"
                      >
                        说好体验人生，仙子你怎么成真了
                      </a>
                      <i className="total">13036</i>
                    </div>
                  </li>
                  <li data-rid="5">
                    <div className="num-box">
                      <span className="num5">5</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044330281/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1044330281"
                      >
                        远山破阵曲
                      </a>
                      <i className="total">12470</i>
                    </div>
                  </li>
                  <li data-rid="6">
                    <div className="num-box">
                      <span className="num6">6</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045018157/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045018157"
                      >
                        亡灵法师，召唤055什么鬼？
                      </a>
                      <i className="total">12469</i>
                    </div>
                  </li>
                  <li data-rid="7">
                    <div className="num-box">
                      <span className="num7">7</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044930090/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1044930090"
                      >
                        美利坚打猎：从荒野独居开始
                      </a>
                      <i className="total">9406</i>
                    </div>
                  </li>
                  <li data-rid="8">
                    <div className="num-box">
                      <span className="num8">8</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045033637/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045033637"
                      >
                        重生的我没有梦想
                      </a>
                      <i className="total">8905</i>
                    </div>
                  </li>
                  <li data-rid="9">
                    <div className="num-box">
                      <span className="num9">9</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044920002/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1044920002"
                      >
                        废土边境检查官
                      </a>
                      <i className="total">8102</i>
                    </div>
                  </li>
                  <li data-rid="10">
                    <div className="num-box">
                      <span className="num10">10</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044921148/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1044921148"
                      >
                        战地牧师日记
                      </a>
                      <i className="total">7277</i>
                    </div>
                  </li>
                  <li data-rid="11">
                    <div className="num-box">
                      <span className="num11">11</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045003390/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045003390"
                      >
                        苟在武道世界成圣
                      </a>
                      <i className="total">6789</i>
                    </div>
                  </li>
                  <li data-rid="12">
                    <div className="num-box">
                      <span className="num12">12</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044334449/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1044334449"
                      >
                        仙道尽头
                      </a>
                      <i className="total">6608</i>
                    </div>
                  </li>
                  <li data-rid="13">
                    <div className="num-box">
                      <span className="num13">13</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045267415/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045267415"
                      >
                        漫威：开局觉醒小宇宙
                      </a>
                      <i className="total">6071</i>
                    </div>
                  </li>
                  <li data-rid="14">
                    <div className="num-box">
                      <span className="num14">14</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045057570/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045057570"
                      >
                        伊塔纪元
                      </a>
                      <i className="total">6047</i>
                    </div>
                  </li>
                  <li data-rid="15">
                    <div className="num-box">
                      <span className="num15">15</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044420615/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1044420615"
                      >
                        我一个三金导演十项全能很合理吧
                      </a>
                      <i className="total">5689</i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rank-list sort-list" data-l2="2">
              <h3 className="wrap-title lang">
                <a href="https://www.qidian.com/rank/hotsales/" target="_blank">
                  畅销榜
                </a>
                <a
                  className="more"
                  href="//www.qidian.com/rank/hotsales/"
                  data-eid="qd_A118"
                  rel="nofollow"
                  target="_blank"
                >
                  更多<em className="iconfont"> </em>
                </a>
              </h3>
              <div className="book-list">
                <ul>
                  <li className="unfold" data-rid="1">
                    <div className="book-wrap cf">
                      <div className="book-info fl">
                        <h3>NO.1</h3>
                        <h2>
                          <a
                            href="//www.qidian.com/book/1041637443/"
                            target="_blank"
                            data-eid="qd_A117"
                            data-bid="1041637443"
                          >
                            捞尸人
                          </a>
                        </h2>
                        <p className="digital f16">销量冠军</p>
                        <p className="author">
                          <a
                            className="type"
                            href="//www.qidian.com/dushi/"
                            target="_blank"
                          >
                            都市
                          </a>
                          <i>·</i>
                          <a
                            className="writer"
                            href="//my.qidian.com/author/3780268/"
                            target="_blank"
                          >
                            纯洁滴小龙
                          </a>
                        </p>
                      </div>
                      <div className="book-cover">
                        <a
                          className="link"
                          href="//www.qidian.com/book/1041637443/"
                          data-eid="qd_A117"
                          target="_blank"
                          data-bid="1041637443"
                        >
                          <img
                            src="//bookcover.yuewen.com/qdbimg/349573/1041637443/90.webp"
                            alt="捞尸人"
                          />
                        </a>
                        <span></span>
                      </div>
                    </div>
                  </li>
                  <li data-rid="2">
                    <div className="num-box">
                      <span className="num2">2</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1043182343/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1043182343"
                      >
                        苟在初圣魔门当人材
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="3">
                    <div className="num-box">
                      <span className="num3">3</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1042256511/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1042256511"
                      >
                        没钱修什么仙？
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="4">
                    <div className="num-box">
                      <span className="num4">4</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1040765595/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1040765595"
                      >
                        夜无疆
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="5">
                    <div className="num-box">
                      <span className="num5">5</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1010868264/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1010868264"
                      >
                        诡秘之主
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="6">
                    <div className="num-box">
                      <span className="num6">6</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1035420986/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1035420986"
                      >
                        玄鉴仙族
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="7">
                    <div className="num-box">
                      <span className="num7">7</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1038307656/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1038307656"
                      >
                        从斩妖除魔开始长生不死
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="8">
                    <div className="num-box">
                      <span className="num8">8</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1033014772/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1033014772"
                      >
                        青山
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="9">
                    <div className="num-box">
                      <span className="num9">9</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1043632678/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1043632678"
                      >
                        剑出大唐
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="10">
                    <div className="num-box">
                      <span className="num10">10</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1039391177/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1039391177"
                      >
                        吞噬星空2起源大陆
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="11">
                    <div className="num-box">
                      <span className="num11">11</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1038504669/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1038504669"
                      >
                        都重生了谁考公务员啊
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="12">
                    <div className="num-box">
                      <span className="num12">12</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1038440253/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1038440253"
                      >
                        太虚至尊
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="13">
                    <div className="num-box">
                      <span className="num13">13</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/107580/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="107580"
                      >
                        凡人修仙传
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="14">
                    <div className="num-box">
                      <span className="num14">14</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1042108416/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1042108416"
                      >
                        元始法则
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="15">
                    <div className="num-box">
                      <span className="num15">15</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1042464636/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1042464636"
                      >
                        我的化身正在成为最终BOSS
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rank-list sort-list" data-l2="3">
              <h3 className="wrap-title lang">
                <a href="https://www.qidian.com/rank/newfans/" target="_blank">
                  书友榜
                </a>
                <a
                  className="more"
                  href="//www.qidian.com/rank/newfans/"
                  rel="nofollow"
                  target="_blank"
                  data-eid="qd_A118"
                >
                  更多<em className="iconfont"> </em>
                </a>
              </h3>
              <div className="book-list">
                <ul>
                  <li className="unfold" data-rid="1">
                    <div className="book-wrap cf">
                      <div className="book-info fl">
                        <h3>NO.1</h3>
                        <h2>
                          <a
                            href="//www.qidian.com/book/1043182343/"
                            target="_blank"
                            data-eid="qd_A117"
                            data-bid="1043182343"
                          >
                            苟在初圣魔门当人材
                          </a>
                        </h2>
                        <p className="digital f16">增长最快</p>
                        <p className="author">
                          <a
                            className="type"
                            href="//www.qidian.com/xuanhuan/"
                            target="_blank"
                          >
                            玄幻
                          </a>
                          <i>·</i>
                          <a
                            className="writer"
                            href="//my.qidian.com/author/433525229/"
                            target="_blank"
                          >
                            鹤守月满池
                          </a>
                        </p>
                      </div>
                      <div className="book-cover">
                        <a
                          className="link"
                          href="//www.qidian.com/book/1043182343/"
                          data-eid="qd_A117"
                          target="_blank"
                          data-bid="1043182343"
                        >
                          <img
                            src="//bookcover.yuewen.com/qdbimg/349573/1043182343/90.webp"
                            alt="苟在初圣魔门当人材"
                          />
                        </a>
                        <span></span>
                      </div>
                    </div>
                  </li>
                  <li data-rid="2">
                    <div className="num-box">
                      <span className="num2">2</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045267415/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045267415"
                      >
                        漫威：开局觉醒小宇宙
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="3">
                    <div className="num-box">
                      <span className="num3">3</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1042256511/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1042256511"
                      >
                        没钱修什么仙？
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="4">
                    <div className="num-box">
                      <span className="num4">4</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1041637443/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1041637443"
                      >
                        捞尸人
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="5">
                    <div className="num-box">
                      <span className="num5">5</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045003390/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045003390"
                      >
                        苟在武道世界成圣
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="6">
                    <div className="num-box">
                      <span className="num6">6</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1043748975/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1043748975"
                      >
                        山河稷
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="7">
                    <div className="num-box">
                      <span className="num7">7</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1038504669/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1038504669"
                      >
                        都重生了谁考公务员啊
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="8">
                    <div className="num-box">
                      <span className="num8">8</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044581232/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1044581232"
                      >
                        我略微出手，就是系统的极限
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="9">
                    <div className="num-box">
                      <span className="num9">9</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045018157/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045018157"
                      >
                        亡灵法师，召唤055什么鬼？
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="10">
                    <div className="num-box">
                      <span className="num10">10</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044334449/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1044334449"
                      >
                        仙道尽头
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="11">
                    <div className="num-box">
                      <span className="num11">11</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044900108/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1044900108"
                      >
                        神明调查报告
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="12">
                    <div className="num-box">
                      <span className="num12">12</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044155617/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1044155617"
                      >
                        大明世家五百年
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="13">
                    <div className="num-box">
                      <span className="num13">13</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1042464636/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1042464636"
                      >
                        我的化身正在成为最终BOSS
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="14">
                    <div className="num-box">
                      <span className="num14">14</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1043632678/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1043632678"
                      >
                        剑出大唐
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="15">
                    <div className="num-box">
                      <span className="num15">15</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1010868264/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1010868264"
                      >
                        诡秘之主
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rank-list sort-list" data-l2="4">
              <h3 className="wrap-title lang">
                <a
                  href="https://www.qidian.com/rank/readindex/"
                  target="_blank"
                >
                  阅读指数榜
                </a>
                <a
                  className="more"
                  href="//www.qidian.com/rank/readindex/"
                  rel="nofollow"
                  target="_blank"
                  data-eid="qd_A118"
                >
                  更多<em className="iconfont"> </em>
                </a>
              </h3>
              <div className="book-list">
                <ul>
                  <li className="unfold" data-rid="1">
                    <div className="book-wrap cf">
                      <div className="book-info fl">
                        <h3>NO.1</h3>
                        <h2>
                          <a
                            href="//www.qidian.com/book/1043182343/"
                            target="_blank"
                            data-eid="qd_A117"
                            data-bid="1043182343"
                          >
                            苟在初圣魔门当人材
                          </a>
                        </h2>
                        <p className="digital f16">本周最强</p>
                        <p className="author">
                          <a
                            className="type"
                            href="//www.qidian.com/xuanhuan/"
                            target="_blank"
                          >
                            玄幻
                          </a>
                          <i>·</i>
                          <a
                            className="writer"
                            href="//my.qidian.com/author/433525229/"
                            target="_blank"
                          >
                            鹤守月满池
                          </a>
                        </p>
                      </div>
                      <div className="book-cover">
                        <a
                          className="link"
                          href="//www.qidian.com/book/1043182343/"
                          target="_blank"
                          data-eid="qd_A117"
                          data-bid="1043182343"
                        >
                          <img
                            src="//bookcover.yuewen.com/qdbimg/349573/1043182343/90.webp"
                            alt="苟在初圣魔门当人材"
                          />
                        </a>
                        <span></span>
                      </div>
                    </div>
                  </li>
                  <li data-rid="2">
                    <div className="num-box">
                      <span className="num2">2</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1041637443/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1041637443"
                      >
                        捞尸人
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="3">
                    <div className="num-box">
                      <span className="num3">3</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1042256511/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1042256511"
                      >
                        没钱修什么仙？
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="4">
                    <div className="num-box">
                      <span className="num4">4</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1010868264/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1010868264"
                      >
                        诡秘之主
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="5">
                    <div className="num-box">
                      <span className="num5">5</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1035420986/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1035420986"
                      >
                        玄鉴仙族
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="6">
                    <div className="num-box">
                      <span className="num6">6</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1040765595/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1040765595"
                      >
                        夜无疆
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="7">
                    <div className="num-box">
                      <span className="num7">7</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1043632678/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1043632678"
                      >
                        剑出大唐
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="8">
                    <div className="num-box">
                      <span className="num8">8</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1043748975/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1043748975"
                      >
                        山河稷
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="9">
                    <div className="num-box">
                      <span className="num9">9</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1042464636/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1042464636"
                      >
                        我的化身正在成为最终BOSS
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="10">
                    <div className="num-box">
                      <span className="num10">10</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1041604040/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1041604040"
                      >
                        异度旅社
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="11">
                    <div className="num-box">
                      <span className="num11">11</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1038504669/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1038504669"
                      >
                        都重生了谁考公务员啊
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="12">
                    <div className="num-box">
                      <span className="num12">12</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044050715/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1044050715"
                      >
                        这个地下城长蘑菇了
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="13">
                    <div className="num-box">
                      <span className="num13">13</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1038307656/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1038307656"
                      >
                        从斩妖除魔开始长生不死
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="14">
                    <div className="num-box">
                      <span className="num14">14</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1033014772/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1033014772"
                      >
                        青山
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="15">
                    <div className="num-box">
                      <span className="num15">15</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1039391177/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1039391177"
                      >
                        吞噬星空2起源大陆
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rank-list sort-list mr0" data-l2="5">
              <h3 className="wrap-title lang">
                <a
                  href="https://www.qidian.com/rank/signnewbook/"
                  target="_blank"
                >
                  签约作者新书榜
                </a>
                <a
                  className="more"
                  href="//www.qidian.com/rank/signnewbook/"
                  rel="nofollow"
                  target="_blank"
                  data-eid="qd_A118"
                >
                  更多<em className="iconfont"> </em>
                </a>
              </h3>
              <div className="book-list">
                <ul>
                  <li className="unfold" data-rid="1">
                    <div className="book-wrap cf">
                      <div className="book-info fl">
                        <h3>NO.1</h3>
                        <h2>
                          <a
                            href="//www.qidian.com/book/1045165156/"
                            target="_blank"
                            data-eid="qd_A117"
                            data-bid="1045165156"
                          >
                            借剑
                          </a>
                        </h2>
                        <p className="digital f16">本周最强</p>
                        <p className="author">
                          <a
                            className="type"
                            href="//www.qidian.com/xianxia/"
                            target="_blank"
                          >
                            仙侠
                          </a>
                          <i>·</i>
                          <a
                            className="writer"
                            href="//my.qidian.com/author/400690283/"
                            target="_blank"
                          >
                            幼儿园一把手
                          </a>
                        </p>
                      </div>
                      <div className="book-cover">
                        <a
                          className="link"
                          href="//www.qidian.com/book/1045165156/"
                          target="_blank"
                          data-eid="qd_A117"
                          data-bid="1045165156"
                        >
                          <img
                            src="//bookcover.yuewen.com/qdbimg/349573/1045165156/90.webp"
                            alt="借剑"
                          />
                        </a>
                        <span></span>
                      </div>
                    </div>
                  </li>
                  <li data-rid="2">
                    <div className="num-box">
                      <span className="num2">2</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045354296/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045354296"
                      >
                        神的模仿犯
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="3">
                    <div className="num-box">
                      <span className="num3">3</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045391192/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045391192"
                      >
                        俗仙
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="4">
                    <div className="num-box">
                      <span className="num4">4</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044394624/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1044394624"
                      >
                        状元郎
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="5">
                    <div className="num-box">
                      <span className="num5">5</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045429237/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045429237"
                      >
                        今天也在努力做魔头
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="6">
                    <div className="num-box">
                      <span className="num6">6</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045435367/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045435367"
                      >
                        在天魔世界的摆烂生活
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="7">
                    <div className="num-box">
                      <span className="num7">7</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045425297/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045425297"
                      >
                        激情年代：开局成为七级工程师
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="8">
                    <div className="num-box">
                      <span className="num8">8</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045335204/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045335204"
                      >
                        至圣先师他太稳重了
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="9">
                    <div className="num-box">
                      <span className="num9">9</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045526336/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045526336"
                      >
                        大哥说我天下无敌
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="10">
                    <div className="num-box">
                      <span className="num10">10</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045347625/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045347625"
                      >
                        法兰西之父
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="11">
                    <div className="num-box">
                      <span className="num11">11</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045175277/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045175277"
                      >
                        赛博朋克里的锻体独狼
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="12">
                    <div className="num-box">
                      <span className="num12">12</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1042587506/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1042587506"
                      >
                        美食情报王
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="13">
                    <div className="num-box">
                      <span className="num13">13</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045332226/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045332226"
                      >
                        我的未来每周刷新
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="14">
                    <div className="num-box">
                      <span className="num14">14</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045457037/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045457037"
                      >
                        贫道要考大学
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                  <li data-rid="15">
                    <div className="num-box">
                      <span className="num15">15</span>
                    </div>
                    <div className="name-box">
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045415932/"
                        target="_blank"
                        data-eid="qd_A117"
                        data-bid="1045415932"
                      >
                        红楼：我能升级词条！
                      </a>
                      <span className="iconfont"></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a
            className="load-more"
            id="load-more"
            href="javascript:"
            data-eid="qd_A119"
          >
            <em>展开更多</em>
            <span id="btn-more">
              <i></i>
            </span>
          </a>
        </div>
      </div>

      <div className="banner-wrap box-center mb40" id="banner3" data-l1="32">
        <a
          href="https://ataru.qidian.com/noah/299369474"
          target="_blank"
          data-eid="qd_A120"
          style="display: inline;"
        >
          <img
            src="//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/38de1e5fed7675ef04fc8b358d3041bb.jpg"
            ref="nofollow"
          />
          <span className="op-tag"></span>
        </a>
        <a href="javascript:" target="_blank" data-eid="qd_A120">
          <span className="op-tag"></span>
        </a>
      </div>

      <div className="hot-work-wrap box-center mb40 cf" data-l1="12">
        <div className="hot-work-box fl" data-l2="1">
          <h3 className="wrap-title lang">热门作品</h3>
          <div className="hot-work-info">
            <div className="hot-work-slide">
              <div className="three-silde-wrap">
                <ul
                  id="left-slide-01"
                  className="roundabout roundabout-holder"
                  style="display: block; padding: 0px; position: relative;"
                >
                  <li
                    className="book1 roundabout-moveable-item roundabout-in-focus"
                    data-id="1"
                    data-type="1"
                    data-width="93px"
                    data-height="100%"
                    data-rid="1"
                    style="position: absolute; left: 18px; top: -13px; width: 84px; height: 112px; opacity: 1; z-index: 280; font-size: 16px;"
                  >
                    <a
                      href="//www.qidian.com/book/1035682022/"
                      data-eid="qd_A121"
                      data-bid="1035682022"
                      target="_blank"
                    >
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                        data-original="//bookcover.yuewen.com/qdbimg/349573/1035682022/90.webp"
                        alt="修真世界：从挨雷劈开始"
                      />
                    </a>
                  </li>
                  <li
                    className="book2 roundabout-moveable-item"
                    data-id="2"
                    data-type="1"
                    data-width="93px"
                    data-height="100%"
                    data-rid="2"
                    style="position: absolute; left: 75px; top: -1px; width: 65.1px; height: 86.8px; opacity: 0.85; z-index: 145; font-size: 12.4px;"
                  >
                    <a
                      href="//www.qidian.com/book/1045061319/"
                      data-eid="qd_A121"
                      data-bid="1045061319"
                      target="_blank"
                    >
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                        data-original="//bookcover.yuewen.com/qdbimg/349573/1045061319/90.webp"
                        alt="激荡年代：开局夺回自家的地！"
                      />
                    </a>
                  </li>
                  <li
                    className="book3 roundabout-moveable-item"
                    data-id="3"
                    data-type="1"
                    data-width="93px"
                    data-height="100%"
                    data-rid="3"
                    style="position: absolute; left: -20px; top: -1px; width: 65.1px; height: 86.8px; opacity: 0.85; z-index: 145; font-size: 12.4px;"
                  >
                    <a
                      href="//www.qidian.com/book/1044846364/"
                      data-eid="qd_A121"
                      data-bid="1044846364"
                      target="_blank"
                    >
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                        data-original="//bookcover.yuewen.com/qdbimg/349573/1044846364/90.webp"
                        alt="万法主"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="info-text">
                <dl>
                  <dd className="hidden" data-rid="1" style="">
                    <h3>
                      <a
                        href="//www.qidian.com/book/1035682022/"
                        target="_blank"
                        data-eid="qd_A122"
                        data-bid="1035682022"
                      >
                        修真世界：从挨雷劈开始
                      </a>
                    </h3>
                    <p className="author">
                      <a
                        href="//my.qidian.com/author/431774504/"
                        data-eid="qd_A123"
                        target="_blank"
                      >
                        步人甲
                      </a>
                    </p>
                    <p className="total">
                      <b>5,778,986</b>
                      <span>人气</span>
                    </p>
                    <p className="intro"> 可苟在修真世界，怎么就这么难。 </p>
                    <a
                      className="read-btn"
                      href="//www.qidian.com/book/1035682022/"
                      target="_blank"
                      data-eid="qd_A124"
                      data-bid="1035682022"
                    >
                      书籍详情
                    </a>
                  </dd>
                  <dd className="hidden" data-rid="2" style="display: none;">
                    <h3>
                      <a
                        href="//www.qidian.com/book/1045061319/"
                        target="_blank"
                        data-eid="qd_A122"
                        data-bid="1045061319"
                      >
                        激荡年代：开局夺回自家的地！
                      </a>
                    </h3>
                    <p className="author">
                      <a
                        href="//my.qidian.com/author/12537294/"
                        data-eid="qd_A123"
                        target="_blank"
                      >
                        明曜天火
                      </a>
                    </p>
                    <p className="total">
                      <b>50,004</b>
                      <span>人气</span>
                    </p>
                    <p className="intro"> 重生过去，先把自家的土地夺回来！ </p>
                    <a
                      className="read-btn"
                      href="//www.qidian.com/book/1045061319/"
                      target="_blank"
                      data-eid="qd_A124"
                      data-bid="1045061319"
                    >
                      书籍详情
                    </a>
                  </dd>
                  <dd className="hidden" data-rid="3" style="display: none;">
                    <h3>
                      <a
                        href="//www.qidian.com/book/1044846364/"
                        target="_blank"
                        data-eid="qd_A122"
                        data-bid="1044846364"
                      >
                        万法主
                      </a>
                    </h3>
                    <p className="author">
                      <a
                        href="//my.qidian.com/author/433262911/"
                        data-eid="qd_A123"
                        target="_blank"
                      >
                        桥下蓝花
                      </a>
                    </p>
                    <p className="total">
                      <b>127,677</b>
                      <span>人气</span>
                    </p>
                    <p className="intro"> 何以天下无人执万法而行？ </p>
                    <a
                      className="read-btn"
                      href="//www.qidian.com/book/1044846364/"
                      target="_blank"
                      data-eid="qd_A124"
                      data-bid="1044846364"
                    >
                      书籍详情
                    </a>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="hot-classify-wrap fl" data-l2="2">
          <ul>
            <li data-l3="1">
              <h3 className="wrap-title lang">
                玄幻<i>·</i>奇幻<b className="icon-tag xhqh"></b>
              </h3>
              <dl className="hot-book-list">
                <dd data-rid="1">
                  <a
                    className="classify"
                    href="//www.qidian.com/xuanhuan/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>玄幻<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045419641/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045419641"
                    title="徒手碎恒星，你管这叫拾荒者？"
                  >
                    徒手碎恒星，你管这叫拾荒者？
                  </a>
                </dd>
                <dd data-rid="2">
                  <a
                    className="classify"
                    href="//www.qidian.com/xuanhuan/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>玄幻<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045345742/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045345742"
                    title="江湖都是前女友？"
                  >
                    江湖都是前女友？
                  </a>
                </dd>
                <dd data-rid="3">
                  <a
                    className="classify"
                    href="//www.qidian.com/xuanhuan/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>玄幻<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045338276/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045338276"
                    title="祥子修仙记"
                  >
                    祥子修仙记
                  </a>
                </dd>
                <dd data-rid="4">
                  <a
                    className="classify"
                    href="//www.qidian.com/xuanhuan/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>玄幻<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045336850/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045336850"
                    title="镜主"
                  >
                    镜主
                  </a>
                </dd>
                <dd data-rid="5">
                  <a
                    className="classify"
                    href="//www.qidian.com/qihuan/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>奇幻<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045393401/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045393401"
                    title="让你沙漠种田，你种成绿洲奇迹"
                  >
                    让你沙漠种田，你种成绿洲奇迹
                  </a>
                </dd>
              </dl>
            </li>
            <li data-l3="2">
              <h3 className="wrap-title lang">
                武侠<i>·</i>仙侠<b className="icon-tag wxxx"></b>
              </h3>
              <dl className="hot-book-list">
                <dd data-rid="1">
                  <a
                    className="classify"
                    href="//www.qidian.com/xianxia/"
                    target="_blank"
                    data-eid="qd_A125"
                    data-bid="1045335273"
                  >
                    <em>「</em>仙侠<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045335273/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045335273"
                    title="每日一卦，从坊市散修到长生仙尊"
                  >
                    每日一卦，从坊市散修到长生仙尊
                  </a>
                </dd>
                <dd data-rid="2">
                  <a
                    className="classify"
                    href="//www.qidian.com/xianxia/"
                    target="_blank"
                    data-eid="qd_A125"
                    data-bid="1045429237"
                  >
                    <em>「</em>仙侠<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045429237/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045429237"
                    title="今天也在努力做魔头"
                  >
                    今天也在努力做魔头
                  </a>
                </dd>
                <dd data-rid="3">
                  <a
                    className="classify"
                    href="//www.qidian.com/xianxia/"
                    target="_blank"
                    data-eid="qd_A125"
                    data-bid="1045352617"
                  >
                    <em>「</em>仙侠<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045352617/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045352617"
                    title="从乱世开始，打造无上仙朝"
                  >
                    从乱世开始，打造无上仙朝
                  </a>
                </dd>
                <dd data-rid="4">
                  <a
                    className="classify"
                    href="//www.qidian.com/xianxia/"
                    target="_blank"
                    data-eid="qd_A125"
                    data-bid="1045468383"
                  >
                    <em>「</em>仙侠<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045468383/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045468383"
                    title="水元成神，终为天地山川主"
                  >
                    水元成神，终为天地山川主
                  </a>
                </dd>
                <dd data-rid="5">
                  <a
                    className="classify"
                    href="//www.qidian.com/wuxia/"
                    target="_blank"
                    data-eid="qd_A125"
                    data-bid="1045322129"
                  >
                    <em>「</em>武侠<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045322129/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045322129"
                    title="射雕：从镖人开始"
                  >
                    射雕：从镖人开始
                  </a>
                </dd>
              </dl>
            </li>
            <li data-l3="3">
              <h3 className="wrap-title lang">
                都市<i>·</i>现实<b className="icon-tag ds"></b>
              </h3>
              <dl className="hot-book-list">
                <dd data-rid="1">
                  <a
                    className="classify"
                    href="//www.qidian.com/dushi/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>都市<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045373936/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045373936"
                    title="重生香江：从糖水铺到实业帝国"
                  >
                    重生香江：从糖水铺到实业帝国
                  </a>
                </dd>
                <dd data-rid="2">
                  <a
                    className="classify"
                    href="//www.qidian.com/dushi/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>都市<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045422148/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045422148"
                    title="重生1958：我的随身空间"
                  >
                    重生1958：我的随身空间
                  </a>
                </dd>
                <dd data-rid="3">
                  <a
                    className="classify"
                    href="//www.qidian.com/dushi/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>都市<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045238369/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045238369"
                    title="刚准备高考，过气顶流逆袭什么鬼"
                  >
                    刚准备高考，过气顶流逆袭什么鬼
                  </a>
                </dd>
                <dd data-rid="4">
                  <a
                    className="classify"
                    href="//www.qidian.com/dushi/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>都市<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045290564/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045290564"
                    title="神豪：离婚当天觉醒宠妻系统"
                  >
                    神豪：离婚当天觉醒宠妻系统
                  </a>
                </dd>
                <dd data-rid="5">
                  <a
                    className="classify"
                    href="//www.qidian.com/xianshi/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>现实<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1043567427/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1043567427"
                    title="兼程1995"
                  >
                    兼程1995
                  </a>
                </dd>
              </dl>
            </li>
            <li className="mr0" data-l3="4">
              <h3 className="wrap-title lang">
                历史<i>·</i>军事<b className="icon-tag jsls"></b>
              </h3>
              <dl className="hot-book-list">
                <dd data-rid="1">
                  <a
                    className="classify"
                    href="//www.qidian.com/lishi/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>历史<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045440904/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045440904"
                    title="穿越朱由检，请大明赴死"
                  >
                    穿越朱由检，请大明赴死
                  </a>
                </dd>
                <dd data-rid="2">
                  <a
                    className="classify"
                    href="//www.qidian.com/lishi/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>历史<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045298698/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045298698"
                    title="让大明重新伟大"
                  >
                    让大明重新伟大
                  </a>
                </dd>
                <dd data-rid="3">
                  <a
                    className="classify"
                    href="//www.qidian.com/lishi/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>历史<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045468807/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045468807"
                    title="偷偷告诉你，我是大汉皇太孙"
                  >
                    偷偷告诉你，我是大汉皇太孙
                  </a>
                </dd>
                <dd data-rid="4">
                  <a
                    className="classify"
                    href="//www.qidian.com/lishi/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>历史<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045113410/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045113410"
                    title="朱元璋的官，狗都不当"
                  >
                    朱元璋的官，狗都不当
                  </a>
                </dd>
                <dd data-rid="5">
                  <a
                    className="classify"
                    href="//www.qidian.com/junshi/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>军事<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045389338/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045389338"
                    title="从粉碎敦刻尔克开始"
                  >
                    从粉碎敦刻尔克开始
                  </a>
                </dd>
              </dl>
            </li>
            <li data-l3="5">
              <h3 className="wrap-title lang">
                游戏<i>·</i>体育<b className="icon-tag yxjj"></b>
              </h3>
              <dl className="hot-book-list">
                <dd data-rid="1">
                  <a
                    className="classify"
                    href="//www.qidian.com/youxi/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>游戏<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045175277/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045175277"
                    title="赛博朋克里的锻体独狼"
                  >
                    赛博朋克里的锻体独狼
                  </a>
                </dd>
                <dd data-rid="2">
                  <a
                    className="classify"
                    href="//www.qidian.com/youxi/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>游戏<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045393192/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045393192"
                    title="让你宣传环保，切尔诺贝利什么鬼"
                  >
                    让你宣传环保，切尔诺贝利什么鬼
                  </a>
                </dd>
                <dd data-rid="3">
                  <a
                    className="classify"
                    href="//www.qidian.com/youxi/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>游戏<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045271157/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045271157"
                    title="不想当法爷的战士不是好狗头人！"
                  >
                    不想当法爷的战士不是好狗头人！
                  </a>
                </dd>
                <dd data-rid="4">
                  <a
                    className="classify"
                    href="//www.qidian.com/youxi/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>游戏<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045392155/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045392155"
                    title="荒野大镖客：亚瑟，不做亡命徒"
                  >
                    荒野大镖客：亚瑟，不做亡命徒
                  </a>
                </dd>
                <dd data-rid="5">
                  <a
                    className="classify"
                    href="//www.qidian.com/tiyu/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>体育<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045294510/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045294510"
                    title="NBA之绝对统治力"
                  >
                    NBA之绝对统治力
                  </a>
                </dd>
              </dl>
            </li>
            <li className="xyly" data-l3="6">
              <h3 className="wrap-title lang">
                科幻<i>·</i>悬疑<b className="icon-tag khly"></b>
              </h3>
              <dl className="hot-book-list">
                <dd className="long" data-rid="1">
                  <a
                    className="classify"
                    href="//www.qidian.com/zhutianwuxian/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>诸天无限<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045359078/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045359078"
                    title="吞噬星空，肝成宇宙最强"
                  >
                    吞噬星空，肝成宇宙最强
                  </a>
                </dd>
                <dd className="long" data-rid="2">
                  <a
                    className="classify"
                    href="//www.qidian.com/zhutianwuxian/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>诸天无限<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045207104/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045207104"
                    title="我的真实模拟游戏"
                  >
                    我的真实模拟游戏
                  </a>
                </dd>
                <dd className="long" data-rid="3">
                  <a
                    className="classify"
                    href="//www.qidian.com/kehuan/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>科幻<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045331135/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045331135"
                    title="末日游戏：我能获得双倍奖励"
                  >
                    末日游戏：我能获得双倍奖励
                  </a>
                </dd>
                <dd className="long" data-rid="4">
                  <a
                    className="classify"
                    href="//www.qidian.com/kehuan/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>科幻<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1044848292/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1044848292"
                    title="我的细胞宇宙进化论"
                  >
                    我的细胞宇宙进化论
                  </a>
                </dd>
                <dd className="long" data-rid="5">
                  <a
                    className="classify"
                    href="//www.qidian.com/lingyi/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>悬疑<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1040223815/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1040223815"
                    title="欢迎来到诡诞游戏"
                  >
                    欢迎来到诡诞游戏
                  </a>
                </dd>
              </dl>
            </li>
            <li className="erciyuan" data-l3="7">
              <h3 className="wrap-title lang">
                轻小说<b className="icon-tag ecy"></b>
              </h3>
              <dl className="hot-book-list">
                <dd data-rid="1">
                  <a
                    className="classify"
                    href="//www.qidian.com/2cy/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>轻小说<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1038802681/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1038802681"
                    title="史莱姆真仙"
                  >
                    史莱姆真仙
                  </a>
                </dd>
                <dd data-rid="2">
                  <a
                    className="classify"
                    href="//www.qidian.com/2cy/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>轻小说<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1044889491/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1044889491"
                    title="我制作的游戏副本正在征服异世界"
                  >
                    我制作的游戏副本正在征服异世界
                  </a>
                </dd>
                <dd data-rid="3">
                  <a
                    className="classify"
                    href="//www.qidian.com/2cy/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>轻小说<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1044674050/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1044674050"
                    title="我大海贼，搞圣杯战争！"
                  >
                    我大海贼，搞圣杯战争！
                  </a>
                </dd>
                <dd data-rid="4">
                  <a
                    className="classify"
                    href="//www.qidian.com/2cy/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>轻小说<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045388206/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045388206"
                    title="东京：从替太太背债开始"
                  >
                    东京：从替太太背债开始
                  </a>
                </dd>
                <dd data-rid="5">
                  <a
                    className="classify"
                    href="//www.qidian.com/2cy/"
                    data-eid="qd_A125"
                    target="_blank"
                  >
                    <em>「</em>轻小说<em>」</em>
                  </a>
                  <a
                    className="name"
                    href="//www.qidian.com/book/1045158023/"
                    target="_blank"
                    data-eid="qd_A126"
                    data-bid="1045158023"
                    title="摸奖术士"
                  >
                    摸奖术士
                  </a>
                </dd>
              </dl>
            </li>
            <li className="mr0" data-l3="8">
              <div className="book-wrap bd cf">
                <div className="book-info fl">
                  <span className="tag">都市生活</span>
                  <h4>
                    <a
                      href="//www.qidian.com/book/1039641055/"
                      target="_blank"
                      data-eid="qd_A127"
                      data-bid="1039641055"
                    >
                      从随心所欲开始神豪
                    </a>
                  </h4>
                  <p className="digital">
                    <em>3,046,091</em>人气
                  </p>
                  <p className="desc">从随心所欲开始神豪</p>
                </div>
                <div className="book-cover">
                  <a
                    className="link"
                    href="//www.qidian.com/book/1039641055/"
                    target="_blank"
                    data-eid="qd_A128"
                    data-bid="1039641055"
                  >
                    <img
                      src="//bookcover.yuewen.com/qdbimg/349573/1039641055/90.webp"
                      alt="从随心所欲开始神豪"
                    />
                  </a>
                  <span></span>
                </div>
              </div>
              <div className="book-wrap bd0 cf">
                <div className="book-info fl">
                  <span className="tag">古典仙侠</span>
                  <h4>
                    <a
                      href="//www.qidian.com/book/1044833504/"
                      target="_blank"
                      data-eid="qd_A127"
                      data-bid="1044833504"
                    >
                      两界：从蜀山开始修炼
                    </a>
                  </h4>
                  <p className="digital">
                    <em>159,635</em>人气
                  </p>
                  <p className="desc">两界：从蜀山开始修炼</p>
                </div>
                <div className="book-cover">
                  <a
                    className="link"
                    href="//www.qidian.com/book/1044833504/"
                    target="_blank"
                    data-eid="qd_A128"
                    data-bid="1044833504"
                  >
                    <img
                      src="//bookcover.yuewen.com/qdbimg/349573/1044833504/90.webp"
                      alt="两界：从蜀山开始修炼"
                    />
                  </a>
                  <span></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="new-rec-wrap box-center cf" data-l1="18">
        <div className="left-wrap fl">
          <h3 className="wrap-title lang">
            新书推荐<span>上周入库4809本</span>
          </h3>
          <div className="left-info fl" data-l2="1">
            <div className="slide-box">
              <ul
                id="left-slide-03"
                className="roundabout roundabout-holder"
                style="display: block; padding: 0px; position: relative;"
              >
                <li
                  className="book1 roundabout-moveable-item roundabout-in-focus"
                  data-id="1"
                  data-type="1"
                  data-width="93px"
                  data-height="100%"
                  data-rid="1"
                  style="position: absolute; left: 18px; top: -13px; width: 84px; height: 112px; opacity: 1; z-index: 280; font-size: 16px;"
                >
                  <a
                    href="//www.qidian.com/book/1045391174/"
                    data-eid="qd_A138"
                    data-bid="1045391174"
                    target="_blank"
                  >
                    <img
                      className="lazy"
                      src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                      data-original="//bookcover.yuewen.com/qdbimg/349573/1045391174/90.webp"
                      alt="我在上古做天帝"
                    />
                  </a>
                </li>
                <li
                  className="book2 roundabout-moveable-item"
                  data-id="2"
                  data-type="1"
                  data-width="93px"
                  data-height="100%"
                  data-rid="2"
                  style="position: absolute; left: 75px; top: -1px; width: 65.1px; height: 86.8px; opacity: 0.85; z-index: 145; font-size: 12.4px;"
                >
                  <a
                    href="//www.qidian.com/book/1045429237/"
                    data-eid="qd_A138"
                    data-bid="1045429237"
                    target="_blank"
                  >
                    <img
                      className="lazy"
                      src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                      data-original="//bookcover.yuewen.com/qdbimg/349573/1045429237/90.webp"
                      alt="今天也在努力做魔头"
                    />
                  </a>
                </li>
                <li
                  className="book3 roundabout-moveable-item"
                  data-id="3"
                  data-type="1"
                  data-width="93px"
                  data-height="100%"
                  data-rid="3"
                  style="position: absolute; left: -20px; top: -1px; width: 65.1px; height: 86.8px; opacity: 0.85; z-index: 145; font-size: 12.4px;"
                >
                  <a
                    href="//www.qidian.com/book/1045347625/"
                    data-eid="qd_A138"
                    data-bid="1045347625"
                    target="_blank"
                  >
                    <img
                      className="lazy"
                      src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                      data-original="//bookcover.yuewen.com/qdbimg/349573/1045347625/90.webp"
                      alt="法兰西之父"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="info-text">
              <dl>
                <dd data-rid="1" style="">
                  <h3>
                    <a
                      href="//www.qidian.com/book/1045391174/"
                      target="_blank"
                      data-eid="qd_A139"
                      data-bid="1045391174"
                    >
                      我在上古做天帝
                    </a>
                  </h3>
                  <p className="author">
                    <a
                      href="//my.qidian.com/author/4164086/"
                      data-eid="qd_A140"
                      target="_blank"
                    >
                      历史里吹吹风
                    </a>
                    <em>·</em>日更千字
                  </p>
                  <p className="total">
                    <b>20,532</b>
                    <span>人在追</span>
                  </p>
                  <p className="intro"> 我在上古做天帝 </p>
                  <a
                    className="read-btn"
                    href="//www.qidian.com/book/1045391174/"
                    target="_blank"
                    data-eid="qd_A141"
                    data-bid="1045391174"
                  >
                    书籍详情
                  </a>
                </dd>
                <dd data-rid="2" style="display: none;">
                  <h3>
                    <a
                      href="//www.qidian.com/book/1045429237/"
                      target="_blank"
                      data-eid="qd_A139"
                      data-bid="1045429237"
                    >
                      今天也在努力做魔头
                    </a>
                  </h3>
                  <p className="author">
                    <a
                      href="//my.qidian.com/author/4362276/"
                      data-eid="qd_A140"
                      target="_blank"
                    >
                      开荒
                    </a>
                    <em>·</em>日更千字
                  </p>
                  <p className="total">
                    <b>16,143</b>
                    <span>人在追</span>
                  </p>
                  <p className="intro"> 今天也在努力做魔头 </p>
                  <a
                    className="read-btn"
                    href="//www.qidian.com/book/1045429237/"
                    target="_blank"
                    data-eid="qd_A141"
                    data-bid="1045429237"
                  >
                    书籍详情
                  </a>
                </dd>
                <dd data-rid="3" style="display: none;">
                  <h3>
                    <a
                      href="//www.qidian.com/book/1045347625/"
                      target="_blank"
                      data-eid="qd_A139"
                      data-bid="1045347625"
                    >
                      法兰西之父
                    </a>
                  </h3>
                  <p className="author">
                    <a
                      href="//my.qidian.com/author/5092254/"
                      data-eid="qd_A140"
                      target="_blank"
                    >
                      青山铁杉
                    </a>
                    <em>·</em>日更千字
                  </p>
                  <p className="total">
                    <b>17,913</b>
                    <span>人在追</span>
                  </p>
                  <p className="intro"> 法兰西之父 </p>
                  <a
                    className="read-btn"
                    href="//www.qidian.com/book/1045347625/"
                    target="_blank"
                    data-eid="qd_A141"
                    data-bid="1045347625"
                  >
                    书籍详情
                  </a>
                </dd>
              </dl>
            </div>
          </div>
          <div className="center-book-list fl" data-l2="2">
            <div className="line line1"></div>
            <div className="line line2"></div>
            <ul>
              <li data-rid="1">
                <div className="book-img">
                  <a
                    href="//www.qidian.com/book/1045279139/"
                    target="_blank"
                    data-eid="qd_A142"
                    data-bid="1045279139"
                  >
                    <img
                      className="lazy"
                      src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                      data-original="//bookcover.yuewen.com/qdbimg/349573/1045279139/90.webp"
                      alt="开荒：逍遥山农"
                    />
                  </a>
                </div>
                <div className="book-info">
                  <h3>
                    <a
                      href="//www.qidian.com/book/1045279139/"
                      target="_blank"
                      data-eid="qd_A143"
                      data-bid="1045279139"
                      title="开荒：逍遥山农"
                    >
                      开荒：逍遥山农
                    </a>
                  </h3>
                  <p>
                    穿越王朝初年的边疆小山村，种地养殖，凭借现代知识勤劳努力获得更多田地，享受老婆孩子热炕头的乡村慢生活。
                    无系统，日常文。
                  </p>
                  <div className="state-box cf">
                    <span>日更5千+</span>
                    <i>架空历史</i>
                    <img src="//qdfepccdn.qidian.com/www.qidian.com/images/ico/user.png" />
                    <a
                      className="author"
                      href="//my.qidian.com/author/430742125/"
                      data-eid="qd_A144"
                      target="_blank"
                    >
                      一二32
                    </a>
                  </div>
                </div>
              </li>
              <li data-rid="2">
                <div className="book-img">
                  <a
                    href="//www.qidian.com/book/1045205204/"
                    target="_blank"
                    data-eid="qd_A142"
                    data-bid="1045205204"
                  >
                    <img
                      className="lazy"
                      src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                      data-original="//bookcover.yuewen.com/qdbimg/349573/1045205204/90.webp"
                      alt="子不类父？爱你老爹，玄武门见！"
                    />
                  </a>
                </div>
                <div className="book-info">
                  <h3>
                    <a
                      href="//www.qidian.com/book/1045205204/"
                      target="_blank"
                      data-eid="qd_A143"
                      data-bid="1045205204"
                      title="子不类父？爱你老爹，玄武门见！"
                    >
                      子不类父？爱你老爹，玄武门见！
                    </a>
                  </h3>
                  <p>戾太子VS千古一帝？ 刘据只是不想死，他有什么错？</p>
                  <div className="state-box cf">
                    <span>日更5千+</span>
                    <i>秦汉三国</i>
                    <img src="//qdfepccdn.qidian.com/www.qidian.com/images/ico/user.png" />
                    <a
                      className="author"
                      href="//my.qidian.com/author/433969675/"
                      data-eid="qd_A144"
                      target="_blank"
                    >
                      席挥毫
                    </a>
                  </div>
                </div>
              </li>
              <li data-rid="3">
                <div className="book-img">
                  <a
                    href="//www.qidian.com/book/1045437110/"
                    target="_blank"
                    data-eid="qd_A142"
                    data-bid="1045437110"
                  >
                    <img
                      className="lazy"
                      src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                      data-original="//bookcover.yuewen.com/qdbimg/349573/1045437110/90.webp"
                      alt="我在东汉假装皇帝"
                    />
                  </a>
                </div>
                <div className="book-info">
                  <h3>
                    <a
                      href="//www.qidian.com/book/1045437110/"
                      target="_blank"
                      data-eid="qd_A143"
                      data-bid="1045437110"
                      title="我在东汉假装皇帝"
                    >
                      我在东汉假装皇帝
                    </a>
                  </h3>
                  <p>
                    刘白一脚摔进了东汉末年。 饿晕的他，一句“我叫...刘辩。”
                    ——直接惊呆了诸侯大营。
                    看着跪了一地的诸侯谋士，再摸摸身上货真价实的剧组道具龙袍……
                    刘白懵了：等等，他们真信我是那个被董卓搞死的少年皇帝？
                    就连四世三公的袁绍，竟也激动跪拜：“臣救驾来迟！”
                    刘白嘴角一动，做了个大胆的决定。 这戏，得飙。
                    “袁公乃大汉忠良，朕心甚安！”
                    “凡军国大事，袁公所奏，朕无不应允！”
                    落魄天子人设？手到擒来！
                    开始觉得只要让袁绍觉得他是听话的“祥瑞”，小命就能苟住。
                    只是... 演皇帝活下去不难，可若演着演着...真把自己当皇帝了...
                    那这一切就得换个说法了 虚弱疲惫？ 那是落难帝王的凄惶！
                    强装镇定？ 那是天子的隐忍！ 真当影帝是白叫的？！
                  </p>
                  <div className="state-box cf">
                    <span>日更4千+</span>
                    <i>秦汉三国</i>
                    <img src="//qdfepccdn.qidian.com/www.qidian.com/images/ico/user.png" />
                    <a
                      className="author"
                      href="//my.qidian.com/author/432959203/"
                      data-eid="qd_A144"
                      target="_blank"
                    >
                      做梦都会笑lol
                    </a>
                  </div>
                </div>
              </li>
              <li data-rid="4">
                <div className="book-img">
                  <a
                    href="//www.qidian.com/book/1045052885/"
                    target="_blank"
                    data-eid="qd_A142"
                    data-bid="1045052885"
                  >
                    <img
                      className="lazy"
                      src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                      data-original="//bookcover.yuewen.com/qdbimg/349573/1045052885/90.webp"
                      alt="日本战国，从庶子到魔王"
                    />
                  </a>
                </div>
                <div className="book-info">
                  <h3>
                    <a
                      href="//www.qidian.com/book/1045052885/"
                      target="_blank"
                      data-eid="qd_A143"
                      data-bid="1045052885"
                      title="日本战国，从庶子到魔王"
                    >
                      日本战国，从庶子到魔王
                    </a>
                  </h3>
                  <p>
                    斋藤道三临终前死死攥住东信义的手：“你是美浓忠魂，幼主就交给你了！”穿越者含泪接手，转头就把四岁幼主养成傀儡。崛起三河暴虐德川家康的同时，顺便渗透织田后宫
                  </p>
                  <div className="state-box cf">
                    <span>日更4千+</span>
                    <i>架空历史</i>
                    <img src="//qdfepccdn.qidian.com/www.qidian.com/images/ico/user.png" />
                    <a
                      className="author"
                      href="//my.qidian.com/author/433949276/"
                      data-eid="qd_A144"
                      target="_blank"
                    >
                      一指舞江山
                    </a>
                  </div>
                </div>
              </li>
              <li data-rid="5">
                <div className="book-img">
                  <a
                    href="//www.qidian.com/book/1045043512/"
                    target="_blank"
                    data-eid="qd_A142"
                    data-bid="1045043512"
                  >
                    <img
                      className="lazy"
                      src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                      data-original="//bookcover.yuewen.com/qdbimg/349573/1045043512/90.webp"
                      alt="人在阿美，是阿帕奇武装直升机"
                    />
                  </a>
                </div>
                <div className="book-info">
                  <h3>
                    <a
                      href="//www.qidian.com/book/1045043512/"
                      target="_blank"
                      data-eid="qd_A143"
                      data-bid="1045043512"
                      title="人在阿美，是阿帕奇武装直升机"
                    >
                      人在阿美，是阿帕奇武装直升机
                    </a>
                  </h3>
                  <p>
                    “早上好，各位旧纽约市的公民们，我是你们的五星警督麦克·里梅·阿瑟，你们也可以亲切地称呼我为麦克。”
                    “为了让各位更好地在这座城市生存下去，我想郑重地宣布几条市规——”
                    “首先，不要歧视你的朋友，不管它是沃尔玛购物袋还是武装直升机。”
                    “其次，不要尝试偷渡，更不要尝试接纳从新纽约市来的偷渡客。”
                    “再其次，所有声称自己是男性或女性的碧池都是从新纽约市来的间谍，如有发现，请立即上报！”
                    “最后，不要逃税！” “再次重申一遍，绝对不要逃税！”
                    “以上，就是我对你们的全部忠告，旧纽约市的大门永远对所有人敞开，这里人杰地灵，到处都是靓丽的风景线，没有烦恼，没有悲伤，更没有一个正常人！”
                    …… 魔幻背景下的抽象乐子文。
                    全新的力量体系，不一样的美警故事，让我们一起追寻最后的自由，oh
                    yeah～
                  </p>
                  <div className="state-box cf">
                    <span>日更4千+</span>
                    <i>异术超能</i>
                    <img src="//qdfepccdn.qidian.com/www.qidian.com/images/ico/user.png" />
                    <a
                      className="author"
                      href="//my.qidian.com/author/430910024/"
                      data-eid="qd_A144"
                      target="_blank"
                    >
                      代号77777
                    </a>
                  </div>
                </div>
              </li>
              <li data-rid="6">
                <div className="book-img">
                  <a
                    href="//www.qidian.com/book/1045260643/"
                    target="_blank"
                    data-eid="qd_A142"
                    data-bid="1045260643"
                  >
                    <img
                      className="lazy"
                      src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                      data-original="//bookcover.yuewen.com/qdbimg/349573/1045260643/90.webp"
                      alt="这个巫祝并不正经"
                    />
                  </a>
                </div>
                <div className="book-info">
                  <h3>
                    <a
                      href="//www.qidian.com/book/1045260643/"
                      target="_blank"
                      data-eid="qd_A143"
                      data-bid="1045260643"
                      title="这个巫祝并不正经"
                    >
                      这个巫祝并不正经
                    </a>
                  </h3>
                  <p>
                    名为“大荒”的舞台上精彩纷呈。
                    太古余晖仍在，山海凶兽并非传说。
                    妖族帝皇陨落，于是各族自立，大荒万族粉墨登场。
                    人皇轩辕治世，战绩彪炳，成为了舞台上最闪耀的那颗星。
                    三清五佛自天道之中走出，要在大荒传播自己的道，于是一时间佛子道仙惊才绝艳。
                    而在这个大舞台的角落里，被逐出了神农部落，成为”流巫“的巫祝姜离，对着大荒万族和山海异兽流出了口水……
                    （已有两本均订八千，高定四万完本作品，放心入坑）
                  </p>
                  <div className="state-box cf">
                    <span>日更4千+</span>
                    <i>东方玄幻</i>
                    <img src="//qdfepccdn.qidian.com/www.qidian.com/images/ico/user.png" />
                    <a
                      className="author"
                      href="//my.qidian.com/author/432732911/"
                      data-eid="qd_A144"
                      target="_blank"
                    >
                      临湖轻舸
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-wrap fr">
          <div className="rank-list sort-list" data-l2="3">
            <h3 className="wrap-title lang">
              新人<i>·</i>签约新书榜
              <a
                className="more"
                href="//www.qidian.com/rank/newsign/"
                data-eid="qd_A148"
                target="_blank"
              >
                更多<em className="iconfont"></em>
              </a>
            </h3>
            <div className="book-list">
              <ul>
                <li className="unfold" data-rid="1">
                  <div className="book-wrap cf">
                    <div className="book-info fl">
                      <h3>NO.1</h3>
                      <h2>
                        <a
                          href="//www.qidian.com/book/1045339766/"
                          target="_blank"
                          data-eid="qd_A147"
                          data-bid="1045339766"
                        >
                          我的设定在你之上！
                        </a>
                      </h2>
                      <p className="digital f16">本周最强</p>
                      <p className="author">
                        <a
                          className="type"
                          href="//www.qidian.com/qihuan/"
                          target="_blank"
                        >
                          奇幻
                        </a>
                        <i>·</i>
                        <a
                          className="writer"
                          href="//my.qidian.com/author/433990958/"
                          target="_blank"
                        >
                          东山余雨
                        </a>
                      </p>
                    </div>
                    <div className="book-cover">
                      <a
                        className="link"
                        href="//www.qidian.com/book/1045339766/"
                        target="_blank"
                        data-bid="1045339766"
                      >
                        <img
                          src="//bookcover.yuewen.com/qdbimg/349573/1045339766/90.webp"
                          alt="我的设定在你之上！"
                        />
                      </a>
                      <span></span>
                    </div>
                  </div>
                </li>
                <li data-rid="2">
                  <div className="num-box" href="javascript:">
                    <span className="num2">2</span>
                  </div>
                  <div className="name-box">
                    <a
                      className="name"
                      href="//www.qidian.com/book/1045355097/"
                      target="_blank"
                      data-eid="qd_A147"
                      data-bid="1045355097"
                      title="霍格沃茨：从水浒归来的哈利"
                    >
                      霍格沃茨：从水浒归来的哈利
                    </a>
                    <span className="iconfont"></span>
                  </div>
                </li>
                <li data-rid="3">
                  <div className="num-box" href="javascript:">
                    <span className="num3">3</span>
                  </div>
                  <div className="name-box">
                    <a
                      className="name"
                      href="//www.qidian.com/book/1045424909/"
                      target="_blank"
                      data-eid="qd_A147"
                      data-bid="1045424909"
                      title="蜀山剑仙列传"
                    >
                      蜀山剑仙列传
                    </a>
                    <span className="iconfont"></span>
                  </div>
                </li>
                <li data-rid="4">
                  <div className="num-box" href="javascript:">
                    <span className="num4">4</span>
                  </div>
                  <div className="name-box">
                    <a
                      className="name"
                      href="//www.qidian.com/book/1045274741/"
                      target="_blank"
                      data-eid="qd_A147"
                      data-bid="1045274741"
                      title="灵笼：十二符咒？我什么都不缺了"
                    >
                      灵笼：十二符咒？我什么都不缺了
                    </a>
                    <span className="iconfont"></span>
                  </div>
                </li>
                <li data-rid="5">
                  <div className="num-box" href="javascript:">
                    <span className="num5">5</span>
                  </div>
                  <div className="name-box">
                    <a
                      className="name"
                      href="//www.qidian.com/book/1045318171/"
                      target="_blank"
                      data-eid="qd_A147"
                      data-bid="1045318171"
                      title="半岛：从躲在idol衣柜里开始"
                    >
                      半岛：从躲在idol衣柜里开始
                    </a>
                    <span className="iconfont"></span>
                  </div>
                </li>
                <li data-rid="6">
                  <div className="num-box" href="javascript:">
                    <span className="num6">6</span>
                  </div>
                  <div className="name-box">
                    <a
                      className="name"
                      href="//www.qidian.com/book/1044361559/"
                      target="_blank"
                      data-eid="qd_A147"
                      data-bid="1044361559"
                      title="末法时代，地仙道主"
                    >
                      末法时代，地仙道主
                    </a>
                    <span className="iconfont"></span>
                  </div>
                </li>
                <li data-rid="7">
                  <div className="num-box" href="javascript:">
                    <span className="num7">7</span>
                  </div>
                  <div className="name-box">
                    <a
                      className="name"
                      href="//www.qidian.com/book/1045379966/"
                      target="_blank"
                      data-eid="qd_A147"
                      data-bid="1045379966"
                      title="1979：孩子她妈是天仙妈"
                    >
                      1979：孩子她妈是天仙妈
                    </a>
                    <span className="iconfont"></span>
                  </div>
                </li>
                <li data-rid="8">
                  <div className="num-box" href="javascript:">
                    <span className="num8">8</span>
                  </div>
                  <div className="name-box">
                    <a
                      className="name"
                      href="//www.qidian.com/book/1045338276/"
                      target="_blank"
                      data-eid="qd_A147"
                      data-bid="1045338276"
                      title="祥子修仙记"
                    >
                      祥子修仙记
                    </a>
                    <span className="iconfont"></span>
                  </div>
                </li>
                <li data-rid="9">
                  <div className="num-box" href="javascript:">
                    <span className="num9">9</span>
                  </div>
                  <div className="name-box">
                    <a
                      className="name"
                      href="//www.qidian.com/book/1045307479/"
                      target="_blank"
                      data-eid="qd_A147"
                      data-bid="1045307479"
                      title="每天都在努力触发神秘事件"
                    >
                      每天都在努力触发神秘事件
                    </a>
                    <span className="iconfont"></span>
                  </div>
                </li>
                <li data-rid="10">
                  <div className="num-box" href="javascript:">
                    <span className="num10">10</span>
                  </div>
                  <div className="name-box">
                    <a
                      className="name"
                      href="//www.qidian.com/book/1045256579/"
                      target="_blank"
                      data-eid="qd_A147"
                      data-bid="1045256579"
                      title="杀手小姐重度依赖"
                    >
                      杀手小姐重度依赖
                    </a>
                    <span className="iconfont"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="banner-wrap-items box-center mb40"
        id="banner4"
        data-l1="33"
      >
        <div className="banner-item" style="margin-left:0">
          <a
            href="https://jubao.yuewen.com/?qd_dd_p1=38709"
            target="_blank"
            data-eid="qd_A137"
          >
            <img src="//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/960e875a697475e3763091c1298b69ea.png" />
          </a>
        </div>
        <div className="banner-item">
          <a
            href="https://jubao.yuewen.com/notice/detail/178615568?qd_dd_p1=93242"
            target="_blank"
            data-eid="qd_A137"
          >
            <img src="//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/0ec3e9d636bf36d0812e8e356feb5c62.jpg" />
          </a>
        </div>
        <div className="banner-item">
          <a
            href="https://acts.qidian.com/2019/6677721/index.html?qd_dd_p1=38708"
            target="_blank"
            data-eid="qd_A137"
          >
            <img src="//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/8f132435deb8927b202f77acaa35f806.jpg" />
          </a>
        </div>
      </div>

      <div className="finish-book-wrap box-center" data-l1="13">
        <div className="cf" id="numero4">
          <div className="left-wrap fl">
            <h3 className="wrap-title lang">
              完本精品<span>完本总数24004本</span>
              <a
                className="more"
                href="//www.qidian.com/finish/"
                target="_blank"
                data-eid=""
              >
                更多<em className="iconfont"></em>
              </a>
            </h3>
            <div className="left-info fl" data-l2="1">
              <div className="slide-box">
                <ul
                  id="left-slide-02"
                  className="roundabout roundabout-holder"
                  style="display: block; padding: 0px; position: relative;"
                >
                  <li
                    className="book1 roundabout-moveable-item roundabout-in-focus"
                    data-id="1"
                    data-type="1"
                    data-width="93px"
                    data-height="100%"
                    data-rid="1"
                    style="position: absolute; left: 18px; top: -13px; width: 84px; height: 112px; opacity: 1; z-index: 280; font-size: 16px;"
                  >
                    <a
                      href="//www.qidian.com/book/1042836290/"
                      data-eid="qd_A129"
                      data-bid="1042836290"
                      target="_blank"
                    >
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                        data-original="//bookcover.yuewen.com/qdbimg/349573/1042836290/90.webp"
                        alt="从肉体凡胎肝到不死不灭"
                      />
                    </a>
                  </li>
                  <li
                    className="book2 roundabout-moveable-item"
                    data-id="2"
                    data-type="1"
                    data-width="93px"
                    data-height="100%"
                    data-rid="2"
                    style="position: absolute; left: 75px; top: -1px; width: 65.1px; height: 86.8px; opacity: 0.85; z-index: 145; font-size: 12.4px;"
                  >
                    <a
                      href="//www.qidian.com/book/1042130359/"
                      data-eid="qd_A129"
                      data-bid="1042130359"
                      target="_blank"
                    >
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                        data-original="//bookcover.yuewen.com/qdbimg/349573/1042130359/90.webp"
                        alt="三国：夫人，我乃正经人家"
                      />
                    </a>
                  </li>
                  <li
                    className="book3 roundabout-moveable-item"
                    data-id="3"
                    data-type="1"
                    data-width="93px"
                    data-height="100%"
                    data-rid="3"
                    style="position: absolute; left: -20px; top: -1px; width: 65.1px; height: 86.8px; opacity: 0.85; z-index: 145; font-size: 12.4px;"
                  >
                    <a
                      href="//www.qidian.com/book/1039500719/"
                      data-eid="qd_A129"
                      data-bid="1039500719"
                      target="_blank"
                    >
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                        data-original="//bookcover.yuewen.com/qdbimg/349573/1039500719/90.webp"
                        alt="高武进化：从觉醒哥斯拉体质开始"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="info-text">
                <dl>
                  <dd data-rid="1" style="">
                    <h3>
                      <a
                        href="//www.qidian.com/book/1042836290/"
                        target="_blank"
                        data-eid="qd_A130"
                        data-bid="1042836290"
                      >
                        从肉体凡胎肝到不死不灭
                      </a>
                    </h3>
                    <p className="author">
                      <span>134万字</span>
                    </p>
                    <p className="total">
                      <b>29,014</b>
                      <span>人在追</span>
                    </p>
                    <p className="intro">
                      从【长生桩】，到永不磨灭的【万劫不灭体】。
                      从【五行拳】，到抹杀一切的【大寂灭五行】。
                      从【武者】，到永恒不朽的【恒星生命体】。 ……
                      穿越到星海纪元的陆圣，意外获得一块能够固化自身每一次进步的属性面板。
                      在这个充斥着外神、仙、机械飞升者等等的危险世界，陆圣凭借自身从肉体凡胎，肝到唯一真我。
                      多年后……
                      陆圣于宇宙之中飞行，看着那宇宙尽头无尽黑暗中，那头身躯如同银河系般大小，在蓝星神话中曾记载过的神明，他淡淡道：“你应该是我所遇到的所有银河生命体中，最强大的一头了，称之为神，倒也不为过。”
                      “只是可惜，现在的我，已然铸就大道之基，练就唯一真我，可称为……武神！”
                    </p>
                    <a
                      className="read-btn"
                      href="//www.qidian.com/book/1042836290/"
                      target="_blank"
                      data-eid="qd_A132"
                      data-bid="1042836290"
                    >
                      书籍详情
                    </a>
                  </dd>
                  <dd data-rid="2" style="display: none;">
                    <h3>
                      <a
                        href="//www.qidian.com/book/1042130359/"
                        target="_blank"
                        data-eid="qd_A130"
                        data-bid="1042130359"
                      >
                        三国：夫人，我乃正经人家
                      </a>
                    </h3>
                    <p className="author">
                      <span>177万字</span>
                    </p>
                    <p className="total">
                      <b>109,647</b>
                      <span>人在追</span>
                    </p>
                    <p className="intro">
                      他穿越汉末，进入甄家，每天在外锻炼半个时辰，可以长0.1斤力气。
                    </p>
                    <a
                      className="read-btn"
                      href="//www.qidian.com/book/1042130359/"
                      target="_blank"
                      data-eid="qd_A132"
                      data-bid="1042130359"
                    >
                      书籍详情
                    </a>
                  </dd>
                  <dd data-rid="3" style="display: none;">
                    <h3>
                      <a
                        href="//www.qidian.com/book/1039500719/"
                        target="_blank"
                        data-eid="qd_A130"
                        data-bid="1039500719"
                      >
                        高武进化：从觉醒哥斯拉体质开始
                      </a>
                    </h3>
                    <p className="author">
                      <span>74万字</span>
                    </p>
                    <p className="total">
                      <b>29,751</b>
                      <span>人在追</span>
                    </p>
                    <p className="intro">
                      （腾讯动漫出品改编漫画《高武进化：从觉醒怪兽之王开始》已上线，欢迎去看！）
                      易禾来到了魔兽入侵的高武世界。
                      这里的人类可以成为武者，并吸收魔兽的基因来开启进化。
                      易禾虽然穿越到了一个废柴身上，但还好他有无限怪物模板！
                      迪迦世界的远古邪神——加坦杰厄！
                      凌驾于维度之上，以星球为食的噬星者基多拉！
                      毁灭了自己宇宙的人类文明，以一己之力改造整个星球的行星哥斯拉！
                      能够让时间暂停的吸血鬼，能够向不可名状存在进行献祭的星之眷族。
                      各种只存在于影视剧中的强大怪物能力，被易禾展现在世人面前。
                      ………
                      易禾看了看自己的第一个模板，说道：“还凑活吧，是能把地心射穿的【传奇哥斯拉】。”
                    </p>
                    <a
                      className="read-btn"
                      href="//www.qidian.com/book/1039500719/"
                      target="_blank"
                      data-eid="qd_A132"
                      data-bid="1039500719"
                    >
                      书籍详情
                    </a>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="center-book-list fl" data-l2="2">
              <div className="line line1"></div>
              <div className="line line2"></div>
              <ul>
                <li data-rid="1">
                  <div className="book-img">
                    <a
                      href="//www.qidian.com/book/1038168349/"
                      target="_blank"
                      data-eid="qd_A134"
                      data-bid="1038168349"
                    >
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                        data-original="//bookcover.yuewen.com/qdbimg/349573/1038168349/90.webp"
                        alt="我的外挂来自史前"
                      />
                    </a>
                  </div>
                  <div className="book-info">
                    <h3>
                      <a
                        href="//www.qidian.com/book/1038168349/"
                        target="_blank"
                        data-eid="qd_A133"
                        data-bid="1038168349"
                        title="我的外挂来自史前"
                      >
                        我的外挂来自史前
                      </a>
                    </h3>
                    <p>
                      林浅笙本以为这只是一场穿越远古之旅，直到现实中的身体被未来人接管。
                      远古与现实重合，现在与未来并轨。
                      高维当权者假借神明的皮囊，将世界推向分崩毁灭……
                      对抗三个世界逃杀智斗。 林浅笙正面临有生以来的最大危机。 ·
                      十年后秩序者声势浩大的牺牲，无人知晓。
                      必死之地，藏着人类胜利的最后希望。
                      我从不向神明祈求救赎，黑暗同行，我们才是自己的拯救者。
                    </p>
                    <div className="state-box cf">
                      <span>60万字</span> <i>时空穿梭</i>
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/ico/user.png"
                      />
                      <a
                        className="author"
                        href="//my.qidian.com/author/401044217/"
                        data-eid="qd_A135"
                        target="_blank"
                      >
                        千桦尽落
                      </a>
                    </div>
                  </div>
                </li>
                <li data-rid="2">
                  <div className="book-img">
                    <a
                      href="//www.qidian.com/book/1036177915/"
                      target="_blank"
                      data-eid="qd_A134"
                      data-bid="1036177915"
                    >
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                        data-original="//bookcover.yuewen.com/qdbimg/349573/1036177915/90.webp"
                        alt="我有一枚命运魔骰"
                      />
                    </a>
                  </div>
                  <div className="book-info">
                    <h3>
                      <a
                        href="//www.qidian.com/book/1036177915/"
                        target="_blank"
                        data-eid="qd_A133"
                        data-bid="1036177915"
                        title="我有一枚命运魔骰"
                      >
                        我有一枚命运魔骰
                      </a>
                    </h3>
                    <p>唯有杀死恶魔，才能通关游戏，并终结一切！</p>
                    <div className="state-box cf">
                      <span>591万字</span> <i>神秘幻想</i>
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/ico/user.png"
                      />
                      <a
                        className="author"
                        href="//my.qidian.com/author/431542365/"
                        data-eid="qd_A135"
                        target="_blank"
                      >
                        水煮仙人球
                      </a>
                    </div>
                  </div>
                </li>
                <li data-rid="3">
                  <div className="book-img">
                    <a
                      href="//www.qidian.com/book/1035831781/"
                      target="_blank"
                      data-eid="qd_A134"
                      data-bid="1035831781"
                    >
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                        data-original="//bookcover.yuewen.com/qdbimg/349573/1035831781/90.webp"
                        alt="权游之圣焰君王"
                      />
                    </a>
                  </div>
                  <div className="book-info">
                    <h3>
                      <a
                        href="//www.qidian.com/book/1035831781/"
                        target="_blank"
                        data-eid="qd_A133"
                        data-bid="1035831781"
                        title="权游之圣焰君王"
                      >
                        权游之圣焰君王
                      </a>
                    </h3>
                    <p>
                      当时，没有人能够想到，这位被父亲抛弃的年轻人，将会掀起一场席卷整个维斯特洛大陆的铁血风暴。
                    </p>
                    <div className="state-box cf">
                      <span>150万字</span> <i>史诗奇幻</i>
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/ico/user.png"
                      />
                      <a
                        className="author"
                        href="//my.qidian.com/author/404090731/"
                        data-eid="qd_A135"
                        target="_blank"
                      >
                        萝卜上秤
                      </a>
                    </div>
                  </div>
                </li>
                <li data-rid="4">
                  <div className="book-img">
                    <a
                      href="//www.qidian.com/book/1023188798/"
                      target="_blank"
                      data-eid="qd_A134"
                      data-bid="1023188798"
                    >
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                        data-original="//bookcover.yuewen.com/qdbimg/349573/1023188798/90.webp"
                        alt="学霸的日本女友"
                      />
                    </a>
                  </div>
                  <div className="book-info">
                    <h3>
                      <a
                        href="//www.qidian.com/book/1023188798/"
                        target="_blank"
                        data-eid="qd_A133"
                        data-bid="1023188798"
                        title="学霸的日本女友"
                      >
                        学霸的日本女友
                      </a>
                    </h3>
                    <p>这么笨的女孩子，我才不会喜欢！</p>
                    <div className="state-box cf">
                      <span>72万字</span> <i>都市生活</i>
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/ico/user.png"
                      />
                      <a
                        className="author"
                        href="//my.qidian.com/author/404188220/"
                        data-eid="qd_A135"
                        target="_blank"
                      >
                        转角吻猪
                      </a>
                    </div>
                  </div>
                </li>
                <li data-rid="5">
                  <div className="book-img">
                    <a
                      href="//www.qidian.com/book/1035114945/"
                      target="_blank"
                      data-eid="qd_A134"
                      data-bid="1035114945"
                    >
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                        data-original="//bookcover.yuewen.com/qdbimg/349573/1035114945/90.webp"
                        alt="走得快，走得远"
                      />
                    </a>
                  </div>
                  <div className="book-info">
                    <h3>
                      <a
                        href="//www.qidian.com/book/1035114945/"
                        target="_blank"
                        data-eid="qd_A133"
                        data-bid="1035114945"
                        title="走得快，走得远"
                      >
                        走得快，走得远
                      </a>
                    </h3>
                    <p>一个人走得快，一群人走得远</p>
                    <div className="state-box cf">
                      <span>7127字</span> <i>短篇小说</i>
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/ico/user.png"
                      />
                      <a
                        className="author"
                        href="//my.qidian.com/author/430920941/"
                        data-eid="qd_A135"
                        target="_blank"
                      >
                        三生三笑
                      </a>
                    </div>
                  </div>
                </li>
                <li data-rid="6">
                  <div className="book-img">
                    <a
                      href="//www.qidian.com/book/1034789464/"
                      target="_blank"
                      data-eid="qd_A134"
                      data-bid="1034789464"
                    >
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                        data-original="//bookcover.yuewen.com/qdbimg/349573/1034789464/90.webp"
                        alt="咫尺的宇宙"
                      />
                    </a>
                  </div>
                  <div className="book-info">
                    <h3>
                      <a
                        href="//www.qidian.com/book/1034789464/"
                        target="_blank"
                        data-eid="qd_A133"
                        data-bid="1034789464"
                        title="咫尺的宇宙"
                      >
                        咫尺的宇宙
                      </a>
                    </h3>
                    <p>一次被认定为凶杀的坠楼，还是一个难以名状的怪病</p>
                    <div className="state-box cf">
                      <span>18万字</span> <i>短篇小说</i>
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/ico/user.png"
                      />
                      <a
                        className="author"
                        href="//my.qidian.com/author/403563559/"
                        data-eid="qd_A135"
                        target="_blank"
                      >
                        绎荒
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-wrap recent-finish-wrap fr">
            <div className="score-list" data-l2="3">
              <h3 className="wrap-title lang">完本排行</h3>
              <div className="book-list">
                <ul>
                  <li className="unfold" data-rid="1">
                    <div className="book-wrap cf">
                      <div className="book-info fl">
                        <h3>玄幻</h3>
                        <h2>
                          <a
                            href="//www.qidian.com/book/1038307656/"
                            target="_blank"
                            data-eid="qd_A136"
                            data-bid="1038307656"
                          >
                            从斩妖除魔开始长生不死
                          </a>
                        </h2>
                        <p className="score">279万字</p>
                        <p className="author">
                          <a
                            className="writer"
                            href="//my.qidian.com/author/432720755/"
                            target="_blank"
                          >
                            陆月十九
                          </a>
                        </p>
                      </div>
                      <div className="book-cover">
                        <a
                          className="link"
                          href="//www.qidian.com/book/1038307656/"
                          target="_blank"
                          data-eid="qd_A136"
                          data-bid="1038307656"
                        >
                          <img
                            src="//bookcover.yuewen.com/qdbimg/349573/1038307656/90.webp"
                            alt="从斩妖除魔开始长生不死"
                          />
                        </a>
                        <span></span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      className="name"
                      href="//www.qidian.com/book/1038229163/"
                      target="_blank"
                      data-bid="1038229163"
                      title="普罗之主"
                    >
                      普罗之主
                    </a>
                    <i>448万字</i>
                  </li>
                  <li>
                    <a
                      className="name"
                      href="//www.qidian.com/book/1036504904/"
                      target="_blank"
                      data-bid="1036504904"
                      title="谁让他修仙的！"
                    >
                      谁让他修仙的！
                    </a>
                    <i>293万字</i>
                  </li>
                  <li>
                    <a
                      className="name"
                      href="//www.qidian.com/book/1042350367/"
                      target="_blank"
                      data-bid="1042350367"
                      title="我太想重生了"
                    >
                      我太想重生了
                    </a>
                    <i>200万字</i>
                  </li>
                  <li>
                    <a
                      className="name"
                      href="//www.qidian.com/book/1037937059/"
                      target="_blank"
                      data-bid="1037937059"
                      title="神探陈益"
                    >
                      神探陈益
                    </a>
                    <i>307万字</i>
                  </li>
                  <li>
                    <a
                      className="name"
                      href="//www.qidian.com/book/1035294721/"
                      target="_blank"
                      data-bid="1035294721"
                      title="望长天"
                    >
                      望长天
                    </a>
                    <i>264万字</i>
                  </li>
                  <li>
                    <a
                      className="name"
                      href="//www.qidian.com/book/1033280302/"
                      target="_blank"
                      data-bid="1033280302"
                      title="苟在女魔头身边偷偷修炼"
                    >
                      苟在女魔头身边偷偷修炼
                    </a>
                    <i>434万字</i>
                  </li>
                  <li>
                    <a
                      className="name"
                      href="//www.qidian.com/book/1038821617/"
                      target="_blank"
                      data-bid="1038821617"
                      title="魂殿第一玩家"
                    >
                      魂殿第一玩家
                    </a>
                    <i>377万字</i>
                  </li>
                  <li>
                    <a
                      className="name"
                      href="//www.qidian.com/book/1038457363/"
                      target="_blank"
                      data-bid="1038457363"
                      title="混在末日，独自成仙"
                    >
                      混在末日，独自成仙
                    </a>
                    <i>278万字</i>
                  </li>
                  <li>
                    <a
                      className="name"
                      href="//www.qidian.com/book/1042434597/"
                      target="_blank"
                      data-bid="1042434597"
                      title="仙不是这么修的"
                    >
                      仙不是这么修的
                    </a>
                    <i>263万字</i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="update-wrap box-center mb40 cf" data-l1="19">
        <div className="update-rec-wrap fl" data-l2="1">
          <h3 className="wrap-title lang">
            最近更新<span>24小时内更新0本</span>
          </h3>
          <div className="update-rec-list">
            <ul>
              <li data-rid="1">
                <div className="book-wrap cf">
                  <div className="book-info fr">
                    <h2>
                      <a
                        href="//www.qidian.com/book/1044899495/"
                        target="_blank"
                        data-eid="qd_A150"
                        data-bid="1044899495"
                      >
                        灵笼：我从久川来
                      </a>
                    </h2>
                    <p className="digital">
                      <span>日更千字</span>
                    </p>
                    <p className="author">
                      <a
                        className="writer"
                        href="//my.qidian.com/author/432224385/"
                        data-eid="qd_A151"
                        target="_blank"
                      >
                        流星祈清梦
                      </a>
                    </p>
                  </div>
                  <div className="book-cover">
                    <a
                      className="link"
                      href="//www.qidian.com/book/1044899495/"
                      data-eid="qd_A149"
                      target="_blank"
                      data-bid="1044899495"
                    >
                      <img
                        src="//bookcover.yuewen.com/qdbimg/349573/1044899495/90.webp"
                        alt="灵笼：我从久川来"
                      />
                    </a>
                    <span></span>
                  </div>
                </div>
                <p className="intro"> 灵笼：我从久川来</p>
              </li>
              <li data-rid="2">
                <div className="book-wrap cf">
                  <div className="book-info fr">
                    <h2>
                      <a
                        href="//www.qidian.com/book/1042488998/"
                        target="_blank"
                        data-eid="qd_A150"
                        data-bid="1042488998"
                      >
                        神话从宝莲灯开始
                      </a>
                    </h2>
                    <p className="digital">
                      <span>日更千字</span>
                    </p>
                    <p className="author">
                      <a
                        className="writer"
                        href="//my.qidian.com/author/433517046/"
                        data-eid="qd_A151"
                        target="_blank"
                      >
                        吃酒去了1
                      </a>
                    </p>
                  </div>
                  <div className="book-cover">
                    <a
                      className="link"
                      href="//www.qidian.com/book/1042488998/"
                      data-eid="qd_A149"
                      target="_blank"
                      data-bid="1042488998"
                    >
                      <img
                        src="//bookcover.yuewen.com/qdbimg/349573/1042488998/90.webp"
                        alt="神话从宝莲灯开始"
                      />
                    </a>
                    <span></span>
                  </div>
                </div>
                <p className="intro">
                  丁林发现自己变成了一条鲤鱼，只在纸上见过的人物出现在眼前，玉帝，二郎神
                </p>
              </li>
              <li data-rid="3">
                <div className="book-wrap cf">
                  <div className="book-info fr">
                    <h2>
                      <a
                        href="//www.qidian.com/book/1044885398/"
                        target="_blank"
                        data-eid="qd_A150"
                        data-bid="1044885398"
                      >
                        我武道天才，觉醒废物逆袭系统？
                      </a>
                    </h2>
                    <p className="digital">
                      <span>日更千字</span>
                    </p>
                    <p className="author">
                      <a
                        className="writer"
                        href="//my.qidian.com/author/11465705/"
                        data-eid="qd_A151"
                        target="_blank"
                      >
                        岳知言
                      </a>
                    </p>
                  </div>
                  <div className="book-cover">
                    <a
                      className="link"
                      href="//www.qidian.com/book/1044885398/"
                      data-eid="qd_A149"
                      target="_blank"
                      data-bid="1044885398"
                    >
                      <img
                        src="//bookcover.yuewen.com/qdbimg/349573/1044885398/90.webp"
                        alt="我武道天才，觉醒废物逆袭系统？"
                      />
                    </a>
                    <span></span>
                  </div>
                </div>
                <p className="intro">
                  【获得任务：三年之约，请在三年内击败林嫣然】
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="update-list-wrap fl" data-l2="2">
          <div className="update-tab cf">
            <a
              className="blue"
              href="//www.qidian.com/all/"
              target="_blank"
              data-eid="qd_A155"
            >
              更多<em className="iconfont"></em>
            </a>
            <span className="blue">|</span>
            <p id="update-tab">
              <a className="act" href="javascript:" data-eid="qd_A152">
                全部
              </a>
            </p>
          </div>
          <div id="update-list" className="update-list">
            <div className="update-table all">
              <table width="100%">
                <tbody>
                  <tr data-rid="1">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/wuxia/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>武侠<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044265585/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1044265585"
                      >
                        人在大宋：忽悠慕容复替我打工
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1044265585/851421464/"
                        data-eid="qd_A158"
                        data-bid="1044265585"
                        data-cid="851421464"
                        target="_blank"
                      >
                        第一百一十六章大忽悠术
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433936397/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        文氓不穿长山
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:04</i>
                    </td>
                  </tr>
                  <tr data-rid="2">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xuanhuan/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>玄幻<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045726842/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045726842"
                      >
                        破诡：不得长生
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045726842/851550837/"
                        data-eid="qd_A158"
                        data-bid="1045726842"
                        data-cid="851550837"
                        target="_blank"
                      >
                        第4章劣质基因
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433863407/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        赚钱交社保
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:04</i>
                    </td>
                  </tr>
                  <tr data-rid="3">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/dushi/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>都市<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045630908/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045630908"
                      >
                        华娱：从笑傲江湖开始
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045630908/851560429/"
                        data-eid="qd_A158"
                        data-bid="1045630908"
                        data-cid="851560429"
                        target="_blank"
                      >
                        第19章大型吃瓜现场和泡妞秘诀
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/434035776/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        请叫我胖哥哥
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:04</i>
                    </td>
                  </tr>
                  <tr data-rid="4">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/2cy/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>轻小说<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045190022/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045190022"
                      >
                        玩家啊，去冒险吧
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045190022/851530154/"
                        data-eid="qd_A158"
                        data-bid="1045190022"
                        data-cid="851530154"
                        target="_blank"
                      >
                        第54章消耗战？好啊
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433105411/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        89抽大保底
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:04</i>
                    </td>
                  </tr>
                  <tr data-rid="5">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xianxia/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>仙侠<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1015976292/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1015976292"
                      >
                        白神悟空传奇
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1015976292/851560643/"
                        data-eid="qd_A158"
                        data-bid="1015976292"
                        data-cid="851560643"
                        target="_blank"
                      >
                        第六十章龙伯怒海息壤藏机
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/406948545/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        我的float
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:04</i>
                    </td>
                  </tr>
                  <tr data-rid="6">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/2cy/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>轻小说<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044470367/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1044470367"
                      >
                        全职法师：最强召唤兽竟是我自己
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1044470367/851518279/"
                        data-eid="qd_A158"
                        data-bid="1044470367"
                        data-cid="851518279"
                        target="_blank"
                      >
                        164，海市蜃楼
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/431924967/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        老六的家
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:04</i>
                    </td>
                  </tr>
                  <tr data-rid="7">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/2cy/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>轻小说<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045720540/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045720540"
                      >
                        青梅正在拼尽全力使我相信爱情
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045720540/851560411/"
                        data-eid="qd_A158"
                        data-bid="1045720540"
                        data-cid="851560411"
                        target="_blank"
                      >
                        第2章青梅竹马不是什么好事情
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/434049591/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        胡桃渣字
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:06</i>
                    </td>
                  </tr>
                  <tr data-rid="8">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xianxia/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>仙侠<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1036831751/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1036831751"
                      >
                        问道修真
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1036831751/851560276/"
                        data-eid="qd_A158"
                        data-bid="1036831751"
                        data-cid="851560276"
                        target="_blank"
                      >
                        第六百五十七章心魔解法
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/432392888/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        醉醒呓语
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:04</i>
                    </td>
                  </tr>
                  <tr data-rid="9">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/zhutianwuxian/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>诸天无限<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045622363/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045622363"
                      >
                        斗罗大陆：创世龙神，至高主宰！
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045622363/0/"
                        data-eid="qd_A158"
                        data-bid="1045622363"
                        data-cid="0"
                        target="_blank"
                      ></a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/434035859/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        帅炸的至尊宝
                      </a>
                    </td>
                    <td className="respon">
                      <i>01-01 08:00</i>
                    </td>
                  </tr>
                  <tr data-rid="10">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/lingyi/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>悬疑<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045693388/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045693388"
                      >
                        山海秘藏
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045693388/851561251/"
                        data-eid="qd_A158"
                        data-bid="1045693388"
                        data-cid="851561251"
                        target="_blank"
                      >
                        第二十七章裂魂之音
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433993009/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        龙烨坤
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:12</i>
                    </td>
                  </tr>
                  <tr data-rid="11">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xuanhuan/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>玄幻<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045521525/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045521525"
                      >
                        同谓之玄
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045521525/851560038/"
                        data-eid="qd_A158"
                        data-bid="1045521525"
                        data-cid="851560038"
                        target="_blank"
                      >
                        第三十四章救人
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/434018747/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        躺平的橘子皮
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:04</i>
                    </td>
                  </tr>
                  <tr data-rid="12">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/kehuan/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>科幻<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045351532/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045351532"
                      >
                        星系时代之智能生命
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045351532/850489602/"
                        data-eid="qd_A158"
                        data-bid="1045351532"
                        data-cid="850489602"
                        target="_blank"
                      >
                        第四十六章惨烈的战斗
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433020450/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        爱跑步的蓝鱼
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:04</i>
                    </td>
                  </tr>
                  <tr data-rid="13">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/zhutianwuxian/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>诸天无限<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1040278771/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1040278771"
                      >
                        美综：多面人
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1040278771/851552301/"
                        data-eid="qd_A158"
                        data-bid="1040278771"
                        data-cid="851552301"
                        target="_blank"
                      >
                        第一千一百八十五章剧情开始
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433172526/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        极品茉莉花
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:05</i>
                    </td>
                  </tr>
                  <tr data-rid="14">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/dushi/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>都市<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045712563/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045712563"
                      >
                        重生：我老实憨厚的人设崩塌了！
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045712563/851343001/"
                        data-eid="qd_A158"
                        data-bid="1045712563"
                        data-cid="851343001"
                        target="_blank"
                      >
                        第5章暑期健康投资计划！
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/430112149/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        洪阳
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 11:46</i>
                    </td>
                  </tr>
                  <tr data-rid="15">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/kehuan/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>科幻<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045712433/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045712433"
                      >
                        云星撞地球
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045712433/851379822/"
                        data-eid="qd_A158"
                        data-bid="1045712433"
                        data-cid="851379822"
                        target="_blank"
                      >
                        第3章放生技能：TAT女巫一固
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433071711/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        A伽.
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:03</i>
                    </td>
                  </tr>
                  <tr data-rid="16">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/kehuan/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>科幻<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045614914/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045614914"
                      >
                        末日倒计时20天，全民戒备！
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045614914/851560694/"
                        data-eid="qd_A158"
                        data-bid="1045614914"
                        data-cid="851560694"
                        target="_blank"
                      >
                        第19章暴打虫族
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/434033432/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        I兔小兔I
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:04</i>
                    </td>
                  </tr>
                  <tr data-rid="17">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xianxia/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>仙侠<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045714525/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045714525"
                      >
                        这个正派很不对劲
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045714525/851448936/"
                        data-eid="qd_A158"
                        data-bid="1045714525"
                        data-cid="851448936"
                        target="_blank"
                      >
                        第5章白吃的午餐
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433764885/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        百分之四十狸花
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:03</i>
                    </td>
                  </tr>
                  <tr data-rid="18">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/2cy/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>轻小说<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045303011/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045303011"
                      >
                        死神：这把斩魄刀吃了震震果实
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045303011/851560428/"
                        data-eid="qd_A158"
                        data-bid="1045303011"
                        data-cid="851560428"
                        target="_blank"
                      >
                        第一百一十一章一大波女性死神来了
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433984956/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        悲伤豆沙包
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:03</i>
                    </td>
                  </tr>
                  <tr data-rid="19">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/zhutianwuxian/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>诸天无限<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1043857356/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1043857356"
                      >
                        人在诸天，无限赐福
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1043857356/851557866/"
                        data-eid="qd_A158"
                        data-bid="1043857356"
                        data-cid="851557866"
                        target="_blank"
                      >
                        卷末小结与本书后续
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433712380/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        玄之莫玄
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:04</i>
                    </td>
                  </tr>
                  <tr data-rid="20">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/2cy/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>轻小说<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045623244/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045623244"
                      >
                        开局写轮眼，但是怎么职业是枪手
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045623244/850653365/"
                        data-eid="qd_A158"
                        data-bid="1045623244"
                        data-cid="850653365"
                        target="_blank"
                      >
                        第20章比试前夕
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/434034906/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        神人要喝可乐
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:05</i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="update-table free hidden">
              <table width="100%">
                <tbody>
                  <tr data-rid="1">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/wuxia/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>武侠<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045547688/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045547688"
                      >
                        综武，开局一把绣春刀
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045547688/851508343/"
                        data-eid="qd_A158"
                        data-bid="1045547688"
                        data-cid="851508343"
                        target="_blank"
                      >
                        第三十二章战前
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433975169/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        不履邪径
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:14</i>
                    </td>
                  </tr>
                  <tr data-rid="2">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xianxia/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>仙侠<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045254770/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045254770"
                      >
                        宿命诡途
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045254770/851493558/"
                        data-eid="qd_A158"
                        data-bid="1045254770"
                        data-cid="851493558"
                        target="_blank"
                      >
                        第三十九章沈婉茹
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433977901/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        洗星尘
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:14</i>
                    </td>
                  </tr>
                  <tr data-rid="3">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xianxia/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>仙侠<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044301409/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1044301409"
                      >
                        尘世游仙录
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1044301409/851416470/"
                        data-eid="qd_A158"
                        data-bid="1044301409"
                        data-cid="851416470"
                        target="_blank"
                      >
                        第一百一十章不借锄犁力，自有破土能
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433838058/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        尘风雨陆
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:14</i>
                    </td>
                  </tr>
                  <tr data-rid="4">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xuanhuan/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>玄幻<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045742966/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045742966"
                      >
                        印侠仙缘
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045742966/851556304/"
                        data-eid="qd_A158"
                        data-bid="1045742966"
                        data-cid="851556304"
                        target="_blank"
                      >
                        第二章考核
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/434052941/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        作家coczm8
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:14</i>
                    </td>
                  </tr>
                  <tr data-rid="5">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xianxia/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>仙侠<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045246541/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045246541"
                      >
                        阵道笑长生
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045246541/851504336/"
                        data-eid="qd_A158"
                        data-bid="1045246541"
                        data-cid="851504336"
                        target="_blank"
                      >
                        第77章
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433946427/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        梦道尊
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:14</i>
                    </td>
                  </tr>
                  <tr data-rid="6">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xianxia/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>仙侠<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045715109/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045715109"
                      >
                        神女风华录
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045715109/851558419/"
                        data-eid="qd_A158"
                        data-bid="1045715109"
                        data-cid="851558419"
                        target="_blank"
                      >
                        第三章杀贼
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/434049133/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        竹下埋剑
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:14</i>
                    </td>
                  </tr>
                  <tr data-rid="7">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/zhutianwuxian/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>诸天无限<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045685778/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045685778"
                      >
                        这是高武世界，你给我一个文娱系
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045685778/851283309/"
                        data-eid="qd_A158"
                        data-bid="1045685778"
                        data-cid="851283309"
                        target="_blank"
                      >
                        第24章宿主！你这个无可救药的武痴！莽夫！败家子！
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/430511968/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        骨头苍
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:14</i>
                    </td>
                  </tr>
                  <tr data-rid="8">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/lingyi/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>悬疑<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045469013/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045469013"
                      >
                        寻龙摸金北派倒斗
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045469013/851561127/"
                        data-eid="qd_A158"
                        data-bid="1045469013"
                        data-cid="851561127"
                        target="_blank"
                      >
                        第十五章神兽考验
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/434000825/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        作家1e3dqs
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:14</i>
                    </td>
                  </tr>
                  <tr data-rid="9">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xuanhuan/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>玄幻<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045575629/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045575629"
                      >
                        焚天金痕启世录
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045575629/851125910/"
                        data-eid="qd_A158"
                        data-bid="1045575629"
                        data-cid="851125910"
                        target="_blank"
                      >
                        第三十章骸骨卫道
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/434026139/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        凉生暖世
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:14</i>
                    </td>
                  </tr>
                  <tr data-rid="10">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/dushi/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>都市<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045724185/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045724185"
                      >
                        福神代理人
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045724185/851334419/"
                        data-eid="qd_A158"
                        data-bid="1045724185"
                        data-cid="851334419"
                        target="_blank"
                      >
                        第9章提桶跑路
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/434010264/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        上班等下班
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:16</i>
                    </td>
                  </tr>
                  <tr data-rid="11">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/2cy/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>轻小说<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1033265093/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1033265093"
                      >
                        关于在汤岛四丁目年轻有为的日常
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1033265093/851558560/"
                        data-eid="qd_A158"
                        data-bid="1033265093"
                        data-cid="851558560"
                        target="_blank"
                      >
                        第十四章：便利店的现象学
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/431141127/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        边缘叙事
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:14</i>
                    </td>
                  </tr>
                  <tr data-rid="12">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xianxia/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>仙侠<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045612503/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045612503"
                      >
                        凡人杀仙记
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045612503/850798870/"
                        data-eid="qd_A158"
                        data-bid="1045612503"
                        data-cid="850798870"
                        target="_blank"
                      >
                        第19章玉塔
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/10988227/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        我路风尘
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:14</i>
                    </td>
                  </tr>
                  <tr data-rid="13">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/2cy/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>轻小说<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044672016/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1044672016"
                      >
                        斗罗：从木叶归来，觉醒双生武魂
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1044672016/850172783/"
                        data-eid="qd_A158"
                        data-bid="1044672016"
                        data-cid="850172783"
                        target="_blank"
                      >
                        第一百三十八章柳志：我来送钱
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433544956/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        吐泡泡的白猫
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:14</i>
                    </td>
                  </tr>
                  <tr data-rid="14">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/dushi/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>都市<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044919475/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1044919475"
                      >
                        半岛黄金时代
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1044919475/851243264/"
                        data-eid="qd_A158"
                        data-bid="1044919475"
                        data-cid="851243264"
                        target="_blank"
                      >
                        第一百零五章撒娇女人最好命
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433925165/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        零八二九九
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:13</i>
                    </td>
                  </tr>
                  <tr data-rid="15">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/kehuan/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>科幻<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045495404/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045495404"
                      >
                        机甲高武：我靠系统掀翻星际文明
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045495404/851560947/"
                        data-eid="qd_A158"
                        data-bid="1045495404"
                        data-cid="851560947"
                        target="_blank"
                      >
                        第五十二章：方舟挽歌与深空独行
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/434014760/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        洛尘浅樱
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:13</i>
                    </td>
                  </tr>
                  <tr data-rid="16">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/2cy/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>轻小说<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045001146/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045001146"
                      >
                        这柯南世界可太好了
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045001146/844336204/"
                        data-eid="qd_A158"
                        data-bid="1045001146"
                        data-cid="844336204"
                        target="_blank"
                      >
                        第八章工藤新一的纽约事件（前篇）
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433941639/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        云下班人
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:13</i>
                    </td>
                  </tr>
                  <tr data-rid="17">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/lishi/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>历史<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045146022/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045146022"
                      >
                        碎甲天下
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045146022/851491477/"
                        data-eid="qd_A158"
                        data-bid="1045146022"
                        data-cid="851491477"
                        target="_blank"
                      >
                        第十二章天地异象
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433959391/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        金刚奴
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:13</i>
                    </td>
                  </tr>
                  <tr data-rid="18">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/dushi/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>都市<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045720426/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045720426"
                      >
                        这班谁爱上谁上
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045720426/851560481/"
                        data-eid="qd_A158"
                        data-bid="1045720426"
                        data-cid="851560481"
                        target="_blank"
                      >
                        第16章劫狱，劫持
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/434048938/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        作家BGwgBs
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:13</i>
                    </td>
                  </tr>
                  <tr data-rid="19">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/qihuan/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>奇幻<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045467344/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045467344"
                      >
                        黎海的奇妙冒险
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045467344/851561278/"
                        data-eid="qd_A158"
                        data-bid="1045467344"
                        data-cid="851561278"
                        target="_blank"
                      >
                        第四十一章才通人？
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/434011068/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        一点点难过
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:13</i>
                    </td>
                  </tr>
                  <tr data-rid="20">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/qihuan/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>奇幻<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044497315/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1044497315"
                      >
                        巫师：从领主开始跨位面征服
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1044497315/849222063/"
                        data-eid="qd_A158"
                        data-bid="1044497315"
                        data-cid="849222063"
                        target="_blank"
                      >
                        12.洞穴
                      </a>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/434037719/"
                        data-eid="qd_A159"
                        target="_blank"
                      >
                        渔鱼与浴雨
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:17</i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="update-table vip hidden">
              <table width="100%">
                <tbody>
                  <tr data-rid="1">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/dushi/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>都市<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045453926/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045453926"
                      >
                        美好人生从离婚开始
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045453926/851556802/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1045453926"
                        data-cid="851556802"
                      >
                        第10章介绍教练：女子游泳健将
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433931798/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        阎王家老三
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:19</i>
                    </td>
                  </tr>
                  <tr data-rid="2">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/dushi/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>都市<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1043217704/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1043217704"
                      >
                        我在欧洲当文豪
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1043217704/851561756/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1043217704"
                        data-cid="851561756"
                      >
                        第六百二十一章西村第一日
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/4362756/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        庚新
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:19</i>
                    </td>
                  </tr>
                  <tr data-rid="3">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/dushi/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>都市<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044790021/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1044790021"
                      >
                        华娱，捡属性成影帝
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1044790021/851562037/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1044790021"
                        data-cid="851562037"
                      >
                        第148章顺其自然
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433906712/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        愤怒的老妖婆
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:19</i>
                    </td>
                  </tr>
                  <tr data-rid="4">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/2cy/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>轻小说<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1043914754/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1043914754"
                      >
                        斗罗：我斗帝残魂，附身千仞雪！
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1043914754/851556891/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1043914754"
                        data-cid="851556891"
                      >
                        第一百八十二章：修罗脑袋被驴踢了?
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433207249/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        毛白疯大
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:19</i>
                    </td>
                  </tr>
                  <tr data-rid="5">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xuanhuan/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>玄幻<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1043244704/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1043244704"
                      >
                        从劈材开始，到独断万古
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1043244704/851558244/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1043244704"
                        data-cid="851558244"
                      >
                        第382章天悟空间
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433515766/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        窃语者
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:18</i>
                    </td>
                  </tr>
                  <tr data-rid="6">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xuanhuan/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>玄幻<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044149705/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1044149705"
                      >
                        遮天：天下人间
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1044149705/851559064/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1044149705"
                        data-cid="851559064"
                      >
                        第一百三十六章对峙
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433897721/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        符虚
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:18</i>
                    </td>
                  </tr>
                  <tr data-rid="7">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xuanhuan/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>玄幻<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044617158/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1044617158"
                      >
                        完美世界：开局祭祀铜棺之主
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1044617158/851485758/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1044617158"
                        data-cid="851485758"
                      >
                        第一百五十三章真正的万仙来朝
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/401715429/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        男儿到死心如铁
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:18</i>
                    </td>
                  </tr>
                  <tr data-rid="8">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/zhutianwuxian/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>诸天无限<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044125177/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1044125177"
                      >
                        吞噬星空：从狐妖开始诸天交易
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1044125177/851561843/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1044125177"
                        data-cid="851561843"
                      >
                        第181章：攻守改变
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/432798180/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        菜风风
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:18</i>
                    </td>
                  </tr>
                  <tr data-rid="9">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/junshi/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>军事<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1036078391/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1036078391"
                      >
                        烽火从壮士出川开始
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1036078391/851552571/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1036078391"
                        data-cid="851552571"
                      >
                        第532章世界第一怂蛋
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/431958667/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        大漠山如雪
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:18</i>
                    </td>
                  </tr>
                  <tr data-rid="10">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/lishi/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>历史<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045052822/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045052822"
                      >
                        大宋有喷子
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045052822/851297992/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1045052822"
                        data-cid="851297992"
                      >
                        第一百零二章佛门清修地
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433349290/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        长夜天高
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:18</i>
                    </td>
                  </tr>
                  <tr data-rid="11">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/lishi/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>历史<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044459464/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1044459464"
                      >
                        红楼：开局李代桃僵杀贾琏
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1044459464/851524276/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1044459464"
                        data-cid="851524276"
                      >
                        第108章：一等公，百万银，妖清重酬，招降贾琏
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433855198/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        芝士红烧肉
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:17</i>
                    </td>
                  </tr>
                  <tr data-rid="12">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/dushi/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>都市<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1039062007/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1039062007"
                      >
                        影帝：我谢谢你哦
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1039062007/851561317/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1039062007"
                        data-cid="851561317"
                      >
                        第一千零五十四章50克就毙
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/404189185/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        翻滚的肚皮
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:17</i>
                    </td>
                  </tr>
                  <tr data-rid="13">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xuanhuan/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>玄幻<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044924761/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1044924761"
                      >
                        从将师姐炼成剑胎开始
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1044924761/851555012/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1044924761"
                        data-cid="851555012"
                      >
                        第128章你能在我手下活过一剑的唯一理由（3千字求订阅）
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433557464/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        奶味斑斓糕
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:16</i>
                    </td>
                  </tr>
                  <tr data-rid="14">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/kehuan/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>科幻<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1043737425/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1043737425"
                      >
                        人在现实，超脱彼岸
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1043737425/851561092/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1043737425"
                        data-cid="851561092"
                      >
                        第一千零三十五章何谓命定
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/9404998/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        易子七
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:16</i>
                    </td>
                  </tr>
                  <tr data-rid="15">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xianxia/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>仙侠<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1043948877/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1043948877"
                      >
                        修仙：从种田收获奖励开始长生
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1043948877/851438301/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1043948877"
                        data-cid="851438301"
                      >
                        第257章储物灵戒
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433746545/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        吾旗
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:16</i>
                    </td>
                  </tr>
                  <tr data-rid="16">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/zhutianwuxian/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>诸天无限<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044031427/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1044031427"
                      >
                        火影：父亲竟然也是穿越者
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1044031427/851560933/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1044031427"
                        data-cid="851560933"
                      >
                        第269章毕竟她已经叫宇智波雏田了
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433729076/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        妖孽小牛牛
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:16</i>
                    </td>
                  </tr>
                  <tr data-rid="17">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/lishi/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>历史<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044887184/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1044887184"
                      >
                        三国：我，蔡瑁，大汉忠良
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1044887184/851554478/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1044887184"
                        data-cid="851554478"
                      >
                        第153章突传噩耗
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433920563/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        一天心光
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:16</i>
                    </td>
                  </tr>
                  <tr data-rid="18">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/dushi/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>都市<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1045012187/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1045012187"
                      >
                        华娱：导演在上
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1045012187/851443813/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1045012187"
                        data-cid="851443813"
                      >
                        第128章：院线的支持
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/402250586/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        忽见雪白
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:16</i>
                    </td>
                  </tr>
                  <tr data-rid="19">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/xianxia/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>仙侠<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1043686370/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1043686370"
                      >
                        种出个长生仙道
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1043686370/851521106/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1043686370"
                        data-cid="851521106"
                      >
                        第二百五十七章前往天玄州
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/433714100/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        来杯热咖啡
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:16</i>
                    </td>
                  </tr>
                  <tr data-rid="20">
                    <td>
                      <a
                        className="classify"
                        href="//www.qidian.com/zhutianwuxian/"
                        data-eid="qd_A156"
                        target="_blank"
                      >
                        <em>「</em>诸天无限<em>」</em>
                      </a>
                    </td>
                    <td>
                      <a
                        className="name"
                        href="//www.qidian.com/book/1044203764/"
                        target="_blank"
                        data-eid="qd_A157"
                        data-bid="1044203764"
                      >
                        火影：我的跨次元群友全是超影
                      </a>
                    </td>
                    <td>
                      <a
                        className="section"
                        href="//www.qidian.com/chapter/1044203764/851519514/"
                        target="_blank"
                        data-eid="qd_A158"
                        data-bid="1044203764"
                        data-cid="851519514"
                      >
                        第227章暗杀者
                      </a>
                      <span className="vip"></span>
                    </td>
                    <td className="respon">
                      <a
                        className="author"
                        href="//my.qidian.com/author/432751602/"
                        target="_blank"
                        data-eid="qd_A159"
                      >
                        渡鸦621
                      </a>
                    </td>
                    <td className="respon">
                      <i>07-29 20:16</i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="god-wrap fr" data-l2="3">
          <h3 className="wrap-title lang">
            大神俱乐部
            <a href="//www.qidian.com/dashen/" target="_blank">
              更多<em className="iconfont more-dashen"></em>
            </a>
          </h3>
          <div className="god-list">
            <ul>
              <li data-rid="1">
                <div className="god-info">
                  <div className="photo">
                    <a
                      href="//my.qidian.com/author/2142506/"
                      target="_blank"
                      data-eid="qd_A161"
                    >
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/common/author_boy.png"
                        data-original="https://ccportrait.yuewen.com/apimg/349573/p_3004442800626201/100"
                      />
                    </a>
                  </div>
                  <h3>
                    <a
                      href="//my.qidian.com/author/2142506/"
                      target="_blank"
                      data-eid="qd_A160"
                    >
                      国王陛下
                    </a>
                  </h3>
                  <p className="type">阅文集团大神作家</p>
                  <h4>代表作</h4>
                  <p className="works cf">
                    <a
                      href="//www.qidian.com/book/3683064/"
                      target="_blank"
                      data-eid="qd_A162"
                      data-bid="3683064"
                    >
                      崩坏星河
                    </a>
                    <span>|</span>
                    <a
                      href="//www.qidian.com/book/3347574/"
                      target="_blank"
                      data-eid="qd_A162"
                      data-bid="3347574"
                    >
                      从前有座灵剑山
                    </a>
                  </p>
                  <p className="intro">
                    阅文集团大神作家，网络文学知名玄幻作家。《从前有座灵剑山》改编动漫广受好评。
                  </p>
                </div>
              </li>
              <li data-rid="2">
                <div className="god-info">
                  <div className="photo">
                    <a
                      href="//my.qidian.com/author/421/"
                      target="_blank"
                      data-eid="qd_A161"
                    >
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/common/author_boy.png"
                        data-original="https://ccportrait.yuewen.com/apimg/349573/p_3624897804782601/100"
                      />
                    </a>
                  </div>
                  <h3>
                    <a
                      href="//my.qidian.com/author/421/"
                      target="_blank"
                      data-eid="qd_A160"
                    >
                      流浪的蛤蟆
                    </a>
                  </h3>
                  <p className="type">阅文集团大神作家</p>
                  <h4>代表作</h4>
                  <p className="works cf">
                    <a
                      href="//www.qidian.com/book/57431/"
                      target="_blank"
                      data-eid="qd_A162"
                      data-bid="57431"
                    >
                      蜀山
                    </a>
                    <span>|</span>
                    <a
                      href="//www.qidian.com/book/148396/"
                      target="_blank"
                      data-eid="qd_A162"
                      data-bid="148396"
                    >
                      母皇
                    </a>
                    <span>|</span>
                    <a
                      href="//www.qidian.com/book/1475169/"
                      target="_blank"
                      data-eid="qd_A162"
                      data-bid="1475169"
                    >
                      仙葫
                    </a>
                  </p>
                  <p className="intro">
                    阅文集团大神作家，网络文学知名作家，文笔汪洋恣肆，行文天马行空，极富创造力。
                  </p>
                </div>
              </li>
              <li data-rid="3">
                <div className="god-info">
                  <div className="photo">
                    <a
                      href="//my.qidian.com/author/1625300/"
                      target="_blank"
                      data-eid="qd_A161"
                    >
                      <img
                        className="lazy"
                        src="//qdfepccdn.qidian.com/www.qidian.com/images/common/author_boy.png"
                        data-original="https://ccportrait.yuewen.com/apimg/349573/p_3633101804289701/100"
                      />
                    </a>
                  </div>
                  <h3>
                    <a
                      href="//my.qidian.com/author/1625300/"
                      target="_blank"
                      data-eid="qd_A160"
                    >
                      曾经拥有的方向感
                    </a>
                  </h3>
                  <p className="type">阅文集团大神作家</p>
                  <h4>代表作</h4>
                  <p className="works cf">
                    <a
                      href="//www.qidian.com/book/1753416/"
                      target="_blank"
                      data-eid="qd_A162"
                      data-bid="1753416"
                    >
                      超级融合
                    </a>
                    <span>|</span>
                    <a
                      href="//www.qidian.com/book/2139407/"
                      target="_blank"
                      data-eid="qd_A162"
                      data-bid="2139407"
                    >
                      符宝
                    </a>
                    <span>|</span>
                    <a
                      href="//www.qidian.com/book/2987646/"
                      target="_blank"
                      data-eid="qd_A162"
                      data-bid="2987646"
                    >
                      独步仙尘
                    </a>
                  </p>
                  <p className="intro">
                    阅文集团大神作家，网络文学知名作家，作品风格热血爽白，剧情节奏感很强！
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="time-limit-wrap box-center mb40" data-l1="20">
        <ul id="numero5" className="cf">
          <li
            id="time-box"
            className="time-box odd"
            data-endtime="1753855199000"
          >
            <div className="limit-wrap">
              <h3 className="lang">限时免费</h3>
              <p className="type">VIP章节免费读</p>
              <em className="iconfont"></em>
              <p className="countdown" id="countdown">
                <i>
                  <cite className="day">-</cite>
                </i>
                <em>天</em>
                <i>
                  <cite className="hour">--</cite>:
                  <cite className="minute">--</cite>:
                  <cite className="second">--</cite>
                </i>
              </p>
              <a
                className="blue"
                href="//www.qidian.com/free/"
                target="_blank"
                data-eid="qd_A163"
              >
                进入限免频道<span>&gt;</span>
              </a>
            </div>
          </li>
          <li className="even" data-rid="1">
            <div className="book-img">
              <a
                href="//www.qidian.com/book/1043162158/"
                target="_blank"
                data-eid="qd_A164"
                data-bid="1043162158"
              >
                <img
                  className="lazy"
                  src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                  data-original="//bookcover.yuewen.com/qdbimg/349573/1043162158/90.webp"
                  alt="死去的我，正在全力攻略魔女"
                />
              </a>
            </div>
            <a
              className="name"
              href="//www.qidian.com/book/1043162158/"
              target="_blank"
              data-eid="qd_A165"
              data-bid="1043162158"
            >
              死去的我，正在全力攻略魔女
            </a>
            <s>5起点币⁄千字</s>
            <a
              className="free-blue-btn"
              href="//www.qidian.com/book/1043162158/"
              target="_blank"
              data-eid="qd_A166"
              data-bid="1043162158"
            >
              免费阅读
            </a>
          </li>
          <li className="odd" data-rid="2">
            <div className="book-img">
              <a
                href="//www.qidian.com/book/1043053644/"
                target="_blank"
                data-eid="qd_A164"
                data-bid="1043053644"
              >
                <img
                  className="lazy"
                  src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                  data-original="//bookcover.yuewen.com/qdbimg/349573/1043053644/90.webp"
                  alt="大道飘渺"
                />
              </a>
            </div>
            <a
              className="name"
              href="//www.qidian.com/book/1043053644/"
              target="_blank"
              data-eid="qd_A165"
              data-bid="1043053644"
            >
              大道飘渺
            </a>
            <s>5起点币⁄千字</s>
            <a
              className="free-blue-btn"
              href="//www.qidian.com/book/1043053644/"
              target="_blank"
              data-eid="qd_A166"
              data-bid="1043053644"
            >
              免费阅读
            </a>
          </li>
          <li className="even" data-rid="3">
            <div className="book-img">
              <a
                href="//www.qidian.com/book/1042577146/"
                target="_blank"
                data-eid="qd_A164"
                data-bid="1042577146"
              >
                <img
                  className="lazy"
                  src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                  data-original="//bookcover.yuewen.com/qdbimg/349573/1042577146/90.webp"
                  alt="文娱：你就是这么玩音乐的？！"
                />
              </a>
            </div>
            <a
              className="name"
              href="//www.qidian.com/book/1042577146/"
              target="_blank"
              data-eid="qd_A165"
              data-bid="1042577146"
            >
              文娱：你就是这么玩音乐的？！
            </a>
            <s>5起点币⁄千字</s>
            <a
              className="free-blue-btn"
              href="//www.qidian.com/book/1042577146/"
              target="_blank"
              data-eid="qd_A166"
              data-bid="1042577146"
            >
              免费阅读
            </a>
          </li>
          <li className="odd" data-rid="4">
            <div className="book-img">
              <a
                href="//www.qidian.com/book/1042679871/"
                target="_blank"
                data-eid="qd_A164"
                data-bid="1042679871"
              >
                <img
                  className="lazy"
                  src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                  data-original="//bookcover.yuewen.com/qdbimg/349573/1042679871/90.webp"
                  alt="科技制霸：我的员工真不是人！"
                />
              </a>
            </div>
            <a
              className="name"
              href="//www.qidian.com/book/1042679871/"
              target="_blank"
              data-eid="qd_A165"
              data-bid="1042679871"
            >
              科技制霸：我的员工真不是人！
            </a>
            <s>5起点币⁄千字</s>
            <a
              className="free-blue-btn"
              href="//www.qidian.com/book/1042679871/"
              target="_blank"
              data-eid="qd_A166"
              data-bid="1042679871"
            >
              免费阅读
            </a>
          </li>
          <li className="even" data-rid="5">
            <div className="book-img">
              <a
                href="//www.qidian.com/book/1044412902/"
                target="_blank"
                data-eid="qd_A164"
                data-bid="1044412902"
              >
                <img
                  className="lazy"
                  src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                  data-original="//bookcover.yuewen.com/qdbimg/349573/1044412902/90.webp"
                  alt="都是真实体验，你让同行怎么演？"
                />
              </a>
            </div>
            <a
              className="name"
              href="//www.qidian.com/book/1044412902/"
              target="_blank"
              data-eid="qd_A165"
              data-bid="1044412902"
            >
              都是真实体验，你让同行怎么演？
            </a>
            <s>5起点币⁄千字</s>
            <a
              className="free-blue-btn"
              href="//www.qidian.com/book/1044412902/"
              target="_blank"
              data-eid="qd_A166"
              data-bid="1044412902"
            >
              免费阅读
            </a>
          </li>
          <li className="odd" data-rid="6">
            <div className="book-img">
              <a
                href="//www.qidian.com/book/1038435956/"
                target="_blank"
                data-eid="qd_A164"
                data-bid="1038435956"
              >
                <img
                  className="lazy"
                  src="//qdfepccdn.qidian.com/www.qidian.com/images/common/default_book.png"
                  data-original="//bookcover.yuewen.com/qdbimg/349573/1038435956/90.webp"
                  alt="修真污染源"
                />
              </a>
            </div>
            <a
              className="name"
              href="//www.qidian.com/book/1038435956/"
              target="_blank"
              data-eid="qd_A165"
              data-bid="1038435956"
            >
              修真污染源
            </a>
            <s>5起点币⁄千字</s>
            <a
              className="free-blue-btn"
              href="//www.qidian.com/book/1038435956/"
              target="_blank"
              data-eid="qd_A166"
              data-bid="1038435956"
            >
              免费阅读
            </a>
          </li>
        </ul>
      </div>

      <div className="filter-search-wrap" data-l1="21">
        <div className="box-center cf">
          <div className="filter-search-box fl">
            <div className="title fl">没有找到？试试这里</div>
            <div className="filter-search fl">
              <div className="lbf-combobox classify" id="classify">
                <a
                  href="javascript:;"
                  className="lbf-button lbf-combobox-label"
                  data-value="21"
                  hidefocus="true"
                >
                  <span className="lbf-combobox-caption">玄幻</span>
                  <span className="lbf-icon lbf-icon-down lbf-combobox-icon"></span>
                </a>
              </div>
              <div className="lbf-combobox" id="serial">
                <a
                  href="javascript:;"
                  className="lbf-button lbf-combobox-label"
                  data-value="0"
                  hidefocus="true"
                >
                  <span className="lbf-combobox-caption">连载</span>
                  <span className="lbf-icon lbf-icon-down lbf-combobox-icon"></span>
                </a>
              </div>
              <div className="lbf-combobox" id="charge">
                <a
                  href="javascript:;"
                  className="lbf-button lbf-combobox-label"
                  data-value="0"
                  hidefocus="true"
                >
                  <span className="lbf-combobox-caption">免费</span>
                  <span className="lbf-icon lbf-icon-down lbf-combobox-icon"></span>
                </a>
              </div>
              <div className="lbf-combobox words" id="words">
                <a
                  href="javascript:;"
                  className="lbf-button lbf-combobox-label"
                  data-value="5"
                  hidefocus="true"
                >
                  <span className="lbf-combobox-caption">200万以上</span>
                  <span className="lbf-icon lbf-icon-down lbf-combobox-icon"></span>
                </a>
              </div>
              <div className="lbf-combobox tags" id="tags">
                <a
                  href="javascript:;"
                  className="lbf-button lbf-combobox-label"
                  data-value="全部标签"
                  hidefocus="true"
                >
                  <span className="lbf-combobox-caption">全部标签</span>
                  <span className="lbf-icon lbf-icon-down lbf-combobox-icon"></span>
                </a>
              </div>
              <a
                id="btn-filter-search"
                className="red-btn"
                href="javascript:"
                target="_blank"
                data-eid="qd_A167"
              >
                按条件找书
              </a>
            </div>
          </div>
          <div className="everyone fl" data-eid="qd_A147">
            <p className="title fl">大家都在搜</p>
            <div className="key-words fl">
              <a
                href="http://www.qidian.com/all?size=4&amp;chanId=21&amp;action=0"
                target="_blank"
                data-eid="qd_A168"
              >
                玄幻+连载+100万~200万
              </a>
              <a
                href="http://www.qidian.com/all?chanId=4&amp;action=0&amp;vip=1"
                target="_blank"
                data-eid="qd_A168"
              >
                都市+连载+vip
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="box-center cf">
          <div className="friend-link">
            <em>
              <a className="yuewen" href="//www.yuewen.com" target="_blank">
                阅文集团
              </a>
              <cite>旗下网站：</cite>
            </em>
            <a href="//www.qidian.com/">起点中文网</a>
            <a href="//www.qdmm.com/" target="_blank">
              起点女生网
            </a>
            <a href="//book.qq.com" target="_blank">
              QQ阅读
            </a>
            <a href="http://yuedu.yuewen.com" target="_blank">
              阅文悦读
            </a>
            <a href="//www.qidian.com/booklist/">书单</a>
            <a href="//www.qidian.com/ziyuan">起点资源站</a>
            <a href="//www.qidian.com/recommendbooklist/"></a>
            <a href="//www.qidian.com/ask"></a>
          </div>
          <div className="footer-menu dib-wrap">
            <a href="//www.qidian.com/about/intro" target="_blank">
              关于起点
            </a>
            <a href="//www.qidian.com/about/contact" target="_blank">
              联系我们
            </a>
            <a href="//join.yuewen.com" rel="nofollow" target="_blank">
              加入我们
            </a>
            <a href="//www.qidian.com/help" target="_blank">
              帮助与客服
            </a>
            <a href="//jubao.yuewen.com" rel="nofollow" target="_blank">
              举报中心
            </a>
            <a href="//security.tencent.com/" rel="nofollow" target="_blank">
              漏洞提交
            </a>
          </div>
          <div className="copy-right">
            <p>
              <span>
                Copyright © 2002-2025 www.qidian.com All Rights Reserved
                版权所有 上海玄霆娱乐信息科技有限公司
              </span>
            </p>
            <p>
              <a
                target="_blank"
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502001275"
              >
                <img src="https://imgservices-1252317822.image.myqcloud.com/image/20191223/o5lajshfcw.png" />
                <span>沪公网安备 31011502001275号</span>
              </a>
              <span>
                增值电信业务经营许可证：沪B2-20080046 互联网ICP备案号：
              </span>
              <a href="http://beian.miit.gov.cn" target="_blank">
                沪B2-20080046-1
              </a>
              <span>&nbsp;出版经营许可证：新出发沪批字第 U3718 号</span>
            </p>
            <p>
              <span>
                网络文化经营许可证：沪网文(2023)4752-318号
                网络出版服务许可证：（署）网出证（沪）字第055号&nbsp;
              </span>
              <a
                target="_blank"
                href="https://imgservices-1252317822.image.myqcloud.com/coco/s04012024/d698734f.nem0bq.png"
              >
                营业执照
              </a>
              &nbsp;&nbsp;
              <a
                target="_blank"
                href="https://imgservices-1252317822.image.myqcloud.com/coco/s11062023/655b2b94.f2jl6x.png"
              >
                <span>互联网宗教信息服务许可证 编号：沪（2022）0000022</span>
              </a>
            </p>
            <p>
              请所有作者发布作品时务必遵守国家互联网信息管理办法规定，我们拒绝任何色情小说，一经发现，即作删除！举报电话：010-59357051
            </p>
            <p>
              本站所收录的作品、社区话题、用户评论、用户上传内容或图片等均属用户个人行为。如前述内容侵害您的权益，欢迎举报投诉，一经核实，立即删除，本站不承担任何责任
            </p>
            <p>
              联系方式 总机 021-61870500
              地址：中国（上海）自由贸易试验区环科路999弄1号706室
            </p>
          </div>
          <div className="safety-box">
            <div className="safety-img dib-wrap">
              <a
                className="site3"
                href="http://cyberpolice.mps.gov.cn/wfjb"
                target="_blank"
              ></a>
              <a
                className="site4"
                href="https://ss.knet.cn/verifyseal.dll?sn=e18013031011571840mt51000000&amp;pa=111332"
                target="_blank"
              ></a>
              <a
                className="site6"
                href="http://www.12377.cn/"
                target="_blank"
              ></a>
              <a
                className="site5"
                href="http://www.shjbzx.cn"
                target="_blank"
              ></a>
            </div>
          </div>
        </div>
      </div>

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
            {/* <!-- <span className="loop loop2"><em className="icon icon-scan"></em><p className="icon-txt">扫一扫</p></span> --> */}
            {/* <!-- <span className="loop loop3"><em className="icon icon-redbag"></em><p className="icon-txt">领红包</p></span> --> */}
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
    </div>
  );
}
