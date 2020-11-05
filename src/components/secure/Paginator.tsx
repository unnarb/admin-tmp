import React, { Component } from 'react';

class Paginator extends Component<{lastPage: number, handlePageChange: any}> {
    page: number = 1;
    

    componentDidMount(){

    }

    next = async () => {
        if (this.page === this.props.lastPage) {
          return;
        }
    
        this.page++;
        this.props.handlePageChange(this.page);
      };
    
      previous = async () => {
        if (this.page === 1) {
          return;
        }
    
        this.page--;
        this.props.handlePageChange(this.page);
      };
    
        render() {
        return (
            <nav className="paginator__pagination">
          <li className="paginator__page-item">
            <a
              href="#"
              onClick={this.previous}
              className="paginator__pagination-previous"
            >
              Til baka
            </a>
          </li>
          <li className="paginator__page-item">
            <a
              href="#"
              onClick={this.next}
              className="paginator__pagination-next"
            >
              Næsta
            </a>
          </li>
        </nav>
        );
    }
}

export default Paginator;