export default function Header(props) {
  return (
    <header>
      <div>
        <h1>{ props.competitionData?.name } Standings</h1>
        <span>{ props.competitionData?.season }</span>
      </div>
    </header>
  )
}