import{R as a,r as _}from"./iframe-Ca2Uo91e.js";import"./preload-helper-PPVm8Dsz.js";const r={"input-container":"_input-container_1byjh_49","input-field":"_input-field_1byjh_64","input-field-disabled":"_input-field-disabled_1byjh_74","input-after":"_input-after_1byjh_79","input-before":"_input-before_1byjh_80"};function u({value:e,onChange:n,placeholder:d,type:h="text",disabled:m=!1,beforeAction:g,afterAction:f}){const y=b=>{n?.(b.target.value)};return a.createElement("div",{className:r["input-container"]},g&&a.createElement("span",{className:r["input-before"]},g),a.createElement("input",{type:h,...n?{value:e||"",onChange:y}:{defaultValue:e},placeholder:d,disabled:m,className:`${r["input-field"]} ${m?r["input-field-disabled"]:""}`}),f&&a.createElement("span",{className:r["input-after"]},f))}u.__docgenInfo={description:"",methods:[],displayName:"Input",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'text' | 'password' | 'email' | 'number'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"},{name:"literal",value:"'email'"},{name:"literal",value:"'number'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},beforeAction:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},afterAction:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const x={title:"Components/Input",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","password","email","number"]},disabled:{control:{type:"boolean"}},placeholder:{control:{type:"text"}}}},t=e=>{const[n,d]=_.useState(e.value||"");return a.createElement(u,{...e,value:n,onChange:d})},s={render:e=>a.createElement(t,{...e}),args:{placeholder:"Введите текст..."}},o={render:e=>a.createElement(t,{...e}),args:{type:"password",placeholder:"Введите пароль..."}},l={render:e=>a.createElement(t,{...e}),args:{type:"email",placeholder:"example@mail.com"}},p={args:{value:"Неактивное поле",disabled:!0}},c={render:e=>a.createElement(t,{...e}),args:{placeholder:"Поиск...",beforeAction:a.createElement("span",{style:{color:"#666",padding:"0 4px"}},"🔍")}},i={render:e=>a.createElement(t,{...e}),args:{placeholder:"Введите сумму...",afterAction:a.createElement("span",{style:{color:"#666",padding:"0 4px"}},"₽")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: 'Введите текст...'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    type: 'password',
    placeholder: 'Введите пароль...'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    type: 'email',
    placeholder: 'example@mail.com'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Неактивное поле',
    disabled: true
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: 'Поиск...',
    beforeAction: <span style={{
      color: '#666',
      padding: '0 4px'
    }}>🔍</span>
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: 'Введите сумму...',
    afterAction: <span style={{
      color: '#666',
      padding: '0 4px'
    }}>₽</span>
  }
}`,...i.parameters?.docs?.source}}};const S=["Default","Password","Email","Disabled","WithBeforeAction","WithAfterAction"];export{s as Default,p as Disabled,l as Email,o as Password,i as WithAfterAction,c as WithBeforeAction,S as __namedExportsOrder,x as default};
