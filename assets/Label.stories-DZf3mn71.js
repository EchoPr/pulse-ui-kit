import{L as r}from"./Label-DY2ZD1JM.js";import{R as e}from"./iframe-DbiYdzuG.js";import"./Typography.module-x06dPI-5.js";import"./preload-helper-PPVm8Dsz.js";const v={title:"Typography/Label",component:r,parameters:{layout:"centered",backgrounds:{default:"light",values:[{name:"dark",value:"#333333"},{name:"light",value:"#ffffff"}]}},tags:["autodocs"],argTypes:{level:{control:{type:"select"},options:[1,2,3],description:"Label level (size)"},color:{control:{type:"select"},options:["white","grey","danger"],description:"Text color"},children:{control:{type:"text"},description:"Label text content"}}},l={args:{level:1,color:"grey",children:"Label Level 1"}},a={args:{level:2,color:"grey",children:"Label Level 2"}},o={args:{level:3,color:"grey",children:"Label Level 3"}},s={args:{level:1,color:"white",children:"White Label"},parameters:{backgrounds:{default:"dark"}}},c={args:{level:1,color:"grey",children:"Grey Label"}},t={args:{level:1,color:"danger",children:"Danger Label"}},n={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},e.createElement("div",null,e.createElement(r,{level:1,color:"grey"},"Email Address"),e.createElement("input",{type:"email",style:{marginTop:"4px",padding:"8px",borderRadius:"4px",border:"1px solid #ccc"},placeholder:"Enter your email"})),e.createElement("div",null,e.createElement(r,{level:2,color:"grey"},"Password"),e.createElement("input",{type:"password",style:{marginTop:"4px",padding:"8px",borderRadius:"4px",border:"1px solid #ccc"},placeholder:"Enter your password"})),e.createElement("div",null,e.createElement(r,{level:3,color:"grey"},"Confirm Password"),e.createElement("input",{type:"password",style:{marginTop:"4px",padding:"8px",borderRadius:"4px",border:"1px solid #ccc"},placeholder:"Confirm your password"})))},d={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement(r,{level:1,color:"grey"},"Label Level 1"),e.createElement(r,{level:2,color:"grey"},"Label Level 2"),e.createElement(r,{level:3,color:"grey"},"Label Level 3"))};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'grey',
    children: 'Label Level 1'
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2,
    color: 'grey',
    children: 'Label Level 2'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    level: 3,
    color: 'grey',
    children: 'Label Level 3'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'white',
    children: 'White Label'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'grey',
    children: 'Grey Label'
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'danger',
    children: 'Danger Label'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'flex-start'
  }}>
      <div>
        <Label level={1} color="grey">
          Email Address
        </Label>
        <input type="email" style={{
        marginTop: '4px',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc'
      }} placeholder="Enter your email" />
      </div>
      <div>
        <Label level={2} color="grey">
          Password
        </Label>
        <input type="password" style={{
        marginTop: '4px',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc'
      }} placeholder="Enter your password" />
      </div>
      <div>
        <Label level={3} color="grey">
          Confirm Password
        </Label>
        <input type="password" style={{
        marginTop: '4px',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc'
      }} placeholder="Confirm your password" />
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Label level={1} color="grey">
        Label Level 1
      </Label>
      <Label level={2} color="grey">
        Label Level 2
      </Label>
      <Label level={3} color="grey">
        Label Level 3
      </Label>
    </div>
}`,...d.parameters?.docs?.source}}};const u=["Level1","Level2","Level3","WhiteColor","GreyColor","DangerColor","FormLabels","AllLevels"];export{d as AllLevels,t as DangerColor,n as FormLabels,c as GreyColor,l as Level1,a as Level2,o as Level3,s as WhiteColor,u as __namedExportsOrder,v as default};
