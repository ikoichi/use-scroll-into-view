# use-scroll-into-view 📌

`useScrollIntoView` is a React Hook that uses `scrollIntoView` to scroll a DOM Node into the view, when an extenal condition occcurs.

## Installation 

```shell
npm i use-scroll-into-view
```

## Usage

```jsx
import React, { useRef } from 'react'
import useScrollIntoView from 'use-scroll-into-view'

const ListItem = ({ isSelected, itemName }) => {
  const itemRef = useRef(null)
  useScrollIntoView(itemRef, isSelected)

  return (
    <li ref={itemRef}>
      {itemName}
    </li>)
}
```

The list item is moved into the view by automatically scrolling the container (the body or another html tag).

This is particularly useful when you have a set of elements in the page that can be outside the view, and you want to automatically move into the visible are.

The scroll works vertically and horizontally.

## Typescript

The package exports the following types

```typescript
type ScrollIntoViewOptions = {
  behavior?: keyof typeof ScrollIntoViewBehavior
  block?: keyof typeof ScrollIntoViewBlock
  inline?: keyof typeof ScrollIntoViewInline
}

enum ScrollIntoViewBehavior {
  auto = "auto",
  smooth = "smooth"
}

enum ScrollIntoViewBlock {
  start = "start",
  center = "center",
  end = "end",
  nearest = "nearest"
}

enum ScrollIntoViewInline {
  start = "start",
  center = "center",
  end = "end",
  nearest = "nearest"
}
```

## Customize the scroll

`scrollIntoView` has an option object, that can be used to define the desired scroll behavior.

You can find the full documentation on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)



