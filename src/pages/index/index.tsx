/*
 * @Descripttion:
 * @version:
 * @Author: MiKin
 * @Date: 2022-01-12 16:46:19
 * @LastEditors: MiKin
 * @LastEditTime: 2022-01-20 18:31:41
 * @FilePath: \umi-index\src\pages\index\index.tsx
 */
import styles from './index.less';
import { useEffect, useState } from 'react';
import Editor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
const IndexPage = () => {
  const [hrefData, setHrefData] = useState([]);
  const [textData, setTextData] = useState('');
  useEffect(() => {
    (async () => {
      const res1 = await getHrefData();
      const res2 = await getMdData();
      setHrefData(res1);
      setTextData(res2);
      clearBr();
    })();
  }, []);
  let avatar = USER_INFO.avatar;
  let name = USER_INFO.name;
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.userInfo}>
          <div className={styles.userAvatar}>
            <img src={avatar} alt={name} />
          </div>
          <span className={styles.userName}>{name}</span>
          <div className={styles.list}>{hrefDataMap(hrefData)}</div>
        </div>
        <div className={styles.editor}>
          <Editor previewOnly={true} modelValue={textData} />
        </div>
      </div>
    </div>
  );
};

const HREF_URL =
  'https://raw.githubusercontent.com/songdaochuanshu/songdaochuanshu.github.io/master/mock/href.json';
const MD_URL =
  'https://raw.githubusercontent.com/songdaochuanshu/songdaochuanshu/main/README.md';
const USER_INFO = {
  name: '松岛川树',
  avatar: 'https://avatars.githubusercontent.com/u/81367559?v=4',
};
let getHrefData = async (): Promise<any> => {
  let res = await fetch(HREF_URL);
  let data = await res.json();
  return data;
};

let getMdData = async (): Promise<string> => {
  let res = await fetch(MD_URL);
  let data = await res.text();
  return data;
};

let hrefDataMap = (data: Array<any>): any => {
  if (data) return data.map((item: any) => <a href={item.href}>{item.name}</a>);
};

let clearBr = (): void => {
  let brs = document.querySelectorAll('br');
  for (let i = 0; i < brs.length; i++) {
    brs[i].remove();
  }
};

export default IndexPage;
