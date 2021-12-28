import { Button, Form, Input, Modal, Select } from 'antd';
import { useParams } from 'react-router';

import './RegForm.scss';
import { addVisitor } from '../api';
import { arrayToString } from './utils';
import { Visitor } from '../model/visitor';
import { FormattedMessage, useIntl } from 'react-intl';
import { useState } from 'react';

const { Option } = Select;

interface ParamTypes {
  id: string;
}

interface FormValues {
  visitors: Visitor[];
}

const preferences = ['vegan', 'vegetarian', 'everything'].map((preference) => {
  return (
    <Option key={preference} value={preference}>
      <FormattedMessage id={'registration.form.preferences.' + preference} />
    </Option>
  );
});

const allergies = ['lactose', 'dairy', 'gluten', 'wheat'].map((allergy) => {
  return (
    <Option key={allergy} value={allergy}>
      <FormattedMessage id={'registration.form.allergies.' + allergy} />
    </Option>
  );
});

const welcomeDrinks = ['alcoholBubbles', 'alcoholFreeBubbles'].map(
  (welcomeDrink) => {
    return (
      <Option key={welcomeDrink} value={welcomeDrink}>
        <FormattedMessage
          id={'registration.form.welcomeDrink.' + welcomeDrink}
        />
      </Option>
    );
  }
);

export const RegForm = () => {
  const { id } = useParams<ParamTypes>();
  const intl = useIntl();
  const [visitorCount, setVisitorCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onSubmit = (values: FormValues) => {
    values.visitors.map((visitor) => {
      addVisitor({
        ...visitor,
        allergies: visitor.allergies ? arrayToString(visitor.allergies) : '',
        preferences: visitor.preferences ?? '',
        welcomeDrink: visitor.welcomeDrink ?? '',
        invitationId: (visitor.invitationId = atob(id)),
      });
    });
  };

  const onOk = () => {
    form.submit();

    setIsModalVisible(false);
  };

  const onCancel = () => {
    setIsModalVisible(false);
  };

  const [form] = Form.useForm();

  return (
    <>
      <Form
        form={form}
        name='registration'
        onFinish={onSubmit}
        autoComplete='off'
      >
        <Form.List name='visitors'>
          {(fields, { add, remove }) => (
            <>
              <div className='visitors'>
                {fields.map((field) => (
                  <div className='visitor' key={field.key}>
                    <Form.Item
                      label={intl.formatMessage({
                        id: 'registration.form.name',
                      })}
                      name={[field.name, 'name']}
                      fieldKey={[field.fieldKey, 'name']}
                      rules={[
                        {
                          required: true,
                          message: intl.formatMessage({
                            id: 'registration.form.name.missing',
                          }),
                        },
                      ]}
                    >
                      <Input
                        placeholder={intl.formatMessage({
                          id: 'registration.form.name.placeholder',
                        })}
                      />
                    </Form.Item>
                    <Form.Item
                      name={[field.name, 'allergies']}
                      label={intl.formatMessage({
                        id: 'registration.form.allergies',
                      })}
                      fieldKey={[field.fieldKey, 'allergies']}
                    >
                      <Select
                        mode='tags'
                        placeholder={intl.formatMessage({
                          id: 'registration.form.allergies.placeholder',
                        })}
                      >
                        {allergies}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name={[field.name, 'preferences']}
                      label={intl.formatMessage({
                        id: 'registration.form.preferences',
                      })}
                      fieldKey={[field.fieldKey, 'preferences']}
                    >
                      <Select defaultValue='everything'>{preferences}</Select>
                    </Form.Item>
                    <Form.Item
                      name={[field.name, 'welcomeDrink']}
                      label={intl.formatMessage({
                        id: 'registration.form.welcomeDrink',
                      })}
                      rules={[
                        {
                          required: true,
                          message: intl.formatMessage({
                            id: 'registration.form.welcomeDrink.missing',
                          }),
                        },
                      ]}
                      fieldKey={[field.fieldKey, 'welcomeDrink']}
                    >
                      <Select
                        placeholder={intl.formatMessage({
                          id: 'registration.form.welcomeDrink.placeholder',
                        })}
                      >
                        {welcomeDrinks}
                      </Select>
                    </Form.Item>
                    <Button
                      danger
                      onClick={() => {
                        remove(field.name);
                        setVisitorCount(visitorCount - 1);
                      }}
                      shape='round'
                      size='large'
                    >
                      <FormattedMessage id='registration.form.remove' />
                    </Button>
                  </div>
                ))}
              </div>
              <Form.Item>
                <Button
                  className='addVisitorButton'
                  size='large'
                  onClick={() => {
                    add();
                    setVisitorCount(visitorCount + 1);
                  }}
                  shape='round'
                >
                  <FormattedMessage id='registration.addVisitor' />
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        {visitorCount == 0 ? (
          <Form.Item>
            <Button
              className='submitButton'
              type='dashed'
              htmlType='submit'
              shape='round'
            >
              <FormattedMessage id='registration.form.decline' />
            </Button>
          </Form.Item>
        ) : (
          <Form.Item>
            <Button
              className='submitButton'
              onClick={(e) => setIsModalVisible(true)}
              size='large'
              shape='round'
            >
              <FormattedMessage id='registration.form.submit' />
            </Button>
          </Form.Item>
        )}
      </Form>
      <Modal
        title={intl.formatMessage(
          {
            id: 'registration.form.submitModal.title',
          },
          { visitorCount: visitorCount }
        )}
        visible={isModalVisible}
        onOk={onOk}
        onCancel={onCancel}
        okText={intl.formatMessage({
          id: 'registration.form.submitModal.save',
        })}
        cancelText={intl.formatMessage({
          id: 'registration.form.submitModal.back',
        })}
      >
        <p>
          <FormattedMessage id='registration.form.submitModal.description' />
        </p>
      </Modal>
    </>
  );
};
