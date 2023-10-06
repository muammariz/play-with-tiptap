import React, { Component } from "react";
import cn from "@/utils/cn";

class CommandList extends Component {
  state = {
    selectedIndex: 0,
    scrollableRef: React.createRef(),
  };

  componentDidUpdate(oldProps) {
    if (this.props.items !== oldProps.items) {
      this.setState({
        selectedIndex: 0,
      });
    }
  }

  componentDidMount() {
    // Focus the initially selected item when the component mounts
    this.focusSelectedItem();
  }

  componentDidUpdate(_, prevState) {
    // Focus the selected item whenever selectedIndex changes
    if (prevState.selectedIndex !== this.state.selectedIndex) {
      this.focusSelectedItem();
    }
  }

  onKeyDown({ event }) {
    if (event.key === "ArrowUp") {
      this.upHandler();
      return true;
    }

    if (event.key === "ArrowDown") {
      this.downHandler();
      return true;
    }

    if (event.key === "Enter") {
      this.enterHandler();
      return true;
    }

    return false;
  }

  upHandler() {
    this.setState({
      selectedIndex:
        (this.state.selectedIndex + this.props.items.length - 1) %
        this.props.items.length,
    });
  }

  downHandler() {
    this.setState({
      selectedIndex: (this.state.selectedIndex + 1) % this.props.items.length,
    });
  }

  enterHandler() {
    this.selectItem(this.state.selectedIndex);
  }

  selectItem(index) {
    const item = this.props.items[index];

    if (item) {
      this.props.command(item);
    }
  }
  focusSelectedItem() {
    if (this.state.scrollableRef.current) {
      const selectedButton = this.state.scrollableRef.current.querySelector(
        `.item:nth-child(${this.state.selectedIndex + 1})`
      );

      if (selectedButton) {
        selectedButton.scrollIntoView({ block: "nearest" });
      }
    }
  }

  render() {
    const { items } = this.props;

    const variants = {
      type: {
        isSelected: "flex gap-2 items-center rounded p-2 bg-rock-100",
        default:
          "flex gap-2 items-center rounded p-2 bg-rock-50 hover:bg-rock-100",
      },
    };

    return (
      <div
        className={cn(
          "max-h-[220px] overflow-auto",
          "border border-rock-200 rounded-lg",
          "shadow-lg"
        )}
      >
        <div
          className={cn("flex flex-col bg-rock-50", "p-1", "rounded-lg")}
          ref={this.state.scrollableRef}
        >
          {items.map((item, index) => {
            return (
              <button
                className={`item ${
                  index === this.state.selectedIndex
                    ? variants.type.isSelected
                    : variants.type.default
                }`}
                key={index}
                onClick={() => this.selectItem(index)}
              >
                <div className="flex p-2 items-center rounded-md border border-rock-200 bg-rock-50 text-rock-500">
                  {item.icon}
                </div>
                <span className="flex flex-col items-start self-stretch">
                  <div className="text-heavy-m text-rock-700">{item.title}</div>
                  <div className="text-regular-s text-rock-500">
                    {item.description}
                  </div>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CommandList;
