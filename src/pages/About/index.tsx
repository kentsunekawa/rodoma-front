import React from 'react';
import Styled from 'styled-components';
import RoundButton from 'components/elements/buttons/RoundButton';
import Fv from './Fv';
import Intro from './Intro';
import * as styles from './styles';

// component root class name
const CLASSNAME = 'About';

// declare types
interface ComponentProps {
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props extends ComponentProps {}

// dom component
const Component: React.FC<Props> = (props: Props) => (
  <div className={`${CLASSNAME} ${props.className}`}>
    <div className="inner">
      <Fv className="About__fv" />
      <main>
        <Intro className="About__intro" />
        <div className="content">
          <div className="About__box SectionBox -left" id="about_check">
            <div className="SectionBox__inner">
              <div className="SectionBox__imageArea">
                <div className="SectionBox__image">
                  <video src="/img/about/about_check.mp4" autoPlay loop muted playsInline />
                </div>
                <div className="SectionBox__title">
                  知る・見る
                  <span>check</span>
                </div>
              </div>
              <div className="SectionBox__main">
                <div className="SectionBox__title">
                  知る・見る
                  <span>check</span>
                </div>
                <p>
                  学習のロードマップを見ることができます。
                  <br />
                  ページはサマリ、チャート、コメントの3つのセクションに分かれていて、それぞれ下記のような機能があります。
                </p>
                <div className="SectionBox__section">
                  <h4 className="SectionBox__sectionTitle">サマリ</h4>
                  <p>そのロードマップの全体的な概要を知ることができます。</p>
                </div>
                <div className="SectionBox__section">
                  <h4 className="SectionBox__sectionTitle">チャート</h4>
                  <p>
                    何をどれくらいの期間、いつ頃のタイミングで学習すれば良いかを知ることができるチャート機能です。
                    <br />
                    項目名をタップすることで、それぞれの項目の詳細を確認することができます。
                    <br />
                    また他のロードマップに紐づけられた項目にはチェーンアイコンが表示され、タップすることで紐づけられたロードマップのページにアクセスすることができます。
                  </p>
                </div>
                <div className="SectionBox__section">
                  <h4 className="SectionBox__sectionTitle">コメント（登録済メンバーのみ）</h4>
                  <p>
                    そのロードマップについて、投稿者や他のメンバーとコミュニケーションをとることができます。
                    <br />
                    質問事項や改善点などがあればコメント機能を利用してやりとりしましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="About__box SectionBox -right" id="about_create">
            <div className="SectionBox__inner">
              <div className="SectionBox__imageArea">
                <div className="SectionBox__image">
                  <video src="/img/about/about_create.mp4" autoPlay loop muted playsInline />
                </div>
                <div className="SectionBox__title">
                  作る・残す
                  <span>create</span>
                </div>
              </div>
              <div className="SectionBox__main">
                <div className="SectionBox__title">
                  作る・残す
                  <span>create</span>
                </div>
                <p>
                  学習のロードマップを作成することができます。
                  <br />
                  作成画面は大きく3つのエディタで構成されていて、それぞれ下記のような機能があります。
                </p>
                <div className="SectionBox__section">
                  <h4 className="SectionBox__sectionTitle">サマリエディタ</h4>
                  <p>
                    ロードマップのタイトルやカテゴリ、概要、アイキャッチ画像を設定することができます。
                  </p>
                </div>
                <div className="SectionBox__section">
                  <h4 className="SectionBox__sectionTitle">項目エディタ</h4>
                  <p>
                    チャートの項目名かその下のプラスボタンをタップすることで、項目エディタを開くことができます。
                    <br />
                    項目エディタではロードマップを構成する項目を追加・編集をすることができ、項目のタイトル、ラベル、概要、リンクする他のロードマップを設定することができます。
                  </p>
                </div>
                <div className="SectionBox__section">
                  <h4 className="SectionBox__sectionTitle">公開設定エディタ</h4>
                  <p>
                    「公開する」ボタンをタップすることで公開設定エディタを開くことができます。
                    <br />
                    公開設定エディタでは、公開ステータスを設定することができ、
                    <br />
                    「限定公開する」にチェックを入れると、フォローしているメンバーの中から限定公開するメンバーを選択することができます。
                    <br />
                    「限定公開する」にチェックを入れなければ、誰でも閲覧出来る形で公開することができます。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="About__box SectionBox -left" id="about_search">
            <div className="SectionBox__inner">
              <div className="SectionBox__imageArea">
                <div className="SectionBox__image">
                  <video src="/img/about/about_search.mp4" autoPlay loop muted playsInline />
                </div>
                <div className="SectionBox__title">
                  探す・
                  <br />
                  見つける
                  <span>search</span>
                </div>
              </div>
              <div className="SectionBox__main">
                <div className="SectionBox__title">
                  探す・見つける
                  <span>search</span>
                </div>
                <p>rodoma では様々な方法でロードマップやメンバーを探すことができます。</p>
                <div className="SectionBox__section">
                  <h4 className="SectionBox__sectionTitle">ロードマップを探す</h4>
                  <p>
                    ロードマップ一覧ページでは全メンバーが作成した、公開済ロードマップの一覧を確認することができます。
                    <br />
                    一覧は、「Likeの多い順」「Markの多い順」「作成日が新しい順」で並び替えることができます。
                  </p>
                </div>
                <div className="SectionBox__section">
                  <h4 className="SectionBox__sectionTitle">ユーザーを探す</h4>
                  <p>
                    ユーザー一覧ページでは、rodoma に登録済のメンバー一覧を確認することができます。
                    <br />
                    一覧は、「フォロワーの多い順」「登録日が新しい順」で並び替えることができます。
                  </p>
                </div>
                <div className="SectionBox__section">
                  <h4 className="SectionBox__sectionTitle">キーワードで探す</h4>
                  <p>
                    ロードマップ、ユーザーはそれぞれ、画面右上の虫眼鏡マークをタップして開く検索ウィンドウからキーワードで検索することができます。
                  </p>
                </div>
                <div className="SectionBox__section">
                  <h4 className="SectionBox__sectionTitle">カテゴリから探す</h4>
                  <p>
                    画面右上の虫眼鏡マークをタップして開く検索ウィンドウのカテゴリ一覧には、カテゴリ一覧がアコーディオン形式で表示されており、それぞれのカテゴリをタップすることでそのカテゴリに属するロードマップ一覧を表示することができます。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="About__box SectionBox -right" id="about_connect">
            <div className="SectionBox__inner">
              <div className="SectionBox__imageArea">
                <div className="SectionBox__image">
                  <video src="/img/about/about_connect.mp4" autoPlay loop muted playsInline />
                </div>
                <div className="SectionBox__title">
                  繋がる
                  <span>connect</span>
                </div>
              </div>
              <div className="SectionBox__main">
                <div className="SectionBox__title">
                  繋がる
                  <span>connect</span>
                </div>
                <p>
                  メンバーやロードマップは、フォローや Like、Mark
                  といった繋がりを持つことができます。それぞれの詳細は下記の通りです。
                </p>
                <div className="SectionBox__section">
                  <h4 className="SectionBox__sectionTitle">フォローする・フォローされる</h4>
                  <p>
                    登録済メンバーであればそれぞれお互いに、フォローすることができます。
                    <br />
                    フォローしたメンバーは、ロードマップを限定公開するときに選択することができます。
                    <br />
                    もちろんフォローは解除することもできます。
                  </p>
                </div>
                <div className="SectionBox__section">
                  <h4 className="SectionBox__sectionTitle">Like</h4>
                  <p>
                    良いと思ったロードマップには Likeすることができます。
                    <br />
                    優れたロードマップには気軽にどんどん Like しましょう。
                  </p>
                </div>
                <div className="SectionBox__section">
                  <h4 className="SectionBox__sectionTitle">Mark</h4>
                  <p>
                    参考にしたり繰り返し見たいと思ったロードマップを Mark することができます。
                    <br />
                    Mark したロードマップは自分のプロフィールページの 「Mark
                    したロードマップ一覧」に表示され、再度アクセスしやすくなります。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="About__box SectionBox -left" id="about_others">
            <div className="SectionBox__inner">
              <div className="SectionBox__imageArea">
                <div className="SectionBox__title">
                  その他
                  <span>others</span>
                </div>
              </div>
              <div className="SectionBox__main">
                <div className="SectionBox__title">
                  その他
                  <span>others</span>
                </div>
                <div className="SectionBox__section">
                  <h4 className="SectionBox__sectionTitle">プロフィール</h4>
                  <p>
                    登録済メンバーのページです。
                    <br />
                    ここでは、そのメンバーの自己紹介や公開したロードマップ、Mark
                    したロードマップ、フォロワー、フォローしたユーザーを確認することができます。
                  </p>
                </div>
                <div className="SectionBox__section">
                  <h4 className="SectionBox__sectionTitle">プロフィール編集</h4>
                  <p>
                    サインイン中のユーザーご自身のプロフィールページ右上に表示される、ペンマークボタンをタップすることでプロフィール編集ページにアクセスすることができます。
                    <br />
                    プロフィール編集ページは、ご自身の情報を編集することができるページで、アイコン、名前、email
                    アドレス、自己紹介、カテゴリ、SNS アカウントを設定することができます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Outro">
          <p className="Outro__title">さあ、今すぐ始めましょう</p>
          <RoundButton link="/signInOrUp" types={['l', 'gradient']}>
            はじめる
          </RoundButton>
        </div>
      </main>
    </div>
  </div>
);

// styled component
const StyeldComponent = Styled(Component)`
  ${styles.base}
`;

// container component
const Container: React.FC<ComponentProps> = (componentProps) => {
  const props = {};

  return <StyeldComponent {...componentProps} {...props}></StyeldComponent>;
};
export default Container;
