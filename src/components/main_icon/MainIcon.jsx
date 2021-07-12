import './MainIcon.css';


function MainIcon(props){
    console.log(props); //=== 'normal' ?'logo_font':'logo_font-trans';
    // let bg = props.background
    // console.log(bg.navBackground);
    // let class_name = `${bg} mb-0`;
    return(
        <div>
            <h2 className="logo_font">SR TEXTILES</h2>
        </div>
    )
}

export default MainIcon;