

export const BasicTypes = () => {
    const name:String = "yabran";
    const age:Number = 15;
    const isActive:Boolean = true;
    const powers:String[] = ["hola", "borralo "];
    return (
    <div>
        { name } { age }  { isActive ? 'true' : 'false'} {powers}

    </div>
  )
}
