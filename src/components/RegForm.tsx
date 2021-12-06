import { Button, Checkbox, Col, Form, Input, Row, Select } from 'antd';
import { useParams } from 'react-router';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import "./RegForm.scss";
import { addVisitor } from '../api';
import { arrayToString, capFirstLetter } from './utils';
import { Visitor } from '../model/visitor';

const { Option } = Select;

interface ParamTypes {
    id: string;
}

interface FormValues {
    visitors: Visitor[];
}

const preferences = ["vegan", "vegetarian", "everything goes"].map(preference => {
    return <Option key={preference} value={preference}>{capFirstLetter(preference)}</Option>
});

const allergies = ["lactose", "dairy", "gluten", "wheat"].map(allergy => {
    return <Option key={allergy} value={allergy}>{capFirstLetter(allergy)}</Option>
});

export const RegForm = () => {
    const { id } = useParams<ParamTypes>();

    const onFinish = (values: FormValues) => {
        values.visitors.map(visitor => {
            addVisitor({
                ...visitor,
                allergies: visitor.allergies ? arrayToString(visitor.allergies) : "",
                services: visitor.services ? arrayToString(visitor.services) : "",
                preferences: visitor.preferences ?? "",
                invitationId: visitor.invitationId = atob(id),
            });
        });
    }

    const [form] = Form.useForm();

    return (
        <Form form={form} name="registration" onFinish={onFinish} autoComplete="off">
            <Form.List name="visitors">
                {(fields, { add, remove }) => (
                    <>
                        {
                            fields.map(field => (
                                <div className="visitors" key={field.key}>
                                    <div className="nameBar">
                                        <Form.Item
                                            label="Name"
                                            name={[field.name, 'name']}
                                            fieldKey={[field.fieldKey, 'name']}
                                            rules={[{ required: true, message: 'Missing name' }]}
                                        >
                                            <Input placeholder="Full or nickname" />
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(field.name)} className="deleteButton" />
                                    </div>
                                    <Form.Item name={[field.name, "allergies"]} label="Allergies"
                                        fieldKey={[field.fieldKey, 'allergies']}>
                                        <Select mode="tags" placeholder="Lactose, wheat...">
                                            {allergies}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item name={[field.name, "preferences"]} label="Preferences"
                                        fieldKey={[field.fieldKey, 'preferences']}>
                                        <Select placeholder="Vegan...">
                                            {preferences}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        name={[field.name, "services"]} label="Do you need?"
                                        fieldKey={[field.fieldKey, 'services']}>
                                        <Checkbox.Group>
                                            <Row>
                                                <Col>
                                                    <Checkbox value="ride">
                                                        Ride
                                                    </Checkbox>
                                                </Col>
                                                <Col>
                                                    <Checkbox value="accomodation">
                                                        Accomodation
                                                    </Checkbox>
                                                </Col>
                                            </Row>
                                        </Checkbox.Group>
                                    </Form.Item>
                                </div>
                            ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add visitor
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};