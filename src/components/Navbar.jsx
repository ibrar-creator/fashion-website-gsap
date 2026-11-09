function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo">ATELIER.</a>

      <div className="navbar__links">
        <a href="#men">MEN</a>
        <a href="#women">WOMEN</a>
        <a href="#collection">COLLECTION</a>
      </div>

      <button className="navbar__menu">MENU +</button>
    </nav>
  )
}

export default Navbar