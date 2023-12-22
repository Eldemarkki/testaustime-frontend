export interface ApiUsersUserResponse {
  id: number;
  username: string;
  friend_code: string;
  registration_time: string;
  is_public: boolean;
}

export interface ApiUsersUserActivityDataResponseItem {
  id: number;
  start_time: string;
  duration: number;
  project_name: string | null;
  language: string | null;
  editor_name: string | null;
  hostname: string | null;
}

export type ActivityDataEntry = Omit<
  ApiUsersUserActivityDataResponseItem,
  "start_time" | "project_name"
> & {
  start_time: Date;
  dayStart: Date;
  project_name: string | null;
};

export interface Leaderboard {
  name: string;
  member_count: number;
  my_position: number;
  top_member: {
    id: number;
    username: string;
    admin: boolean;
    time_coded: 0;
  };
  me: {
    id: number;
    username: string;
    admin: boolean;
    time_coded: 0;
  };
}

export interface LeaderboardData {
  name: string;
  invite: string;
  creation_time: string;
  members: {
    username: string;
    admin: boolean;
    time_coded: number;
  }[];
}

export enum JoinLeaderboardError {
  AlreadyMember,
  NotFound,
  UnknownError,
}

export enum CreateLeaderboardError {
  AlreadyExists,
  UnknownError,
  RateLimited,
}

type ActivityDataSummaryEntry = {
  languages: Record<string, number>;
  total: number;
};

export type ActivityDataSummary = {
  all_time: ActivityDataSummaryEntry;
  last_month: ActivityDataSummaryEntry;
  last_week: ActivityDataSummaryEntry;
};

export enum PasswordChangeResult {
  Success,
  OldPasswordIncorrect,
  NewPasswordInvalid,
  UnknownError,
}

export enum AddFriendError {
  AlreadyFriends,
  NotFound,
  UnknownError,
}

export enum RegistrationResult {
  RateLimited,
  UnknownError,
  UsernameTaken,
}

export enum GetLeaderboardError {
  Unauthorized = "Unauthorized",
  RateLimited = "Rate limited",
  UnknownError = "Unknown error",
}

export enum GetLeaderboardsError {
  Unauthorized = "Unauthorized",
  RateLimited = "Rate limited",
  UnknownError = "Unknown error",
}

export enum LoginError {
  InvalidCredentials,
  UnknownError,
  RateLimited,
}

export enum DeleteLeaderboardError {
  Unauthorized = "Unauthorized",
  RateLimited = "Rate limited",
  UnknownError = "Unknown error",
}

export enum RegenerateAuthTokenError {
  Unauthorized = "Unauthorized",
  RateLimited = "Rate limited",
  UnknownError = "Unknown error",
}

export type CurrentActivityApiResponse = {
  started: string;
  duration: number;
  heartbeat: {
    project_name: string;
    language: string;
    editor_name: string;
    hostname: string;
  };
};

export enum ChangeAccountVisibilityError {
  Unauthorized = "Unauthorized",
  RateLimited = "Rate limited",
  UnknownError = "Unknown error",
}

export enum RegenerateInviteCodeError {
  Unauthorized = "Unauthorized",
  RateLimited = "Rate limited",
  UnknownError = "Unknown error",
}

export enum RegenerateFriendCodeError {
  Unauthorized = "Unauthorized",
  RateLimited = "Rate limited",
  UnknownError = "Unknown error",
}

export enum LeaveLeaderboardError {
  Unauthorized = "Unauthorized",
  RateLimited = "Rate limited",
  UnknownError = "Unknown error",
}

export enum RemoveFriendError {
  Unauthorized = "Unauthorized",
  RateLimited = "Rate limited",
  UnknownError = "Unknown error",
}
