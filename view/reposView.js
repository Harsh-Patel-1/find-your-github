import { View } from "./view";

class Reposetory extends View {
  _parentEl = document.querySelector(".reposetory");
  _generateMarkup() {
    return this._data
      .map(
        (repo) => `
        <div class="card card-fluid my-4" >
          <div class="card-body">
            <h5 class="card-title">${repo.name}</h5>
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watcheres: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
          </div>
        </div>
        
      `
      )
      .join("");
  }
}
export default new Reposetory();
