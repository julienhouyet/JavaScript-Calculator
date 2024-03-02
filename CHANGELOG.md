# Changelog

## [v0.3.0] - 2024-03-02

### Added
- Added support for division operation. ([commit](https://github.com/julienhouyet/javascript-calculator/commit/47d909740f7a4b572c7e9e984fe3ce53c5311149))
- Added support for multiplication operation. ([commit](https://github.com/julienhouyet/javascript-calculator/commit/b301fd8d4a3302bfa110f25c7f0f40fb989b1fed))
- Added support for subtraction operation. ([commit](https://github.com/julienhouyet/javascript-calculator/commit/5331576b0419c991d9762fd66e390d2856ccb19e))
- Added support for addition operation. ([commit](https://github.com/julienhouyet/javascript-calculator/commit/71035eb4192087e32cd2c2d5784166aea2b61c11))
- Introduced `chooseOperation` and `compute` functions to manage and execute the arithmetic operations, enhancing the calculator's core functionality. ([commit](https://github.com/julienhouyet/javascript-calculator/commit/4b8f6314df20e35c60e4fd2f0b17cc52aa2e12e4))

### Refactored
- Reorganized code into a `Calculator` class to improve readability and maintainability. This significant refactor encapsulates calculator operations, state management, and UI updates within a more structured codebase. ([commit](https://github.com/julienhouyet/javascript-calculator/commit/linkToCommit))

## [v0.2.0] - 2024-03-02

### Added
- Added decimal key to allow decimal numbers to be entered. The decimal key is limited to one use per number entered. ([commit](https://github.com/julienhouyet/javascript-calculator/commit/11060d77232e0dd33ad1f5ddca18a48787723267))
- Added functionality to limit the number of characters displayable in the display to avoid overflow and dynamically adjust text size according to input length ([commit](https://github.com/julienhouyet/javascript-calculator/commit/3be2a70a8470ae5ad8bc983130cd27ce89141037)).
- Introduction of the "AC" (All Clear) key to reset the display to '0'. ([commit](https://github.com/julienhouyet/javascript-calculator/commit/74a2f01b6d14df8379cd318bba64f5ce44f0caab))
- Reorganization of JavaScript code for better readability and maintenance, separating UI functions into a separate file (`ui.js`). ([commit](https://github.com/julienhouyet/javascript-calculator/commit/74a2f01b6d14df8379cd318bba64f5ce44f0caab))

## [v0.1.0] - 2024-03-02

### Added
- Make the calculator design to match macOS style. ([commit](https://github.com/julienhouyet/javascript-calculator/commit/746e88f1262bc22bd53b1691314889dbc1332232))