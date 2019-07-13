import Index from "../pages/index/index";
import Buy from "../pages/buy/buy";
import Sell from "../pages/sell/sell";
import Settle from "../pages/settle/settle";
import Optional from "../pages/optional/optional";
import Search from "../pages/search/search";
import Login from "../pages/login/login";
import Loginyzm from "../pages/login/loginyzm";
import Loginpwd from "../pages/login/loginpwd";
import Reg from "../pages/login/reg";
import My from "../pages/my/my";
import MyFunds from "../pages/myFunds/myFunds";
import MyCoupon from "../pages/myCoupon/myCoupon";
import MyMember from "../pages/myMember/myMember";
import MyBenefit from "../pages/myBenefit/myBenefit";
import MyTrading from "../pages/myTrading/myTrading";
import MySpread from "../pages/mySpread/mySpread";
import MyBank from "../pages/myBank/myBank";
import MyBankAdd from "../pages/myBank/myBankAdd";
import MyRunning from "../pages/myRunning/myRunning";
import MySet from "../pages/mySet/mySet";
import MyInfo from "../pages/mySet/myInfo";
import MyAuth from "../pages/mySet/myAuth";
import MyPhone from "../pages/mySet/myPhone";
import MyPwd from "../pages/mySet/myPwd";
import About from "../pages/about/about";
import Help from "../pages/help/help";
import Rule from "../pages/help/rule";
import HelpShow from "../pages/help/helpShow";
import Message from "../pages/message/message";
import MyServices from "../pages/myServices/myServices";
import News from "../pages/news/news";
import Nshow from "../pages/news/nshow";


const routers = [
    { name: "Index", path: "/", component: Index },
    { name: "Buy", path: "/Buy", component: Buy },
    { name: "Sell", path: "/Sell", component: Sell },
    { name: "Settle", path: "/Settle", component: Settle },
    { name: "Optional", path: "/Optional", component: Optional },
    { name: "Search", path: "/Search", component: Search },
    { name: "Login", path: "/Login", component: Login },
    { name: "Loginyzm", path: "/Loginyzm", component: Loginyzm },
    { name: "Loginpwd", path: "/Loginpwd", component: Loginpwd },
    { name: "Reg", path: "/Reg", component: Reg },
    { name: "My", path: "/My", component: My, auth: true },
    { name: "MyFunds", path: "/myFunds", component: MyFunds, auth: true },
    { name: "MyCoupon", path: "/myCoupon", component: MyCoupon, auth: true },
    { name: "MyMember", path: "/myMember", component: MyMember, auth: true },
    { name: "MyBenefit", path: "/myBenefit", component: MyBenefit, auth: true },
    { name: "MyTrading", path: "/myTrading", component: MyTrading, auth: true },
    { name: "MySpread", path: "/mySpread", component: MySpread, auth: true },
    { name: "MyBank", path: "/myBank", component: MyBank, auth: true },
    { name: "MyBankAdd", path: "/myBankAdd", component: MyBankAdd, auth: true },
    { name: "MyRunning", path: "/myRunning", component: MyRunning, auth: true },
    { name: "MySet", path: "/mySet", component: MySet, auth: true },
    { name: "MyInfo", path: "/myInfo", component: MyInfo, auth: true },
    { name: "MyAuth", path: "/myAuth", component: MyAuth, auth: true },
    { name: "MyPhone", path: "/myPhone", component: MyPhone, auth: true },
    { name: "MyPwd", path: "/myPwd", component: MyPwd, auth: true },
    { name: "About", path: "/about", component: About, auth: true },
    { name: "Help", path: "/help", component: Help, auth: true },
    { name: "HelpShow", path: "/helpShow", component: HelpShow, auth: true },
    { name: "Message", path: "/message", component: Message, auth: true },
    { name: "MyServices", path: "/myServices", component: MyServices, auth: true },
    { name: "Rule", path: "/rule", component: Rule, auth: true },
    { name: "News", path: "/news", component: News, auth: true },
    { name: "Nshow", path: "/nshow", component: Nshow, auth: true }
];
export default routers;