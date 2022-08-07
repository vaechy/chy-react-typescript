import React from 'react';
import './index.styl';
interface Props {}
interface State {}
// class 组件
class About extends React.Component<Props, State> {
  render() {
    return (
      <section className="about">
        <div className="content">This is typescript teact project template</div>
      </section>
    );
  }
}
export default About;
