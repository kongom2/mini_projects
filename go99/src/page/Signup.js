import React,{useState} from "react";
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { Text,Grid,Input,Button } from "../elements/elementsIndex";
import { emailCheck,checkPassword } from "../shared/signupCheck";
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
    const history = useHistory();
    const dispatch = useDispatch()

    const [id, setId] = useState('')
    const [pwd, setPwd] = useState('')
    const [pwdCheck, setPwdCheck] = useState('')
    const [userName, setUserName] = useState('')

    const is_session = localStorage.getItem("token");

    React.useEffect(() => {
        if (is_session) {
        history.replace("/project");
        }
    }, []);


    const singUp = () => {
        if(id===''||pwd===''||userName==='') {
            alert('입력사항을 전부 기입해주세요')
            return
        }
        if(!emailCheck(id)) {
            alert('유효하지 않은 아이디 형식입니다.')
            return;
        }
        if(!checkPassword(pwd)) {
            alert('아이디가 포함되지 숫자+영문자 형식입니다')
            return;
        }
        if(pwd.includes(id)) {
            alert('비밀번호에 아이디가 포함되어 있습니다.')
            return
        }
        if(pwd !== pwdCheck) {
            alert('비밀번호가 다릅니다.')
            return;
        }

        dispatch(userActions.signupDB(id,userName,pwd,pwdCheck))
    }


    // 이후에 db에서 기존 이메일과 비교하여 중복되는 email alert 알림


    return(
        <React.Fragment>
            <Grid padding='104px 20px 0 20px'>
                <Text size="36px" color="#455154" bold margin='0px 0px 32px 16px'>회원가입</Text>
                <Input 
                    margin={id === '' ? '0 0 30px 0' : '0 0 20px 0'}
                    padding='15px' 
                    bg="#F4F6F6"
                    border="0px"
                    placeholder='아이디를 입력해주세요' 
                    _onChange={(e)=>{setId(e.target.value)}}
                ></Input>
                <Grid hide={id === '' ? 'none' : null}>
                    <Text 
                        color={emailCheck(id) ? '#1fc40f' : '#ff5d5d'} 
                        bold margin='-20px 0px 13px 5px' 
                        size='0.75rem'
                    >{emailCheck(id) ? '올바른 양식의 아이디입니다' : '올바르지 않는 아이디 형식입니다.'}</Text>
                </Grid>
                <Input 
                    margin='0 0 30px 0' 
                    padding='15px'
                    bg="#F4F6F6"
                    border="0px"
                    placeholder='닉네임을 입력해주세요' 
                    _onChange={(e)=>{setUserName(e.target.value)}}
                ></Input>
                <Input 
                    type='password' 
                    margin='0 0 30px 0' 
                    padding='16px' 
                    border="0px"
                    bg="#F4F6F6"
                    placeholder='비밀번호를 입력해주세요' 
                    _onChange={(e)=>{setPwd(e.target.value)}}
                ></Input>
                <Grid hide={pwd === '' ? 'none' : null}>    
                    <Text 
                        color={checkPassword(pwd)&&(pwd.includes(id))===false ? '#1fc40f' : '#ff5d5d'} 
                        bold margin='-30px 0px 13px 5px' 
                        size='0.75rem'
                    >{checkPassword(pwd)&&(pwd.includes(id))===false ? '사용할 수 있는 비밀번호입니다' : '아이디가 포함되지 않은 숫자+영문자 형식입니다.'}</Text>
                </Grid>
                <Input 
                    type='password' 
                    margin='0 0 40px 0' 
                    padding='16px'
                    border="0px"
                    bg="#F4F6F6"
                    placeholder='비밀번호를 다시 입력해주세요' 
                    _onChange={(e)=>{setPwdCheck(e.target.value)}}
                ></Input>
                <Grid hide={pwdCheck === '' ? 'none' : null}>
                    <Text 
                        color={pwd === pwdCheck ? '#1fc40f' : '#ff5d5d'} 
                        bold margin='-40px 0px 23px 5px' 
                        size='0.75rem'
                    >{pwd === pwdCheck ? '비밀번호가 같습니다.' : '비밀번호가 다릅니다.'}</Text>
                </Grid>
                <Button
                    padding='16px'
                    fontSize="16px"
                    _onClick={singUp}
                >ToDo99 회원가입</Button>
            </Grid>
        </React.Fragment>
    )
}

export default Signup