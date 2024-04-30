import React from 'react'
import { CartList, CartInfo } from './components'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function CartPage() {
  const { items } = useSelector(state => state.cart)
  const navigate = useNavigate()

  const handlBack = () => {
    navigate('/')
  }
  return (
    <div className='cart-page'>
      <div className="container">
        {
          items.length <= 0 ?
            <div className='cart-empty'>
              <img className='cart-empty__image' src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"  />
              <div className="cart-empty__content">
                <h2 className='cart-empty__title'>Ваша корзина пуста</h2>
                <button className='cart-empty__button' onClick={handlBack}>вернутся на главную</button>
              </div>
            </div>
            :
            <div>
              <h1 className="cart-page__title">мои заказы ({items.length})</h1>
              <div className="cart-page__row">
                <CartList />
                <CartInfo />
              </div>
            </div>
        }

      </div>
    </div>
  )
}

export default CartPage