import {StoryDetail, useStoryDetail} from "@/hooks/story";
import {QuestionStep} from "@/pages/story/component/QuestionStep";
//@ts-ignore
import _ from "lodash";
import {useState} from "react";
import {Button, Modal, Typography} from "antd";
import ProCard from "@ant-design/pro-card";
import {AnswerCheck} from "@/pages/story/component/AnswerCheck";

const {Text, Link} = Typography;

export interface StoryCardProps {
  storyId: number
}

export function StoryCard(props: StoryCardProps): JSX.Element {
  const thisStory = useStoryDetail(props.storyId);
  const formatContent = (story: StoryDetail) => {
    const keyByQuestions = _.keyBy(story.questionMatch, "keyword");
    const reg = /(\$.*?\$)/g;
    return story.mainContent.split(reg)
      .filter(x => x.length > 0)
      .map((word) => {
        if (word[0] !== '$') {
          return <Text key={word[0]}>{word}</Text>;
        } else {
          return <QuestionStep word={word.replaceAll("$", "")} questionMatch={keyByQuestions[word.replaceAll("$", "")]}
                               key={word[1]}
          />
        }
      });
  }
  return (<><ProCard
      style={{
        maxWidth: "60em"
      }}
      title={thisStory.title}
      actions={[
        <Button>提示</Button>,
        <AnswerCheck understandCheck={thisStory.understandCheck} resultExplain={thisStory.resultExplain}/>
      ]}
      bordered
    >
      {formatContent(thisStory)}
    </ProCard>
      <Modal
        title="Modal"
        visible={false}
        okText="确认"
        cancelText="取消"
      />
    </>
  )
}
