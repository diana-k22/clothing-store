const mainTemp = `<div class="main">
<nav>
    <a href="index.html">HOME</a>
    <a href="product-page-man.html">MAN</a>
    <a href="single.html">WOMEN</a>
    <a href="#">KIDS</a>
    <a href="checkout.html">ACCOSERIESE</a>
    <a href="#">FEATURED</a>
    <a href="shopping.html">HOT DEALS</a>
</nav>

<section class="page">
    <div class="container">
        <div class="brand">
            <span class="title">THE BRAND</span>
            <span class="subtitle">OF LUXERIOUS 
                 <span class="red_subtittle">FASHION</span>
            </span>
        </div>
    </div>
</section>

<section class="hot-deal container">
    <div class="hot-deal__column">
        <figure class="block_man">
            <img class="offer-cards-img" src="img/card1.png" alt="man">
            <figcaption class='block_text_man'>
                <span class="top_inscription">HOT DEAL</span>  
                <span class="bottom_inscription">FOR MEN</span>
            </figcaption>
        </figure>

         <figure class="block_trend">
            <img class="offer-cards-img" src="img/card3.png" alt="accesories">
            <figcaption class="block_text_trend">
                <span class="top_inscription_3">LUXIROUS & TRENDY</span> 
                <span class="bottom_inscription_3">ACCESORIES</span>
            </figcaption>
        </figure>
    </div>

    <div class="hot-deal-of-column">
        <figure class="block_women">
            <img class="offer-cards-img" src="img/card2.png" alt="wonen">
            <figcaption class="block_text_women">
                <span class="top_inscription_2">30% OFFER</span>
                <span class="bottom_inscription_2">WOMEN</span>
            </figcaption>
        </figure>

        <figure class="block_kids">
            <img class="offer-cards-img" src="img/card4.png" alt="kids">
            <figcaption class="block_text_kids">
                <span class="top_inscription_4">NEW ARRIVALS</span>
                <span class="bottom_inscription_4">FOR KIDS</span>
            </figcaption>
        </figure>
    </div>
</section>


<product-component v-bind:goods='goods_list'></product-component>


<section class="offer container">
    <div class="offer__main">
        <p class="offer__main-text">
            <span class="offer__main-text-title"> 
                30%<span class="offer__main-text-special">Offer</span>
            </span>
            <span class="offer__main-text-subtitle">
                for women
            </span>
        </p>
    </div>
    <div class="offer__advantages">
        <article class="offer__advantage">
          <h3 class="offer_advantage-title">Free Delivery</h3>
          <span class="offer_advantage-description">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </span>
        </article>
        <article class="offer__advantage-sales">
          <h3 class="offer_advantage-title">Sales & discounts</h3>
          <span class="offer_advantage-description">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </span>
        </article>
        <article class="offer__advantage-quality">
          <h3 class="offer_advantage-title">Quality assurance</h3>
          <span class="offer_advantage-description">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.
          </span>
        </article>
      </div>
</section>


<section class="new-letter">
    
    <div class="add-wrapper container">
        <div class="new_letter-review">
             <img class="new_letter_review-img" src="img/photo-women.png">
            <article class="new_letter_review-text">
                <span class="new_letter_review_text-tittle">
                        “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
                </span>
                <span class="new_letter_review_text-name"> 
                        Bin Burhan
                </span>
                <span class="new_letter_review_text_name-subtitle">
                    Dhaka, Bd
                </span>
            </article>
        </div>

 

        <div class="subscribe">
            <h1 class="subscribe_text-title">Subscribe</h1>
            <p class="subscribe_text-subtitle">
                        for oup newletter and promotion
            </p> 
            <form class="subscribe-form" action="#">
                <input class="subscribe_form-input" type="text"  placeholder="Enter Your Email">
                <button class="subscribe_form_input-button">Subscribe</button>
            </form>
        </div>
    </div>
</section>
</div>`

Vue.component('main-component', {
    template: mainTemp,
})

