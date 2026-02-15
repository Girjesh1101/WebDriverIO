# 1. Instraction and Notes

## 1.1 In this session....

**First Node Project -- "hello,World"**

__STEPS__
1. Create folder under your machine
    -- project Name: wdio cucumber e2e tests
    -- Description: 'wdio, cucumber , e2e'
    --- Keywords: "wdio, Cucumber , Test"

2. Initialize node project
sh
npm init [-y]

3. check the presence of package.json file in the root
4. run a simple "hello world" prgram
5. done

# Folder Structure Setup

Let's create the following folder structure

```sh
wdio-cucumber-e2e-test/
├── config/                     # Configuration files
├── data/                       # Test data files
│   ├── constants.json          # Common constants used in tests
├── debug/                      # Files for local reference only and used for general purpoase
├── logs/                       # Application and test logs
├── node_modules/               # NPM dependencies (auto-generated)
├── resources/                  # Resource documentation and guides
├── results/                    # Test execution results and reports
├── test/                       # Test suite directory
│   ├── features/               # BDD feature files
│       ├── step-definitions/   # Cucumber step definition files
│   ├── helper/                 # Test helper utilities
│   └── page-objects/           # Page Object Model files
├── .env.example                # Template for environment files
├── .env                        # Environment variables configuration
├── .gitignore                  # Git ignore rules
├── package-lock.json           # NPM dependency lock file
├── package.json                # NPM package configuration
├── README.md                   # Project documentation
├── tsconfig.json               # TypeScript configuration
└── wdio.conf.ts                # WebdriverIO main configuration file
```

🎯 The target project structure is now set up. Let's keep moving forward... 🚀

---

1. Run a specific tag e.g. @demo using wdio run ./wdio.conf.ts --cucumberOpts.tags='@demo'"
