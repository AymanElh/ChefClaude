import chefClaudeLogo from '../assets/chef-claude-icon.png'


export default  function Header() {

    return (
        <header>
            <img src={chefClaudeLogo} alt="header-image" />
            <h1>Chef Calude</h1>
        </header>
    )
}