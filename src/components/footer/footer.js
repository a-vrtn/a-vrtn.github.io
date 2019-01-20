import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="copyright">
            <li>Copyright © 2019 Anooshik Vartanian. All Rights Reserved.</li>
            <li>This is <b>MY OWN</b> work and the contents of this website may not be copied, in part or full, without permission.</li>
          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="fa fa-chevron-up" /></a></div>
      </div>
    </footer>
    );
  }
}
