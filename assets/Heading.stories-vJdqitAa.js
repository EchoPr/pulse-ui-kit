import{R as e}from"./iframe-CK2W0OjM.js";import"./preload-helper-aATRHN56.js";function r({children:s,level:c=1,color:d="white"}){return e.createElement("p",{className:`text text-${d} heading heading-${c}`},s)}r.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"}]},description:"",defaultValue:{value:"1",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'white' | 'grey'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'grey'"}]},description:"",defaultValue:{value:"'white'",computed:!1}}}};const m={title:"Typography/Heading",component:r,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#333333"},{name:"light",value:"#ffffff"}]}},tags:["autodocs"],argTypes:{level:{control:{type:"select"},options:[1,2,3],description:"Heading level (size)"},color:{control:{type:"select"},options:["white","grey"],description:"Text color"},children:{control:{type:"text"},description:"Heading text content"}}},a={args:{level:1,color:"white",children:"Heading Level 1"}},l={args:{level:2,color:"white",children:"Heading Level 2"}},n={args:{level:3,color:"white",children:"Heading Level 3"}},o={args:{level:1,color:"white",children:"White Heading"}},t={args:{level:1,color:"grey",children:"Grey Heading"},parameters:{backgrounds:{default:"light"}}},i={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement(r,{level:1,color:"white"},"Heading Level 1"),e.createElement(r,{level:2,color:"white"},"Heading Level 2"),e.createElement(r,{level:3,color:"white"},"Heading Level 3"))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'white',
    children: 'Heading Level 1'
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2,
    color: 'white',
    children: 'Heading Level 2'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    level: 3,
    color: 'white',
    children: 'Heading Level 3'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'white',
    children: 'White Heading'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'grey',
    children: 'Grey Heading'
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Heading level={1} color="white">
        Heading Level 1
      </Heading>
      <Heading level={2} color="white">
        Heading Level 2
      </Heading>
      <Heading level={3} color="white">
        Heading Level 3
      </Heading>
    </div>
}`,...i.parameters?.docs?.source}}};const u=["Level1","Level2","Level3","WhiteColor","GreyColor","AllLevels"];export{i as AllLevels,t as GreyColor,a as Level1,l as Level2,n as Level3,o as WhiteColor,u as __namedExportsOrder,m as default};
