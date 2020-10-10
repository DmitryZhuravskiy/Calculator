import React from 'react';
import SpecialFilling from '../special-filling';
import SpecialSize from '../special-size';
import SpecialDesign from '../special-design';
import SpecialChoise from '../special-choise';

class CakesSpecial extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            idNumberFilling: 0,
            weightSize: '1кг',
            design: 'Маршмэллоу',
            filling: [
                {
                  id: "01",
                  imgMobile: "./img/filling-chocolate--mobile.jpg",
                  imgTablet: "./img/filling-chocolate--tablet.jpg",
                  imgDesktop: "./img/filling-chocolate--desktop.jpg",
                  title: "Шоколадный ганаш",
                  description:
                    "Ароматный шоколадный бисквит, густой шоколадный крем - самый шоколадный из всех возможных десертов!",
                  price: "1000 руб/кг",
                },
        
                {
                  id: "02",
                  imgMobile: "./img/rafaello.jpg",
                  imgTablet: "./img/rafaello.jpg",
                  imgDesktop: "./img/rafaello.jpg",
                  title: "Рафаэлло",
                  description:
                    "Эта начинка приносит по-настоящему райское наслаждение. Ванильный бисквит с кокосово-миндальным наполнением и нежным сливочным кремом на основе творожного сыра маскарпоне.",
                  price: "1200 руб/кг",
                },
        
                {
                  id: "03",
                  imgMobile: "./img/zaher.jpg",
                  imgTablet: "./img/zaher.jpg",
                  imgDesktop: "./img/zaher.jpg",
                  title: "Классический захер",
                  description:
                    "Австрийский шедевр не мог быть не замечен нашими кондитерами. Сочный, плотный, насыщенный шоколадный бисквит пропитан аппетитным абрикосовым конфитюром с толстым слоем вкуснейшей шоколадной глазури. Не зря этот торт стал популярным во всем мире!",
                  price: "1488 руб/кг",
                },
        
                {
                  id: "04",
                  imgMobile: "./img/yogurt.jpg",
                  imgTablet: "./img/yogurt.jpg",
                  imgDesktop: "./img/yogurt.jpg",
                  title: "Йогуртовый торт",
                  description:
                    "Йогуртовый бисквит, крем на основе творожного маскарпоне с кусочками лесных ягод не смогут остваить Вас равнодушными к этой начинке. Начинка является нашей новинкой, но уже успела набрать свой фан-клуб.",
                  price: "900 руб/кг",
                },
        
                {
                  id: "05",
                  imgMobile: "./img/snikers.jpg",
                  imgTablet: "./img/snikers.jpg",
                  imgDesktop: "./img/snikers.jpg",
                  title: "Сникерс",
                  description:
                    "Шоколадный бисквит с шоколадом, карамелью и арахисом. Настоящий сникерс в мире тортов.",
                  price: "1100 руб/кг",
                },
              ],
        }
        this.handleClickFilling = this.handleClickFilling.bind(this);
        this.handleWeightChange1 = this.handleWeightChange1.bind(this);
        this.handleWeightChange2 = this.handleWeightChange2.bind(this);
        this.handleWeightChange5 = this.handleWeightChange5.bind(this);
        this.handleWeightChange8 = this.handleWeightChange8.bind(this);
        this.handleDesignChoiseBerry = this.handleDesignChoiseBerry.bind(this);
        this.handleDesignChoiseMarshmallow = this.handleDesignChoiseMarshmallow.bind(this);
    }

    handleClickFilling(e) {
        this.setState({
          idNumberFilling: e.target.value,
        });
      }

      handleWeightChange1(){
        this.setState({
            weightSize: '1кг'
        });
    }

    handleWeightChange2(){
        this.setState({
            weightSize: '2кг'
        });
    }

    handleWeightChange5(){
        this.setState({
            weightSize: '5кг'
        });
    }

    handleWeightChange8(){
        this.setState({
            weightSize: '8кг'
        });
    }

    handleDesignChoiseBerry() {
        this.setState({
            design: 'Ягодное ассорти'
        });
    }

    handleDesignChoiseMarshmallow() {
        this.setState({
            design: 'Маршмэллоу'
        });
    }

    render() {
        return (
            <form className="cakes-special container" action="https://barbershop.ru" method="get">
                <h3 id="individual-order">Индивидуальный заказ</h3>
                <span>Соберите торт в 3 шага</span>
                <SpecialFilling filling={this.state.filling} idNumberFilling={this.state.idNumberFilling} handleClickFilling={this.handleClickFilling} />
                <SpecialSize filling={this.state.filling} handleWeightChange1={this.handleWeightChange1} handleWeightChange2={this.handleWeightChange2} handleWeightChange5={this.handleWeightChange5} handleWeightChange8={this.handleWeightChange8}  />
                <SpecialDesign design={this.state.design} handleDesignChoiseBerry={this.handleDesignChoiseBerry} handleDesignChoiseMarshmallow={this.handleDesignChoiseMarshmallow} />
                <SpecialChoise idNumberFilling={this.state.idNumberFilling} weightSize={this.state.weightSize} design={this.state.design} filling={this.state.filling} />
            </form>
        )
    }
}

export default CakesSpecial;