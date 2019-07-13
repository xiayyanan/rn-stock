import React, { Component } from 'react';
import Header from '@/components/header/header';
import './help.less'
class HelpShow extends Component {
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
      <div id="Help">
        <Header name="帮助中心" isNoline={true}></Header>
        <div className="rnui-content">
          <div className="helpShow">
            <div className="helpShowHd">
              <h1 className="title">如何更改绑定的银行卡？</h1>
              <p className="info">
                <span>2018-05-03 17:37</span>
                <span className="space">阅读：21万+</span>
              </p>
            </div>
            <div className="helpContent">
              <p>用户可以在 我的银行卡中自行解绑；但是您如果遇到在投资金的银行卡注销等异常情况时需按以下步骤操作解绑：</p>
              <p className="mt10">a.对所持有的所有资产发起转出操作。 </p>
              <p className="mt10">b.提供所持有资产对应的基金/保险公司线下赎回所需要的资料，由小米客服收集完成以后，转发给相对应基金/保险公司，审核通过后，基金/保险公司向用户新银行卡中打款。</p>
              <p className="mt10">c.完成打款后，您在小米金融APP中理财财产清零，此时您可以在APP中进行无份额换卡，将原先绑定的卡换成需要的新银行卡。</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HelpShow;