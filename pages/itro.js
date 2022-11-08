import React from "react";
import Styles from "../styles/itro.module.css";
import Layout from "../components/Layout";
import Slider from "react-slick";
import Kakao from "../components/kakaoa";

export default function ad() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Layout title="Home">
      <div className={Styles.main}>
        <div className={Styles.left}>
          <div className={Styles.silde}>
            <Slider {...settings}>
              <div className={Styles.slideimgbox}>
                <h3>
                  <img className={Styles.slideimg} src="images/001.jpg"></img>
                </h3>
              </div>
              <div className={Styles.slideimgbox}>
                <h3>
                  <img className={Styles.slideimg} src="images/002.jpg"></img>
                </h3>
              </div>
              <div className={Styles.slideimgbox}>
                <h3>
                  <img className={Styles.slideimg} src="images/003.jpg"></img>
                </h3>
              </div>
              <div className={Styles.slideimgbox}>
                <h3>
                  <img className={Styles.slideimg} src="images/004.jpg"></img>
                </h3>
              </div>
              <div className={Styles.slideimgbox}>
                <h3>
                  <img className={Styles.slideimg} src="images/005.jpg"></img>
                </h3>
              </div>
              <div className={Styles.slideimgbox}>
                <h3>
                  <img className={Styles.slideimg} src="images/006.jpg"></img>
                </h3>
              </div>
            </Slider>
          </div>
        </div>
        <div className={Styles.right}>
          <div className={Styles.introa}>
            <div className={Styles.atitle}>이거다무야호!!</div>
            <div className={Styles.awrite}>이 축제 정말 대단합니다!</div>
          </div>
          <div className={Styles.introb}></div>
          <div className={Styles.introcc}>
            <button className={Styles.btn}>축제행사장안내도</button>
            <button className={Styles.btn}>축제찾아오는길</button>
            <button className={Styles.btn}>주변숙박시설/먹거리</button>
            <button className={Styles.btn}>주변 추천하는 관광지</button>
          </div>
          <div className={Styles.introc}>
            <Kakao></Kakao>
          </div>
        </div>
      </div>
    </Layout>
  );
}
