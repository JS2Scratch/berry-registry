# `rand` - RNG Package

## Features:
 - **Floats with Precision**: Generate random floating-point numbers with 6 decimal precision.
 - **Integers**: Generate random integers within a specified range.
 - **Seeds**: Control randomness by providing a seed, allowing for reproducible results.

# Why use `rand` over `math.random`?

`rand` allows for more controlled randomness, with seed randomisation, and float precision, which `math.random` doesn't offer.

> [!TIP]
> All random values are inclusive of the minimum value but exclude the maximum value. For instance, generating a number between 1 and 5 could result in [1, 2, 3, 4] for integers or floats within that range.

## Usage

### **Creating a Random Generator Instance**
You can initialise a new random generator using `rand.new(seed?: number)`.

```js
rand.new() // Uses a random seed
rand.new(5) // Uses the seed '5'
```

### **Generating Random Floats**
Generate random floating-point numbers between a minimum and maximum value with optional seed support.

```js
rand.float(1, 5)   // Float between 1 (inclusive) and 5 (exclusive) with a random seed
rand.float(1, 5, 5) // Float between 1 and 5 with a set seed '5'
```

### **Generating Random Integers**
Generate random integers within a given range with optional seed support.

```js
rand.int(1, 5)   // Integer between 1 and 5 with a random seed
rand.int(1, 5, 5) // Integer between 1 and 5 with a seed of '5'
```
