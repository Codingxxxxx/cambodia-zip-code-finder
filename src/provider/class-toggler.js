export default function toggleClass (element, className, option) {
   if (!option || option === 'auto') {
      if (element.classList.contains(className)) {
         element.classList.remove(className);
      } else {
         element.classList.add(className)
      }
   } else if (option === 'add') {
      if (!element.classList.contains(className)) {
         element.classList.add(className);
      }
   } else if (option === 'remove') {
      if (element.classList.contains(className)) {
         element.classList.remove(className);
      }
   }
}