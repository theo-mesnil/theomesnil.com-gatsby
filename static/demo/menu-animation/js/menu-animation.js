(function() {
  navigations = document.querySelectorAll('.navigation ul');
  [].forEach.call(navigations, function(navigation) {
    [].forEach.call(navigation.children, function(list) {
      currentLi = function(e) {
        e.preventDefault();
        if (list.classList.contains('active')) {
          return false;
        }
        navigation.querySelector('.active').classList.remove('active');
        this.classList.add('active');
      };
      list.addEventListener('click', currentLi);
    });
  });
})(window);
