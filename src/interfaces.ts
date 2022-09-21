export interface IUpvote {
  id: number;
  counter: number;
  wilder: IWilder;
  skill: ISkill;
}

export interface IWilder {
  id: number;
  name: string;
  upvotes: IUpvote[];
}

export interface ISkill {
  id: number;
  name: string;
}
