import React, { Component } from 'react';
import api from "@/http/api";
class Trading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stockData: []
        };
        this.getStock = this.getStock.bind(this);
    }
    getStock() {
        let _self = this;
        let stockCode = [
            {
                code: "sh600036",
                isPost: true
            },
            {
                code: "sh600050",
                isPost: false
            },
            {
                code: "sh601288",
                isPost: true
            },
            {
                code: "sz000036",
                isPost: false
            },
            {
                code: "sh601939",
                isPost: true
            },
            {
                code: "sz000800",
                isPost: true
            },
            {
                code: "sh600519",
                isPost: false
            },
            {
                code: "sz000411",
                isPost: true
            },
            {
                code: "sz000425",
                isPost: true
            },
            {
                code: "sz000030",
                isPost: false
            }
        ];
        const codes = stockCode.map((item) => {
            return item.code;
        })
        api
            .get("sinaApi/list=" + codes.join())
            .then(function (response) {
                let arr = response.data.split(";");
                let arrm = [];
                arr.pop();
                arr.forEach((item, index) => {
                    let arrs = item.split('"')[1].split(",");
                    let quotes = parseFloat(arrs[3]) - parseFloat(arrs[2]);
                    arrm.push({
                        name: arrs[0],
                        code: stockCode[index].code,
                        post: stockCode[index].isPost,
                        price: parseFloat(arrs[3]).toFixed(2),
                        quotesp: ((quotes / parseFloat(arrs[2])) * 100).toFixed(2)
                    });
                });
                _self.setState({
                    stockData: arrm
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidMount() {
        this.getStock();
        this.timer = setInterval(() => {
            this.getStock();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const tradingData = this.state.stockData;
        return (
            <ul className="trading">
                {tradingData.map((item, index) => (
                    <li className="item" key={index}>
                        <div className="stock">
                            <p className="name">
                                <span className="stocks">{item.code.substring(0, 2)}</span>
                                <span>{item.name}</span>
                            </p>
                            <p className="code">{item.code}</p>
                        </div>
                        <div className="post">{item.post === true ? '已持股' : '已卖出'}</div>
                        <div className={item.quotesp > 0 ? "price red" : "price green"}>
                            {item.price}
                        </div>
                        <div className={item.quotesp > 0 ? "quotesp red" : "quotesp green"}>
                            {item.quotesp > 0 && "+"}
                            {item.quotesp}%
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}
export default Trading;