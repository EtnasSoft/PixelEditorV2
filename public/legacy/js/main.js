const PixMapper = $(() => {
  'use strict';

  const Main = {
    init() {
      console.info('Hello PixelEditorV2!!');

      this.initEvents();
    },

    initEvents() {
      var self = this;

      //this.getLoadDataSubmit().addEventListener('click', () => void this.loadData());
    },

    getLoadDataSubmit() {
      return document.querySelector('#loadInputData');
    },

    getLeftPane() {
      return document.querySelector('.pane__left');
    },

    getRightPane() {
      return document.querySelector('.pane__right');
    },

    getUserData() {
      return document.querySelector('#input__data').value;
    },

    loadData() {
      const currentUserData = this.getUserData();
      const userDataParsed = currentUserData.split('\n');
      console.info('loading user data: ', currentUserData);
      loadUserDataIntoEditor(userDataParsed);
    }
  };

  // Initializing
  Main.init();

  return Main;
});
