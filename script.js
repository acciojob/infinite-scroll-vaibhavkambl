//your code here!
const list = document.getElementById('infi-list');
const additionalItems = [
  'Item 1',
  'Item 2'
];

function appendListItem(text) {
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

function loadMoreItems() {
  additionalItems.forEach((item) => {
    appendListItem(item);
  });
}

list.addEventListener('scroll', () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    loadMoreItems();
  }
});
