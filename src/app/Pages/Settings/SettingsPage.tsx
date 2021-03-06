import React, {useState} from 'react';
import {Avatar, Button, List, ListItem, makeStyles, Typography} from "@material-ui/core";
import withLayout from "../../HOC/withLayout";
import CustomButton from "../../components/CustomButton";
import CustomTextField from "../../components/CustomTextField";
import confirmValue from "../../../utils/confirmValue";

const useStyles = makeStyles(theme => ({
    root: {
        padding: '80px 230px'
    },
    card: {
       border: '1px solid #2196F3',
        borderRadius: '0px 0px 32px 32px',

    },
    header: {
        height: 102,
        background: 'rgba(33, 150, 243, 0.64)',
        padding: 32
    },
    body: {
        padding: '32px 48px',
        display: 'flex',
        justifyContent: 'space-around'
    },
    name: {
        color: '#FFF',
        fontSize: 36,
        fontWeight: 500
    },
    avatarWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 230,
        width: 220
    },
    avatar: {
        width: 128,
        height: 128
    },
    photoBtn: {
        marginTop: 16,
        '&:hover': {
            background: 'rgba(33, 150, 243, 0.34)'
        }
    },
    field: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 16,
        alignItems: 'start'
    },
    filedTitle: {
        fontSize: 14,
        fontWeight: 'normal',
        color: 'rgba(119, 119, 119, 0.7)',
        marginBottom: 16,
    },
    fieldDesc: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontSize: 16,
        textAlign: 'start',
        width: 300,
        fontWeight: 500,
        color: 'rgba(0, 0, 0, 0.87)',
        '&:first-letter': {
            textTransform: 'capitalize'
        }
    },
    fieldList: {
        width: 300
    },
    btnGroup: {
        display: 'flex',
        width: '100%',
        justifyContent: 'right',
        padding: 32
    },
    btn: {
        marginRight: '16px !important'
    },
    input: {
        display: "none",
    },
}))

export interface SettingsPageProps {}

export interface Field {
    field: string,
    fieldProperty: keyof Form,
    editable?: boolean,
    type?: 'text' | 'email' | 'password'
}

export interface Form {
    name: string;
    surname: string;
    login: string;
    password: string;
    passwordRepeat?: string;
    email: string;
    role: string;
    organization: string;
    permissions: string;
    avatar?: File | null;
}

const fields: Field[] = [
    {
        field: '??????',
        fieldProperty: 'name',
        editable: true,
        type: 'text'
    },
    {
        field: '??????????????',
        fieldProperty: 'surname',
        editable: true,
        type: 'text'
    },
    {
        field: '??????????',
        fieldProperty: 'login',
        editable: true,
        type: 'text'
    },
    {
        field: '????????????',
        fieldProperty: 'password',
        editable: true,
        type: 'password'
    },
    {
        field: '?????????????????? ????????????',
        fieldProperty: 'passwordRepeat',
        editable: true,
        type: 'password'
    },
    {
        field: 'Email',
        fieldProperty: 'email',
        editable: true,
        type: 'email'
    },
    {
        field: '????????',
        fieldProperty: 'role',
        editable: true,
        type: 'text'
    },
    {
        field: '??????????????????????',
        fieldProperty: 'organization',
        editable: true,
        type: 'text'
    },
    {
        field: '????????????e??????',
        fieldProperty: 'permissions',
        editable: false,
        type: 'text'
    }
]

const defaultForm: Form = {
    name: '',
    surname: '',
    login: '',
    password: '',
    passwordRepeat: '',
    email: '',
    role: '',
    organization: '',
    permissions: '',
    avatar: null
}

export const SettingsPage: React.FC<SettingsPageProps> = (props: SettingsPageProps) => {
    const classes = useStyles()
    const [editMode, setEditMode] = useState<boolean>(false)
    const [form, setForm] = useState<Form>(defaultForm)

    const handleRemove = () => {
        setForm({...form, avatar: null})
    }

    const handleSave = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newAvatar: File = event.target.files![0]
        const fileTypes = [
            "image/gif",
            "image/jpeg",
            "image/png",
            "image/webp",
            "image/svg+xml",
        ];
        if (newAvatar.size < 20 * 1024 * 1024 && fileTypes.includes(newAvatar.type)) {
            setForm({...form, avatar: newAvatar})
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    const testUser: any = {
        name: '????????',
        role: '??????????????????????????',
        surname: '????????????',
        organization: '?????????????????? ?????????????????????? ?????????????????????? ?????????? ?????????????? ???????????????????? ???????????? ??. ??. ??????????????',
        email: 'IvanovUrfu@ivan.me',
        permissions: '??????',
        login: 'Ivan123',
        password: '1234',
        rating: 5.5
    }

    return (
        <div className={classes.root}>
            <div className={classes.card}>
                <div className={classes.header}><Typography className={classes.name}>??????????????????</Typography></div>
                <div className={classes.body}>
                    <div className={classes.avatarWrapper}>
                        <Avatar alt={`${testUser.name} ${testUser.surname}`} src="https://v4.mui.com/static/images/avatar/2.jpg" className={classes.avatar}/>
                        {form.avatar ?
                            <Button
                                className={classes.photoBtn}
                                component='span'
                                disableRipple
                                variant="outlined"
                                onClick={handleRemove}
                            >
                                ????????????????
                            </Button>
                            :
                            <>
                                <input accept="image/*" hidden id="icon-button-file" type="file" onChange={handleSave}/>
                                <label htmlFor="icon-button-file">
                                    <Button
                                        className={classes.photoBtn}
                                        component='span'
                                        disableRipple
                                    >
                                        ???????????????? ????????
                                    </Button>
                                </label>
                            </>
                        }
                    </div>
                    <form onSubmit={handleSubmit}>
                        <List className={classes.fieldList}>
                            {fields.map((item, idx) => (
                                !(!editMode && item.type === 'password') && <ListItem className={classes.field} key={idx}>
                                    <Typography className={classes.filedTitle}>{item.field}</Typography>
                                    {editMode && item.editable ?
                                        <CustomTextField
                                            error={
                                                confirmValue(form[item.fieldProperty]!, item.type!)
                                            }
                                            helperText={confirmValue(form[item.fieldProperty]!, item.type!) ? 'Empty field!' : ' '} //TODO
                                            type={item.type}
                                            placeholder={testUser[item.fieldProperty]}
                                            value={form[item.fieldProperty]}
                                            onChange={event => setForm({...form, [item.fieldProperty]: event.target.value})}
                                        />
                                        :
                                        <Typography className={classes.fieldDesc}>{testUser[item.fieldProperty]}</Typography>
                                    }
                                </ListItem>
                            ))}
                        </List>
                    </form>
                </div>

                <div className={classes.btnGroup}>
                    <div className="flex">
                        {editMode ?
                            <>
                                <CustomButton
                                    className={classes.btn}
                                    onClick={(event) => {
                                        setEditMode(false)
                                        setForm(defaultForm)
                                    }}
                                >
                                    ????????????????
                                </CustomButton>
                                <CustomButton
                                    onClick={(event) => {
                                        setEditMode(false)
                                        setForm(defaultForm)
                                    }}
                                >
                                    ??????????????????
                                </CustomButton>
                            </>
                            :
                            <CustomButton
                                onClick={(event) => {
                                    setEditMode(true);
                                }}
                            >
                                ????????????????
                            </CustomButton>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withLayout(SettingsPage);