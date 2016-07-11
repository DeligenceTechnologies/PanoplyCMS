Position=React.createClass({
  render:function(){
    c=0;
    return(
          <div className = "form-group">
            <label htmlFor = "lastname" className = "col-sm-2 control-label">Position</label>
            <div className = "col-sm-10">
              <select defaultValue='select' name="position" ref="position" id="position" className="selectpicker form-control " data-style="btn-primary" >
                <option value="">--select--</option>
                 {this.props.data.templates.map(function(result){
                    c++
                    return <optgroup key={c} value={result._id} label={result.name}>  
                            { 
                  
                              result.position.map( p => {
                                return <option key={p} value={p}>{p}</option>
                              })
                            }
                            </optgroup>   
                  })}   
              </select>
            </div>
          </div>
    )     
  }
})

export default Position;