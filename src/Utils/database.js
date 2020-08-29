const fetchDataBase = {
  async register(name, email, password) {
    try {
      const response = await fetch(
        `https://bookmarksbackend.herokuapp.com/register`,
        {
          method: 'post',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        }
      );
      if (response.ok) {
        const user = response.json();
        return user;
      } else {
        throw new Error('Error registering');
      }
    } catch (error) {
      console.log(error);
    }
  },
  async signIn(email, password) {
    try {
      const response = await fetch(
        'https://bookmarksbackend.herokuapp.com/signin',
        {
          method: 'post',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      if (response.ok) {
        const user = response.json();
        return user;
      } else {
        throw new Error(
          'Error signing in.Please be sure that credentials are correct!'
        );
      }
    } catch (error) {
      console.log(error);
    }
  },

  async addBookMark(name, url, id) {
    try {
      const response = await fetch(
        'https://bookmarksbackend.herokuapp.com/bookmarks',
        {
          method: 'post',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            name: name,
            url: url,
            id: id,
          }),
        }
      );
      if (response.ok) {
        const addedBookmark = await response.json();
        return addedBookmark;
      } else {
        throw new Error('Could not add bookmark');
      }
    } catch (error) {
      console.log(error);
    }
  },
  async deleteBookMark(id) {
    try {
      const response = await fetch(
        `https://bookmarksbackend.herokuapp.com/bookmarks/${id}`,
        {
          method: 'delete',
          headers: { 'Content-type': 'application/json' },
        }
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      } else {
        throw new Error('could not delete bookmark');
      }
    } catch (error) {
      console.log(error);
    }
  },

  async updateBookmarks(id, name, url) {
    try {
      const response = await fetch(
        `https://bookmarksbackend.herokuapp.com/bookmarks/${id}`,
        {
          method: 'put',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            name: name,
            url: url,
          }),
        }
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      } else {
        throw new Error('Could not update bookmarks');
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default fetchDataBase;
