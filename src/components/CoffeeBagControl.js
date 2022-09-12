import React from 'react';
import NewCoffeeBagForm from './NewCoffeeBagForm';
import CoffeeBagList from './CoffeeBagList';
import CoffeeBagDetail from './CoffeeBagDetail';
import EditCoffeeBagForm from './EditCoffeeBagForm';

class CoffeeBagControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false, 
      mainCoffeeBagList: [],
      selectedCoffeeBag: null,
      editing: false,
    };
  }
  //Create
  handleAddingNewCoffeeBagToList = (newCoffeeBag) => {
    const newMainCoffeeBagList = this.state.mainCoffeeBagList.concat
    (newCoffeeBag);
    this.setState({mainCoffeeBagList: newMainCoffeeBagList,
      formVisibleOnPage: false });
    }
    
  handleDeletingCoffeeBag = (id) => {
      const newMainCoffeeBagList = this.state.mainCoffeeBagList.filter
      (coffeeBag => coffeeBag.id !== id);
      this.setState({
        mainCoffeeBagList: newMainCoffeeBagList,
        selectedCoffeeBag: null
      });
    }

    handleSellCoffee = (id) => {
      const soldCoffeeBagList = this.state.mainCoffeeBagList.map((coffeeBag) => {
        if (coffeeBag === id) {
          console.log(coffeeBag)
          if (coffeeBag.weight > 0){
            return {
              ...coffeeBag,
                weight: coffeeBag.weight -1,
            };
          } else {
            return coffeeBag;
          }
        }
      })
      this.setState({mainCoffeeBagList: soldCoffeeBagList})
    }
 
    handleEditingCoffeeBagInList = (coffeeBagToEdit) => {
      const editedMainCoffeeBagList = this.state.mainCoffeeBagList
      .filter(coffeeBag => coffeeBag.id !== this.state.selectedCoffeeBag.id)
      .concat(coffeeBagToEdit);

      this.setState({
        mainCoffeeBagList: editedMainCoffeeBagList,
        editing: false,
        selectedTicket: null
      })
    }

    handleEditClick = (id) => {
      this.setState({editing: true});
    }
  
    //Read
    handleClick = () => {
    if(this.state.selectedCoffeeBag !=null) {
      this.setState ({
        formVisibleOnPage: false,
        selectedCoffeeBag: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleChangingSelectedCoffeeBag = (id) => {
    const selectedCoffeeBag = this.state.mainCoffeeBagList.filter(coffeeBag => coffeeBag.id === id)[0];
    this.setState({selectedCoffeeBag : selectedCoffeeBag});
  }

  render(){

    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditCoffeeBagForm coffeeBag = {this.state.selectedCoffeeBag} onEditCoffeeBag = {this.handleEditingCoffeeBagInList} />
      buttonText = "Return to List of Coffee";
    } else if (this.state.selectedCoffeeBag !=null) {
      currentlyVisibleState = 
      <CoffeeBagDetail
        coffeeBag = {this.state.selectedCoffeeBag}
        onClickingDelete = {this.handleDeletingCoffeeBag}
        onClickingEdit = {this.handleEditClick} 
        onClickingSell = {this.handleSellCoffee} />
        buttonText = "Return to List of Coffee";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewCoffeeBagForm
        onNewCoffeeBagCreation={this.handleAddingNewCoffeeBagToList} />;
        buttonText= "Return to List of Coffee";
    } else {
      currentlyVisibleState = 
      <CoffeeBagList
        coffeeBagList={this.state.mainCoffeeBagList}
        onCoffeeBagSelection = {this.handleChangingSelectedCoffeeBag} />
        buttonText = "Add Bag of Coffee"
    }
    return(
      <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}> 
      {buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CoffeeBagControl;