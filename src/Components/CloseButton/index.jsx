import { X } from 'phosphor-react';
import React from 'react';

const CloseButton = ({toggleWidgetVisibility}) => {

 const closeButton = () => {
  toggleWidgetVisibility(true)
 }

 return(
  <button onClick={closeButton} className='top-5 right-5 absolute text-zinc-400 hover:text-zinc-100' title='Fechar formulário de feedback'>
   <X className='w-4 h-4' weight='bold'/>
  </button>
 )
}

export default CloseButton;