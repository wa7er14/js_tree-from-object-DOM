'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const list = document.createElement('ul');

  for (const i in data) {
    const item = document.createElement('li');

    item.textContent = i;
    list.append(item);

    element.append(list);

    createTree(item, data[i]);
  }
}

createTree(tree, food);
