import{R as e}from"./iframe-CK2W0OjM.js";import"./preload-helper-aATRHN56.js";function r({children:n,level:c=1,color:d="white"}){return e.createElement("p",{className:`text text-${d} bdy bdy-${c}`},n)}r.__docgenInfo={description:"",methods:[],displayName:"Body",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"}]},description:"",defaultValue:{value:"1",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'white' | 'grey'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'grey'"}]},description:"",defaultValue:{value:"'white'",computed:!1}}}};const p={title:"Typography/Body",component:r,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#333333"},{name:"light",value:"#ffffff"}]}},tags:["autodocs"],argTypes:{level:{control:{type:"select"},options:[1,2,3],description:"Body text level (size)"},color:{control:{type:"select"},options:["white","grey"],description:"Text color"},children:{control:{type:"text"},description:"Body text content"}}},o={args:{level:1,color:"white",children:"This is body text level 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},t={args:{level:2,color:"white",children:"This is body text level 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},l={args:{level:3,color:"white",children:"This is body text level 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},i={args:{level:1,color:"white",children:"White body text for dark backgrounds."}},a={args:{level:1,color:"grey",children:"Grey body text for light backgrounds."},parameters:{backgrounds:{default:"light"}}},s={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"600px"}},e.createElement(r,{level:1,color:"white"},"Body Level 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),e.createElement(r,{level:2,color:"white"},"Body Level 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),e.createElement(r,{level:3,color:"white"},"Body Level 3: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'white',
    children: 'This is body text level 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2,
    color: 'white',
    children: 'This is body text level 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    level: 3,
    color: 'white',
    children: 'This is body text level 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'white',
    children: 'White body text for dark backgrounds.'
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'grey',
    children: 'Grey body text for light backgrounds.'
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '600px'
  }}>
      <Body level={1} color="white">
        Body Level 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Body>
      <Body level={2} color="white">
        Body Level 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Body>
      <Body level={3} color="white">
        Body Level 3: Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.
      </Body>
    </div>
}`,...s.parameters?.docs?.source}}};const v=["Level1","Level2","Level3","WhiteColor","GreyColor","AllLevels"];export{s as AllLevels,a as GreyColor,o as Level1,t as Level2,l as Level3,i as WhiteColor,v as __namedExportsOrder,p as default};
