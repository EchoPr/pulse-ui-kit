import{R as e}from"./iframe-DbiYdzuG.js";import{t as d}from"./Typography.module-x06dPI-5.js";import"./preload-helper-PPVm8Dsz.js";const g="_text_15vlf_35",y="_btn_15vlf_36",v="_badge_15vlf_37",b="_bdy_15vlf_51",c={text:g,btn:y,badge:v,bdy:b,"bdy-1":"_bdy-1_15vlf_56","bdy-2":"_bdy-2_15vlf_59","bdy-3":"_bdy-3_15vlf_62"};function r({children:u,level:m=1,color:p="grey"}){return e.createElement("p",{className:`${d.text} ${d[`text-${p}`]} ${c.bdy} ${c[`bdy-${m}`]}`},u)}r.__docgenInfo={description:"",methods:[],displayName:"Body",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"}]},description:"",defaultValue:{value:"1",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'white' | 'grey' | 'danger'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'grey'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'grey'",computed:!1}}}};const _={title:"Typography/Body",component:r,parameters:{layout:"centered",backgrounds:{default:"light",values:[{name:"dark",value:"#333333"},{name:"light",value:"#ffffff"}]}},tags:["autodocs"],argTypes:{level:{control:{type:"select"},options:[1,2,3],description:"Body text level (size)"},color:{control:{type:"select"},options:["white","grey","danger"],description:"Text color"},children:{control:{type:"text"},description:"Body text content"}}},o={args:{level:1,color:"grey",children:"This is body text level 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},t={args:{level:2,color:"grey",children:"This is body text level 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},l={args:{level:3,color:"grey",children:"This is body text level 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}},a={args:{level:1,color:"white",children:"White body text for dark backgrounds."},parameters:{backgrounds:{default:"dark"}}},s={args:{level:1,color:"grey",children:"Grey body text for light backgrounds."}},i={args:{level:1,color:"danger",children:"Danger body text for errors and warnings."}},n={args:{color:"grey"},render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"600px"}},e.createElement(r,{level:1,color:"grey"},"Body Level 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),e.createElement(r,{level:2,color:"grey"},"Body Level 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),e.createElement(r,{level:3,color:"grey"},"Body Level 3: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'grey',
    children: 'This is body text level 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2,
    color: 'grey',
    children: 'This is body text level 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    level: 3,
    color: 'grey',
    children: 'This is body text level 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'white',
    children: 'White body text for dark backgrounds.'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'grey',
    children: 'Grey body text for light backgrounds.'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'danger',
    children: 'Danger body text for errors and warnings.'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'grey'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '600px'
  }}>
      <Body level={1} color="grey">
        Body Level 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Body>
      <Body level={2} color="grey">
        Body Level 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Body>
      <Body level={3} color="grey">
        Body Level 3: Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.
      </Body>
    </div>
}`,...n.parameters?.docs?.source}}};const L=["Level1","Level2","Level3","WhiteColor","GreyColor","DangerColor","AllLevels"];export{n as AllLevels,i as DangerColor,s as GreyColor,o as Level1,t as Level2,l as Level3,a as WhiteColor,L as __namedExportsOrder,_ as default};
