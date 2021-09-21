
import React, {useCallback, useState} from "react";
import {MatchStruct} from "@/hooks/story";
import {QuestionList} from "@/pages/story/component/QuestionList";
import QuestionExplain from "@/pages/story/component/QuestionExplain";
import {Modal, Typography} from "antd";
import ProCard from "@ant-design/pro-card";

const {Text, Link} = Typography;


export function QuestionStep(props: { questionMatch: MatchStruct, word: string }) {
  const [currentNode, setCurrentNode] = useState<MatchStruct[]>([props.questionMatch]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const lastNode=currentNode[currentNode.length-1];
  const addNode=useCallback((x:MatchStruct)=>{
    setCurrentNode((pre)=>[...pre,x]);
  },[]);
  return (
    <>
      <Link onClick={() => setIsModalVisible(true)}>{props.word}</Link>
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={()=>{
          setIsModalVisible(false);
          setCurrentNode([props.questionMatch]);
        }}
        bodyStyle={{
          padding:0
        }}
        centered
        destroyOnClose
      >
        <ProCard split={'horizontal'} bordered style={{height: 320}}>
          <ProCard colSpan={24}>
            {currentNode.map(x => x.keyword).join(' -- ')}
          </ProCard>
          {lastNode.children!==undefined?<QuestionList currentChildren={lastNode.children} addChild={addNode}/>:undefined}
          {lastNode.result!==undefined?<QuestionExplain result={lastNode.result} resultTip={lastNode.resultTip} question={lastNode.question} parentClose={()=>setIsModalVisible(false)}/>:undefined}
        </ProCard>
      </Modal>
    </>
  )
}
