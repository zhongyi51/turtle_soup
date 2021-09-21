import ProCard from "@ant-design/pro-card";
import Text from "antd/es/typography/Text";
import React from "react";

export function AnswerShow(props: {result:boolean,correctRadio:number,resultExplain:string}): JSX.Element {
  let checkResultText:string;
  if(props.result){
    checkResultText=props.resultExplain;
  }else if(props.correctRadio>=0.75){
    checkResultText="就差一点了...";
  }else if(props.correctRadio>=0.5){
    checkResultText="认识还有不足...";
  }else{
    checkResultText="差的还远呢...";
  }
  return (<ProCard
    title={props.result? "正确":"错误"}
  ><Text>{checkResultText}</Text></ProCard>)
}
