import{R as r,r as v}from"./iframe-Dp7zH5CE.js";import"./preload-helper-PPVm8Dsz.js";const n={"input-container":"_input-container_1a87k_48","input-field":"_input-field_1a87k_63","input-after":"_input-after_1a87k_73","input-before":"_input-before_1a87k_74"};function u({value:e,onChange:t,placeholder:d,type:f="text",disabled:h=!1,beforeAction:m,afterAction:g}){const y=R=>{t?.(R.target.value)};return r.createElement("div",{className:n["input-container"]},m&&r.createElement("span",{className:n["input-before"]},m),r.createElement("input",{type:f,...t?{value:e||"",onChange:y}:{defaultValue:e},placeholder:d,disabled:h,className:n["input-field"]}),g&&r.createElement("span",{className:n["input-after"]},g))}u.__docgenInfo={description:"",methods:[],displayName:"Input",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'text' | 'password' | 'email' | 'number'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"},{name:"literal",value:"'email'"},{name:"literal",value:"'number'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},beforeAction:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},afterAction:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const _={title:"Components/Input",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","password","email","number"]},disabled:{control:{type:"boolean"}},placeholder:{control:{type:"text"}}}},a=e=>{const[t,d]=v.useState(e.value||"");return React.createElement(u,{...e,value:t,onChange:d})},s={render:e=>React.createElement(a,{...e}),args:{placeholder:"Введите текст..."}},o={render:e=>React.createElement(a,{...e}),args:{type:"password",placeholder:"Введите пароль..."}},c={render:e=>React.createElement(a,{...e}),args:{type:"email",placeholder:"example@mail.com"}},l={args:{value:"Неактивное поле",disabled:!0}},p={render:e=>React.createElement(a,{...e}),args:{placeholder:"Поиск...",beforeAction:React.createElement("span",{style:{color:"#666",padding:"0 4px"}},"🔍")}},i={render:e=>React.createElement(a,{...e}),args:{placeholder:"Введите сумму...",afterAction:React.createElement("span",{style:{color:"#666",padding:"0 4px"}},"₽")}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    type: 'email',
    placeholder: 'example@mail.com'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Неактивное поле',
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: 'Поиск...',
    beforeAction: <span style={{
      color: '#666',
      padding: '0 4px'
    }}>🔍</span>
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: 'Введите сумму...',
    afterAction: <span style={{
      color: '#666',
      padding: '0 4px'
    }}>₽</span>
  }
}`,...i.parameters?.docs?.source}}};const x=["Default","Password","Email","Disabled","WithBeforeAction","WithAfterAction"];export{s as Default,l as Disabled,c as Email,o as Password,i as WithAfterAction,p as WithBeforeAction,x as __namedExportsOrder,_ as default};
