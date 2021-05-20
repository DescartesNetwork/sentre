const KEYS = {
  FilterArticles: 'filter-articles',
  FilterThemeMode: 'filter-theme-mode',
};

export const sessionStorage = {
  KEYS: KEYS,
  setData(key, filterData) {
    window.sessionStorage.setItem(key, JSON.stringify(filterData));
  },

  getData(key) {
    const dataString = window.sessionStorage.getItem(key) || '';
    if (!dataString) {
      return undefined;
    }

    try {
      return JSON.parse(dataString);
    }
    catch (error) {
      console.log(error, 'session storage error');
    }
  },
  clearData() {
    window.sessionStorage.clear();
  }
};

export default sessionStorage;
