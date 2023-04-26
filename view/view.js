export class View {
  _data;
  _errorMessage = "data not found";
  renderProfile(data) {
    this._data = data;
    if (!this._data) return;
    const markup = this._generateMarkup();
    this._parentEl.innerHTML = "";
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  renderRepose(data) {
    this._data = data;
    if (!this._data) throw new Error("data not found");
    console.log(this._data);
    const markup = `      
    <h3 class="display-3" style="color: white">Reposetories</h3>
    ${this._generateMarkup()}
    `;
    this._parentEl.innerHTML = "";
    this._parentEl.insertAdjacentHTML("beforeend", markup);
  }
  showError() {
    this.clearAlert();

    const div = document.createElement("div");
    div.className = `alert alert-warning alert-dismissible fade show  container`;
    div.appendChild(document.createTextNode(this._errorMessage));

    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");

    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
