import {CheckStruct} from "@/hooks/story";
import ProCard from "@ant-design/pro-card";
import {Button, Space} from "antd";
import React from "react";


export function CheckContent(props:{checkOne:CheckStruct,addCheckResult:(x:boolean)=>void}):JSX.Element{
  return (
    <ProCard
      title={props.checkOne.question}
      bordered
    >
      <Space>
        {props.checkOne.selection.map(x=>(<Button key={x} onClick={()=>{
          props.addCheckResult(x===props.checkOne.answer);
        }}>{x}</Button>))}
      </Space>
    </ProCard>
  )

}
