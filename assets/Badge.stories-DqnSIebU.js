import{R as e}from"./iframe-Ca2Uo91e.js";import"./preload-helper-PPVm8Dsz.js";const y="_badge_dlb7r_49",c={badge:y,"badge-default":"_badge-default_dlb7r_64","badge-on-default":"_badge-on-default_dlb7r_68","badge-danger":"_badge-danger_dlb7r_72","badge-on-danger":"_badge-on-danger_dlb7r_76","badge-div":"_badge-div_dlb7r_80"};function a({children:p,style:u="default",type:m="span"}){return e.createElement("span",{className:`${c.badge} ${c[`badge-${u}`]} ${c[`badge-${m}`]}`},p)}a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"union",raw:"'default' | 'on-default' | 'danger' | 'on-danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'on-default'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'on-danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'span' | 'div'",elements:[{name:"literal",value:"'span'"},{name:"literal",value:"'div'"}]},description:"",defaultValue:{value:"'span'",computed:!1}}}};const h={title:"Components/Badge",component:a,argTypes:{style:{control:{type:"select"},options:["default","on-default","danger","on-danger"]},type:{control:{type:"select"},options:["span","div"]},children:{control:"text"}}},n=p=>e.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",padding:"20px"}},e.createElement(a,{...p})),r=n.bind({});r.args={children:"Default Badge",style:"default",type:"span"};const s=n.bind({});s.args={children:"On Default Badge",style:"on-default",type:"span"};const d=n.bind({});d.args={children:"Danger Badge",style:"danger",type:"span"};const l=n.bind({});l.args={children:"On Danger Badge",style:"on-danger",type:"span"};const i=n.bind({});i.args={children:"Div Badge",style:"default",type:"div"};const o=n.bind({});o.args={children:"This is a badge with longer text content",style:"default",type:"span"};const g=n.bind({});g.args={children:"42",style:"danger",type:"span"};const t=()=>e.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",flexWrap:"wrap",minHeight:"100vh",padding:"20px"}},e.createElement(a,{style:"default"},"Default"),e.createElement(a,{style:"on-default"},"On Default"),e.createElement(a,{style:"danger"},"Danger"),e.createElement(a,{style:"on-danger"},"On Danger"),e.createElement(a,{style:"default",type:"div"},"Div Type"));t.storyName="All Variants";t.__docgenInfo={description:"",methods:[],displayName:"AllVariants"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '20px'
}}>
    <Badge {...args} />
  </div>`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '20px'
}}>
    <Badge {...args} />
  </div>`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '20px'
}}>
    <Badge {...args} />
  </div>`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '20px'
}}>
    <Badge {...args} />
  </div>`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '20px'
}}>
    <Badge {...args} />
  </div>`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '20px'
}}>
    <Badge {...args} />
  </div>`,...o.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '20px'
}}>
    <Badge {...args} />
  </div>`,...g.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  flexWrap: 'wrap',
  minHeight: '100vh',
  padding: '20px'
}}>
    <Badge style="default">Default</Badge>
    <Badge style="on-default">On Default</Badge>
    <Badge style="danger">Danger</Badge>
    <Badge style="on-danger">On Danger</Badge>
    <Badge style="default" type="div">
      Div Type
    </Badge>
  </div>`,...t.parameters?.docs?.source}}};const b=["Default","OnDefault","Danger","OnDanger","WithDivType","WithLongText","WithNumbers","AllVariants"];export{t as AllVariants,d as Danger,r as Default,l as OnDanger,s as OnDefault,i as WithDivType,o as WithLongText,g as WithNumbers,b as __namedExportsOrder,h as default};
