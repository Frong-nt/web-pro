Vue.component("card-blog", {
    props:[blog],
    template: `
    <div class="col-md-4">
            <div class="card my-3" @click="changeBGColor(blog)">
            <img :src="blog.image" class="card-img-top img-fluid" alt="..." />
            <div class="card-body" :class="[blog.bgColor, blog.textColor]">
              <h5 class="card-title">
                {{ blog.title }}
                <span class="badge badge-success ml-5">Likes: {{blog.likes}}</span>
              </h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.<br />
                <small class="text-muted">Create By: </small>
                <small class="text-muted ml-5">Create Date: </small>
              </p> -->
              <!--<button class="btn btn-primary">Go to my page</button>-->
              <!-- <button class="btn btn-success" @click.stop="blog.likes++">I like this!</button>
              <button class="btn btn-info" @click.stop="showComment(blog)">Show comment...</button>
              <div class="card mt-2 text-dark" v-show="blog.showComment" v-for="comment in blog.comments">
                <div class="card-body">
                  <h6 class="card-title">Comment</h6>
                  <p class="card-text">
                    Curious which components explicitly require jQuery, our JS, and Popper.js? Click the show
                    components link below.<br />
                    <small class="text-muted">Create By: </small>
                    <small class="text-muted ml-5">Create Date: </small>
                  </p>
                </div>
              </div>
            </div>
          </div>`
                },
                )