import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, ListRepositories } from './styles';

export default class Main extends Component {
    state = {
        newRepo: '',
        repositoriesGit: [],
        loading: false,
        found: true,
    };

    // carrega dados do local storage
    componentDidMount() {
        const repositories = localStorage.getItem('repositories');

        if (repositories) {
            this.setState({ repositoriesGit: JSON.parse(repositories) });
        }
    }

    // salvar dados do local storage
    componentDidUpdate(_, prevState) {
        const { repositoriesGit } = this.state;

        if (prevState.repositoriesGit !== repositoriesGit) {
            localStorage.setItem(
                'repositories',
                JSON.stringify(repositoriesGit)
            );
        }
    }

    handleInputChange = (e) => {
        this.setState({ newRepo: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({ loading: true });

        const { newRepo, repositoriesGit } = this.state;

        try {
            const response = await api.get(`/repos/${newRepo}`);
            const data = {
                name: response.data.full_name,
            };

            this.setState({
                repositoriesGit: [...repositoriesGit, data],
                newRepo: '',
                loading: false,
                found: true,
            });
        } catch (error) {
            console.log('eerrr');
            this.setState({
                newRepo: '',
                loading: false,
                found: false,
            });
        }
    };

    render() {
        const { newRepo, repositoriesGit, loading, found } = this.state;

        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repositórios
                </h1>

                <Form onSubmit={this.handleSubmit} found={found}>
                    <input
                        type="text"
                        placeholder="Adicionar Repositorio"
                        value={newRepo}
                        onChange={this.handleInputChange}
                    />
                    <SubmitButton loading={loading}>
                        {loading ? (
                            <FaSpinner color="#fff" size={14} />
                        ) : (
                            <FaPlus color="#fff" size={14} />
                        )}
                    </SubmitButton>
                </Form>

                <ListRepositories>
                    {repositoriesGit.map((repository) => (
                        <li key={repository.name}>
                            <span>{repository.name}</span>
                            <Link
                                to={`/repository/${encodeURIComponent(
                                    repository.name
                                )}`}
                            >
                                Detalhes
                            </Link>
                        </li>
                    ))}
                </ListRepositories>
            </Container>
        );
    }
}
