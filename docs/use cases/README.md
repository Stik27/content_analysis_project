# Модель прецедентів

У цьому файлі необхідно перелічити всі документи, розроблені в проекті та дати посилання на них.

*Модель прецедентів повинна містити загальні оглядові діаграми та специфікації прецедентів.*

# Діаграма прецедентів

### Відношення узагальнення

"Користувач" = User and "Технічна підтримка" = admin.

![Scen1](https://i.postimg.cc/8CZnCmMY/image.png)


## Діяльність користувача

### Реєстрація користувача

*ID*: USR.REG <br>
*Учасники*: Користувач, Система <br>
*Результат*: Зареєстрований користувач <br>

@startuml

     |Користувач|
        start
        : Користувач розпочинає взаємодію з системою;
        : Користувач натискає на кнопку реєстрації;
        : Користувач заповнює реєстраційну форму;
        :Користувач натискає кнопку відправлення реєстраційної форми;
    |Система|
        : Система перевіряє передані реєстраційні дані ;
        note right #8B0000
        <b> Можливо
        <b> USR.REG_EXС
        end note
        : Система створює новий обліковий запис, де зберігає введені дані ;
        : Система надає користувачу інформацію про створення облікового запису ;
    |Користувач|
        : Користувач завершує взаємодію з системою;
        stop;

@enduml

<img src="http://www.plantuml.com/plantuml/png/dLHDIyD04BttLonu5V4eLgG8nNj5y2QAHGLjfOst75eZrbDwAIs8b_w3jZOs_SZsBypy8zzaOKsD8UBsifat-zwRlarAJUUYuJpUtnKKbajlfBb58RVvYJsQq8WxBY2pubxxjAz-wrOeQ9hH6b27GefGx2bWCzdG2k2K--mhcYbkcxCKI9tzOXwtiA4THLeONXGKzX5fA2xO4_c0U_6f5bfUe3N8vuKvSOp7Y7tmfbbe3WZqp_7n5Ni9qZzwJTga2IYdj1Pw75XI033YReOo-0TMcqAZxT8myV-DtCIKcuY2Q234eiejxiADBKrf1E5-XZ00s_4zSQtkL5NZzlh6KLjxHxjO5ZguF5JqJfe-CLI8qVG6T7fIsQcKZy_BPpIqGBLs5LDc3o1RuO9vtyIEh40_LzYCQGcp2rioQShvRJ4VI64iqwBhWynrn2yGB3LXbWE94tqco7JSY1JiaOt8t3nVnGdhX7yRz0_Z6jPqmZe8YpdlPDwDnbQ6VcNl7szWqwa_50ibH8EFmnS0">

### Авторизація користувача
 
*ID*: USR.LOG <br>
*Учасники*: Користувач, Система <br>
*Передумови*: Зареєстрований користувач <br>
*Результат*: Авторизований користувач <br>

@startuml

    |Користувач|
        start
        : Користувач вводить авторизаційні дані;
        : Користувач натискає кнопку авторизації;
    |Система|
        : Система ідентифікує користувача ;
        note right #8B0000
        <b> Можливо
        <b> SER.LOG_IN_EXC
        end note
        : Система авторизує користувача ;
        : Система перенаправляє користувача на сторінку роботи з даними ;
    |Користувач|
        : Користувач завершує взаємодію з системою;
        stop;

@enduml

<img src="http://www.plantuml.com/plantuml/png/ZL9DIyD04BttLmnu5uzYH8fIH105lNWhYaK5RQN6MmwQYdgGUYaLn8l_88RMQDiaV-7DF_AnAsb36zgzxEpCspTlFietxd7JlRswB0cFXtSaUeSVlLTVMmWHw9F7a3q6cxtMP1PQU8L8qAFRrnT1W51zYqD4nADsyOjOkq9C01hENCgObmywCQ3L4LunSwGOQ6jc1dspf1u-BHVw627m9ZBb8q9LFPgnoVF05wbDfcazH8ybrnjkJPeNP-UkBArkhl1aeVMJ3S47TNvZI6diIYvqM3bOtjtVhkxiLIj7MrceLZyrfCLIymKl9dEQ94MVFrWnwL9Q9CLGNul9GAGO1aRPeDXqdy04NtInRuBeVwWKDkBRMMIhYeOU6KaKgS-snj1CjqDchXTdt2Q6WiPbaQNjJ6nhuzefbTbFhlSV">

### Запит на пошук та аналіз даних <br>

*ID*: USR.SEARCH <br>
*Учасники*: Користувач, Система <br>
*Передумови*: Авторизований користувач <br>
*Результат*: Проаналізовані дані, які запрошував користувач <br>

@startuml

        |Користувач|
            start
            : Надсилає запит на пошук та аналіз даних;
        |Система|
            : Отримує запит. Надсилає користувачу форму для заповнення;
        |Користувач|
            : Заповнює та надсилає форму;
        |Система|  
            : Отримує форму;
            : Виконує пошук та аналіз запрошених користувачем даних;
            note right #8B0000
            <b> Можливо
            <b> QUERY.EXC
            end note
            : Виконує розрахунок;
            : Система виводить результат;
            : Система зберігає запит користувача в історії запитів;
        |Користувач|
            : Отримує результат;
            stop;

@enduml

<img src="http://www.plantuml.com/plantuml/png/VLFDIlD05DtdAIvy-_8jnOWKfG-W8EXIiQYWhTIuww9DBBee5aHQ41LyWrXR4zfEV8LptyZ3r6X3GcOrS-UUUtwIgLvvXotl-kBSSTfuGg8TnDfLNmEC4Ufjsn4kssHtwu8NX9Xe5p7cx7WKH2ny4UOB34BXFj4x3fY9-ZppbcNCTOX8CB77M7ik2T-MP9XYWR2T4hoIdZAmq20plbB0FSjBra3qnfOvW8Ha7gHJ4hOOqXaO7RXbbgbZz0VHUv8jtPYiX1Mkl2EH8ayPJDhmm4kQWR4DvHbQByIpXKGspS8aG1MPn8MhqVJgqZexEVNatzhMVovRtZZQ53nJm2TznSGdl-MTlThkGQMslsqhzSQndL4iNAaAaNP8twCCmzCizPWDHyXXUJ1XsTS-iPWI6z1cN-bQVLUAeOZmZgbs6CT7xXyi2CAoYGxj2DvoDrh1SCpObT8NaF-4UR4_JwLvwJfEbJ7nLNq3">

### Експорт результатів <br>

*ID*: USR.EXPORT <br>
*Учасники*: Користувач, Система <br>
*Передумови*: Авторизований користувач <br>
*Результат*: Можливість завантажити результати <br>

@startuml

        |Користувач|
            start
            : Надсилає запит на експорт результатів;
        |Система|
            : Отримує запит. Надсилає користувачу форму для заповнення;
        |Користувач|
            : Заповнює та надсилає форму;
        |Система|  
            : Отримує форму;
            : Виконує пошук запиту в історії запитів користувачів;
            note right #8B0000
            <b> Можливо
            <b> QUERY.EXC
            end note
            : Конвертує результати та зберігає їх в окремому файлі;
            : Система виводить файл;
            : Система зберігає запит користувача в історії запитів;
        |Користувач|
            : Отримує результат. Може завантажити файл;
            stop;
@enduml

<img src="http://www.plantuml.com/plantuml/png/XLJDIlDG5DpdAIvy-_8jnOeKfG-W8EXIiQYWhRHnbuLj5LqK2o8f51LyWnWR6zCaVOMvR-JS6rgJ9fgiBkTdvioSGseTyx1jNbsS6nR6YEKrVDcLFTc72qVUMOP8VRes4raNU863YUp2numTJm9J1kQ4wGb4S0Gy14pF5JXZPF0m9VvC3cGF3hbikDKbgeMtP0IMXN2iLRfNDd18XBAV8QiKJ1Ba1Sc-a3Sw7FA92SSOBb1YbaIaZH39OMgYScCur-W7GZwGN6cZ0TcHKjo_AnRYByrvZ5JX8tmb6f4kr9xVS-8WvPDIxGffQqBYy3LAfxcCOkEOoF8rMsP3jCzEJatnRsthFxzCUkDeK-0PCJwftOUBE9VUsQll7bJg-zkPJADvhB5NnOsLCBZmr1rfWVbRWfyOJq7lkj36HsByIDuguOWHwBQGhp2v1WTVHB1pRcRMmkP41IRQfy6oiwHlTPIKsOL6mobTKDKeESwI0yhPLbbioakOY898fHZo4rSBnNRCrcNLg75Z_8Dy0m00">

### Редагування запиту <br>

*ID*: USR.UPD_QUERY <br>
*Учасники*: Користувач, Система <br>
*Передумови*: Авторизований користувач <br>
*Результат*:  Користувач отримує результат за оновленими параметрами <br>

@startuml

        |Користувач|
            start
            : Надсилає запит на редагування запиту щодо пошуку та аналізу даних;
        |Система|
            : Отримує запит. Надсилає користувачу форму для заповнення;
        |Користувач|
            : Заповнює та надсилає форму;
        |Система|  
            : Отримує форму;
            : Виконує пошук запиту в історії запитів користувача;
            note right #8B0000
            <b> Можливо
            <b> QUERY.EXC
            end note
            : Виконує пошук та аналіз даних за оновленим запитом;
            : Система виводить результат;
        |Користувач|
            : Отримує результат;
            stop;
@enduml

<img src="http://www.plantuml.com/plantuml/png/ZLFBIiDG4DttAmRS5vTYHOhI3r0GTAbOLD1MQjnbOLD5XQ8WqeAeu1-4Mcrf7lx2cJ_ov0PChgcsMOMPkUTnvjxgcRFRSivFZaikdX3h1SRQLayx6C3NQxSakS_CMfLbmGjy3BMDCGAUU1ICMFWYZ2U8u0iXFp1axJq5PJ7I-zoOTaHl4NCc5bPYlU7W9AbwF6uE-0YqXn5h1YdYiQlAZn0NRwbg4eNmtTyANyb1NmYrO-ahJn4_AMQGABaqvJ0L46JoOuv4f3MUSefcPqbT_Gn2xqYU-eriIJdklnsB_EkvY94DFd28fX6PmIn_Uq4OYFOC8N7ury-tU-nE2mw-pTPeEdLf7HqSEhAmjBR8psglxAqAdYdbayx7X8WBxOsjskPEkRQzRdNgZNs3FQ-ruiNANIjZJ99JPZE1MIvpp1bc8opaQ2s4UQKEC3G9TTDNm0jClcv2hvw5CF_DAMvt5ZQVRVEqKgeo9hxpRm00">

## Виключні сценарії
Виключні сценарії - це ситуації, що суперечать виконанню передумов.

#### 1. Відхилення запиту на реєстрацію
*ID:* USER.REG_EXС

![Scen7](http://www.plantuml.com/plantuml/png/ZLB5GKKn4BodYjH1gg41_8QxkpjKyDsjXPcEc2J0z-S-bjsrOLl32xhSGftRtE4kYiZpSCtO_srvPNPfPU1znk8TUPI5kxF-XWuV_4EBbrP25Tu5gIq13lZ0HsV-dBwZ2ofe8xyshFafeiWeYhB5om5jDm0SvE16SfSAt8hmZjXDlvQWqvIFo9bKfD4LhgxKPnOzlIY5FdILioMjZWIqjkE0wjhub_ke3_n5JJwzeB7hi-GdrUB26PEXx6QmC1-1NqURkxoRdWuzRatBDhqhWtRJEpGSw15v57stU1GZ5VtQUIUAwXDNEJW-ymlE_000)

#### 2. Відхилення запиту на авторизацію
*ID:* USER.LOG_IN_EXC

![Scen8](http://www.plantuml.com/plantuml/png/fPB5MKKn58JtgUBKmQs61l0TxkxkKC6xxjB2J4T4S8UNLVGV-I9sJE42BUUGSvuBN4G8dwjJIfx7-CJWsCIhzO3W03bAj6Yuo2E1Zv0B3e8CFbTumXrFFV7l7Hi9QlXJRqctIFIp1A5-CiTTGulXQ_29z-hYwpTMF4IBM6CNk2Neq9htUgD5ZKhJ6WtO5QxRMwsuKouZVtLgdAApZ4NHU_wNETGlYbAlGzrmmJ9gMy-N_j1nhdzthqlwkl6F9ayDqBJFDMSpjDGZrAOrntxz2OP7FFK0)

#### 3. Відхилення запиту користувача на обрані маніпуляції над обраним запитом
*ID:* QUERY.EXC

![Scen9](http://www.plantuml.com/plantuml/png/lPB5cTqm58Ntha9rnDMaWV0kP0WECsC5XaTcj_2VZkQJFSoiZV0UqZNT-COMZJmo-GeKaXBhxpV7d8xFNzv--d9k_yQmIynGFXabiLOC4s9QCWM6cjZGaCWZfjQQeUeNj0efDQy_MjDwzv3XkQTaLEUGQAXSvqJZOQ-FaKNxTb7DdW9vjbhX1ItkkMSNAvR8D4zgrTYAcX653K6UNIcmShiuPix1ARm9qEAHqZ0awujQ6bAjCRGkA1bHKslUw7_tgZ7zhNwJdRizpzNbyxJid7jyi7Dpa3UQe9NtIXREntrxArnqiavCoaYU_lLUKeki5IgRlzOqvrxeyFSVNES8)
