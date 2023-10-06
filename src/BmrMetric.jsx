export function bmrMetric() {
    return (
      <div className="metric-unit">
        <h5 className="height">Height</h5>
        <label class="metric-height">
          <input type="text" className="box"/>
           cm
        </label>
        <h5 className="weight">Weight</h5>
        <label>
          <input type="text" className="box"/>
           kg
        </label>
      </div>
    )
}