import React from 'react';

// Higher Order Components
// 第一引数のComponentへ、第二引数fontColorのスタイル用
// オブジェクトを追加する
const addColor = (Component, fontColor) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { color: fontColor };
    }
    render() {
      return (
        // {...this.props}は Componentが持つpropsを
        // まとめて引き渡している。これが無いと、
        // App.jsの<HelloEn speaker="john"/>や<HelloJa speaker="jane"/>の
        // speakerプロパティが引き渡されない。
        <Component {...this.props} color={this.state.color}/>
      );
    }
  }
};

export default addColor;
