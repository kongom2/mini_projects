import React,{useState} from "react";
import { Grid,Text,Input,Button,ImageButton } from "../elements/elementsIndex";


const Feedback = () => {

  const [changeText,setChangeText] = useState('')
  const [feedback,setFeedback] = useState()

  const addComments = () => {
    setChangeText(feedback)
  }
  const onChange = (e) => {
    setFeedback(e.target.value)
  }

  const editFeedback = () => {
    setChangeText('')
  }

  const deleteFeedback = (e) => {
    setFeedback('')
    setChangeText('')
  }

  return (
    <Grid height='240px' padding='20px' bg='#eee'>
      <Grid is_flex height='auto' margin='20px 0'>
        <Text align='center' margin='0 0 0 0' size='1.5rem' bold>피드백</Text>
        <ImageButton 
          margin='0 5px 0 auto' 
          size='24px' 
          height='24px'
          _onClick={editFeedback}
        ></ImageButton>
        <ImageButton 
          size='24px'
          height='24px' 
          deleteIcon
          _onClick={deleteFeedback}
        ></ImageButton>
      </Grid>
      <Grid borderRadius='20px' bg='#fff' height='auto' padding='20px' hide={changeText === '' ?'none' :  null }>
        <Text bold size='1rem'>"{changeText}"</Text>
      </Grid>
      <Grid height='auto'hide={changeText === '' ?null : 'none' } >
        <Input 
          value={feedback} 
          _onChange={onChange} 
          placeholder='이번주 미흡했던 부분을 적어주세요!!' 
          margin='0 0 20px 0' 
          padding='15px'
        ></Input>
        <Button 
          _onClick={addComments}
        >입력</Button>
      </Grid>
    </Grid>
  )
};


export default Feedback;
