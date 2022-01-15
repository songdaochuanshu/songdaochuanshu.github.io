/*
 * @Descripttion:
 * @version:
 * @Author: 松岛川树
 * @Date: 2022-01-12 16:46:19
 * @LastEditors: 松岛川树
 * @LastEditTime: 2022-01-15 15:58:46
 * @FilePath: \umi-index\src\pages\index\index.tsx
 */
import styles from './index.less';
import { useEffect } from 'react';
import { IGetInitialProps, Helmet } from 'umi';
import Editor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

const IndexPage = (props: any) => {
  const { hrefData, mdData, avatar, name } = props;
  useEffect(() => {
    clearBr();
  });
  return (
    <div>
      <Helmet encodeSpecialCharacters={true}>
        <html lang="en" data-direction="许多人来来去去相聚又别离" />
        <title>松岛川树</title>
      </Helmet>
      <div className={styles.container}>
        <div className={styles.userInfo}>
          <div className={styles.userAvatar}>
            <img src={avatar} alt={name} />
          </div>
          <span className={styles.userName}>{name}</span>
          <div className={styles.list}>{hrefDataMap(hrefData)}</div>
        </div>
        <div className={styles.editor}>
          <Editor previewOnly={true} modelValue={mdData} />
        </div>
      </div>
    </div>
  );
};

const HREF_URL =
  'https://mock.mengxuegu.com/mock/606f08eeb43557571f7269a4/shequ/getHref';
const MD_URL =
  'https://raw.githubusercontent.com/songdaochuanshu/songdaochuanshu/main/README.md';
const USER_INFO = {
  name: '松岛川树',
  avatar: 'https://avatars.githubusercontent.com/u/81367559?v=4',
};
let getHrefData = async (): Promise<object> => {
  let res = await fetch(HREF_URL);
  let data = await res.json();
  return data;
};

let getMdData = async (): Promise<string> => {
  let res = await fetch(MD_URL);
  let data = await res.text();
  return data;
};

let hrefDataMap = (data: Array<string>): any => {
  if (data) return data.map((item: any) => <a href={item.href}>{item.name}</a>);
};

let clearBr = (): void => {
  let brs = document.querySelectorAll('br');
  for (let i = 0; i < brs.length; i++) {
    brs[i].remove();
  }
};

IndexPage.getInitialProps = (async (ctx): Promise<any> => {
  let hrefData = await getHrefData();
  let mdData = await getMdData();
  return Promise.resolve({
    hrefData,
    mdData,
    avatar: USER_INFO.avatar,
    name: USER_INFO.name,
  });
}) as IGetInitialProps;

export default IndexPage;
