import{R as e}from"./iframe-Ca2Uo91e.js";import{t as i}from"./Typography.module-D3eT8RD3.js";import"./preload-helper-PPVm8Dsz.js";const u="_heading_1rxyq_49",d={heading:u,"heading-1":"_heading-1_1rxyq_54","heading-2":"_heading-2_1rxyq_57","heading-3":"_heading-3_1rxyq_60"};function r({children:g,level:p=1,color:m="grey"}){return e.createElement("p",{className:`${i.text} ${i[`text-${m}`]} ${d.heading} ${d[`heading-${p}`]}`},g)}r.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"}]},description:"",defaultValue:{value:"1",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'white' | 'grey' | 'danger'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'grey'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'grey'",computed:!1}}}};const H={title:"Typography/Heading",component:r,parameters:{layout:"centered",backgrounds:{default:"light",values:[{name:"dark",value:"#333333"},{name:"light",value:"#ffffff"}]}},tags:["autodocs"],argTypes:{level:{control:{type:"select"},options:[1,2,3],description:"Heading level (size)"},color:{control:{type:"select"},options:["white","grey","danger"],description:"Text color"},children:{control:{type:"text"},description:"Heading text content"}}},a={args:{level:1,color:"grey",children:"Heading Level 1"}},l={args:{level:2,color:"grey",children:"Heading Level 2"}},n={args:{level:3,color:"grey",children:"Heading Level 3"}},o={args:{level:1,color:"white",children:"White Heading"},parameters:{backgrounds:{default:"dark"}}},t={args:{level:1,color:"grey",children:"Grey Heading"}},s={args:{level:1,color:"danger",children:"Danger Heading"}},c={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement(r,{level:1,color:"grey"},"Heading Level 1"),e.createElement(r,{level:2,color:"grey"},"Heading Level 2"),e.createElement(r,{level:3,color:"grey"},"Heading Level 3"))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'grey',
    children: 'Heading Level 1'
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2,
    color: 'grey',
    children: 'Heading Level 2'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    level: 3,
    color: 'grey',
    children: 'Heading Level 3'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'white',
    children: 'White Heading'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'grey',
    children: 'Grey Heading'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'danger',
    children: 'Danger Heading'
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Heading level={1} color="grey">
        Heading Level 1
      </Heading>
      <Heading level={2} color="grey">
        Heading Level 2
      </Heading>
      <Heading level={3} color="grey">
        Heading Level 3
      </Heading>
    </div>
}`,...c.parameters?.docs?.source}}};const f=["Level1","Level2","Level3","WhiteColor","GreyColor","DangerColor","AllLevels"];export{c as AllLevels,s as DangerColor,t as GreyColor,a as Level1,l as Level2,n as Level3,o as WhiteColor,f as __namedExportsOrder,H as default};
