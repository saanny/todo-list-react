export const BoxLayout = ({children,headerTitle = "Sample Title"})=> {

    return(
        <div className="box">
            <div className="box-header">
            <p>{headerTitle}</p>
            </div>
            {children}
        </div>
    )
}