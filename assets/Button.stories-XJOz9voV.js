import{R as e}from"./iframe-Dp7zH5CE.js";import"./preload-helper-PPVm8Dsz.js";const B="_btn_ix7za_48",u={btn:B,"btn-small":"_btn-small_ix7za_61","btn-normal":"_btn-normal_ix7za_64","btn-default-primary":"_btn-default-primary_ix7za_67","btn-default-secondary":"_btn-default-secondary_ix7za_74","btn-default-on-danger":"_btn-default-on-danger_ix7za_85","btn-default-on-default":"_btn-default-on-default_ix7za_92","btn-danger-primary":"_btn-danger-primary_ix7za_99","btn-danger-on-danger":"_btn-danger-on-danger_ix7za_99","btn-danger-on-default":"_btn-danger-on-default_ix7za_99","btn-danger-secondary":"_btn-danger-secondary_ix7za_107"};function a({children:g,variant:y,style:p="primary",size:f="normal",onClick:v}){const x=()=>{const z=u.btn,h=y&&p?u[`btn-${y}-${p}`]:"",D=u[`btn-${f}`];return[z,h,D].filter(Boolean).join(" ")};return e.createElement("button",{className:x(),onClick:v},g)}a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"}]},description:""},style:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'on-danger' | 'on-default'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'on-danger'"},{name:"literal",value:"'on-default'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'normal'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'normal'"}]},description:"",defaultValue:{value:"'normal'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const b={title:"Components/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:{type:"text"},description:"Button content"},variant:{control:{type:"select"},options:["default","danger"]},style:{control:{type:"select"},options:["primary","secondary","on-danger","on-default"]},size:{control:{type:"select"},options:["small","normal"]},onClick:{action:"clicked"}}},r={args:{variant:"default",style:"primary",size:"normal",children:"Button"}},t={args:{variant:"default",style:"primary",size:"normal",children:"Primary Default"}},n={args:{variant:"danger",style:"primary",size:"normal",children:"Primary Danger"}},l={args:{variant:"default",style:"secondary",size:"normal",children:"Secondary Default"}},s={args:{variant:"danger",style:"secondary",size:"normal",children:"Secondary Danger"}},i={args:{variant:"default",style:"on-danger",size:"normal",children:"On Danger"}},o={args:{variant:"default",style:"on-default",size:"normal",children:"On Default"}},m={args:{variant:"default",style:"primary",size:"small",children:"Small Button"}},d={args:{variant:"default",style:"primary",size:"normal",children:"Normal Button"}},c={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},e.createElement("h3",{style:{margin:0,minWidth:"120px"}},"Default Primary:"),e.createElement(a,{variant:"default",style:"primary",size:"normal"},"Normal"),e.createElement(a,{variant:"default",style:"primary",size:"small"},"Small")),e.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},e.createElement("h3",{style:{margin:0,minWidth:"120px"}},"Default Secondary:"),e.createElement(a,{variant:"default",style:"secondary",size:"normal"},"Normal"),e.createElement(a,{variant:"default",style:"secondary",size:"small"},"Small")),e.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},e.createElement("h3",{style:{margin:0,minWidth:"120px"}},"Default On-Danger:"),e.createElement(a,{variant:"default",style:"on-danger",size:"normal"},"Normal"),e.createElement(a,{variant:"default",style:"on-danger",size:"small"},"Small")),e.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},e.createElement("h3",{style:{margin:0,minWidth:"120px"}},"Default On-Default:"),e.createElement(a,{variant:"default",style:"on-default",size:"normal"},"Normal"),e.createElement(a,{variant:"default",style:"on-default",size:"small"},"Small")),e.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},e.createElement("h3",{style:{margin:0,minWidth:"120px"}},"Danger Primary:"),e.createElement(a,{variant:"danger",style:"primary",size:"normal"},"Normal"),e.createElement(a,{variant:"danger",style:"primary",size:"small"},"Small")),e.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},e.createElement("h3",{style:{margin:0,minWidth:"120px"}},"Danger Secondary:"),e.createElement(a,{variant:"danger",style:"secondary",size:"normal"},"Normal"),e.createElement(a,{variant:"danger",style:"secondary",size:"small"},"Small")))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    style: 'primary',
    size: 'normal',
    children: 'Button'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    style: 'primary',
    size: 'normal',
    children: 'Primary Default'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    style: 'primary',
    size: 'normal',
    children: 'Primary Danger'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    style: 'secondary',
    size: 'normal',
    children: 'Secondary Default'
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    style: 'secondary',
    size: 'normal',
    children: 'Secondary Danger'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    style: 'on-danger',
    size: 'normal',
    children: 'On Danger'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    style: 'on-default',
    size: 'normal',
    children: 'On Default'
  }
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    style: 'primary',
    size: 'small',
    children: 'Small Button'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    style: 'primary',
    size: 'normal',
    children: 'Normal Button'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
        <Button variant="default" style="primary" size="normal">
          Normal
        </Button>
        <Button variant="default" style="primary" size="small">
          Small
        </Button>
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
        <Button variant="default" style="secondary" size="normal">
          Normal
        </Button>
        <Button variant="default" style="secondary" size="small">
          Small
        </Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>
        <h3 style={{
        margin: 0,
        minWidth: '120px'
      }}>Default On-Danger:</h3>
        <Button variant="default" style="on-danger" size="normal">
          Normal
        </Button>
        <Button variant="default" style="on-danger" size="small">
          Small
        </Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}>
        <h3 style={{
        margin: 0,
        minWidth: '120px'
      }}>Default On-Default:</h3>
        <Button variant="default" style="on-default" size="normal">
          Normal
        </Button>
        <Button variant="default" style="on-default" size="small">
          Small
        </Button>
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
        <Button variant="danger" style="primary" size="normal">
          Normal
        </Button>
        <Button variant="danger" style="primary" size="small">
          Small
        </Button>
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
        <Button variant="danger" style="secondary" size="normal">
          Normal
        </Button>
        <Button variant="danger" style="secondary" size="small">
          Small
        </Button>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};const E=["Default","PrimaryDefault","PrimaryDanger","SecondaryDefault","SecondaryDanger","OnDanger","OnDefault","SmallButton","NormalButton","AllVariants"];export{c as AllVariants,r as Default,d as NormalButton,i as OnDanger,o as OnDefault,n as PrimaryDanger,t as PrimaryDefault,s as SecondaryDanger,l as SecondaryDefault,m as SmallButton,E as __namedExportsOrder,b as default};
