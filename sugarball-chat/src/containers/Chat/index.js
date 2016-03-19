import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _ from "lodash";
var moment = require('moment');


/* actions */
import * as actionCreators from 'actions/chat';
import { styles } from './styles.scss';

/* components */
import List from 'material-ui/lib/lists/list';
import Subheader from 'material-ui/lib/Subheader';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
import * as Colors  from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const metaData = {
  title: 'chat',
  description: 'sugarball chat',
  canonical: '',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags,wilddog',
    },
  },
};
@connect(
    state => state.chat,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input : ""
        }
    }

    componentDidMount(){
        this.props.getChats();
        this.setState({
            input : ""
        });
        this.refs.main.scrollTop = 100000;
    }

    componentWillReceiveProps() {
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        if(!this.refs.input.getValue())return;
        console.log(this.refs.input.getValue());
        this.props.postMsg(this.refs.input.getValue());
        this.setState({
            input : ""
        });
        this.refs.main.scrollTop = 100000;
    };

    handleChange = (event)=>{
        this.setState({
            input: event.target.value
        });
    };

    render() {
        const { msgs } = this.props;

        const inputStyles = {
            underlineStyle: {
                borderColor: Colors.orange500,
            }
        };

        let _msgList = [];
        for(let i in msgs){
            _msgList.push(msgs[i]);
        }

        return (
          <section className={styles} ref="main">
              <List className="msgList" ref="msgList">
                  <Subheader>Chat</Subheader>

                  {
                      _msgList.map((msg,index)=>
                          <section key = {index} ref="msgItem">
                          <ListItem
                              leftAvatar = {<Avatar src={require('./files/avatar.png')} />}
                              primaryText = {moment(msg.date).format('YYYY-MM-DD HH:mm:ss')}
                              secondaryText={
                              <p>
                                {msg.msg}
                              </p>
                              }
                              secondaryTextLines={1}/>
                          <Divider inset={true} />
                          </section>
                      )
                  }
              </List>
              <div className="post">
                  <form onSubmit={this.handleSubmit.bind(this)}>
                      <TextField
                          ref="input"
                          className="input-sec"
                          underlineStyle={inputStyles.underlineStyle}
                          hintText="Say something.."
                          onChange={this.handleChange}
                          value={this.state.input}
                      />
                      <RaisedButton label="Say" className="postBtn" type="submit"/>
                  </form>
              </div>
          </section>
        );
    }
}
