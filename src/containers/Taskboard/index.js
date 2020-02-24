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
import {bindActionCreators} from "redux";
import * as taskActionCreators from "../../actions/tasks";
import * as modalActionCreators from "../../actions/modal";
import {toast} from "react-toastify";
import GlobalLoading from "../../components/GlobalLoading";
import SearchBox from "../../components/SearchBox";

class TaskBoard extends Component {
    state = {
        open: false
    };

    onOpenForm = () => {
        const {ModalActions} = this.props;
        const {showModal,changeTitleModal,changeContentModal} = ModalActions;
        showModal();
        changeTitleModal('Add new task');
        changeContentModal();
    };

    onHandleClose = () => {
        this.setState({
            open: false
        });
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

    render() {

        const {classes, listTasks} = this.props;
        const {open} = this.state;
        let taskItem = STATUS.map((status, index) => {
            let taskTitleFilter = listTasks.filter(task => task.status === status.value);
            return (
                <TaskList key={index}
                          status={status}
                          taskTitleFilter={taskTitleFilter}
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
                <TaskForm open={open}
                          onClose={this.onHandleClose}
                />

                <GlobalLoading/>

            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        listTasks: state.tasks
    }
};
const mapDispatchToProps = dispatch => {
    return {
        TaskActions: bindActionCreators(taskActionCreators, dispatch),
        ModalActions: bindActionCreators(modalActionCreators,dispatch)
    }
};
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));