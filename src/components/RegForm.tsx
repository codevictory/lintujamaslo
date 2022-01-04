import { Button, Form, Input, Modal, notification, Select } from 'antd';
import { useParams } from 'react-router';

import './RegForm.scss';
import { addVisitor, submitInvitation } from '../api';
import { arrayToString } from './utils';
import { Visitor } from '../model/visitor';
import { FormattedMessage, useIntl } from 'react-intl';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';

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

const RegForm = ({ history }: any) => {
  const { id } = useParams<ParamTypes>();
  const intl = useIntl();
  const [visitorCount, setVisitorCount] = useState(0);
  const [isSubmitModalVisible, setIsSubmitModalVisible] = useState(false);
  const [isDeclineModalVisible, setIsDeclineModalVisible] = useState(false);
  const [isDeclined, setIsDeclined] = useState(false);

  var decodedInvitationId = atob(id);

  const onSubmit = (values: FormValues) => {
    let responseCode: string = '';
    values.visitors = values.visitors ?? [];

    values.visitors.map((visitor) => {
      addVisitor({
        ...visitor,
        allergies: visitor.allergies ? arrayToString(visitor.allergies) : '',
        preferences: visitor.preferences ?? '',
        welcomeDrink: visitor.welcomeDrink ?? '',
        invitationId: (visitor.invitationId = decodedInvitationId),
      }).then((res) => (responseCode = res));
    });

    submitInvitation(decodedInvitationId).then((res) => (responseCode = res));

    responseCode !== 'success' ? showError() : history.push('/confirmation');
  };

  const onDecline = () => {
    let responseCode: string = '';
    submitInvitation(decodedInvitationId).then((res) => (responseCode = res));
    responseCode !== 'success' ? showError() : history.push('/confirmation');
  };

  const onSubmitOk = () => {
    form.submit();
    setIsSubmitModalVisible(false);
  };

  const onSubmitCancel = () => {
    setIsSubmitModalVisible(false);
  };

  const onDeclineOk = () => {
    form.submit();
    setIsDeclineModalVisible(false);
  };

  const onDeclineCancel = () => {
    setIsDeclineModalVisible(false);
  };

  const showError = () => {
    notification.error({
      message: intl.formatMessage({ id: 'registration.error.title' }),
      description: intl.formatMessage({ id: 'registration.error.text' }),
      duration: 0,
      placement: 'bottomLeft',
    });
  };

  const [form] = Form.useForm();

  return (
    <>
      <Form
        form={form}
        name='registration'
        onFinish={isDeclined ? onDecline : onSubmit}
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
                      initialValue='everything'
                    >
                      <Select>{preferences}</Select>
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
              onClick={(_) => {
                setIsDeclined(true);
                setIsDeclineModalVisible(true);
              }}
              type='dashed'
              shape='round'
            >
              <FormattedMessage id='registration.form.decline' />
            </Button>
          </Form.Item>
        ) : (
          <Form.Item>
            <Button
              className='submitButton'
              onClick={(_) => setIsSubmitModalVisible(true)}
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
        visible={isSubmitModalVisible}
        onOk={onSubmitOk}
        onCancel={onSubmitCancel}
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
      <Modal
        title={intl.formatMessage({
          id: 'registration.form.declineModal.title',
        })}
        visible={isDeclineModalVisible}
        onOk={onDeclineOk}
        onCancel={onDeclineCancel}
        okText={intl.formatMessage({
          id: 'registration.form.declineModal.save',
        })}
        cancelText={intl.formatMessage({
          id: 'registration.form.declineModal.back',
        })}
      >
        <p>
          <FormattedMessage id='registration.form.declineModal.description' />
        </p>
      </Modal>
    </>
  );
};

export default withRouter(RegForm);
