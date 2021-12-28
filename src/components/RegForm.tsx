import { Button, Form, Input, Select } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
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
          id={'registration.form.welcomeDrinks.' + welcomeDrink}
        />
      </Option>
    );
  }
);

export const RegForm = () => {
  const { id } = useParams<ParamTypes>();
  const intl = useIntl();
  const [visitorCount, setVisitorCount] = useState(0);

  const onFinish = (values: FormValues) => {
    values.visitors.map((visitor) => {
      addVisitor({
        ...visitor,
        allergies: visitor.allergies ? arrayToString(visitor.allergies) : '',
        services: visitor.services ? arrayToString(visitor.services) : '',
        preferences: visitor.preferences ?? '',
        invitationId: (visitor.invitationId = atob(id)),
      });
    });
  };

  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name='registration'
      onFinish={onFinish}
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
                    name={[field.name, 'welcomeDrinks']}
                    label={intl.formatMessage({
                      id: 'registration.form.welcomeDrinks',
                    })}
                    rules={[
                      {
                        required: true,
                        message: intl.formatMessage({
                          id: 'registration.form.welcomeDrinks.missing',
                        }),
                      },
                    ]}
                    fieldKey={[field.fieldKey, 'preferences']}
                  >
                    <Select
                      placeholder={intl.formatMessage({
                        id: 'registration.form.welcomeDrinks.placeholder',
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
            htmlType='submit'
            size='large'
            shape='round'
          >
            <FormattedMessage id='registration.form.submit' />
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};
