import {connect} from 'react-redux';
import Sidebar from './Sidebar';
import { sendColorCreator, updateNewColorBodyCreator, updateNameCreator } from '../../redux/sidebar-reducer';

let mapStateToProps = (state1) => { // state1 - Это то что передано из redux-store
  return {
    sidebarPage: state1.sidebarPage
  }
}

let mapDispatchToProps = (dispatch) => { // коллбэки попадают в пропс
  return {
      sendColor: () => dispatch(sendColorCreator()),
      updateNewColorBody: (body) => {dispatch(updateNewColorBodyCreator(body))},
      updateName: () => dispatch(updateNameCreator())
  }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar); // Sidebar - Это презентационная компонента которую надо законектить к стору
export default SidebarContainer;