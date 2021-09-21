import {CheckStruct} from "@/hooks/story";

import React, {useCallback, useState} from "react";
import {Button, Modal} from "antd";
import {CheckContent} from "@/pages/story/component/CheckContent";
import ProCard from "@ant-design/pro-card";
import Text from "antd/es/typography/Text";
import {AnswerShow} from "@/pages/story/component/AsnwerShow";


export function AnswerCheck(props: { understandCheck: CheckStruct[], resultExplain: string }) {
  const [visible, setVisible] = useState(false);
  const [questionResult, setQuestionResult] = useState<boolean[]>([]);
  const addCheckResult = useCallback((x: boolean) => {
    setQuestionResult((prev) => [...prev, x]);
  }, []);
  return (<>
      <Button
        onClick={() => setVisible(true)}
      >解答</Button>
      <Modal
        bodyStyle={{
          padding:0
        }}
        visible={visible}
        onCancel={() => {
          setVisible(false);
          setQuestionResult([]);
        }}
        footer={null}
        destroyOnClose
      >
        {questionResult.length === props.understandCheck.length ?
          <AnswerShow result={!questionResult.includes(false)} correctRadio={questionResult.filter(x=>x).length/questionResult.length} resultExplain={props.resultExplain}/>
           :
          <CheckContent checkOne={props.understandCheck[questionResult.length]} addCheckResult={addCheckResult}/>}
      </Modal></>
  )
}
