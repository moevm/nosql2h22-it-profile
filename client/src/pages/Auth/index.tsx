import Button from "../../shared/components/Button";
import EmailInput from "../../shared/components/Form/EmailInput";
import PasswordInput from "../../shared/components/Form/PasswordInput";

export default function LoginPage() {

    return (
        <form >
            <EmailInput name="email" title="Email" />
            <PasswordInput name="password" title="Password" />
            <Button type="submit">Sing In</Button>
        </form>
    )
}