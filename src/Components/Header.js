import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
      <Link to='/'><img className='header_logo' src='https://www.pinclipart.com/picdir/big/57-576184_view-our-amazon-storefront-amazon-logo-white-png.png'/></Link>
      <div className='header_search'>
        <input className='header_searchInput' type='text'/>
        <SearchIcon className='search_icon'/>
      </div>
      <div className='header_nav'>
        <div className='header_options'>
            <span className='option_line1'>Hello Guest</span>
            <span className='option_line2'>Sign in</span>
        </div>
        <div className='header_options'>
            <span className='option_line1'>Returns</span>
            <span className='option_line2'> & Orders</span>
        </div>
        <div className='header_options'>
            <span className='option_line1'>Your</span>
            <span className='option_line2'>Prime</span>
        </div>
        <div className='option_basket'>
          <Link to ='/checkout'>
          <ShoppingCartOutlinedIcon/>
          <span className='option_line2 basket_count'>0</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
