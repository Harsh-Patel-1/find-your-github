import { getJson, getJsonRepose } from "./github";
import { state } from "./github";
import profileView from "./view/profileView";
import reposView from "./view/reposView";

const search = document.querySelector(".form-control");

search.addEventListener("keyup", async function (e) {
  try {
    const user = e.target.value;
    if (!user && user === " ") return;

    await getJson(user);

    profileView.renderProfile(state.data);
    await getJsonRepose(user);

    reposView.renderRepose(state.repose);
  } catch (err) {
    profileView.showError();
  }
});
