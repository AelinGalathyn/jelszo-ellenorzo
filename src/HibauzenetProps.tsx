export interface HibauzenetProps {
    sulyos: number;
    hibauzenetek: string;
}

export function Hibauzenet(props: HibauzenetProps) {
    return <ul>
        <li
            className={props.sulyos ? 'erosseg' : ''}
            style={{
                display: props.hibauzenetek != '' ? 'inline' : 'none',
                color: props.sulyos == 2 ? 'white' : 'red',
                textDecoration: props.sulyos == 0 ? 'underline' : 'none',
                fontWeight: props.sulyos == 0 ? 'bold, italic' : 'none',
                backgroundColor: props.sulyos > 1 ? 'green' : 'yellow'}}>
            {props.hibauzenetek}
        </li>
    </ul>;
}