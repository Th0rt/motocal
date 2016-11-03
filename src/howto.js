var React = require('react');
var ReactDOM = require('react-dom');
var {Thumbnail, ControlLabel, Button, ButtonGroup, FormControl, Checkbox, Modal, Image, Popover} = require('react-bootstrap');

var HowTo = React.createClass({
    render: function(){
        return (
            <div className="howTo">
                <h2>この計算機について</h2>
                <p>元カレ計算機（グラブル攻撃力計算機）は、入力された情報を元に、「どのような武器編成が最大の火力を出せるか」を比較算出するためのツールです。</p>
                <p className="text-info">本計算機は「編成の比較をすること」がメインの計算機です。入力が面倒だし特定の武器編成の攻撃力だけ見られればいい！という方は <a href="http://gbf.xzz.jp">グラブル装備シミュレータ</a> のがオススメです。</p>

                <h2>使い方</h2>
                <p>基本的に各項目を埋めていけば、それに従って結果が自動的に更新されます。(選択メニューは値を選択した時点、入力フォームは値を入力した後にフォーム外をクリックする等の操作を行った際に、新しい結果が算出されます。)</p>
                <p>以下、各項目について説明します。</p>

                <hr/>
                <h3>入力 / Input タブ</h3>
                <Thumbnail src="./otherImages/prof_howto.png" href="./otherImages/prof_howto.png"><h3>プロフィール入力例</h3></Thumbnail>
                <p>ジータに関する情報や、パーティ全体へのバフ、敵の属性などを入力します。</p>
                <p>ジータの属性はスキルの計算に、敵の属性は有利不利判定の計算に使用されますので、 どちらもお忘れなく入力して下さい。
                また、得意武器補正やジョブごとの攻撃ボーナス等（例: ベルセルクマスター時 攻撃力+6000)は、ジョブを選択すれば自動的に適用されます。（マスターしていない場合(Lv20以下)は考慮していません。）
                得意武器補正やボーナスなしで計算したい場合、ジョブ欄で「なし」を選択して下さい。</p>
                <p>背水計算用の残HP割合は、</p>
                <dl className="dl-horizontal">
                    <dt>パーティ全体への効果: </dt><dd>パーティ全員のHPが下がっているとして攻撃力を算出</dd>
                    <dt>ジータ残HP: </dt><dd>ジータだけHPが下がった攻撃力を算出</dd>
                    <dt>どちらも変更されている: </dt><dd>残割合が低い方を適用</dd>
                </dl>
                <p>として計算します。（キャラごとの残HP割合もキャラタブにて設定可能です。)</p>

                <hr/>
                <h3>召喚石 / Summon タブ</h3>
                <Thumbnail src="./otherImages/summon_input_howto.png" href="./otherImages/summon_input_howto.png"><h3>召喚石入力例</h3></Thumbnail>
                <p>召喚石の情報を入力します。攻撃力とHPは、下記画像の通り、すべての召喚石の値が合計されたものを入力してください。</p>
                <Thumbnail src="./otherImages/summon_howto.png">
                </Thumbnail>

                <hr/>
                <h3>キャラ / Chara タブ</h3>
                <Thumbnail src="./otherImages/chara_howto.png" href="./otherImages/chara_howto.png"><h3>キャラ入力例</h3></Thumbnail>
                <p>キャラの情報を入力します。「キャラテンプレートを開く」ボタンから任意のキャラを選択することで、既存のキャラ情報を入力することが可能です。</p>
                <p>現在、キャラごとの基礎DA/TA率についてはテンプレートからの入力をサポートしていません。個別に設定したい場合、直接入力を行って下さい。</p>
                <p>キャラクターの情報は「パーティ平均値」を計算するときにのみ考慮されます。ジータのみの情報を計算する場合にはキャラの情報を入力する必要はありません。</p>

                <hr/>
                <h3>武器 / Weapon タブ</h3>
                <Thumbnail src="./otherImages/weapon_howto.png" href="./otherImages/weapon_howto.png"><h3>武器入力例</h3></Thumbnail>
                <p>武器の情報を入力します。ここに入力された一覧から、最適な武器編成が算出されます。キャラと同様「武器テンプレートを開く」ボタンから、既存の武器情報を入力することが可能です。</p>
                <p>"考慮本数"とは、最小で何本、最大で何本所持しているかを入力する欄です。例えば、ある武器を3本持っていて、それが何本編成に入るのかを算出したい場合、最小考慮本数(min)を0本、最大考慮本数(max)を3本に設定して下さい。</p>
                <p>メイン武器等、必ず1本以上入れたい場合は最小考慮本数を1本以上に設定して下さい。</p>
                <p>コスモス武器も複数設定することが可能ですが、2本以上は同時に編成されないようになっています。</p>

                <hr/>
                <h3>保存・注記 / System タブ</h3>
                <p>データの保存などを行うことができます。</p>
                <p>"保存"ボタンはお使いのブラウザにデータを保存します。この場合、ブラウザを変えると保存されたデータは読み出せません。</p>
                <p>データを他人に公開したい場合、もしくはブラウザを変えても結果が読み出せるようにしたい場合、"サーバに保存"ボタンを使用して下さい。
                hsimyu.net/motocal/?id=数字 の形のURLにアクセスすることで、いつでもデータを読み出せるようになります。</p>
                <p>上記の各タブの入力例をそのまま保存したものが<a href="http://hsimyu.net/motocal/?id=1101">こちら</a>です。ご参考になれば幸いです。</p>

                <hr/>
                <h3>結果 / Result タブ</h3>
                <p>他のすべてのタブの入力を基に算出された計算結果が表示されます。（PC版ではタブ分けされていません。）
                上部の「優先する項目」を変更することで、どの項目を優先するのかを選択することができます。</p>
                <p>また、表示したい項目にチェックを入れることで、攻撃力やダメージ以外にも様々な情報を表示することができます。</p>

                <hr/>
                <h2>開発情報</h2>
                <p>元カレ計算機は <a href="https://twitter.com/hsimyu/">@hsimyu</a> with ゼタの元カレ団 が開発しています。
                ソースコードは<a href="https://github.com/hoshimi/motocal">github</a>にて公開しています。
                ご要望のある方はPull requestを送って下さい。</p>
            </div>
        );
    },
});

var HPChartHowTo = React.createClass({
    render: function() {
        return (
            <Modal className="hpChartTutotial" show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>HP Chartsの使い方</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>HPチャート機能は「保存された武器編成の攻撃力等を、残りHP割合ごとに再計算する」機能です。</p>
                    <h2>1.</h2>
                    <p>適当に編成を計算した後、グラフを見たい編成をグラフに加えます。</p>
                    <Thumbnail alt="HPチャート操作1" src="./otherImages/hpChartTutorial1.png">
                    </Thumbnail>
                    <h2>2.</h2>
                    <p>グラフに加えると、「背水渾身チャートを開く」ボタンが有効化されるので、クリックします。</p>
                    <h2>3.</h2>
                    <p>「優先する項目」に設定されている値を描画したグラフが表示されます。</p>
                    <Thumbnail alt="HPチャート操作1" src="./otherImages/hpChartTutorial2.png">
                    </Thumbnail>
                    <p className="text-danger">まだサポートされていない要素が「優先する項目」に設定されている場合、"総合攻撃力"のグラフに変更されます。</p>
                    <h2>4.</h2>
                    <p>上部の選択ボタンで、他の要素を表示することも可能です。</p>
                    <Thumbnail alt="HPチャート操作1" src="./otherImages/hpChartTutorial3.png">
                    </Thumbnail>
                    <h2>5.</h2>
                    <p>複数の召喚石組み合わせが設定されている場合、複数のグラフが作成されます。</p>
                    <Thumbnail alt="HPチャート操作1" src="./otherImages/hpChartTutorial4.png">
                    </Thumbnail>
                    <p className="text-danger">現在は、ある組み合わせをグラフに保存すると、全てのグラフに追加されるようになっています。
                    これを召喚石別にするかどうかは、今後検討します。</p>
                    <h2>注記</h2>
                    <p>編成として保存されるのは「武器の組み合わせの本数」のみです。
                    そのため、武器攻撃力やバフ量などを変更した場合、結果のグラフも自動的に変更されます。</p>
                    <p className="text-danger">武器枠の数が追加/削除された場合、武器枠のデータがリセットされた場合は、
                    保存されている編成はリセットされてしまいますのでご注意下さい。
                    これは、武器組み合わせのみを保存しているため、誤って組み合わせで再計算されることを防ぐためです。</p>
                    <p>また、現在「追加した特定のグラフを削除する」機能は実装されておりませんので、
                    グラフが多くなりすぎてしまった場合、全削除を行い、保存されている編成をリセットしてください。</p>
                    <p>ご要望・不具合等あればお知らせ下さい。</p>
                </Modal.Body>
            </Modal>
        )
    },
});

var NiteHowTo = React.createClass({
    render: function() {
        return (
            <div className="howTo">
                <p> 本計算機ではこれまで、二手三手スキル混みの最適編成計算について、
                総攻撃力に技巧期待値と期待攻撃回数を単に乗算した"総合*回数*技巧期待値"を用いていました。 <br/>
                この値を用いた場合、
                <strong>総合攻撃力が低くても攻撃回数を伸ばした方が期待される攻撃力(〜ダメージ)が大きい</strong>としてソートされる傾向があります。</p>
                <p>しかしながら、<a href="http://ch.nicovideo.jp/suitonjp/blomaga/ar1017708">suitonさんがご提案なされた</a>ように、
                奥義を使用した場合のダメージまで考慮した1サイクルあたりのダメージをベースにソートを行った方が、
                総合的な火力として適切ではないか、と私は考えています。
                また、減衰補正を考慮しない場合、無制限に総合攻撃力が高い編成が優先される事になりますが、
                実際には減衰到達後は連続攻撃で稼いでいくことになるため、総合攻撃力ベースのソートで火力を測るのは限界があると考えられます。<br/>
                そこで、本計算機においても、suitonさんご提案の1サイクルあたりダメージについて、
                更に技巧期待値・奥義ゲージ上昇量・奥義倍率・ダメージ減衰補正を適用した上で、
                ソートするキーとして選択できるよう追加を行いました。</p>

                <h3>詳しい計算手順</h3>
                <p>まず、1サイクルあたりダメージを以下のように定義します。</p>
                <pre>1サイクルのダメージ = 奥義ダメージ + (奥義ゲージが貯まるまでのターン数) * (通常攻撃ダメージ)</pre>
                <p>(本計算機ではアビリティダメージ分については考慮していません。)</p>
                <p>ここで、DA率・TA率から、1ターンあたりに期待される攻撃回数は</p>
                <pre>期待攻撃回数 = 3 * TA率 + (1 - TA率)(2 * DA率 + 1 * (1 - DA率))</pre>
                <p>と計算できます。ここから同様に、1ターンあたりの奥義ゲージ上昇量は</p>
                <pre>期待奥義ゲージ上昇量 = TA率 * 37 + (1 - TA率)(DA率 * 22 + (1 - DA率) * 10)</pre>
                <p>と計算できます。したがって、奥義ゲージが100%になるまでに必要なターン数は</p>
                <pre>必要ターン数 = Math.ceil(100.0 / 期待奥義ゲージ上昇量) </pre>
                <p>となります。(Math.ceilは切り上げを意味しています。)</p>
                <p>ターン数については上記で求めることができましたので、次にダメージの算出を行います。
                まず、ランク・ジョブ・武器編成などから計算された攻撃力の値(結果欄の"総合攻撃力")を用いて、</p>
                <pre> 単攻撃ダメージ(減衰補正前) = 総合攻撃力 / 敵防御固有値 </pre>
                <p>として、減衰補正前のダメージを求めることができます。
                敵防御固有値は一般に10、硬い敵で13-15程度のようです。(防御デバフありの場合その分固有値が小さくなると考えてください。)</p>
                <p>ここで、技巧分を考慮すると、</p>
                <pre>技巧期待値 = 技巧倍率 * 技巧スキル率 + (1.0 - 技巧スキル率) </pre>
                <p>という式で技巧期待値が求まります。(複数ある場合にも対応)</p>
                <p>連続攻撃でクリティカルが発生した場合全てクリティカルになりますので、期待値を考える場合には単純に総合攻撃力への乗算で良いかと思われます。</p>
                <pre> 単攻撃ダメージ(減衰補正前, 技巧補正混み) = 総合攻撃力 * 技巧期待値 / 敵防御固有値 </pre>
                <p>次に、奥義ダメージについては</p>
                <pre> 奥義ダメージ(減衰補正前) = 総合攻撃力 * 奥義倍率 / 敵防御固有値 </pre>
                <p>として計算できます。</p>
                <p>補正前の単攻撃ダメージが30万を超えた場合、もしくは奥義ダメージが100万を超えた場合、減衰補正を適用することになります。(参考: <a href="http://greatsundome.hatenablog.com/entry/2015/10/07/114737">すんどめ侍のグラブル生活 - 【グラブル】減衰補正検証まとめ</a>)</p>
                <p>(減衰補正については注記にも記してあるとおり、8/21現在は正確に補正されているか確認できていませんので、その点のみご注意下さい。)</p>
                <p>減衰補正されたダメージ値を得られたとして、通常攻撃時の1ターンあたりに期待されるダメージは</p>
                <pre> 通常攻撃ダメージ = 期待攻撃回数 * 単攻撃ダメージ(減衰補正後)</pre>
                <p>となります。</p>
                <p>以上で、最初に示した式中の右辺の全ての項が求まりましたので、1サイクルあたりのダメージが算出できます。</p>
                <p>これを、</p>
                <pre>1サイクル = 奥義ゲージが貯まるまでの必要ターン数 + 1</pre>
                <p>で割ったものが、最終的な計算結果となります。</p>
                <pre>予想ターン毎ダメージ = 1サイクルのダメージ / 1サイクル</pre>
                <p>優先する項目を"予想ターン毎ダメージ"に変更することで、上記手順で得られた計算値を元にソートすることが可能です。
                また、表示項目の予想ターン毎ダメージにチェックを入れることで、計算値を表示することができます。
                (ついでに、奥義ゲージ上昇量と必要ターンについても表示できるようにしておきました。)
                </p>

                <h3>所見</h3>
                <p>
                これまでの"総合*回数*技巧期待値"でソートした場合の結果と、上記のソートキーを用いた場合の結果を見比べると
                やみくもにDA・TA率が最大となるように編成されるのではなく、DA・TA率を確保した上で総合攻撃力を高める、という編成が上位にきやすくなったと感じています。</p>
                <p>例えばの<a href="http://hsimyu.net/motocal/?id=748">編成例</a>ですが、下記画像のように</p>
                <Thumbnail alt="総合*回数*技巧期待値の場合" src="./otherImages/soukaigi.png">
                    <h2 className="text-warning">総合*回数*技巧期待値の場合</h2>
                    <p className="text-warning">DA:74.1%, 奥義ゲージ上昇期待値が19.89%、必要ターンは6</p>
                </Thumbnail>
                <Thumbnail alt="予想ターン毎ダメージの場合" src="./otherImages/cycleDamage.png">
                    <h2 className="text-info">予想ターン毎ダメージの場合</h2>
                    <p className="text-info">DA: 67.3%, 奥義ゲージ上昇期待値が19.12%、必要ターンは6のまま</p>
                </Thumbnail>
                <p>DA率最大の編成が1位ではなくなっています。(もちろん、単なる1編成例ですので、ジョブ・DAバフ・TAバフ・奥義ゲージ上昇バフ・奥義倍率等によって、大きく結果が変わる可能性もあります。)</p>
                <p>一概に後者の編成のが強いとは断言できませんが、1つの目安として使って頂ければと思います。</p>
                <p>キャラ混みの平均値についても総合*回数*技巧期待値同様に計算できるようになっていますが、現在はキャラ別の奥義倍率についてはサポートしていませんので、あくまで目安としてお使い下さい。</p>
                <p>また、通常攻撃ダメージの減衰補正・奥義ダメージの減衰補正についてのより詳しい情報があればご提供頂けると助かります。</p>
            </div>
        );
    },
});

module.exports.HowTo = HowTo
module.exports.NiteHowTo = NiteHowTo
module.exports.HPChartHowTo = HPChartHowTo