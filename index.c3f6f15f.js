const e = "https://api.github.com/users/",
  a = "0de400f568ca8c66a5fd",
  t = "fd614d0b98c7f468f710fe30fb3e476ea5e86306",
  s = {
    profile: {},
    repose: {},
  },
  r = async function (r) {
    try {
      const n = await fetch(`${e}${r}?client_id=${a}&client_secret=${t}`),
        i = await n.json();
      if (!n.ok) throw new Error(`${i.message} (${n.status})`);
      s.data = i;
    } catch (e) {
      throw e;
    }
  },
  n = async function (r) {
    try {
      const n = await fetch(
          `${e}${r}/repos?per_page=5&sort=created: asc$clientID=${a}&clientsecret=${t}\n  `
        ),
        i = await n.json();
      if (!n.ok) throw new Error(`${i.message} (${n.status})`);
      s.repose = i;
    } catch (e) {
      throw e;
    }
  };
class i {
  _data;
  _errorMessage = "data not found";
  renderProfile(e) {
    if (((this._data = e), !this._data)) return;
    const a = this._generateMarkup();
    (this._parentEl.innerHTML = ""),
      this._parentEl.insertAdjacentHTML("afterbegin", a);
  }
  renderRepose(e) {
    if (((this._data = e), !this._data)) throw new Error("data not found");
    console.log(this._data);
    const a = `      \n    <h3 class="display-3" style="color: white">Reposetories</h3>\n    ${this._generateMarkup()}\n    `;
    (this._parentEl.innerHTML = ""),
      this._parentEl.insertAdjacentHTML("beforeend", a);
  }
  showError() {
    this.clearAlert();
    const e = document.createElement("div");
    (e.className =
      "alert alert-warning alert-dismissible fade show  container"),
      e.appendChild(document.createTextNode(this._errorMessage));
    const a = document.querySelector(".searchContainer"),
      t = document.querySelector(".search");
    a.insertBefore(e, t),
      setTimeout(() => {
        this.clearAlert();
      }, 3e3);
  }
  clearAlert() {
    const e = document.querySelector(".alert");
    e && e.remove();
  }
}
var c = new (class extends i {
  _parentEl = document.querySelector(".profile");
  _generateMarkup() {
    return `<div class="card card-body mb-3">\n    <div class="row">\n        <div class="col-md-3">\n            <img class="img-fluid mb-2" src="${this._data.avatar_url}">\n            <a href="${this._data.html_url}" taget="_blank" class="\n            btn btn-primary btn-block mb-4\n            ">View Profile</a>\n  \n        </div>\n        <div class="col-md-9">\n            <span class="badge badge-primary">Public Repos: ${this._data.public_repos}</span>\n            <span class="badge badge-secondary">Public Gists: ${this._data.public_gists}</span>\n            <span class="badge badge-success">Followers : ${this._data.followers}</span>\n            <span class="badge badge-info">Following: ${this._data.following}</span>\n            <br><br>\n            <ul class=""list-group>\n                <li class="list-group-item">Company : ${this._data.company}</li>\n                <li class="list-group-item">website : ${this._data.blog}</li>\n                <li class="list-group-item">Location : ${this._data.location}</li>\n                <li class="list-group-item">Member Since : ${this._data.created_at}</li>\n  \n            </ul>\n        </div>\n    </div>\n  </div>\n  `;
  }
})();
var o = new (class extends i {
  _parentEl = document.querySelector(".reposetory");
  _generateMarkup() {
    return this._data
      .map(
        (e) =>
          `\n        <div class="card card-fluid my-4" >\n          <div class="card-body">\n            <h5 class="card-title">${e.name}</h5>\n            <span class="badge badge-primary">Stars: ${e.stargazers_count}</span>\n            <span class="badge badge-secondary">Watcheres: ${e.watchers_count}</span>\n            <span class="badge badge-success">Forks: ${e.forks_count}</span>\n          </div>\n        </div>\n        \n      `
      )
      .join("");
  }
})();
document
  .querySelector(".form-control")
  .addEventListener("keyup", async function (e) {
    try {
      const a = e.target.value;
      if (!a && " " === a) return;
      await r(a), c.renderProfile(s.data), await n(a), o.renderRepose(s.repose);
    } catch (e) {
      c.showError();
    }
  });
//# sourceMappingURL=index.c3f6f15f.js.map
