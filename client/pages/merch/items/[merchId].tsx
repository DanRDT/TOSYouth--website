import Meta from '../../../components/global/meta'


export default function Home() {
  return (
    <>    
        <link rel="stylesheet" type="text/css" href="/css/merch-item.css"/>
        <Meta/>
        <main>
            <div className='main-container'>
            <div className="seperation-line"></div>
            <section>
                <div className="images">
                    <img className="main-image" src="/imgs/sample-images/girl-in-hoodie.jpg"/>
                    <div className="extra-images">
                        <img className="extra-image" src="/imgs/sample-images/folded-hoodie.jpg"/>
                        <img className="extra-image" src="/imgs/sample-images/folded-hoodie.jpg"/>
                        <img className="extra-image" src="/imgs/sample-images/girl-in-hoodie.jpg"/>
                        <img className="extra-image" src="/imgs/sample-images/folded-hoodie.jpg"/>
                        
                    </div>
                </div>
                <div className="item-info">
                    <h3 className="title">Hoodie</h3>
                    <h4 className="price">$49.99</h4>
                    <h4 className="description">This will be the new years party. we will hangout for a night and eat stuff and play games and the such. This will be the new years party.</h4>
                    <h4 className="color-lbl">Color</h4>
                    <div className="colors">
                        <div className="color"></div>
                        <div className="color"></div>
                        <div className="color"></div>
                        <div className="color"></div>
                        <div className="color"></div>
                    </div>
                    <h4 className="size-lbl">Size</h4>
                    <div className="sizes">
                        <div className="size">S</div>
                        <div className="size">M</div>
                        <div className="size">L</div>
                        <div className="size">XL</div>
                        <div className="size">XXL</div>
                    </div>
                    <h4 className="quantity-lbl">Quantity</h4>
                    <div className="quantity">
                        <div className="plus">
                            <div className="plus-line"></div>
                            <div className="plus-line"></div>
                        </div>
                        <h3>1</h3>
                        <div className="minus">
                            <div className="minus-line"></div>
                        </div>
                    </div>
                    <h4 className="add-to-cart-btn">Add to Cart</h4>
                </div>
            </section>
            </div>
        </main>
    </>
  )
}
