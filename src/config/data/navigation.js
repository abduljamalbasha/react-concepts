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
  {
    name: 'UseState',
    href: '/UseState',
    icon: DesktopComputerIcon,
    current: false,
  },
  {
    name: 'Fragment Demo',
    href: '/Fragment',
    icon: DesktopComputerIcon,
    current: false,
  },
  {
    name: 'UseContext',
    href: '/Context',
    icon: DesktopComputerIcon,
    current: false,
  },
  {
    name: 'Class Compoenent Ref',
    href: '/ClassCompoenentRef',
    icon: DesktopComputerIcon,
    current: false,
  },
  {
    name: 'Error Boundary Example',
    href: '/ErrorBoundary',
    icon: DesktopComputerIcon,
    current: false,
  },
  {
    name: 'Render Props Example',
    href: '/RenderProps',
    icon: DesktopComputerIcon,
    current: false,
  },
  {
    name: 'UseReducer Example',
    href: '/UseReducer',
    icon: DesktopComputerIcon,
    current: false,
  },
  {
    name: 'UseQuery Example',
    href: '/UseQuery',
    icon: DesktopComputerIcon,
    current: false,
  },
  {
    name: 'UseCallBack Example',
    href: '/UseCallBack',
    icon: DesktopComputerIcon,
    current: false,
  }
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