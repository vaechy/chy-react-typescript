import React from 'react';
import './index.styl';
interface Props {}
interface State {}
// class 组件
class About extends React.Component<Props, State> {
  render() {
    return <section className="about">About</section>;
  }
}
export default About;
