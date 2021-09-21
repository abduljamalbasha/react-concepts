import {
   HeartIcon,
   DesktopComputerIcon
 } from "@heroicons/react/outline"
 
const navigation =                         [
  {
    name: 'Life Cycle',
    href: '/LifeCycle',
    icon: HeartIcon,
    current: false,
  },
  {
    name: 'UseEffects',
    href: '/UseEffects',
    icon: DesktopComputerIcon,
    current: false,
  },
]


navigation.sort((a, b) => {
   let fa = a.name.toLowerCase(),
       fb = b.name.toLowerCase();

   if (fa < fb) {
       return -1;
   }
   if (fa > fb) {
       return 1;
   }
   return 0;
});
export default navigation