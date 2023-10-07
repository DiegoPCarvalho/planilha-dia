import './NewNav.css';
import React from 'react';

// const COLORS = {
//     primaryDark: "#115b4c",
//     primaryLight: "#B6EDC8",
//   };

//   const styled = {}
  
//   const MenuLabel = styled.label`
//     background-color: ${COLORS.primaryLight};
//     position: fixed;
//     top: 6rem;
//     right: 6rem;
//     border-radius: 50%;
//     height: 7rem;
//     width: 7rem;
//     cursor: pointer;
//     z-index: 1000;
//     box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
//     text-align: center;
//   `;
  
//   const NavBackground = styled.div`
//     position: fixed;
//     top: 6.5rem;
//     right: 6.5rem;
//     background-image: radial-gradient(
//       ${COLORS.primaryDark},
//       ${COLORS.primaryLight}
//     );
//     height: 6rem;
//     width: 6rem;
//     border-radius: 50%;
//     z-index: 600;
//     transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
//     transition: transform 0.8s;
//   `;
  
//   const Icon = styled.span`
//     position: relative;
//     background-color: ${(props) => (props.clicked ? "transparent" : "black")};
//     width: 3rem;
//     height: 2px;
//     display: inline-block;
//     margin-top: 3.5rem;
//     transition: all 0.3s;
//     &::before,
//     &::after {
//       content: "";
//       background-color: black;
//       width: 3rem;
//       height: 2px;
//       display: inline-block;
//       position: absolute;
//       left: 0;
//       transition: all 0.3s;
//     }
//     &::before {
//       top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
//       transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
//     }
//     &::after {
//       top: ${(props) => (props.clicked ? "0" : "0.8rem")};
//       transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
//     }
//     ${MenuLabel}:hover &::before {
//       top: ${(props) => (props.clicked ? "0" : "-1rem")};
//     }
//     ${MenuLabel}:hover &::after {
//       top: ${(props) => (props.clicked ? "0" : "1rem")};
//     }
//   `;
  
//   const Navigation = styled.nav`
//     height: 100vh;
//     position: fixed;
//     top: 0;
//     right: 0;
//     z-index: 600;
//     width: ${(props) => (props.clicked ? "100%" : "0")};
//     opacity: ${(props) => (props.clicked ? "1" : "0")};
//     transition: width 0.8s, opacity 0.8s;
//   `;
  
//   const List = styled.ul`
//     position: absolute;
//     list-style: none;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     text-align: center;
//     width: 100%;
//   `;
//   const ItemLink = styled.a`
//     display: inline-block;
//     font-size: 3rem;
//     font-weight: 300;
//     text-decoration: none;
//     color: ${COLORS.primaryLight};
//     padding: 1rem 2rem;
//     background-image: linear-gradient(
//       120deg,
//       transparent 0%,
//       transparent 50%,
//       #fff 50%
//     );
//     background-size: 240%;
//     transition: all 0.4s;
//     cursor:pointer;
//     &:hover,
//     &:active {
//       background-position: 100%;
//       color: ${COLORS.primaryDark};
//       transform: translateX(1rem);
//     }
//   `;
  
//   function HamburgerMenu() {
//     const [click, setClick] = React.useState(false);
//     const handleClick = () => setClick(!click);
//     return (
//       <>
//         <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
//           <Icon clicked={click}>&nbsp;</Icon>
//         </MenuLabel>
//         <NavBackground clicked={click}>&nbsp;</NavBackground>
  
//         <Navigation clicked={click}>
//           <List>
//             <li>
//               <ItemLink onClick={handleClick} to="/">
//                 Home
//               </ItemLink>
//             </li>
//             <li>
//               <ItemLink onClick={handleClick} to="/about">
//                 About
//               </ItemLink>
//             </li>
//             <li>
//               <ItemLink onClick={handleClick} to="/portfolio">
//                 Portfolio
//               </ItemLink>
//             </li>
//             <li>
//               <ItemLink onClick={handleClick} to="/blog">
//                 Blog
//               </ItemLink>
//             </li>
//             <li>
//               <ItemLink onClick={handleClick} to="/contact">
//                 Contact Us
//               </ItemLink>
//             </li>
//           </List>
//         </Navigation>
//       </>
//     );
//   }
  
  
//   export default function NewNav() {
//     return (
//       <>
//   <HamburgerMenu/>
//       </>
//     );
//   }
  
class App extends React.Component {
    constructor(props){
      super(props);
      this.state={
        menuOpen:false,
      }
    }
    
    handleMenuClick() {
      this.setState({menuOpen:!this.state.menuOpen});
    }
    
    handleLinkClick() {
      this.setState({menuOpen: false});
    }
    
