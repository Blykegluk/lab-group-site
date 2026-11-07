import{c as s,j as t}from"./index-BCLDUEsc.js";import{p as h}from"./format-DR7JKUVL.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=s("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=s("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=s("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);function b({libelle:c,valeur:a,note:r,variation:e,libelleVariation:n,inverse:x=!1,children:m}){const d=e!=null,p=e>0?u:e<0?i:g,l=x?e<0:e>0,o=e?l?"text-succes":"text-danger":"text-texte-2";return t.jsxs("div",{className:"min-w-0 rounded-lg border border-bordure bg-surface p-4 shadow-[0_1px_2px_rgba(17,18,24,0.05)]",children:[t.jsx("p",{className:"text-sm font-medium text-texte-2",children:c}),t.jsx("p",{className:"mt-1.5 text-[1.75rem] leading-tight font-semibold tracking-tight tabular-nums",children:a}),d&&t.jsxs("p",{className:"mt-1 flex flex-wrap items-center gap-x-1 text-sm",children:[t.jsxs("span",{className:`inline-flex items-center gap-0.5 font-medium tabular-nums ${o}`,children:[t.jsx(p,{size:15,"aria-hidden":"true"}),e>0&&"+",h(e)]}),n&&t.jsx("span",{className:"text-texte-3",children:n})]}),r&&t.jsx("p",{className:"mt-1 text-xs text-texte-3",children:r}),m]})}export{b as K};
