import { ApiContext, User } from 'types';
import { fetcher } from '../../utils';

export type SigninParams = {
  username: string;
  passward: string;
};

/**
 * 認証API
 * @param context APIコンテキスト
 * @param params パラメーター
 * @param returns ログインユーザー
 */

const signin = async (
  context: ApiContext,
  params: SigninParams
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(params)
    }
  );
};
