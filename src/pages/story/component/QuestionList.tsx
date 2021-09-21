
import {MatchStruct} from "@/hooks/story";
import ProCard from "@ant-design/pro-card";
import {Button, Space} from "antd";
import React from "react";


export function QuestionList(props:{currentChildren:MatchStruct[],addChild:(x:MatchStruct)=>void}){
  return (<ProCard colSpan={24}>
    <Space>
      {props.currentChildren.map(x=>(<Button
        key={x.keyword}
        size={"small"}
        onClick={()=>{
          props.addChild(x)}}
      >
        {x.keyword}
      </Button>))}
    </Space>
  </ProCard>)
}
