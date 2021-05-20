const db = window.localStorage;
const KEYS = {
  FilterArticles: 'filter-articles',
  FilterThemeMode: 'filter-theme-mode',
};

export const storage = {

  KEYS: KEYS,

  setData(key, filterData) {
    return db.setItem(key, JSON.stringify(filterData));
  },

  getData(key) {
    const dataString = db.getItem(key) || '';
    if (!dataString) return undefined;

    try { return JSON.parse(dataString); }
    catch (er) {
      console.log(er, 'session storage error');
    }
  },

  clearData() {
    return db.clear();
  }
};

export default storage;
