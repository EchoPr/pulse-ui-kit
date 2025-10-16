import{R as e}from"./iframe-Ca2Uo91e.js";import{t as i}from"./Typography.module-D3eT8RD3.js";import"./preload-helper-PPVm8Dsz.js";const v="_lbl_6uamf_49",p={lbl:v,"lbl-1":"_lbl-1_6uamf_54","lbl-2":"_lbl-2_6uamf_57","lbl-3":"_lbl-3_6uamf_60"};function r({children:m,level:u=1,color:g="grey"}){return e.createElement("p",{className:`${i.text} ${i[`text-${g}`]} ${p.lbl} ${p[`lbl-${u}`]}`},m)}r.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"}]},description:"",defaultValue:{value:"1",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'white' | 'grey' | 'danger'",elements:[{name:"literal",value:"'white'"},{name:"literal",value:"'grey'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'grey'",computed:!1}}}};const x={title:"Typography/Label",component:r,parameters:{layout:"centered",backgrounds:{default:"light",values:[{name:"dark",value:"#333333"},{name:"light",value:"#ffffff"}]}},tags:["autodocs"],argTypes:{level:{control:{type:"select"},options:[1,2,3],description:"Label level (size)"},color:{control:{type:"select"},options:["white","grey","danger"],description:"Text color"},children:{control:{type:"text"},description:"Label text content"}}},l={args:{level:1,color:"grey",children:"Label Level 1"}},a={args:{level:2,color:"grey",children:"Label Level 2"}},o={args:{level:3,color:"grey",children:"Label Level 3"}},s={args:{level:1,color:"white",children:"White Label"},parameters:{backgrounds:{default:"dark"}}},t={args:{level:1,color:"grey",children:"Grey Label"}},n={args:{level:1,color:"danger",children:"Danger Label"}},c={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"}},e.createElement("div",null,e.createElement(r,{level:1,color:"grey"},"Email Address"),e.createElement("input",{type:"email",style:{marginTop:"4px",padding:"8px",borderRadius:"4px",border:"1px solid #ccc"},placeholder:"Enter your email"})),e.createElement("div",null,e.createElement(r,{level:2,color:"grey"},"Password"),e.createElement("input",{type:"password",style:{marginTop:"4px",padding:"8px",borderRadius:"4px",border:"1px solid #ccc"},placeholder:"Enter your password"})),e.createElement("div",null,e.createElement(r,{level:3,color:"grey"},"Confirm Password"),e.createElement("input",{type:"password",style:{marginTop:"4px",padding:"8px",borderRadius:"4px",border:"1px solid #ccc"},placeholder:"Confirm your password"})))},d={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement(r,{level:1,color:"grey"},"Label Level 1"),e.createElement(r,{level:2,color:"grey"},"Label Level 2"),e.createElement(r,{level:3,color:"grey"},"Label Level 3"))};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'grey',
    children: 'Grey Label'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    color: 'danger',
    children: 'Danger Label'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const f=["Level1","Level2","Level3","WhiteColor","GreyColor","DangerColor","FormLabels","AllLevels"];export{d as AllLevels,n as DangerColor,c as FormLabels,t as GreyColor,l as Level1,a as Level2,o as Level3,s as WhiteColor,f as __namedExportsOrder,x as default};
