import React from 'react'
import './index.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Оновлюємо стан, щоб наступний рендер показав запасний UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Ви також можете передати помилку в службу звітування про помилки
    console.log('Something went wrong.')
    console.log(error)
    console.log(errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Ви можете відрендерити будь-який власний запасний UI
      return (
        <div className='error'><h1>Something went wrong.</h1></div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary
