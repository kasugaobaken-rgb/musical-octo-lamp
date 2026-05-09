【各調査サイトとの連携方法】

この最上フォームは localStorage の以下2つを読み込みます。

1. mogami_arg_visited_sites
   訪問済みサイトIDの配列です。
   例：['daiba','kamikakushi','occult']

2. mogami_arg_evidence
   発見済み証拠の配列です。
   例：[{id:'daiba_club_rule', title:'大馬大学：サークル設立には3名必要', source:'大馬大学', description:'...'}]

各サイト側で arg-site-helper.js を読み込み、以下のように使ってください。

<script src="https://kasugaobaken-rgb.github.io/musical-octo-lamp/arg-site-helper.js"></script>
<script>recordVisitedSite('daiba');</script>

<button onclick="saveMogamiEvidence({id:'daiba_club_rule',title:'大馬大学：サークル設立には3名必要',source:'大馬大学',description:'サークル設立規約に、最低3名の所属学生が必要と記載されている。'})">
  調査メモに保存
</button>

サイトID候補：
- coocle
- daiba
- kamikakushi
- occult
- kaiimap
- joujou
