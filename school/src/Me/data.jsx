import React from 'react';
import axios from 'axios';
import "./data.css"
import {
  Form,
  Input,
  Tooltip,
  Button,
} from 'antd';

import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const Gaitel = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    axios.post('/gaitel', {
      
      tel: values.tel,
      id:window.sessionStorage.getItem('id')

    }).then(res => {
      console.log(res.data);
      if (res.data === 1) {
        alert("修改成功")
        window.location.href = 'http://localhost:3000'
      }

      }).catch({
      })

  };


  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >



      <Form.Item
        className="tel"
        name="tel"
        label={
          <span id='tel'>
            修改联系电话
                       <Tooltip>

            </Tooltip>
          </span>
        }
        rules={[
          {

            whitespace: true,
          },
          () => ({
            validator(rule, value) {

              if (value.length == 11) {
                return Promise.resolve();
              }

              return Promise.reject('请输入11位手机号！');
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>
      <div className='zhuce_but'>
        <Form.Item >

          <Button type="primary" htmlType="submit" className="querengai">
            确认修改
            </Button>


        </Form.Item>
      </div>

    </Form>
  );
};









function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}



export default class Data extends React.Component {
  constructor() {
    super()
    this.state = {
      id: window.sessionStorage.getItem('id'),
      img: window.sessionStorage.getItem('headimg'),
      tel: window.sessionStorage.getItem('tel'),

      previewVisible: false,
      previewImage: '',
      previewTitle: '',
      fileList: []
    }
  }






  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    console.log("111", file);
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  handleChange = ({ fileList }) => {
    let a = this.state.fileList[0]
    console.log("1111", a);
    this.setState({ fileList });
  }



  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <div>
        <div className="headImg">
          <span className="headImg1">修改头像</span>
          <Upload
            action={`http://localhost:7001/updataimg?id=/${this.state.id}`}
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={this.handleCancel}
          >
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>
        <div className="xiugaitel">
        <Gaitel/>
        </div>
      </div>
    );
  }
}