import React from 'react'

const Products = ({ language }) => {
  return (
    <>
    <section className="product-frame">

      <h3 id="bottling-h3">{
        language === 'english' ? (<>
        <span>PRODUCT</span> <span>FRAME</span>
        </>) : (<>
        <span>إطار المنتج</span>
        </>)
      }</h3>
      
        <div className="bottling-model">
          {/* <img src="assets/bottling.svg" alt="" /> */}
        </div>
    </section>
    </>
  )
}

export default Products