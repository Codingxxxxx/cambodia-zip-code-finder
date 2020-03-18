import toggleClass from './class-toggler';

export const showLoading = () => {
   const loader = document.getElementById('loader');
   const root = document.getElementById('root');
   root.style.pointerEvents = 'none';
   toggleClass(loader, 'd-none', 'remove');
   toggleClass(loader, 'd-block', 'add');
};

export const hideLoading = () => {
   const loader = document.getElementById('loader');
   const root = document.getElementById('root');
   root.style.pointerEvents = 'auto';
   toggleClass(loader, 'd-none', 'add');
   toggleClass(loader, 'd-block', 'remove');
};