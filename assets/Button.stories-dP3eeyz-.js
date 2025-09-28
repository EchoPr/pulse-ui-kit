import{R as B}from"./iframe-BZOUAl5K.js";import"./preload-helper-PPVm8Dsz.js";const E="_btn_1idxc_1",y={btn:E,"btn-small":"_btn-small_1idxc_13","btn-normal":"_btn-normal_1idxc_16","btn-default-primary":"_btn-default-primary_1idxc_19","btn-default-secondary":"_btn-default-secondary_1idxc_23","btn-default-on-danger":"_btn-default-on-danger_1idxc_30","btn-default-on-default":"_btn-default-on-default_1idxc_34","btn-danger-primary":"_btn-danger-primary_1idxc_38","btn-danger-secondary":"_btn-danger-secondary_1idxc_42"};function e({text:f,variant:g,style:p="primary",size:x="normal",onClick:v}){const D=()=>{const z=y.btn,S=g&&p?y[`btn-${g}-${p}`]:"",h=y[`btn-${x}`];return[z,S,h].filter(Boolean).join(" ")};return B.createElement("button",{className:D(),onClick:v},f)}e.__docgenInfo={description:"",methods:[],displayName:"Button",props:{text:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"}]},description:""},style:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'on-danger' | 'on-default'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'on-danger'"},{name:"literal",value:"'on-default'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'normal'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'normal'"}]},description:"",defaultValue:{value:"'normal'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const b={title:"Components/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","danger"]},style:{control:{type:"select"},options:["primary","secondary","on-danger","on-default"]},size:{control:{type:"select"},options:["small","normal"]},onClick:{action:"clicked"}}},a={args:{text:"Button",variant:"default",style:"primary",size:"normal"}},t={args:{text:"Primary Default",variant:"default",style:"primary",size:"normal"}},r={args:{text:"Primary Danger",variant:"danger",style:"primary",size:"normal"}},n={args:{text:"Secondary Default",variant:"default",style:"secondary",size:"normal"}},l={args:{text:"Secondary Danger",variant:"danger",style:"secondary",size:"normal"}},s={args:{text:"On Danger Default",variant:"default",style:"on-danger",size:"normal"}},i={args:{text:"On Danger Danger",variant:"danger",style:"on-danger",size:"normal"}},o={args:{text:"On Default Default",variant:"default",style:"on-default",size:"normal"}},m={args:{text:"On Default Danger",variant:"danger",style:"on-default",size:"normal"}},d={args:{text:"Small Button",variant:"default",style:"primary",size:"small"}},c={args:{text:"Normal Button",variant:"default",style:"primary",size:"normal"}},u={render:()=>React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},React.createElement("h3",{style:{margin:0,minWidth:"120px"}},"Default Primary:"),React.createElement(e,{text:"Normal",variant:"default",style:"primary",size:"normal"}),React.createElement(e,{text:"Small",variant:"default",style:"primary",size:"small"})),React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},React.createElement("h3",{style:{margin:0,minWidth:"120px"}},"Default Secondary:"),React.createElement(e,{text:"Normal",variant:"default",style:"secondary",size:"normal"}),React.createElement(e,{text:"Small",variant:"default",style:"secondary",size:"small"})),React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},React.createElement("h3",{style:{margin:0,minWidth:"120px"}},"Danger Primary:"),React.createElement(e,{text:"Normal",variant:"danger",style:"primary",size:"normal"}),React.createElement(e,{text:"Small",variant:"danger",style:"primary",size:"small"})),React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},React.createElement("h3",{style:{margin:0,minWidth:"120px"}},"Danger Secondary:"),React.createElement(e,{text:"Normal",variant:"danger",style:"secondary",size:"normal"}),React.createElement(e,{text:"Small",variant:"danger",style:"secondary",size:"small"})),React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},React.createElement("h3",{style:{margin:0,minWidth:"120px"}},"On-Danger:"),React.createElement(e,{text:"Default Normal",variant:"default",style:"on-danger",size:"normal"}),React.createElement(e,{text:"Default Small",variant:"default",style:"on-danger",size:"small"}),React.createElement(e,{text:"Danger Normal",variant:"danger",style:"on-danger",size:"normal"}),React.createElement(e,{text:"Danger Small",variant:"danger",style:"on-danger",size:"small"})),React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},React.createElement("h3",{style:{margin:0,minWidth:"120px"}},"On-Default:"),React.createElement(e,{text:"Default Normal",variant:"default",style:"on-default",size:"normal"}),React.createElement(e,{text:"Default Small",variant:"default",style:"on-default",size:"small"}),React.createElement(e,{text:"Danger Normal",variant:"danger",style:"on-default",size:"normal"}),React.createElement(e,{text:"Danger Small",variant:"danger",style:"on-default",size:"small"})))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Button',
    variant: 'default',
    style: 'primary',
    size: 'normal'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Primary Default',
    variant: 'default',
    style: 'primary',
    size: 'normal'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Primary Danger',
    variant: 'danger',
    style: 'primary',
    size: 'normal'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Default',
    variant: 'default',
    style: 'secondary',
    size: 'normal'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Danger',
    variant: 'danger',
    style: 'secondary',
    size: 'normal'
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'On Danger Default',
    variant: 'default',
    style: 'on-danger',
    size: 'normal'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'On Danger Danger',
    variant: 'danger',
    style: 'on-danger',
    size: 'normal'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'On Default Default',
    variant: 'default',
    style: 'on-default',
    size: 'normal'
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'On Default Danger',
    variant: 'danger',
    style: 'on-default',
    size: 'normal'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Small Button',
    variant: 'default',
    style: 'primary',
    size: 'small'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Normal Button',
    variant: 'default',
    style: 'primary',
    size: 'normal'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>
        <h3 style={{
        margin: 0,
        minWidth: '120px'
      }}>Default Primary:</h3>
        <Button text="Normal" variant="default" style="primary" size="normal" />
        <Button text="Small" variant="default" style="primary" size="small" />
      </div>
      <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>
        <h3 style={{
        margin: 0,
        minWidth: '120px'
      }}>Default Secondary:</h3>
        <Button text="Normal" variant="default" style="secondary" size="normal" />
        <Button text="Small" variant="default" style="secondary" size="small" />
      </div>
      <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>
        <h3 style={{
        margin: 0,
        minWidth: '120px'
      }}>Danger Primary:</h3>
        <Button text="Normal" variant="danger" style="primary" size="normal" />
        <Button text="Small" variant="danger" style="primary" size="small" />
      </div>
      <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>
        <h3 style={{
        margin: 0,
        minWidth: '120px'
      }}>Danger Secondary:</h3>
        <Button text="Normal" variant="danger" style="secondary" size="normal" />
        <Button text="Small" variant="danger" style="secondary" size="small" />
      </div>
      <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>
        <h3 style={{
        margin: 0,
        minWidth: '120px'
      }}>On-Danger:</h3>
        <Button text="Default Normal" variant="default" style="on-danger" size="normal" />
        <Button text="Default Small" variant="default" style="on-danger" size="small" />
        <Button text="Danger Normal" variant="danger" style="on-danger" size="normal" />
        <Button text="Danger Small" variant="danger" style="on-danger" size="small" />
      </div>
      <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>
        <h3 style={{
        margin: 0,
        minWidth: '120px'
      }}>On-Default:</h3>
        <Button text="Default Normal" variant="default" style="on-default" size="normal" />
        <Button text="Default Small" variant="default" style="on-default" size="small" />
        <Button text="Danger Normal" variant="danger" style="on-default" size="normal" />
        <Button text="Danger Small" variant="danger" style="on-default" size="small" />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};const N=["Default","PrimaryDefault","PrimaryDanger","SecondaryDefault","SecondaryDanger","OnDangerDefault","OnDangerDanger","OnDefaultDefault","OnDefaultDanger","SmallButton","NormalButton","AllVariants"];export{u as AllVariants,a as Default,c as NormalButton,i as OnDangerDanger,s as OnDangerDefault,m as OnDefaultDanger,o as OnDefaultDefault,r as PrimaryDanger,t as PrimaryDefault,l as SecondaryDanger,n as SecondaryDefault,d as SmallButton,N as __namedExportsOrder,b as default};
