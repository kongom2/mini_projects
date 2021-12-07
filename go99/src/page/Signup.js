import React,{useState} from "react";
import { useHistory } from 'react-router-dom';
import { Text,Grid,Input,Button } from "../elements/elementsIndex";
import { emailCheck,checkPassword } from "../shared/signupCheck";

const Signup = (props) => {
    const history = useHistory();

    const [id, setId] = useState('')
    const [pwd, setPwd] = useState('')
    const [pwdCheck, setPwdCheck] = useState('')
    const [userName, setUserName] = useState('')

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
            alert('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.')
            return;
        }
        if(pwd !== pwdCheck) {
            alert('비밀번호가 다릅니다.')
            return;
        }

        console.log(id,pwd,pwdCheck,userName)
        alert('이제부터 GOGO 99 !!')
        history.push('/login')
    }


    // 이후에 db에서 기존 이메일과 비교하여 중복되는 email alert 알림


    return(
        <React.Fragment>
            <Grid padding='0 20px'>
                <Text size="36px" color="#455154" bold margin='0px 0px 32px 16px'>회원가입</Text>
                <Input 
                    margin={id === '' ? '0 0 30px 0' : '0 0 20px 0'}
                    padding='15px' 
                    bg="#F4F6F6"
                    border="0px"
                    placeholder='이메일을 입력해주세요' 
                    _onChange={(e)=>{setId(e.target.value)}}
                ></Input>
                <Grid hide={id === '' ? 'none' : null}>
                    <Text 
                        color={emailCheck(id) ? '#1fc40f' : '#ff5d5d'} 
                        bold margin='-20px 0px 13px 5px' 
                        size='0.75rem'
                    >{emailCheck(id) ? '사용할 수 있는 아이디입니다' : '올바르지 않는 아이디 형식입니다.'}</Text>
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
                        color={checkPassword(pwd) ? '#1fc40f' : '#ff5d5d'} 
                        bold margin='-30px 0px 13px 5px' 
                        size='0.75rem'
                    >{checkPassword(pwd) ? '사용할 수 있는 비밀번호입니다' : '숫자+영문자+특수문자 8자리 이상 입력해주세요.'}</Text>
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