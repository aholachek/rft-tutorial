import React, { Component } from "react"
import { Flipper, Flipped } from "react-flip-toolkit"

const listData = [...Array(3).keys()]

const ListItem = ({ index, onClick }) => (
  <Flipped flipId={`listItem-${index}`}>
    <div className="listItem" onClick={() => onClick(index)}>
      <Flipped inverseFlipId={`listItem-${index}`}>
        <div className="listItemContent">
          <Flipped flipId={`avatar-${index}`}>
            <div className="avatar" />
          </Flipped>
          <div className="description">
            {listData.map(i => (
              <Flipped flipId={`description-${index}-${i}`} key={i}>
                <div />
              </Flipped>
            ))}
          </div>
        </div>
      </Flipped>
    </div>
  </Flipped>
)

const ExpandedListItem = ({ index, onClick }) => (
  <Flipped flipId={`listItem-${index}`}>
    <div className="expandedListItem" onClick={() => onClick(index)}>
      <Flipped inverseFlipId={`listItem-${index}`}>
        <div className="expandedListItemContent">
          <Flipped flipId={`avatar-${index}`}>
            <div className="avatar avatarExpanded" />
          </Flipped>
          <div className="description">
            {listData.map(i => (
              <Flipped flipId={`description-${index}-${i}`} key={i}>
                <div />
              </Flipped>
            ))}
          </div>
          <div className="additional-content">
            {listData.map(i => (
              <div key={i} />
            ))}
          </div>
        </div>
      </Flipped>
    </div>
  </Flipped>
)

export default class AnimatedList extends Component {
  state = { focused: null }
  onClick = index =>
    this.setState({
      focused: this.state.focused === index ? null : index
    })
  render() {
    return (
      <Flipper
        flipKey={this.state.focused}
        className="staggered-list-content"
        spring="gentle"
      >
        <ul className="list">
          {listData.map(index => {
            return (
              <li key={index}>
                {index === this.state.focused ? (
                  <ExpandedListItem
                    index={this.state.focused}
                    onClick={this.onClick}
                  />
                ) : (
                  <ListItem index={index} key={index} onClick={this.onClick} />
                )}
              </li>
            )
          })}
        </ul>
      </Flipper>
    )
  }
}
