import {checkStory} from "@/util/cookies";

export enum QuestionEnum {
  YES = 0,
  NO = 1,
  IRRELEVANT = 2
}

export interface MatchStruct {
  keyword: string,
  question: string | undefined,
  children: MatchStruct[] | undefined,
  result: QuestionEnum | undefined,
  resultTip: string | undefined
}

export interface CheckStruct {
  question: string,
  selection: string[],
  answer: string
}

export interface StoryDetail {
  title:string,
  mainContent: string,
  questionMatch: MatchStruct[],
  understandCheck: CheckStruct[],
  resultExplain: string
}

export const useStoryList = () => {
  return [...Array(10).keys()].map((i) => {
    return {name: `故事${i}(${checkStory(i)})`, path: `/story/${i}`, component: '@/pages/story/index'};
  })
}

export const useStoryDetail = (id: number) => {
  const sampleStoryDetail: StoryDetail = {
    title:"颠倒的感激",
    mainContent: "$一个人$走在马路上，突然被其他人踢飞了。然而这个人却很感谢踢飞他的人。为什么？",
    questionMatch: [{
      keyword: "一个人",
      children: [{
        keyword: "姓名",
        question: "与这个人的姓名有关吗？",
        result: QuestionEnum.IRRELEVANT,
        resultTip: "怎么可能有关系呢？",
        children: undefined
      }, {
        keyword: "身体",
        question: "与这个人的身体有关系吗？",
        result: QuestionEnum.YES,
        resultTip: "这个人是个聋子。",
        children: undefined
      }],
      question: undefined,
      result: undefined,
      resultTip: undefined
    }],
    understandCheck: [
      {
        question: "这个人的感谢是什么意味的？",
        selection: ["讽刺的", "感激的", "无聊的", "疑惑的"],
        answer: "感激的"
      },
      {
        question: "这个人的感谢是什么意味的？",
        selection: ["讽刺的", "感激的", "无聊的", "疑惑的"],
        answer: "感激的"
      },
    ],
    resultExplain:"这是一位聋人，他听不见后面汽车的笛声，差点被车撞，多亏路人一脚把他踢开。"
  };
  return sampleStoryDetail;
}
