export function BmrUs() {
    return (
        <div className="us-unit hide">
            <h5 className="height">Height</h5>
            <label className="us-height">
              <input type="text" className="box"/>
                feet
              <input type="text" className="box"/>
                inches
            </label>
            <h5 className="weight">Weight</h5>
            <label>
              <input type="text" className="box"/>
                lbs
            </label>
        </div>
    )
}