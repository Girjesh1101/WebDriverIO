Feature: Automate Swag Lab
    
    @demo
    Scenario Outline:  Demo with swag lab
    Given Login to invertory web app
    Then Invertory page shouold list <NumberOfProducts>
    Then Validate all product have valid price 

    Examples:
        | TestId      | NumberOfProducts |
        | INTV_TC002  | 6               |

