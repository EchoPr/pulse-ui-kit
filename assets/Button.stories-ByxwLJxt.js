import{R as e}from"./iframe-DbiYdzuG.js";import{L as a}from"./Label-DY2ZD1JM.js";import"./preload-helper-PPVm8Dsz.js";import"./Typography.module-x06dPI-5.js";const B="_text_7eiw9_35",S="_btn_7eiw9_36",_="_badge_7eiw9_37",p={text:B,btn:S,badge:_,"btn-small":"_btn-small_7eiw9_64","btn-normal":"_btn-normal_7eiw9_67","btn-default-primary":"_btn-default-primary_7eiw9_70","btn-default-secondary":"_btn-default-secondary_7eiw9_74","btn-default-on-danger":"_btn-default-on-danger_7eiw9_81","btn-default-on-default":"_btn-default-on-default_7eiw9_85","btn-danger-primary":"_btn-danger-primary_7eiw9_89","btn-danger-secondary":"_btn-danger-secondary_7eiw9_93"};function l({children:b,variant:v,style:f="primary",size:D="normal",onClick:h}){const E=()=>{const z=p.btn,L=v&&f?p[`btn-${v}-${f}`]:"",x=p[`btn-${D}`];return[z,L,x].filter(Boolean).join(" ")};return e.createElement("button",{className:E(),onClick:h},b)}l.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"}]},description:""},style:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'on-danger' | 'on-default'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'on-danger'"},{name:"literal",value:"'on-default'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'normal'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'normal'"}]},description:"",defaultValue:{value:"'normal'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const P={title:"Components/Button",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:{type:"text"},description:"Button content (use Typography components)"},variant:{control:{type:"select"},options:["default","danger"]},style:{control:{type:"select"},options:["primary","secondary","on-danger","on-default"]},size:{control:{type:"select"},options:["small","normal"]},onClick:{action:"clicked"}}},r={args:{variant:"default",style:"primary",size:"normal",children:e.createElement(a,{level:3,color:"white"},"Button")}},t={args:{variant:"default",style:"primary",size:"normal",children:e.createElement(a,{level:3,color:"white"},"Primary Default")}},n={args:{variant:"danger",style:"primary",size:"normal",children:e.createElement(a,{level:3,color:"white"},"Primary Danger")}},o={args:{variant:"default",style:"secondary",size:"normal",children:e.createElement(a,{level:3,color:"grey"},"Secondary Default")}},s={args:{variant:"danger",style:"secondary",size:"normal",children:e.createElement(a,{level:3,color:"danger"},"Secondary Danger")}},i={args:{variant:"default",style:"on-danger",size:"normal",children:e.createElement(a,{level:3,color:"grey"},"On Danger Default")}},m={args:{variant:"danger",style:"on-danger",size:"normal",children:e.createElement(a,{level:3,color:"grey"},"On Danger Danger")}},c={args:{variant:"default",style:"on-default",size:"normal",children:e.createElement(a,{level:3,color:"grey"},"On Default Default")}},d={args:{variant:"danger",style:"on-default",size:"normal",children:e.createElement(a,{level:3,color:"grey"},"On Default Danger")}},u={args:{variant:"default",style:"primary",size:"small",children:e.createElement(a,{level:3,color:"white"},"Small Button")}},y={args:{variant:"default",style:"primary",size:"normal",children:e.createElement(a,{level:3,color:"white"},"Normal Button")}},g={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},e.createElement("h3",{style:{margin:0,minWidth:"120px"}},"Default Primary:"),e.createElement(l,{variant:"default",style:"primary",size:"normal"},e.createElement(a,{level:3,color:"white"},"Normal")),e.createElement(l,{variant:"default",style:"primary",size:"small"},e.createElement(a,{level:3,color:"white"},"Small"))),e.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},e.createElement("h3",{style:{margin:0,minWidth:"120px"}},"Default Secondary:"),e.createElement(l,{variant:"default",style:"secondary",size:"normal"},e.createElement(a,{level:3,color:"grey"},"Normal")),e.createElement(l,{variant:"default",style:"secondary",size:"small"},e.createElement(a,{level:3,color:"grey"},"Small"))),e.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},e.createElement("h3",{style:{margin:0,minWidth:"120px"}},"Danger Primary:"),e.createElement(l,{variant:"danger",style:"primary",size:"normal"},e.createElement(a,{level:3,color:"white"},"Normal")),e.createElement(l,{variant:"danger",style:"primary",size:"small"},e.createElement(a,{level:3,color:"white"},"Small"))),e.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},e.createElement("h3",{style:{margin:0,minWidth:"120px"}},"Danger Secondary:"),e.createElement(l,{variant:"danger",style:"secondary",size:"normal"},e.createElement(a,{level:3,color:"grey"},"Normal")),e.createElement(l,{variant:"danger",style:"secondary",size:"small"},e.createElement(a,{level:3,color:"grey"},"Small"))),e.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},e.createElement("h3",{style:{margin:0,minWidth:"120px"}},"On-Danger:"),e.createElement(l,{variant:"default",style:"on-danger",size:"normal"},e.createElement(a,{level:3,color:"grey"},"Default Normal")),e.createElement(l,{variant:"default",style:"on-danger",size:"small"},e.createElement(a,{level:3,color:"grey"},"Default Small")),e.createElement(l,{variant:"danger",style:"on-danger",size:"normal"},e.createElement(a,{level:3,color:"grey"},"Danger Normal")),e.createElement(l,{variant:"danger",style:"on-danger",size:"small"},e.createElement(a,{level:3,color:"grey"},"Danger Small"))),e.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},e.createElement("h3",{style:{margin:0,minWidth:"120px"}},"On-Default:"),e.createElement(l,{variant:"default",style:"on-default",size:"normal"},e.createElement(a,{level:3,color:"grey"},"Default Normal")),e.createElement(l,{variant:"default",style:"on-default",size:"small"},e.createElement(a,{level:3,color:"grey"},"Default Small")),e.createElement(l,{variant:"danger",style:"on-default",size:"normal"},e.createElement(a,{level:3,color:"grey"},"Danger Normal")),e.createElement(l,{variant:"danger",style:"on-default",size:"small"},e.createElement(a,{level:3,color:"grey"},"Danger Small"))))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    style: 'primary',
    size: 'normal',
    children: <Label level={3} color="white">
        Button
      </Label>
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    style: 'primary',
    size: 'normal',
    children: <Label level={3} color="white">
        Primary Default
      </Label>
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    style: 'primary',
    size: 'normal',
    children: <Label level={3} color="white">
        Primary Danger
      </Label>
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    style: 'secondary',
    size: 'normal',
    children: <Label level={3} color="grey">
        Secondary Default
      </Label>
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    style: 'secondary',
    size: 'normal',
    children: <Label level={3} color="danger">
        Secondary Danger
      </Label>
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    style: 'on-danger',
    size: 'normal',
    children: <Label level={3} color="grey">
        On Danger Default
      </Label>
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    style: 'on-danger',
    size: 'normal',
    children: <Label level={3} color="grey">
        On Danger Danger
      </Label>
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    style: 'on-default',
    size: 'normal',
    children: <Label level={3} color="grey">
        On Default Default
      </Label>
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    style: 'on-default',
    size: 'normal',
    children: <Label level={3} color="grey">
        On Default Danger
      </Label>
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    style: 'primary',
    size: 'small',
    children: <Label level={3} color="white">
        Small Button
      </Label>
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    style: 'primary',
    size: 'normal',
    children: <Label level={3} color="white">
        Normal Button
      </Label>
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
          <Label level={3} color="white">
            Normal
          </Label>
        </Button>
        <Button variant="default" style="primary" size="small">
          <Label level={3} color="white">
            Small
          </Label>
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
          <Label level={3} color="grey">
            Normal
          </Label>
        </Button>
        <Button variant="default" style="secondary" size="small">
          <Label level={3} color="grey">
            Small
          </Label>
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
          <Label level={3} color="white">
            Normal
          </Label>
        </Button>
        <Button variant="danger" style="primary" size="small">
          <Label level={3} color="white">
            Small
          </Label>
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
          <Label level={3} color="grey">
            Normal
          </Label>
        </Button>
        <Button variant="danger" style="secondary" size="small">
          <Label level={3} color="grey">
            Small
          </Label>
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
      }}>On-Danger:</h3>
        <Button variant="default" style="on-danger" size="normal">
          <Label level={3} color="grey">
            Default Normal
          </Label>
        </Button>
        <Button variant="default" style="on-danger" size="small">
          <Label level={3} color="grey">
            Default Small
          </Label>
        </Button>
        <Button variant="danger" style="on-danger" size="normal">
          <Label level={3} color="grey">
            Danger Normal
          </Label>
        </Button>
        <Button variant="danger" style="on-danger" size="small">
          <Label level={3} color="grey">
            Danger Small
          </Label>
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
      }}>On-Default:</h3>
        <Button variant="default" style="on-default" size="normal">
          <Label level={3} color="grey">
            Default Normal
          </Label>
        </Button>
        <Button variant="default" style="on-default" size="small">
          <Label level={3} color="grey">
            Default Small
          </Label>
        </Button>
        <Button variant="danger" style="on-default" size="normal">
          <Label level={3} color="grey">
            Danger Normal
          </Label>
        </Button>
        <Button variant="danger" style="on-default" size="small">
          <Label level={3} color="grey">
            Danger Small
          </Label>
        </Button>
      </div>
    </div>
}`,...g.parameters?.docs?.source}}};const W=["Default","PrimaryDefault","PrimaryDanger","SecondaryDefault","SecondaryDanger","OnDangerDefault","OnDangerDanger","OnDefaultDefault","OnDefaultDanger","SmallButton","NormalButton","AllVariants"];export{g as AllVariants,r as Default,y as NormalButton,m as OnDangerDanger,i as OnDangerDefault,d as OnDefaultDanger,c as OnDefaultDefault,n as PrimaryDanger,t as PrimaryDefault,s as SecondaryDanger,o as SecondaryDefault,u as SmallButton,W as __namedExportsOrder,P as default};
