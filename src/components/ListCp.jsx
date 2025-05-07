import LinkCp from './LinkCp';

function ListCp(){
  return(
    <li><LinkCp href={props.hrefPr} textPr={props.textPr}/></li>
  );
}
export default ListCp;