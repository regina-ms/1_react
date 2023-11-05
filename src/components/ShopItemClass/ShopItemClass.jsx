import { Component } from 'react'
import classes from './ShopItemClass.module.css'

export default class ShopItemClass extends Component {
  render() {
    const { item } = this.props;

    return (
        <div className={classes['main-content']}>
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className={classes["description"]}>
            {item.descriptionFull}
        </div>
        <div className={classes["highlight-window mobile"]}>
            <div className={classes["highlight-overlay"]}>
            </div>
        </div>
        <div className={classes["divider"]}></div>
        <div className={classes["purchase-info"]}>
            <div className={classes["price"]}>
                {item.currency}{item.price.toFixed(2)}
            </div>
            <button>Добавить в корзину</button>
        </div>
    </div>
    )
  }
}
