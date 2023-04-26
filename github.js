import {
  API_URL_PROFILE,
  CLIENTID,
  CLIENTSECRET,
  REPOS_COUNT,
  REPOS_SORT,
} from "./config";

export const state = {
  profile: {},
  repose: {},
};

export const getJson = async function (user) {
  try {
    const res = await fetch(
      `${API_URL_PROFILE}${user}?client_id=${CLIENTID}&client_secret=${CLIENTSECRET}`
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    state.data = data;
  } catch (err) {
    throw err;
  }
};
export const getJsonRepose = async function (user) {
  try {
    const res =
      await fetch(`${API_URL_PROFILE}${user}/repos?per_page=${REPOS_COUNT}&sort=${REPOS_SORT}$clientID=${CLIENTID}&clientsecret=${CLIENTSECRET}
  `);

    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    state.repose = data;
  } catch (err) {
    throw err;
  }
};
