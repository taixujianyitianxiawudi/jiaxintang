import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react"
import * as CreateMessageTypes from './__generated__/Mutation';

const CREATE_MESSAGE = gql`
mutation CreateMessage($createDraftData: PostCreateInput!) {
  createDraft(data: $createDraftData) {
    content
  }
}
`;

const InputMessage:React.FC = () => {
  const [message, setMessage] = useState('');
  const textRef = useRef<HTMLTextAreaElement>(null);
  const [createMessage] = useMutation<
    CreateMessageTypes.CreateMessage,
    CreateMessageTypes.CreateMessageVariables
  >(CREATE_MESSAGE)
  return (
    <div>
      <textarea 
        placeholder="type your message"
        onChange={e=>setMessage(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter' && !e.shiftKey) {
            if (textRef.current !== null) {
              createMessage({variables: {createDraftData:{title:"asdfa", content:message}}})
              .catch(e=>{return("fuck")});
              textRef.current.value = '';
            }
          }
        }}
        ref={textRef}
      />
      <button onClick={() => {
        if (textRef.current !== null) {
          createMessage({variables: {createDraftData:{title:"asdfa", content:message}}})
          .catch(e=>{return("fuck")});
          textRef.current.value = ''
        }
      }}>
        Enter
      </button>
    </div>
  )
};

export default InputMessage;
