import LinkCp from './LinkCp';

function ListCp(props){
  return(
    <li><LinkCp href={props.hrefPr} textPr={props.textPr}/></li>
  );
}
export default ListCp;