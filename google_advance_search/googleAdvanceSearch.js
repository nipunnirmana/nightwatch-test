module.exports = {
  url: ["https://www.google.com/advanced_search"],
  elements: {
    formSubmitButton: ".jfk-button[type=submit]"
  },
  commands: [
    {
      search() {
        return this.click("@formSubmitButton");
      }
    }
  ]
};
