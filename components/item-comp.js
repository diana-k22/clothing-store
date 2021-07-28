const itemTemp = `<div class="featured-items">
<figure class="featured-items__item"> 
    <div class="card__img">
        <img src="img/block_6_img_1.png" alt="photo">
        <div class="add__wrapper">
            <div class="border">
                <img class="trash" src="img/forma-buy.png">
                <button class="button_card">Add to Cart</button>
            </div>
        </div>
    </div>
    
    <figcaption class="block_text_catalog">
        <span class="product_description">T-sho</span>
        <span class="price_of_product">$52.00</span>
    </figcaption>
</figure>
`

Vue.component('item-comp', {
    template: itemTemp,
    props: ['goods']
})