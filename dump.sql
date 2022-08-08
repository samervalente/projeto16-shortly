--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Ubuntu 14.4-1.pgdg22.04+1)
-- Dumped by pg_dump version 14.4 (Ubuntu 14.4-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "shortURL" text NOT NULL,
    url text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.urls OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.urls (id, "userId", "shortURL", url, "visitCount", "createdAt") FROM stdin;
3	1	4pgerevb	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 09:41:23-03
4	1	9dyavnfa	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 09:41:23-03
5	5	0sx5cbqv	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 09:41:23-03
6	5	vxx6lky4	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 09:44:18-03
7	5	rmsz4wi9	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 09:44:18-03
8	5	9pp2l4mz	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 09:45:01-03
9	5	6dtpdl2i	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 09:45:01-03
10	5	gmft2xnu	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 09:45:01-03
11	5	n10wgqwp	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 09:56:50.42104-03
12	5	1vwpxlwj	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 09:57:01.984931-03
13	5	wjdw32op	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 09:57:03.027012-03
15	5	raccloa9	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 09:57:05.734111-03
16	5	sawpu3cw	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 10:01:21.308345-03
17	5	hgmx89bh	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 10:01:33.809963-03
18	5	vt4yslra	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 10:01:50.044321-03
19	5	zhvy7gnj	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 10:02:26.412796-03
21	1	2ms569eg	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 10:03:26.42171-03
24	1	068l08gp	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 10:04:32.735876-03
25	1	oms8wdho	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 10:04:54.925105-03
26	1	8n51jmmx	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 10:05:20.484192-03
27	1	rjfvb083	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 10:06:02.156706-03
28	1	6yczvi43	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 10:06:22.753286-03
29	1	koegmlws	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 10:08:08.494271-03
30	1	cn496np7	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 10:08:18.660418-03
31	1	xbzn6brs	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 10:09:00.093709-03
32	1	zgqbipdf	otion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 10:09:14.676641-03
33	1	7zrj6m7f	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 10:13:24.426443-03
34	1	lb88dkfy	https://.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 10:13:39.182434-03
35	1	r4q8qhsb	https:.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	0	2022-08-06 10:13:51.709959-03
2	1	a280v81m	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	295	2022-08-06 09:41:23-03
20	5	jdf9l7k6	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	63	2022-08-06 10:02:43.621663-03
14	5	t1u571x6	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	127	2022-08-06 09:57:03.688787-03
22	5	810wvbag	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	104	2022-08-06 10:03:45.049221-03
1	1	mu0eiplm	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	264	2022-08-06 09:37:56-03
23	1	jxwwiube	https://www.notion.so/Projeto-Shortly-API-284dad3d2dc444b8a98853376268d95c	1	2022-08-06 10:04:00.902181-03
39	10	jwhf875v	https://dashboard.heroku.com/apps/projeto-16-shortly-back/settings	0	2022-08-07 09:32:56.785635-03
40	1	mr5eopfb	https://dashboard.heroku.com/apps/projeto-16-shortly-back/settings	0	2022-08-07 09:44:32.593122-03
36	5	ptfzducv	https://www.geeksforgeeks.org/	207	2022-08-06 10:29:22.748165-03
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
1	João	123@driven.com.br	$2b$10$eyb1NFLXx9oPx6Affsmwmug3EdJLbO.fbx5NKuTIphxKnbnI7NeMq	2022-08-06 09:02:09.942431-03
2	João	12233@driven.com.br	$2b$10$BRBHjeTlThLyO4OVZaeY7.QZEgJ0MuSfVv2lCsBDrp7GJd6sNEMSG	2022-07-06 06:16:05-03
3	João	1223233@driven.com.br	$2b$10$9hHQJoPvV1nEBIyFudQ8o.CaJ8BJjeJg/qyBs93Pk9fgGjBCw8EDO	2022-08-06 09:18:32-03
4	João	122322333@driven.com.br	$2b$10$zj/xlCq37/WYmTUTTgXqh.f8uSxjH.X4Xt6D97FSWnR.k.4BKHpTC	2022-08-06 09:22:28-03
5	Samer	sam@driven.com.br	$2b$10$ZU8R.PCtWe4jUDyZ4A1Y9./DAQo9k9FyrqWCB0sKWDlav5WsLuGQS	2022-08-06 09:41:23-03
6	Samer	adssada@driven.com.br	$2b$10$8.V6CY2gpUh1JizyIMS7huUC4oSNW7yO/h2t.Z3HTJJdRYtg1GSDq	2022-08-07 07:33:58.712814-03
7	Samer	1232342@driven.com.br	$2b$10$DO8uVCxCcH4UAfxAxXm91.rAU.XuPGGTnQxhY9VZiG1LdHFfkeD86	2022-08-07 07:34:09.238142-03
8	Samer	123232342@driven.com.br	$2b$10$hbb4RFRKNcAwViPdEjeB0u3oGjY/DmQzICy.gPcsMF6XaufF3G9Ky	2022-08-07 07:35:59.587984-03
9	Samer	2342@driven.com.br	$2b$10$5Ccfm2NEVN5vVBVRy.1BUOcoy6glZ5nX1q7zTh7HCDC7CsixG.by2	2022-08-07 07:36:56.007896-03
10	Samer	samervalente@gmail.com.br	$2b$10$BUAbWUwLFDO36eiohr.OKebjMyk1kM1jLf8r1QQDiXC3LsaHPIDvO	2022-08-07 09:32:09.423162-03
\.


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.urls_id_seq', 40, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 10, true);


--
-- Name: urls urls_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pk PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: urls urls_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_fk0 FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

