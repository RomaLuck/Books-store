<template>
  <div id="product-filter">
    <h4>SUBJECTS</h4>
    <div id="subjects" class="refinement">
      <ul class="refinement__detail-list">
        <li><a href="#">Action Adventure</a></li>
        <li><a href="#">Classic Fiction</a></li>
        <li><a href="#">Contemporary Women's Fiction </a></li>
        <li><a href="#">Crime Mystery Fiction</a></li>
        <li><a href="#">Erotic Fiction</a></li>
        <li><a href="#">Fantasy Fiction</a></li>
        <li><a href="#">Fiction in Translation and Short Stories</a></li>
        <li><a href="#">Fiction-Related Items</a></li>
        <li><a href="#">Graphic Novels</a></li>
        <li><a href="#">Historical Fiction</a></li>
        <li><a href="#">Modern Contemporary Fiction</a></li>
        <li><a href="#">Popular Penguins</a></li>
        <li><a href="#">Religious Spiritual Fiction</a></li>
        <li><a href="#">Romance</a></li>
        <li><a href="#">Science Fiction</a></li>
        <li><a href="#">Thrillers Suspense</a></li>
      </ul>
    </div>
    <form action="/#" method="post" name="productFilterFormBean">
      <h4>LISTS</h4>
      <div id="lists" class="refinement">
        <ul class="refinement-detail-list">
          <li>
            <a href="#">
              <span class="list-name">All Books</span>
              <span class="results">(566635)</span>
            </a>
          </li>
          <li><a href="#">
            <span class="list-name">Australian Authors Books</span>
            <span class="results">(3166)</span>
          </a></li>
          <li>
            <a href="#" id="reduced-to-clear">
              <span class="list-name">Hot Prices</span>
              <span class="results">(4431)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="list-name">DVDs</span>
              <span class="results">(2)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="list-name">Audiobooks</span>
              <span class="results">(180035)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="list-name">Boxed Sets</span>
              <span class="results">(131)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="list-name">Film TV Tie-Ins</span>
              <span class="results">(162)</span>
            </a>
          </li>
        </ul>
      </div>
      <h4>AVAILABILITY</h4>
      <div id="availability" class="refinement">
        <ul class="refinement-detail-list">
          <li>
            <a href="#">
              <span class="list-name">All Books</span>
              <span class="results">(566635)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="list-name">New Releases</span>
              <span class="results">(33894)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="list-name">Coming Soon</span>
              <span class="results">(9672)</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="list-name">Ready To Ship</span>
              <span class="results">(16136)</span>
            </a>
          </li>
        </ul>
      </div>
      <fieldset>
        <h4>PRICE</h4>
        <div id="price" class="refinement">
          <ul class="refinement-detail-list">
            <li>
              <div id="price-link-price-lessthan-AUD-5" class="b-checkbox">
                <input type="checkbox" id="price-checkbox-price-lessthan-AUD-5" name="prices" value="price-lessthan-AUD-5">
                <label for="price-checkbox-price-lessthan-AUD-5"><span>Under $5</span> <span class="results">(141)</span></label>
              </div>
            </li>
            <li>
              <div id="price-link-price-between-AUD-5-and-10" class="b-checkbox">
                <input type="checkbox" id="price-checkbox-price-between-AUD-5-and-10" name="prices" value="price-between-AUD-5-and-10">
                <label for="price-checkbox-price-between-AUD-5-and-10"><span>$5 - $10</span> <span class="results">(2103)</span></label>
              </div>
            </li>
            <li>
              <div id="price-link-price-between-AUD-10-and-20" class="b-checkbox">
                <input type="checkbox" id="price-checkbox-price-between-AUD-10-and-20" name="prices" value="price-between-AUD-10-and-20">
                <label for="price-checkbox-price-between-AUD-10-and-20"><span>$10 - $20</span> <span class="results">(65916)</span></label>
              </div>
            </li>
            <li>
              <div id="price-link-price-between-AUD-20-and-30" class="b-checkbox">
                <input type="checkbox" id="price-checkbox-price-between-AUD-20-and-30" name="prices" value="price-between-AUD-20-and-30">
                <label for="price-checkbox-price-between-AUD-20-and-30"><span>$20 - $30</span> <span class="results">(229180)</span></label>
              </div>
            </li>
            <li>
              <div id="price-link-price-between-AUD-30-and-50" class="b-checkbox">
                <input type="checkbox" id="price-checkbox-price-between-AUD-30-and-50" name="prices" value="price-between-AUD-30-and-50">
                <label for="price-checkbox-price-between-AUD-30-and-50"><span>$30 - $50</span> <span class="results">(214475)</span></label>
              </div>
            </li>
            <li>
              <div id="price-link-price-between-AUD-50-and-100" class="b-checkbox">
                <input type="checkbox" id="price-checkbox-price-between-AUD-50-and-100" name="prices" value="price-between-AUD-50-and-100">
                <label for="price-checkbox-price-between-AUD-50-and-100"><span>$50 - $100</span> <span class="results">(49784)</span></label>
              </div>
            </li>
            <li>
              <div id="price-link-price-morethan-AUD-100" class="b-checkbox">
                <input type="checkbox" id="price-checkbox-price-morethan-AUD-100" name="prices" value="price-morethan-AUD-100">
                <label for="price-checkbox-price-morethan-AUD-100"><span>Over $100</span> <span class="results">(6785)</span></label>
              </div>
            </li>
          </ul>
        </div>
      </fieldset>
      <input type="hidden" name="languages" value="ENG">
      <input type="hidden" name="url" value="/books/fiction/cF-p1.html?sorter=sortorder-en-dsc">
    </form>
  </div>
</template>

<script setup lang="ts">
// no logic needed
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
</style>

