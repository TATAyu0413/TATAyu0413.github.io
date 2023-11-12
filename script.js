document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.toggle-button');
  var content = document.querySelector('.content');
  var icon = btn.querySelector('i');

  btn.addEventListener('click', function () {
    var isExpanded = content.style.display === 'block';

    content.style.display = isExpanded ? 'none' : 'block';
    icon.classList.toggle('fa-caret-right', isExpanded);
    icon.classList.toggle('fa-caret-down', !isExpanded);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.toggle-button1');
  var content = document.querySelector('.content1');
  var icon = btn.querySelector('i');

  btn.addEventListener('click', function () {
    var isExpanded = content.style.display === 'block';

    content.style.display = isExpanded ? 'none' : 'block';
    icon.classList.toggle('fa-caret-right', isExpanded);
    icon.classList.toggle('fa-caret-down', !isExpanded);
  });
});