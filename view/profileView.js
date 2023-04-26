import { View } from "./view";

class Profile extends View {
  _parentEl = document.querySelector(".profile");
  _generateMarkup() {
    return `<div class="card card-body mb-3">
    <div class="row">
        <div class="col-md-3">
            <img class="img-fluid mb-2" src="${this._data.avatar_url}">
            <a href="${this._data.html_url}" taget="_blank" class="
            btn btn-primary btn-block mb-4
            ">View Profile</a>
  
        </div>
        <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${this._data.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${this._data.public_gists}</span>
            <span class="badge badge-success">Followers : ${this._data.followers}</span>
            <span class="badge badge-info">Following: ${this._data.following}</span>
            <br><br>
            <ul class=""list-group>
                <li class="list-group-item">Company : ${this._data.company}</li>
                <li class="list-group-item">website : ${this._data.blog}</li>
                <li class="list-group-item">Location : ${this._data.location}</li>
                <li class="list-group-item">Member Since : ${this._data.created_at}</li>
  
            </ul>
        </div>
    </div>
  </div>
  `;
  }
}
export default new Profile();
