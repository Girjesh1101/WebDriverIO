Feature: Web Interactions 

    Scenario Outline: Demo Web Interaction
        Given google page is opened
        When search with <SearchTerm>
        Then click on first search result
        Then URL should match <ExpectedURL> 
       
       Examples:
           | TestID       | SearchTerm | ExpectedURL |
           | ValuWeb_TC1  | WebDriverIO | https://webdriver.io/ |
