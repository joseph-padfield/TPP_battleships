import {ReactElement} from "react";
import './styles.css';
function Table () {

    const xAxis: string[] = ['1','2','3','4','5','6','7','8','9'];
    const yAxis: string[] = ['A','B','C','D','E','F','G','H','I'];

    return (
        <table>
            <thead>
                <tr>
                    <th>Corner</th>
                    {xAxis.map((number)   => {
                        return <th key={number}>{number}</th>
                    })}
                </tr>
            </thead>
            <tbody>
            {yAxis.map((letter)  => {
                return (
                    <tr key={letter}>
                        <th>{letter}</th>
                        {xAxis.map((number): ReactElement => {
                            return <td key={ `${letter}-${number}` }> { `${letter}-${number}` } </td>
                        })}
                    </tr>
                )
            })}
            </tbody>



        </table>
    )
}

export default Table