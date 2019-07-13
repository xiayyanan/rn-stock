import Mock from 'mockjs'
import helpData from "./mock/help"
import messageData from "./mock/message"
import ruleData from "./mock/rule"
import newsData from "./mock/news"

const help = Mock.mock('/help', {
	"help": helpData
});

const message = Mock.mock('/message', {
	"message": messageData
});

const rule = Mock.mock('/rule', {
	"rule": ruleData
});

const news = Mock.mock('/news', {
	"news": newsData
});

export {
	help,
	message,
	rule,
	news
}