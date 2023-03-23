const media = {
  queryList: {
    mobile: window.matchMedia('(min-width: 0px) and (max-width: 768px)'),
    tablet: window.matchMedia('(min-width: 768px) and (max-width: 992px)'),
    desktop: window.matchMedia('(min-width: 992px)'),
  },
  queryIf(func, type) {
    if (this.queryList[type].matches) func();
  },
  query(type, func) {
    this.queryIf(func, type);
    this.queryList[type].addEventListener('change', () => this.queryIf(func, type));
  },
};

media.query('mobile', () => {
  document.querySelector('body').style.background = '#93c493';
});
media.query('tablet', () => document.querySelector('body').style.background = '#b88989');
media.query('desktop', () => document.querySelector('body').style.background = null);
  
const container = document.querySelectorAll('.container-fluid');

const containerPadding = () => container.forEach(element => {
  const sectionHasPadding = element.closest('section');

  if (sectionHasPadding.classList.contains('.small-container')) {
      sectionHasPadding.style.padding = '20px 100px'
  } else {
      // sectionHasPadding.style.padding = '0 50px'
      media.query('mobile', () => sectionHasPadding.style.padding = '0 15px');
      media.query('tablet', () => sectionHasPadding.style.padding = '0 25px');
      media.query('desktop', () => sectionHasPadding.style.padding = '0 50px');
  }
});

containerPadding();




