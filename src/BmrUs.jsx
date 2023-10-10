export function BmrUs() {
    return (
      <>
      <button 
        type="button" 
        className="btn btn-dark us" 
        id="us-btn"
        onClick={switchBmrUs(true)}
        >
        US Units
        </button>
        <div className="us-unit hide" id="us-u">
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
      </>
    )
}