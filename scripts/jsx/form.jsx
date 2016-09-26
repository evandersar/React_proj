var React = require('react'); 
var ReactDOM = require('react-dom'); 

        var MyForm = React.createClass({

            getInitialState: function () {
                return{
                    name_cls: 'valid',
                    email_cls: 'valid',
                    message_cls: 'valid' 
                }
            },

            render: function() {
                return (
                    <div className='row'>
                    <div className='col-md-7 col-xs-12'>
                        <iframe className='' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.2289410320905!2d30.54428231544456!3d50.4182059794709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf6b8a95ef5b%3A0x1347612493708662!2z0LHRg9C70YzQstCw0YAg0JTRgNGD0LbQsdC4INCd0LDRgNC-0LTRltCyLCAzMiwg0JrQuNGX0LI!5e0!3m2!1suk!2sua!4v1474542898241" width="800" height="400" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                    </div>
                    <div className='col-md-5 col-xs-12'>

                        <div className='center'>
                            <h2>Keep In Touch</h2>
                            <img src="images/underline.fw.png" />
                        </div>

                        <form>
                            <br></br>
                            <div className="form-group">
                              
                              <input onInput={this.nameChange} type="text" className="form-control" placeholder="Name"></input>
                              <p className={this.state.name_cls}>Only letters allowed!</p>
                            
                              <input onInput={this.emailChange} type="text" className="form-control" placeholder="Email"></input>
                              <p className={this.state.email_cls}>Letters, numbers, @, _, ., are allowed!</p>
                            
                              <textarea rows="4" onInput={this.messageChange} className="form-control" placeholder="Message"></textarea>
                              <p className={this.state.message_cls}>Minimal length of message 20 symbols!</p>
                            
                               <button className="btn butt" id='submitt'>SEND REQUEST</button>

                            </div>
                        </form>
                    </div>
                    </div>
            )},

            nameChange: function(e) { 
                var testVal = /^[a-zA-Z ]+$/;
                
                if (e.target.value.search(testVal) == -1) {
                    this.setState({name_cls: 'error'}); 
                }else{
                    this.setState({name_cls: 'valid'});
                }
            },

            emailChange: function(e) { 
                var testVal = /^[a-zA-Z0-9_@.]+$/;
                
                if (e.target.value.search(testVal) == -1) {
                    this.setState({email_cls: 'error'}); 
                }else{
                    this.setState({email_cls: 'valid'});
                }
            },

            messageChange: function(e) { 
                var testVal = /^.{0,19}$/;
                
                if (e.target.value.search(testVal) != -1) {
                    this.setState({message_cls: 'error'}); 
                }else{
                    this.setState({message_cls: 'valid'});
                }
            }
        })

        var container = document.getElementById('my_form'); 
        ReactDOM.render(<MyForm/>, container); 