# Changelog

## [v0.4.1] - 2024-03-03

### Fixes
- Correct operation change behavior before entering new number - [commit](https://github.com/julienhouyet/javascript-calculator/commit/947fd46abf7ab510bf775310788bb1e15c52e6c8)

## [v0.4.0] - 2024-03-03

### Added
- Add applyPercentage functionality to calculate the percentage of the current value. [commit](https://github.com/julienhouyet/javascript-calculator/commit/e8a0c52dae3b082ad8eb968d7fda55e63fde8bfe)
- Add toggle sign functionality to allow users to change the sign of the current value. [commit](https://github.com/julienhouyet/javascript-calculator/commit/2c2de9788776a4fdaa4b7286294d059c2e5ef382)
- Add ring effect to active operation buttons for better user feedback. [commit](https://github.com/julienhouyet/javascript-calculator/commit/53cdf7bc2d0766b980f82bb636e815526099f392)

### Fixes
- Reset values after a calculation to ensure a clean state for the next calculation. [commit](https://github.com/julienhouyet/javascript-calculator/commit/ee0e97e6a849b5b72d2fe9f824f2f01f12a22837)
- Use scientific notation for displaying large numbers to avoid overflow in the display. [commit](https://github.com/julienhouyet/javascript-calculator/commit/0fad32b4538c27e73d7be1d9ce1f7a7c02b25155)

## [v0.3.0] - 2024-03-02

### Added
- Added support for division operation. [commit](https://github.com/julienhouyet/javascript-calculator/commit/47d909740f7a4b572c7e9e984fe3ce53c5311149)
- Added support for multiplication operation. [commit](https://github.com/julienhouyet/javascript-calculator/commit/b301fd8d4a3302bfa110f25c7f0f40fb989b1fed)
- Added support for subtraction operation. [commit](https://github.com/julienhouyet/javascript-calculator/commit/5331576b0419c991d9762fd66e390d2856ccb19e)
- Added support for addition operation. [commit](https://github.com/julienhouyet/javascript-calculator/commit/71035eb4192087e32cd2c2d5784166aea2b61c11)
- Introduced `chooseOperation` and `compute` functions to manage and execute arithmetic operations, enhancing the calculator's core functionality. [commit](https://github.com/julienhouyet/javascript-calculator/commit/71035eb4192087e32cd2c2d5784166aea2b61c11)

### Refactored
- Reorganized code into a `Calculator` class to improve readability and maintainability. This significant refactor encapsulates calculator operations, state management, and UI updates within a more structured codebase. [commit](https://github.com/julienhouyet/javascript-calculator/commit/4b8f6314df20e35c60e4fd2f0b17cc52aa2e12e4)

## [v0.2.0] - 2024-03-02

### Added
- Added decimal key to allow decimal numbers to be entered. The decimal key is limited to one use per number entered. ([commit](https://github.com/julienhouyet/javascript-calculator/commit/11060d77232e0dd33ad1f5ddca18a48787723267))
- Added functionality to limit the number of characters displayable in the display to avoid overflow and dynamically adjust text size according to input length ([commit](https://github.com/julienhouyet/javascript-calculator/commit/3be2a70a8470ae5ad8bc983130cd27ce89141037)).
- Introduction of the "AC" (All Clear) key to reset the display to '0'. ([commit](https://github.com/julienhouyet/javascript-calculator/commit/74a2f01b6d14df8379cd318bba64f5ce44f0caab))
- Reorganization of JavaScript code for better readability and maintenance, separating UI functions into a separate file (`ui.js`). ([commit](https://github.com/julienhouyet/javascript-calculator/commit/74a2f01b6d14df8379cd318bba64f5ce44f0caab))

## [v0.1.0] - 2024-03-02

### Added
- Make the calculator design to match macOS style. ([commit](https://github.com/julienhouyet/javascript-calculator/commit/746e88f1262bc22bd53b1691314889dbc1332232))