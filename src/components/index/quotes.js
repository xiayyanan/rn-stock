import React, { Component } from 'react';
class Quotes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      yesterday: [
        {
          name: "上证指数",
          price: 2511.1257
        },
        {
          name: "深证指数",
          price: 7441.77
        },
        {
          name: "创业板指",
          price: 1287.50
        }
      ],
      quotesCurrent: [],
      quotesData: [
        {
          item: [
            {
              name: "上证指数",
              price: 2524.4716
            },
            {
              name: "深证指数",
              price: 7391.11
            },
            {
              name: "创业板指",
              price: 1264.44
            }
          ]
        },
        {
          item: [
            {
              name: "上证指数",
              price: 2561.1257
            },
            {
              name: "深证指数",
              price: 7306.24
            },
            {
              name: "创业板指",
              price: 1299.17
            }
          ]
        },
        {
          item: [
            {
              name: "上证指数",
              price: 2721.0367
            },
            {
              name: "深证指数",
              price: 7122.37
            },
            {
              name: "创业板指",
              price: 1109.22
            }
          ]
        },
        {
          item: [
            {
              name: "上证指数",
              price: 2517.5639
            },
            {
              name: "深证指数",
              price: 7595.37
            },
            {
              name: "创业板指",
              price: 1209.55
            }
          ]
        },
        {
          item: [
            {
              name: "上证指数",
              price: 2501.3701
            },
            {
              name: "深证指数",
              price: 7488.69
            },
            {
              name: "创业板指",
              price: 1259.58
            }
          ]
        }
      ]

    }

    this.quotes = this.quotes.bind(this);

  }

  quotes() {
    let _self = this;
    let i = Math.floor(Math.random() * this.state.quotesData.length);
    let arr = [];
    this.state.quotesData[i].item.forEach(function (item, index) {
      let quotes = item.price - _self.state.yesterday[index].price;
      let isQuotes = quotes > 0 ? true : false;
      arr.push({
        "name": item.name,
        "price": item.price.toFixed(2),
        "quotes": quotes.toFixed(3),
        "quotesp": (quotes / 100).toFixed(2),
        "isQuotes": isQuotes
      })
    })
    this.setState({ quotesCurrent: arr })
  }

  componentDidMount() {
    this.quotes();
    this.timer=setInterval(() => { this.quotes(); }, 2000);
  }
  componentWillUnmount(){
    clearTimeout(this.timer)
  }

  render() {
    return (
      <ul className="quotes">
        {
          this.state.quotesCurrent.map((item, index) => (
            <li className="item" key={index}>
              <p className="name">{item.name}</p>
              <p className={item.isQuotes ? 'price red' : 'price green'}>
                <span>{item.price}</span>
                <span className="arrow"></span>
              </p>
              <p className="amplitude">
                {item.isQuotes === true && "+"}<span>{item.quotes}</span>
                <span className="spacep"></span>
                <span>{item.quotesp}%</span>
              </p>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Quotes;