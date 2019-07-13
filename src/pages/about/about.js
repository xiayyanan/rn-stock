import React, { Component } from 'react';
import Header from '@/components/header/header';
import './about.less'
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    document.body.style.background = "#ffffff";
    document.querySelector(".rnui-content").style.background = "#ffffff";
  }

  componentWillUnmount() {
    document.body.removeAttribute("style");
    document.querySelector(".rnui-content").removeAttribute("style");
  }
  render() {
    return (
      <div id="My">
        <Header name="关于我们" isNoline={true}></Header>
        <div className="rnui-content">
          <div className="about">
            <div className="aboutCnt">
              <p>牛钱策（www.niucl.cn）隶属于宁波杭州湾新区天群网络科技有限公司，是全国首批响应国家“普惠金融”号召的互联网创新企业。 </p>
              <p>&nbsp;</p>
              <p>牛钱策初创团队由国内知名互联网公司阿里、腾讯及多位金融领域的资深专家共同组建而成，产品由原百度研发团队开发完成并投入市场。依托四年线下客户投融资咨询及互联网产品开发的经验及资源，赢得了良好的用户口碑，随着平台快速的发展，借助互联网创新之势，强势推出各种互联网产品，牛策略已成为互联网投融资领域的领军品牌。 </p>
              <p>&nbsp;</p>
              <p>牛钱策以"安全第一，用户至上"的理念，始终坚持严格的风险管理流程、创新的互联网技术、优质的客户服务确保投资者获得更好的产品体验，让投资者能够轻松简单的实现财富梦想。 </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;