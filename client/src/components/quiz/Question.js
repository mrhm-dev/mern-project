import React from 'react'
import { Card, CardBody, Button } from 'reactstrap'
import TextInput from '../forms/TextInput'

class Question extends React.Component {

    renderOptions = options => options.map((option, index) => (
        <React.Fragment>
            <TextInput
                name='option'
                key={index}
                placeholder={`Option ${index + 1}`}
                value={option}
                index={index}
                changeHandler={event => this.props.optionChange(event.target.value, this.props.questionNo, index)}
            />
            <span
                onClick={() => this.props.removeOption(this.props.questionNo, index)}
                className='text-danger mt-2 my-2'
                style={{cursor: 'pointer'}}
            > <strong>Remove</strong>
            </span>
        </React.Fragment>
    ))

    render() {
        let { question, answer, options } = this.props.question
        let {changeHandler, addNewOption, questionNo, removeQuestion} = this.props
        return (
            <Card className='mt-3'>
                <CardBody>
                    <div className='d-flex'>
                        <h4>Question No: {this.props.questionNo + 1} </h4>
                        <Button
                            color='warning'
                            outline
                            className='ml-auto'
                            onClick={() => removeQuestion(questionNo)}
                        >
                            Remove
                        </Button>
                    </div>
                    <TextInput
                        name='question'
                        label='Question: '
                        placeholder='What is your question?'
                        value={question}
                        changeHandler={event => changeHandler(event, questionNo)}
                    />
                    <TextInput
                        name='answer'
                        label='Answer: '
                        placeholder='What is your answer?'
                        value={answer}
                        changeHandler={event => changeHandler(event, questionNo)}
                    />

                    <p>Add Your Options</p>
                    {this.renderOptions(options)}
                    <Button
                        outline
                        color='warning'
                        className='d-block m-auto'
                        onClick={() => addNewOption(questionNo)}
                    >
                        Add New Option
                    </Button>
                </CardBody>
            </Card>
        )
    }
}

export default Question