import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import SenLogo from 'static/images/sen-logo.svg'
import Logo from 'components/logo'

class Header extends Component {
  render() {
    return (
      <div className="container header">
        <div className="row">
          <div className="col-sm-12">
            <Logo src={SenLogo} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ui: state.ui,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
