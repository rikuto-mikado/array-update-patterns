# Array Update Patterns

Practice implementing 5 different patterns for updating a single item in an array.

## Overview

Each file demonstrates how to write an `updateProduct(items, id, newProduct)` method using a different approach:

| Pattern | Method                | Mutates Original | Keeps Position |
| ------- | --------------------- | :--------------: | :------------: |
| 1       | Spread + Index        |        No        |      Yes       |
| 2       | `map()`               |        No        |      Yes       |
| 3       | Direct Index          |     **Yes**      |      Yes       |
| 4       | `splice()`            |     **Yes**      |      Yes       |
| 5       | `filter()` + `push()` |        No        |     **No**     |

## File Structure

- `1-spread-index.js` - Copy array with spread operator, then replace at index
- `2-map.js` - Use map() to swap while iterating
- `3-direct-index-mutation.js` - Directly mutate the original array
- `4-splice.js` - Use splice() to remove and insert in place
- `5-filter-push.js` - Filter out old item, push new item to end
