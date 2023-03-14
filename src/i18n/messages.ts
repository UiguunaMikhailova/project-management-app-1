import { LOCALES } from './locales';

export const messages = {
  [LOCALES.RUSSIAN]: {
    project_title: 'Менеджер проектов',
    app_description:
      'программа для эффективной работы в команде! Приложение создано для простого и наглядного управления проектами, постановки задач, контроля и отслеживания хода их выполнения.',
    main_page_name: 'Главная',
    sign_in: 'Войти',
    sign_up: 'Регистрация',
    to_main: 'На главную',
    to_edit_page: 'Профиль',
    sign_out: 'Выйти',
    our_team: 'Наша команда',
    team_lead: 'Оксана',
    developer_one: 'Уйгууна',
    developer_two: 'Дарья',
    team_role: 'Разработчик',
    team_role_lead: 'Лидер группы',
    lead_role_description:
      'Осуществила деплой бекенда, реализовала страницы Main Route и работу досками, а также Board Route и работу с колонками, добавила загрузку файла в таск',
    role_one_description:
      'Настроила Redux и Routes, реализовала регистрацию и авторизацию пользователя с валидацией, создала страницу Edit Profile, осуществила работу с тасками в колонке, добавила Drag-and-drop, поиск тасков пользователя',
    role_two_description:
      'Создала структуру и дизайн приложения, модальное окно, реализовала главную и 404 страницы, осуществила перевод приложения',
    enter: 'Войти',
    login_required: 'Логин обязателен',
    have_no_account: 'Ещё нет аккаунта? Зарегистрироваться',
    or: 'или',
    login: 'Логин',
    min_length: 'Минимум 4 символа',
    password: 'Пароль',
    max_length: 'Максимум 20 символов',
    login_max_length: 'Максимум 25 символов',
    login_pattern: 'Логин из латинских букв или цифр',
    password_required: 'Пароль обязателен',
    pass_min_length: 'Минимум 6 символов',
    password_pattern: 'Cодержит латинские буквы или цифры',
    edit_profile: 'Редактирование профиля',
    edit: 'Редактировать',
    name_placeholder: 'Имя',
    name_required: 'Имя обязательно',
    delete_profile: 'Удалить профиль',
    name_pattern: 'Имя должно состоять из букв',
    delete_confirm: 'Вы действительно хотите удалить?',
    yes: 'Удалить',
    no: 'Отмена',
    have_account: 'Уже есть аккаунт? Войти',
    register: 'Зарегистрироваться',
    board_label: 'Обязательно',
    board_title: 'Название',
    board_description: 'Описание',
    add: 'Добавить',
    close: 'Закрыть',
    change: 'Изменить',
    add_board: 'Добавить доску',
    add_list: 'Добавить список',
    board: 'Доска',
    create_task: 'Создать задачу',
    create: 'Создать',
    column_update_notification: 'Колонка обновлена',
    column_delete_notification: 'Колонка удалена',
    column_create_notification: 'Колонка создана',
    start_work: 'Начать пользоваться',
    boards_page_link: 'Доски',
    title_required: 'Название обязательно',
    task_min_length: 'Минимум 1 символ',
    task_max_length: 'Максимум 50 символов',
    text_pattern: 'Текст не должен содержать только пробел',
    description_required: 'Описание обязательно',
    description_max_length: 'Максимум 100 символов',
    board_delete_toast: 'Доска удалена',
    owner: 'Создатель',
    switcher: 'Показать только мои таски',
    file_drag: 'Перетащите файл для загрузки',
    file_safe: 'Отпустите файл для загрузки',
    file_success: 'Файл добавлен',
    back: 'Назад',
    empty: 'Поле ввода имени не может быть пустым',
    update_user: 'Ваш профиль обновлён',
    delete_user: 'Ваш профиль удалён',
    auth_user: 'Вы авторизовались',
    logout_user: 'Вы вышли из системы',
  },
  [LOCALES.ENGLISH]: {
    project_title: 'Task manager',
    app_description:
      'program for fast work! The application was created for simple and visual project management, setting tasks, monitoring and tracking the progress of their implementation.',
    main_page_name: 'Main',
    sign_in: 'Sign in',
    sign_up: 'Sign Up',
    to_main: 'To main page',
    to_edit_page: 'Edit profile',
    sign_out: 'Sign Out',
    our_team: 'Our team',
    team_lead: 'Oksana',
    developer_one: 'Uiguuna',
    developer_two: 'Darya',
    team_role: 'Developer',
    team_role_lead: 'Team lead',
    lead_role_description:
      'Deployed backend, implemented Main Route page with boards and Board Route page with columns, added file upload to task',
    role_one_description:
      'Set up Redux and Routes, performed user registration and authorization with validation, created Edit Profile page, implemented work with tasks in the column, added Drag-and-drop, search for user tasks',
    role_two_description:
      'Created the structure, design of application and modal window, implemented Welcome and 404 pages, translated the application',
    enter: 'Sign In',
    login_required: 'Login required',
    have_no_account: 'Do not have an account? Register',
    or: 'or',
    login: 'Login',
    min_length: 'Min: 4 characters',
    password: 'Password',
    max_length: 'Max: 20 symbols',
    login_max_length: 'Max: 25 symbols',
    login_pattern: 'Latin letters or numbers only',
    password_required: 'Password required',
    pass_min_length: 'Min: 6 characters',
    password_pattern: 'Latin letters or numbers only',
    edit_profile: 'Edit profile',
    edit: 'Edit profile',
    name_placeholder: 'Name',
    name_required: 'Name required',
    delete_profile: 'Delete profile',
    name_pattern: 'Name must be in letters',
    delete_confirm: 'Do you really want to delete?',
    yes: 'Delete',
    no: 'Cancel',
    have_account: 'Already have an account? Sign In',
    register: 'Sign Up',
    board_label: 'Required',
    board_title: 'Title',
    board_description: 'Description',
    add: 'Add',
    close: 'Close',
    change: 'Change',
    add_board: 'Add board',
    add_list: 'Add list',
    board: 'Board',
    create_task: 'Create task',
    create: 'Create',
    column_update_notification: 'Column is updated',
    column_delete_notification: 'Column is deleted',
    column_create_notification: 'Column is created',
    start_work: 'Get started',
    boards_page_link: 'Boards',
    title_required: 'Title required',
    task_min_length: 'Min: 1 symbol',
    task_max_length: 'Max: 50 symbols',
    text_pattern: 'The text should not contain only a space',
    description_required: 'Description required',
    description_max_length: 'Max: 100 symbols',
    board_delete_toast: 'Board deleted',
    owner: 'Owner',
    switcher: 'Display only my tasks',
    file_drag: 'Drag file to upload',
    file_safe: 'Drop file to safe',
    file_success: 'File is uploaded',
    back: 'Back',
    empty: 'The name field cannot be empty',
    update_user: 'Your profile updated',
    delete_user: 'Your profile deleted',
    auth_user: 'You are authorized',
    logout_user: 'You are logged out',
  },
};
