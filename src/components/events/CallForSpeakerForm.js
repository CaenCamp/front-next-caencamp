import { useForm } from 'react-hook-form';

const CallForSpeakerForm = ({ handleValidSubmission = () => true }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    const onSubmit = data => {
        const settings = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        };

        fetch('/api/call-for-speaker', settings)
            .then(response => {
                if (!response.ok) throw Error(response.result);
                return response.json();
            })
            .then(response => {
                handleValidSubmission(response);
            })
            .catch(error => {
                setError(error);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`field ${errors.name ? ' field--error' : ''}`}>
                <label htmlFor="name">
                    <span className="field-label">
                        Qui êtes-vous ? <span className="required">(obligatoire)</span>
                    </span>
                    {errors.name && (
                        <span className="field-error-msg" id="error-name">
                            <span className="visuallyhidden">Erreur:</span> Cette information est obligatoire
                        </span>
                    )}
                </label>
                <div className="field-hint" id="hint-name">
                    Exemple: Margaret Hamilton, Nasa.
                </div>
                <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    aria-describedby="hint-name"
                    {...register('name', { required: true })}
                    aria-invalid={errors.name ? 'true' : 'false'}
                />
            </div>

            <div className={`field ${errors.title ? ' field--error' : ''}`}>
                <label htmlFor="title">
                    <span className="field-label">
                        Quel serait le titre de votre intervention ? <span className="required">(obligatoire)</span>
                    </span>
                </label>
                <div className="field-hint" id="hint-title">
                    Exemple: Plutôt que de vous embêter avec TypeScript, choisissez un vrai langage typé !
                </div>
                <input
                    type="text"
                    id="title"
                    name="title"
                    autoComplete="off"
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck="true"
                    inputMode="text"
                    aria-describedby="hint-title"
                    {...register('title', { required: true })}
                    aria-invalid={errors.title ? 'true' : 'false'}
                />
            </div>

            <div className={`field ${errors.description ? ' field--error' : ''}`}>
                <label htmlFor="description">
                    <span className="field-label">
                        En quelques mots <span className="required">(160 caractères minimum, obligatoire)</span>
                    </span>
                    {errors.description && (
                        <span className="field-error-msg" id="error-description">
                            <span className="visuallyhidden">Erreur:</span>{' '}
                            {errors.description.type === 'minLength'
                                ? 'La description doit contenir au minimum 160 caractères.'
                                : 'La description est obligatoire.'}
                        </span>
                    )}
                </label>
                <textarea
                    id="description"
                    name="description"
                    {...register('description', { required: true, minLength: 160 })}
                    aria-invalid={errors.description ? 'true' : 'false'}
                ></textarea>
            </div>

            <div className={`field ${errors.contact ? ' field--error' : ''}`}>
                <label htmlFor="contact">
                    <span className="field-label">
                        Comment peut-on vous contacter ? <span className="required">(obligatoire)</span>
                    </span>
                </label>
                <div className="field-hint" id="hint-contact">
                    Exemple: votre email, votre identifiant twitter, votre téléphone ...
                </div>
                <input
                    type="text"
                    id="contact"
                    name="contact"
                    autoComplete="off"
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck="false"
                    inputMode="text"
                    aria-describedby="hint-contact"
                    {...register('contact', { required: true })}
                    aria-invalid={errors.contact ? 'true' : 'false'}
                />
            </div>

            <button type="submit" className="button">
                Soumettre votre proposition.
            </button>
        </form>
    );
};

export default CallForSpeakerForm;
