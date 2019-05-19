module.exports = {
  "@tags": ["google"],
  "Google Form Test : Elon Musk": browser => {
    const form = browser.page.googleAdvanceSearch();

    const formUrl = "https://www.google.com/advanced_search",
      mainQuery = "Elon Musk",
      mainQuerySelector = "input[name=as_q]",
      languageDropDownSelector = "#lr_button",
      languageDropDownSelectorValue = ".goog-menuitem[value=lang_it]",
      lastUpdateSelector = "#as_qdr_button",
      lastUpdateSelectorValue = ".goog-menuitem[value=m]",
      resultsSelectQueryInputSelector = `#searchform [name=q][value='${mainQuery}']`,
      resultsLanguageSelector =
        ".hdtb-mn-hd.hdtb-tsel[aria-label='Search Italian pages']",
      resultsMonthSelector = ".hdtb-mn-hd.hdtb-tsel[aria-label='Past month']";

    browser
      .url(formUrl)
      .setValue(mainQuerySelector, mainQuery)
      .click(languageDropDownSelector)
      .click(languageDropDownSelectorValue)
      .click(lastUpdateSelector);

    form.search("@formSubmitButton");

    browser.saveScreenshot("tests_output/google.png");

    //   .click(formSubmitButtonSelector)
    //   .assert.urlContains("as_q=Elon+Musk", "Search Term - Elon Musk")
    //   .assert.urlContains("lr=lang_it", "Select Language")
    //   .assert.urlContains("as_qdr=m", "Search data from past month");

    // browser.assert
    //   .visible(
    //     resultsSelectQueryInputSelector,
    //     `${mainQuery} Has been selected as searched text`
    //   )
    //   .assert.containsText(
    //     resultsLanguageSelector,
    //     "Search Italian pages",
    //     "UI : Results Page Filtered by Italian Language"
    //   )
    //   .assert.containsText(
    //     resultsMonthSelector,
    //     "Past month",
    //     "UI : Results Page Filtered by Past Month"
    //   )
    //   .saveScreenshot("tests_output/google.png");
  }
};
