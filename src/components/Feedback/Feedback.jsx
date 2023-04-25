export function Feedback({
  onBtnGoodClick,
  onBtnNeutralClick,
  onBtnNegativeClick,
}) {
    return (<div><button type="button" onClick={onBtnGoodClick}>Good</button>
<button type="button" onClick={onBtnNeutralClick}>Neutral</button>
<button type="button" onClick={onBtnNegativeClick}>Bad</button>
</div>)
}
