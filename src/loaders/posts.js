import {URLS} from "../config/urls.js";

/**
 *  Load all posts from the API
 * @returns {Promise<any>}
 */
export async function loadAllPosts(){
  return fetch(URLS.BASE_URL + URLS.POSTS)
      .then(response => response.json())
}


