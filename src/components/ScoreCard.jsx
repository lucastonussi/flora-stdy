export default function ScoreCard(props) {
  return (
    <div className="score-card">
      <h1>{props.treeSciName}</h1>
      <h1>{props.treePopularName}</h1>
      <p>{props.regionLocation}</p>
      <p>{props.coverageInfo}</p>
    </div>
  );
}
