import{R as e}from"./iframe-CK2W0OjM.js";import"./preload-helper-aATRHN56.js";function r({children:i,level:d=1,color:p="white"}){return e.createElement("p",{className:`text text-${p} lbl lbl-${d}`},i)}r.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"}]},description:"",defaultValue:{value:"1",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'white' | 'grey'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'grey'"}]},description:"",defaultValue:{value:"'white'",computed:!1}}}};const v={title:"Typography/Label",component:r,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#333333"},{name:"light",value:"#ffffff"}]}},tags:["autodocs"],argTypes:{level:{control:{type:"select"},options:[1,2,3],description:"Label level (size)"},color:{control:{type:"select"},options:["white","grey"],description:"Text color"},children:{control:{type:"text"},description:"Label text content"}}},l={args:{level:1,color:"white",children:"Label Level 1"}},a={args:{level:2,color:"white",children:"Label Level 2"}},o={args:{level:3,color:"white",children:"Label Level 3"}},t={args:{level:1,color:"white",children:"White Label"}},s={args:{level:1,color:"grey",children:"Grey Label"},parameters:{backgrounds:{default:"light"}}},c={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},e.createElement("div",null,e.createElement(r,{level:1,color:"white"},"Email Address"),e.createElement("input",{type:"email",style:{marginTop:"4px",padding:"8px",borderRadius:"4px",border:"1px solid #ccc"},placeholder:"Enter your email"})),e.createElement("div",null,e.createElement(r,{level:2,color:"white"},"Password"),e.createElement("input",{type:"password",style:{marginTop:"4px",padding:"8px",borderRadius:"4px",border:"1px solid #ccc"},placeholder:"Enter your password"})),e.createElement("div",null,e.createElement(r,{level:3,color:"white"},"Confirm Password"),e.createElement("input",{type:"password",style:{marginTop:"4px",padding:"8px",borderRadius:"4px",border:"1px solid #ccc"},placeholder:"Confirm your password"})))},n={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement(r,{level:1,color:"white"},"Label Level 1"),e.createElement(r,{level:2,color:"white"},"Label Level 2"),e.createElement(r,{level:3,color:"white"},"Label Level 3"))};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'white',
    children: 'Label Level 1'
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    level: 2,
    color: 'white',
    children: 'Label Level 2'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    level: 3,
    color: 'white',
    children: 'Label Level 3'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'white',
    children: 'White Label'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'grey',
    children: 'Grey Label'
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'flex-start'
  }}>
      <div>
        <Label level={1} color="white">
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
        <Label level={2} color="white">
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
        <Label level={3} color="white">
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
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Label level={1} color="white">
        Label Level 1
      </Label>
      <Label level={2} color="white">
        Label Level 2
      </Label>
      <Label level={3} color="white">
        Label Level 3
      </Label>
    </div>
}`,...n.parameters?.docs?.source}}};const L=["Level1","Level2","Level3","WhiteColor","GreyColor","FormLabels","AllLevels"];export{n as AllLevels,c as FormLabels,s as GreyColor,l as Level1,a as Level2,o as Level3,t as WhiteColor,L as __namedExportsOrder,v as default};
