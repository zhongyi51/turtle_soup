import {QuestionEnum} from "@/hooks/story";
import React, {useState} from "react";
import ProCard from "@ant-design/pro-card";
import {Button, Modal,Typography} from "antd";
import {CheckCircleFilled, CloseCircleFilled, StopFilled} from "@ant-design/icons";
const {Text}=Typography;

export default function QuestionExplain(props: { result: QuestionEnum, resultTip: string | undefined, question: string | undefined, parentClose?: () => void }): JSX.Element {
  const [showExplain, setShowExplain] = useState(false);
  return (<ProCard colSpan={24}>
      <>
        <Text>{props.question}</Text>
        <Button onClick={() => setShowExplain(true)}>提问</Button>
        <Modal
          visible={showExplain}
          onCancel={() => {
            setShowExplain(false);
          }}
          footer={null}
          title={props.question}
          destroyOnClose
        >
          <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
            {props.result === QuestionEnum.YES ? <CheckCircleFilled style={{fontSize: "6em"}}/> : undefined}
            {props.result === QuestionEnum.NO ? <CloseCircleFilled style={{fontSize: "6em"}}/> : undefined}
            {props.result === QuestionEnum.IRRELEVANT ? <StopFilled style={{fontSize: "6em"}}/> : undefined}
            <br/>
            {props.resultTip ? <Text>{props.resultTip}</Text> : undefined}
          </div>
        </Modal>
      </>
    </ProCard>
  )
}
