const productTemp = `<section class="catalog_product container">
    <div class="section_of_cards">
        <span class="heading_section">Fetured Items</span>
        <span class="text_section">Shop for items based on what we featured in this week</span>
    </div>


    <item-comp v-for='good of goods'> </item-comp>


    <div class="page_transition container">
        <a  class="border_of_button" href="#">
            <span class="button_product">Browse All Product</span>
            <img src="img/arrow.png">
        </a>
    </div>
    </section>`

Vue.component('product-component', {
    template: productTemp,
    props: ['goods']
})







