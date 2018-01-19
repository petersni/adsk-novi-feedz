import * as React from 'react';

export interface TodoProps {
  title: string;
  completed: boolean;
  important: boolean;
}

interface Props {
  todo: TodoProps;
  clicked(todo: TodoProps): void;
}

export class Todo extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e: React.MouseEvent<HTMLLIElement>) {
    this.props.clicked(this.props.todo);
    this.forceUpdate();
  }
  render() {
    const style: React.CSSProperties = {
      fontWeight: (this.props.todo.important) ? 'bold' : 'normal',
      textDecoration: (this.props.todo.completed) ? 'line-through' : 'none'
    };
    const { todo: { title } } = this.props;
    return <li onClick={this.handleClick} style={style}>{title}</li>;
  }
}
