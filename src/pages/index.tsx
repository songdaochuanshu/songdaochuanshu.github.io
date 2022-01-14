import styles from './index.less';
import { IGetInitialProps, Helmet } from 'umi';

const IndexPage = (props: any) => {
  const { ssrData } = props;
  return (
    <div>
      <Helmet encodeSpecialCharacters={true}>
        <html lang="en" data-direction="许多人来来去去相聚又别离" />
        <title>松岛川树</title>
      </Helmet>
      <div className={styles.container}>
        <div className={styles.userInfo}>
          <div className={styles.userAvatar}>
            <img src="https://avatars.githubusercontent.com/u/81367559?v=4" alt="松岛川树" />
          </div>
          <span className={styles.userName}>
            松岛川树
          </span>
          <div className={styles.list}>
            {dataMap(ssrData)}
          </div>
        </div>
      </div>
    </div>
  )
}

const getData = async () => {
  let res = await fetch('https://mock.mengxuegu.com/mock/606f08eeb43557571f7269a4/shequ/getHref')
  let data = await res.json();
  return data
}

const dataMap = (data: Array<any>) => {
  return data.length > 0 && data.map((item: any) =>
    <a href={item.href}>{item.name}</a>
  )
}

IndexPage.getInitialProps = (async (ctx) => {
  let data = await getData()
  return Promise.resolve({
    ssrData: data,
  })
}) as IGetInitialProps;

export default IndexPage;
