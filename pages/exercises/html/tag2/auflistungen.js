export default function Auflistungen() {
  return (
    <div>
      <h2>Auflistungen mit mit <code>&lt;ul&gt;</code></h2>
      <p>"unordered" HTML List</p>
      <ul>
        <li>Punkt 01</li>
        <li>
          Punkt 02
          <ul>
            <li>Unterpunkt 2.1</li>
            <li>Unterpunkt 2.2</li>
          </ul>
        </li>
        <li>Punkt 03</li>
        <li>Punkt 04</li>
      </ul>
      <h2>Auflistungen mit <code>&lt;ol&gt;</code></h2>
      <p>"ordered" HTML List</p>
      <ol type="I">
        <li>Punkt 01</li>
        <li>Punkt 02</li>
        <li>
          Punkt 03
          <ol type="i">
            <li>
              Unterpunkt 3.1
              <ol type="a">
                <li>Unter Unterpunkt</li>
              </ol>
            </li>
            <li>Unterpunkt 3.2</li>
          </ol>
        </li>
        <li>Punkt 04</li>
      </ol>      
    </div>
  )
}