Feature: Automate Swag Lab

    
    Scenario Outline:  Demo with swag lab
        Given As a standard user I login to invertory web app
            | userTper    | Username                |
            | StdUser     | standard_user           |
            | ProblemUser | problem_user            |
            | PerfUser    | performance_glitch_user |

        Then Invertory page shouold list <NumberOfProducts>
        Then Validate all product have valid price

        Examples:
            | TestId     | NumberOfProducts |
            | INTV_TC002 | 6                |

