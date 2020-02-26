import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import styles from "../../styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from '@material-ui/core/Grid';
import STATUS from "../../constants";
import TaskList from "../../components/TaskList";
import TaskForm from "../../components/TaskForm";
import {connect} from "react-redux";
import {bindActionCreators, compose} from "redux";
import * as taskActionCreators from "../../actions/tasks";
import * as modalActionCreators from "../../actions/modal";
import {toast} from "react-toastify";
import GlobalLoading from "../../components/GlobalLoading";
import SearchBox from "../../components/SearchBox";
import FormContent from "../../components/FormContent";

class TaskBoard extends Component {

    onOpenForm = () => {
        const {TaskActions} = this.props;
        const {setTaskEdit} = TaskActions;
        setTaskEdit(null);
        const {ModalActions} = this.props;
        const {showModal,changeTitleModal,changeContentModal} = ModalActions;
        showModal();
        changeTitleModal('Add new task');
        changeContentModal(<FormContent/>);
    };

    onHandleClose = () => {
        const {ModalActions} = this.props;
        const {hideModal} = ModalActions;
        hideModal();
        toast.warn('Close', {
            style: {
                fontSize: '100px',
                color: '#343a40',
                minHeight: '60px',
                borderRadius: '8px',
                background: '#2FEDAD',
                boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3)'
            },
        });
    };
    //
    componentDidMount() {
        const {TaskActions} = this.props;
        const {getListTask} = TaskActions;
        getListTask();
    }
    // loadData = () => {
    //     const {TaskActions} = this.props;
    //     const {getListTask} = TaskActions;
    //     getListTask();
    // };

    handleFilter = (event) => {
        let value = event.target.value;
        const {TaskActions} = this.props;
        const {filterTask} = TaskActions;
        filterTask(value);
    };

    // Edit Task
    onEditTask = (task) => {

        const {ModalActions} = this.props;
        const {showModal,changeTitleModal,changeContentModal} = ModalActions;
        showModal();
        changeTitleModal('Edit Task');
        changeContentModal(<FormContent />);
        const {TaskActions} = this.props;
        const {setTaskEdit} = TaskActions;
        setTaskEdit(task);

    };

    // Delete task
    onDeleteTask = (task) => {
        console.log(task);
    };

    render() {

        const {classes, listTasks} = this.props;
        let taskItem = STATUS.map((status, index) => {
            let taskTitleFilter = listTasks.filter( task => task.status === status.value);
            return (
                <TaskList key={index}
                          status={status}
                          taskTitleFilter={taskTitleFilter}
                          onEditTask = {this.onEditTask}
                          onDeleteTask={this.onDeleteTask}
                />
            )
        });
        return (
            <div className={classes.taskBoard}>

                {/**/}
                <Button className={classes.btnAddTask} variant="contained" color="primary" size="small"
                        onClick={this.onOpenForm}>
                    <AddIcon className={classes.icon}/>Add new task
                </Button>
                {/*<Button className={classes.btnAddTask}*/}
                {/*        variant="contained"*/}
                {/*        color="primary"*/}
                {/*        size="small"*/}
                {/*        style={{*/}
                {/*            marginLeft: 20*/}
                {/*        }}*/}
                {/*        onClick={this.loadData}*/}
                {/*>*/}
                {/*    <AddIcon className={classes.icon}/>Load data*/}
                {/*</Button>*/}
                {/**/}
                {/*Search form*/}
                <SearchBox onHandleChange={this.handleFilter}
                />
                {/*/*/}
                <Grid container spacing={2}>
                    {taskItem}
                </Grid>

                {/* TaskForm   */}
                <TaskForm onClose={this.onHandleClose}

                />

                <GlobalLoading/>



            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        listTasks: state.tasks.listTask,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        TaskActions: bindActionCreators(taskActionCreators, dispatch),
        ModalActions: bindActionCreators(modalActionCreators,dispatch)
    }
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(TaskBoard)