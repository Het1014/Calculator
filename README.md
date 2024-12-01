# Calculator  

A web-based calculator built with **HTML**, **CSS**, and **JavaScript**. This calculator supports basic arithmetic operations, advanced scientific calculations, and trigonometric functions.

---

## Features  

### 1. **Basic Arithmetic Operations**  
- **Addition**, **Subtraction**, **Multiplication**, and **Division** with intuitive operator buttons.  
- Handles cases like division by zero and invalid inputs gracefully.  

### 2. **Scientific Functions**  
- **Trigonometric Functions**:  
  - Sine (`sin`), Cosine (`cos`), Tangent (`tan`).  
  - Supports both **Degrees** and **Radians** mode.  
- **Logarithmic Functions**:  
  - Natural logarithm (`ln`) and base-10 logarithm (`log`).  
- **Square Root** (`√`): Computes the square root of a number.  
- **Factorial** (`x!`): Computes the factorial of an integer using recursion.  

### 3. **Power Functions**  
- **Square** (`x²`): Computes the square of a number.  
- **Cube** (`x³`): Computes the cube of a number.  
- **Exponential** (`eˣ`): Computes the value of `e` raised to the power of a given number.  
- **Custom Powers** (`xʸ`): Computes `x` raised to the power of `y`.  
- **Base-2 Exponentiation** (`2ˣ`): Computes `2` raised to the power of a given number.  

### 4. **Inverse and Roots**  
- **Reciprocal** (`1/x`): Computes the reciprocal of a number.  
- **Cube Root** (`∛`): Computes the cube root of a number.  

### 5. **Percentage Calculation**  
- Calculates the percentage of a given number.  

### 6. **Toggle Scientific Mode**  
- Expand or collapse the scientific buttons panel using the **toggle button**.  

### 7. **Error Handling**  
- Displays an error message for invalid input formats or operations (e.g., division by zero, invalid syntax).  

---

## File Structure  

### HTML  
The `index.html` file contains the structured layout of the calculator with separate sections for:  
- **Display**: Input and history of calculations.  
- **Buttons**: Divided into basic and scientific operations.  

### CSS  
The `style.css` file handles the responsive design and styling of:  
- Buttons, display areas, and the overall calculator layout.  
- Visual enhancements using gradient backgrounds and animations.

### JavaScript  
The functionality is implemented in:  
- `script.js`: Manages button interactions, input handling, and display updates.  
- `operation.js`: Contains core logic for calculations and operations.  

---

## Installation and Usage  

1. Clone the repository:  
   ```bash
   git clone https://github.com/Het1014/Calculator.git
   ```
2. Navigate to the project directory:  
   ```bash
   cd Calculator
   ```
3. Open `index.html` in your browser.  

---

## How to Use  

1. **Input numbers** using the numeric buttons.  
2. **Select operations**:  
   - Basic operations (`+`, `-`, `×`, `÷`)  
   - Advanced functions from the scientific panel.  
3. Press `=` to evaluate the expression.  
4. Use the `C` button to clear all input or the `DEL` button to delete the last character.  
5. Toggle between **Degrees** and **Radians** for trigonometric calculations using the `Rad`/`Deg` button.  

---

## Screenshots  

### Normal Calculator  
![Normal Calculator](https://raw.githubusercontent.com/Het1014/Calculator/master/assets/simple.png)

### Scientific Calculator  
![Scientific Calculator](https://raw.githubusercontent.com/Het1014/Calculator/master/assets/scientific.png)

---

Demo: [Click Here](https://het1014.github.io/Calculator/)
