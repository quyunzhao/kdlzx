import React, { Component } from "react";

import "../assets/fonts/iconfont.css";
import "../assets/styles/detailPage.less";

import Header from "../components/Header";
import Img from "../components/Img";

export default class DetailPage extends Component {
  render() {
    return (
      <div className="detail-page">
        {/* 头部组件 */}
        <div className="detail-header">
          <Header isDetail></Header>
        </div>

        {/* 文章 */}
        <article>
          <h1>关于申报2021年度陕西省教育厅科研计划项目的通知</h1>
          <p>
            <span>发布时间：2020-12-17 16:07:38</span>
            <span style={{ float: "right" }}>浏览：1305</span>
          </p>
          <Img src="huijingshen.jpg" height={150}></Img>
          <content>
            <p>
              西安石油大学是西北地区惟一一所以石油石化为特色的多科性普通高等学校，是陕西省人民政府和国家三大石油公司共建院校、陕西省高水平大学建设院校、中国政府奖学金来华留学生自主招生院校。
            </p>
            <p>
              学校肇始于1951年创立的西北石油工业专科学校，隶属于中央燃料工业部。1958年，升本并更名为西安石油学院。1969年，学院停办改厂。1980年，西安石油学院恢复办学，隶属于石油工业部。2000年，由中国石油天然气集团公司所属划转为中央与地方共建、以陕西省人民政府管理为主。2003年，更名为西安石油大学。2011年，入选陕西省高水平大学建设院校。
            </p>
            <p>
              学校雁塔校区位于西安市电子二路东段18号，明德校区位于西安市丈八东路11号，鄠邑校区位于西安市沣京工业园沣京大道18号。学校占地2078亩，固定资产总值28.12亿元，仪器设备总值6.06亿元。
            </p>
            <p>
              学校学科特色鲜明，学科门类较为齐全，具有从本科、硕士研究生到博士研究生完整的人才培养体系。学校有1个博士学位授权一级学科，15个硕士学位授权一级学科，13个硕士专业学位授权类别，其中“石油与天然气工程领域”获“全国工程硕士研究生教育特色工程领域”荣誉称号，是陕西省博士后创新基地。学校设有石油与天然气工程学科博士后科研流动站。学校具有“推荐优秀应届本科毕业生免试攻读硕士学位研究生院校”资格。59个本科专业中有5个国家级特色专业、3个专业入选国家级一流本科专业建设点、11个专业入选省级一流本科专业建设点、5个国家“卓越工程师教育培养计划”试点专业、3个国家级专业综合改革试点项目、10个陕西省特色专业、5个陕西省名牌专业、3个第二学士学位专业。有7个陕西省普通高等学校优势学科、1个陕西省普通高校哲学社会科学特色建设项目。
            </p>
          </content>
          <p>
            <span>
              <i className="iconfont icon-shouji"></i>
              635人观看
            </span>
            <span style={{ float: "right" }}>
              <i className="iconfont icon-Lock_icon"></i>
              我要点赞
            </span>
          </p>
        </article>
      </div>
    );
  }
}
