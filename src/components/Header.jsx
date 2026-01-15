import logo from "../assets/chef-claude-icon.png"

export default function Header() {
    return (
        <header className="header h-[75px] shadow flex justify-center items-center gap-2 bg-white">
            <img src={logo} alt="Chef Claude" width={35} />
            <span className="text-2xl font-semibold">Chef Claude</span>
        </header>
    )
}