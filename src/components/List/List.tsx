import styled from "styled-components";
import { useSelector } from "react-redux";
import { State } from "../../redux/state";
import { Filter } from "../../util/filters";
import { Task } from "../../model/task";
import { TaskBox } from "../TaskBox/TaskBox";

const ListDiv = styled.div`
    display: flex;

    /* Single file or multiple tasks per line? */
    flex-direction: column;
    /* flex-flow: row wrap; */

    align-items: center;
    gap: 10px;

    margin: 0 auto;
    
    padding-top: 50px;
    padding-bottom: 60px;

    max-width: 700px;
`

export const List: React.FC = () => {

    const { tasks, filters } = useSelector((state: State) => state);    

    let workingSet:  Task[] = tasks;
    let filteredSet: Task[] = [];

    filters.forEach((filter: Filter) => {
        filteredSet = [];
        filteredSet.push(...workingSet.filter(task => filter(task)));
        workingSet = filteredSet;

    } )

    return (
        <ListDiv>
            {filteredSet.map((task) => {
                return (
                    <TaskBox key={task._id} task={task} />
                )
            })}
        </ListDiv>
    );

}
