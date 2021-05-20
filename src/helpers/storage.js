const KEYS = {
  FilterArticles: 'filter-articles',
  FilterThemeMode: 'filter-theme-mode',
};

export const storage = {

  KEYS: KEYS,

  setData(key, filterData) {
    window.localStorage.setItem(key, JSON.stringify(filterData));
  },

  getData(key) {
    const dataString = window.localStorage.getItem(key) || '';
    if (!dataString) return undefined;

    try { return JSON.parse(dataString); }
    catch (er) {
      console.log(er, 'session storage error');
    }
  },
  
  clearData() {
    window.localStorage.clear();
  }
};

export default storage;