    render(){
      const styles= 
        {
          container:{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: '99',
            opacity: 0.9,
            display:'flex',
            flexDirection: 'flex-end',
            alignItems:'center',
            background: 'black',
            width: '100%',
            color: 'white',
            fontFamily:'Lobster',
          },
          logo: {
            margin: '0 auto',
          },
          body: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            filter: this.state.menuOpen ? 'blur(2px)':null,
            transition: 'filter 0.5s ease',
          },
        }
      const menu = ['About Us','Our Products','Services','FAQ','Contact Us']
      const menuItems = menu.map((val,index)=>{
        return (
          <MenuItem 
            key={index} 
            delay={`${index * 0.1}s`}
            onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
      });
      
      return(
        <div>
          <div style={styles.container}>
            <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
            <div style={styles.logo}>Logo</div>
          </div>
          <Menu open={this.state.menuOpen}>
            {menuItems}
          </Menu>
        </div>
      )
    }
  }
  
  /* MenuItem.jsx*/
  class MenuItem extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        hover:false,
      }
    }
    
    handleHover(){
      this.setState({hover:!this.state.hover});
    }
    
    render(){
      const styles={
        container: {
          opacity: 0,
          animation: '1s appear forwards',
          animationDelay:this.props.delay,
        },
        menuItem:{
          fontFamily:`'Open Sans', sans-serif`,
          fontSize: '1.2rem',
          padding: '1rem 0',
          margin: '0 5%',
          cursor: 'pointer',
          color: this.state.hover? 'gray':'#fafafa',
          transition: 'color 0.2s ease-in-out',
          animation: '0.5s slideIn forwards',
          animationDelay:this.props.delay,
  
        },
        line: {
          width: '90%',
          height: '1px',
          background: 'gray',
          margin: '0 auto',
          animation: '0.5s shrink forwards',
          animationDelay:this.props.delay,
          
        }
      }
      return(
        <div style={styles.container}>
          <div 
            style={styles.menuItem} 
            onMouseEnter={()=>{this.handleHover();}} 
            onMouseLeave={()=>{this.handleHover();}}
            onClick={this.props.onClick}
          >
            {this.props.children}  
          </div>
        <div style={styles.line}/>
      </div>  
      )
    }
  }
  
  /* Menu.jsx */
  class Menu extends React.Component {
    constructor(props){
      super(props);
      this.state={
        open: this.props.open? this.props.open:false,
      }
    }
      
    componentWillReceiveProps(nextProps){
      if(nextProps.open !== this.state.open){
        this.setState({open:nextProps.open});
      }
    }
    
    render(){
      const styles={
        container: {
          position: 'absolute',
          top: 0,
          left: 0,
          height: this.state.open? '100%': 0,
          width: '40vw',
          display: 'flex',
          flexDirection: 'column',
          background: 'black',
          opacity: 0.95,
          color: '#fafafa',
          transition: 'height 0.3s ease',
          zIndex: 2,
        },
        menuList: {
          paddingTop: '3rem',
        }
      }
      return(
        <div style={styles.container}>
          {
            this.state.open?
              <div style={styles.menuList}>
                {this.props.children}
              </div>:null
          }
        </div>
      )
    }
  }
  
  /* MenuButton.jsx */
  class MenuButton extends React.Component {
    constructor(props){
      super(props);
      this.state={
        open: this.props.open? this.props.open:false,
        color: this.props.color? this.props.color:'black',
      }
    }
  
    componentWillReceiveProps(nextProps){
      if(nextProps.open !== this.state.open){
        this.setState({open:nextProps.open});
      }
    }
    
    handleClick(){
    this.setState({open:!this.state.open});
    }
    
    render(){
      const styles = {
        container: {
          height: '32px',
          width: '32px',
          display:'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          padding: '4px',
        },
        line: {
          height: '2px',
          width: '20px',
          background: this.state.color,
          transition: 'all 0.2s ease',
        },
        lineTop: {
          transform: this.state.open ? 'rotate(45deg)':'none',
          transformOrigin: 'top left',
          marginBottom: '5px',
        },
        lineMiddle: {
          opacity: this.state.open ? 0: 1,
          transform: this.state.open ? 'translateX(-16px)':'none',
        },
        lineBottom: {
          transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
          transformOrigin: 'top left',
          marginTop: '5px',
        },       
      }
      return(
        <div style={styles.container} 
          onClick={this.props.onClick ? this.props.onClick: 
            ()=> {this.handleClick();}}>
          <div style={{...styles.line,...styles.lineTop}}/>
          <div style={{...styles.line,...styles.lineMiddle}}/>
          <div style={{...styles.line,...styles.lineBottom}}/>
        </div>
      )
    }
  }
  
  
  
  /* Main.jsx */
 export default class Main extends React.Component {
    render(){
      const styles = {
        main: {
          display:'flex',
          flexDirection:'column',
          alignItems: 'center',
          height: '100vh',
        }
      }
      
      return (
        <div style={styles.main}>
          <App />
        </div>
      )
    }
  }
