Vue.component('card-blog', {
    template: `
    <div class="card my-3">
    <img src="https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg" alt="..." class="card-img-top img-fluid"> 
    <div class="card-body">
    <h5 class="card-title">
    Hello World!
    <span class="badge badge-success ml-5">Likes: 0</span>
    </h5> 
    <p class="card-text" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
    I love Vue.js. It is so cool and easy!<br> 
    <small class="text-muted">Create By: Bundit</small> 
    <small class="text-muted ml-5">Create Date: 2/20/2019, 11:40:18 AM</small></p> 
    <button class="btn btn-success">I like this!</button> <button class="btn btn-info">Show comment...</button> 
    <div class="card mt-2 text-dark" style="display: none;">
    <div class="card-body">
    <h6 class="card-title">Comment 1</h6> 
    <p class="card-text">
    Yes I agree!<br> 
    <small class="text-muted">Create By: Jack</small> 
    <small class="text-muted ml-5">Create Date: </small>
    </p>
    </div>
    </div>
    </div>
    </div>`,
    props: ['blog']
})