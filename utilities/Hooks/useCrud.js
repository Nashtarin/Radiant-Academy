import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { approveTopic, deleteTopic } from '../redux/slices/forumSlice';
import { deleteCourse } from '../redux/slices/courseSlice';
import { deleteUser, makeAdmin, removeAdmin } from '../redux/slices/userSlice';
import { deleteQuiz } from '../redux/slices/quizSlice';

const useCrud = () => {
    const dispatch = useDispatch();

    const handleApprove = (id, criteria) => {
        if(criteria === 'topic') {
            Swal.fire({
                title: 'Are you sure you want to approve this?',
                text: "Warding: the post will be public now!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#6B21A8',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Approve it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    if (dispatch(approveTopic(id))) {
                        Swal.fire(
                            'Approved!',
                            'Topic has been approved.',
                            'success'
                        )
                    } else {
                        console.log('Something went wrong!');
                    }
                } else {
                    console.log('Something went wrong!');
                }
              })
        }else{
            console.log('wrong criteria!');
        }
        
    }

    const handleRemove = (id, criteria) => {
        if(criteria === 'topic') {
            Swal.fire({
                title: 'Are you sure you want to remove this?',
                text: "Warding: you won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#6B21A8',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    if (dispatch(deleteTopic(id))) {
                        Swal.fire(
                            'Deleted!',
                            'Topic has been deleted.',
                            'success'
                        )
                    } else {
                        console.log('Something went wrong!');
                    }
                } else {
                    console.log('Something went wrong!');
                }
              })
        }else if(criteria === 'account') {
            Swal.fire({
                title: 'Are you sure you want to remove this?',
                text: "Warding: you won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#6B21A8',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                if (result.isConfirmed) {
                    if (dispatch(deleteUser(id))) {
                        Swal.fire(
                            'Deleted!',
                            'User has been deleted.',
                            'success'
                        )
                    } else {
                        console.log('Something went wrong!');
                    }
                } else {
                    console.log('Something went wrong!');
                }
                })
        }else if(criteria === 'course') {
            Swal.fire({
                title: 'Are you sure you want to remove this?',
                text: "Warding: you won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#6B21A8',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    if (dispatch(deleteCourse(id))) {
                        Swal.fire(
                            'Deleted!',
                            'Course has been deleted.',
                            'success'
                        )
                    } else {
                        console.log('Something went wrong!');
                    }
                } else {
                    console.log('Something went wrong!');
                }
              })
        }else if(criteria === 'quiz') {
            Swal.fire({
                title: 'Are you sure you want to remove this?',
                text: "Warding: you won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#6B21A8',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    if (dispatch(deleteQuiz(id))) {
                        Swal.fire(
                            'Deleted!',
                            'Quiz has been deleted.',
                            'success'
                        )
                    } else {
                        console.log('Something went wrong!');
                    }
                } else {
                    console.log('Something went wrong!');
                }
              })
        }
        else{
            console.log('wrong criteria!');
        }
    }

    const handleRole = (id, criteria) => {
        if(criteria === 'admin') {
            Swal.fire({
                title: 'Are you sure you want to give admin role?',
                text: "Warding: this user will be added to administration!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#6B21A8',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Approve it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    if (dispatch(makeAdmin(id))) {
                        Swal.fire(
                            'Approved!',
                            'Admin has been added.',
                            'success'
                        )
                    } else {
                        console.log('Something went wrong!');
                    }
                } else {
                    console.log('Something went wrong!');
                }
              })
        }else if(criteria === 'user'){
            Swal.fire({
                title: 'Are you sure you want to remove admin role?',
                text: "Warding: this admin will be removed from administration!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#6B21A8',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Approve it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    if (dispatch(removeAdmin(id))) {
                        Swal.fire(
                            'Approved!',
                            'Admin has been removed.',
                            'success'
                        )
                    } else {
                        console.log('Something went wrong!');
                    }
                } else {
                    console.log('Something went wrong!');
                }
              })
        }
        else{
            console.log('wrong criteria!');
        }
    }

    return {
        handleApprove, 
        handleRemove,
        handleRole,
    }
};

export default useCrud;