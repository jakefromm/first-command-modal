import PageRouter from './PageRouter';
import StandardLayout from './pages/StandardLayout';
import { AnswersHeadlessProvider } from '@yext/answers-headless-react';
import { answersHeadlessConfig } from './config/answersHeadlessConfig';
import { routeConfig } from './config/routeConfig';
import { PageViewContextProvider } from './context/PageViewContext';
import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



export default function App() {
  // let subtitle: HTMLHeadingElement | null;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div id="button-container" style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <button style={{
          borderRadius: '6px',
          border: '1px solid',
          borderColor: '#cf202f',
          color: '#cf202f',
          padding: '8px 16px',
          marginBottom: '20%'

        }} onClick={openModal}>Open Modal</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2>Hello</h2>
        <AnswersHeadlessProvider {...answersHeadlessConfig}>
          <PageViewContextProvider >
            <div className='flex justify-center px-4 py-6'>
              <div className='w-full max-w-5xl'>
                <PageRouter
                  Layout={StandardLayout}
                  routes={routeConfig}
                />
              </div>
            </div>
          </PageViewContextProvider>
        </AnswersHeadlessProvider>
        <button onClick={closeModal}>close</button>
      </Modal>
    </>
  );
}
