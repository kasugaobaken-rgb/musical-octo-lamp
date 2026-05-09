/*
  各調査サイト側で読み込むための補助JSです。
  同じドメイン（kasugaobaken-rgb.github.io）配下なら、最上フォームとlocalStorageを共有できます。

  使い方：
  <script src="https://kasugaobaken-rgb.github.io/musical-octo-lamp/arg-site-helper.js"></script>
  <script>recordVisitedSite('daiba');</script>
  <button onclick="saveMogamiEvidence({id:'daiba_club_rule',title:'大馬大学：サークル設立には3名必要',source:'大馬大学',description:'サークル設立規約に、最低3名の所属学生が必要と記載されている。'})">調査メモに保存</button>
*/
(function(){
  const EVIDENCE_KEY = 'mogami_arg_evidence';
  const VISITED_KEY = 'mogami_arg_visited_sites';
  window.recordVisitedSite = function(siteId){
    try{
      const list = JSON.parse(localStorage.getItem(VISITED_KEY) || '[]');
      if(!list.includes(siteId)) list.push(siteId);
      localStorage.setItem(VISITED_KEY, JSON.stringify(list));
    }catch(e){}
  };
  window.saveMogamiEvidence = function(evidence){
    if(!evidence || !evidence.id) return;
    try{
      const list = JSON.parse(localStorage.getItem(EVIDENCE_KEY) || '[]');
      const i = list.findIndex(item => item.id === evidence.id);
      if(i >= 0) list[i] = Object.assign({}, list[i], evidence);
      else list.push(evidence);
      localStorage.setItem(EVIDENCE_KEY, JSON.stringify(list));
      if(window.showMogamiToast) window.showMogamiToast('調査メモに保存しました');
      else alert('調査メモに保存しました。最上との通信フォームで添付できます。');
    }catch(e){ alert('調査メモの保存に失敗しました。'); }
  };
})();
