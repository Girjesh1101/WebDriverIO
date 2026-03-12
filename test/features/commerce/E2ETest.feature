Feature: ECustomer search

    @demo
    Scenario Outline: <TestID> search external customers
        Given Get list of users from reqres.in
        When An as Admin user login to nopcommerce site
        Then Verify if all users exist in customer list

        Examples:
            | TestID    |
            | E2E_TC001 |

