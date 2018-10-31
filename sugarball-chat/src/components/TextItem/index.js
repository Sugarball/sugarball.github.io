import React, { Component } from 'react';

/* component styles */
import { styles } from './styles.scss';

export class TextItem extends Component {
  render() {
    return (
        <section className={styles}>
            <div className="activity-info-item">
                <div className="info-icon">
                    <img src={this.props.imgSrc} alt=""/>
                </div>
                <span>
                    {this.props.itemText}
                </span>
            </div>
        </section>
    );
  }
}
