var reviewButton = document.querySelector("#review_btn");
var reviews = document.querySelector("#reviews");

function addReview() {
    reviews.innerHTML = ` <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Add your review here</label>
        </div>
      </div>
    </form>
  </div>
  
  <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
  </button>`
};

reviewButton.addEventListener("click", addReview);