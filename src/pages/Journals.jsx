import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Search, X } from 'lucide-react'

const Journals = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const journals = [
    { title: 'Enhancing cyberthreat intelligence feeds using generative adversarial networks', authors: 'Kanna, R. R., Priya, T. M., Onyema, E. M., Goel, S., & Varghese, J.', journal: 'Generative Adversarial Networks for Cybersecurity: Protecting Data and Networks (Taylor & Francis)', year: '2026', link: 'https://doi.org/10.1201/9781003652991-14', logo: 'Taylor & Francis' },
    { title: 'Artificial Intelligence and Cognitive Sciences for Emerging Technologies', authors: 'Rouky, N., Ben Bouazza, F. E., Hussain, A., El Bhiri, B., Nkenyereye, L., Edeh, M. O., & Lamaazi, H.', journal: 'AICSET 2025 Proceedings, Vol. 2 (Springer)', year: '2026', link: 'https://doi.org/10.1007/978-3-032-14430-0', logo: 'Springer' },
    { title: 'Introduction to Digital Systems Design', authors: 'Udeh, CC; and Onyema EM', journal: 'Crosworld Concept Publishers, Enugu, Nigeria', year: '2025', link: '#', logo: 'Publisher' },
    { title: 'Preface International Conference on Emerging Technologies for Multidisciplinary Innovation and Sustainability (ETMIS 2025)', authors: 'Onyema EM; Celestine I; Chin-Shiuh S and N. Pradeep', journal: 'ITM Web Conf. Volume 81', year: '2026', link: 'https://doi.org/10.1051/itmconf/20268100001', logo: 'ITM' },
    { title: 'The impact of social media on faith and Christianity', authors: 'Edeh, M. O.', journal: '13th Annual National Conference of Catholic Law Students Association of Nigeria', year: '2018', link: '#', logo: 'Conference' },
    { title: 'Human-Centric Cybersecurity: The Integration of Psychological Insights and Socio-Technical Systems', authors: 'SK Onukwuli, CC Okpala, MO Edeh, C Udu', journal: 'International Journal of Industrial And Production Engineering (IJIPE)', year: '2025', link: 'https://journals.unizik.edu.ng/ijipe/article/view/6777', logo: 'IJIPE' },
    { title: 'Global Roadmap for Circular Economies: The Integration of Digital Innovation, Governance, and Sustainable Development Goals', authors: 'CE Udu, CC Okpala, and MO Edeh', journal: 'International Journal of Industrial And Production Engineering (IJIPE)', year: '2025', link: 'https://journals.unizik.edu.ng/ijipe/article/view/6764', logo: 'IJIPE' },
    { title: 'Hybrid Intelligence: Theories and Applications — Proceedings of HITA 2024', authors: 'Ali, M., Verma, A. K., Verma, O. P., Edeh, M. O., & Rajpurohit, J.', journal: 'Lecture Notes in Networks and Systems, Vol. 1467 (Springer)', year: '2025', link: 'https://doi.org/10.1007/978-981-96-7753-5', logo: 'Springer' },
    { title: 'Comparative Evaluation of 3D Point Cloud Tools in Agriculture 5.0 Using Digital Twins', authors: 'Kapgate, R. A., Khedkar, V., Kapgate, A., Patare, P. M., & Edeh, M. O.', journal: '3D Printing and Digital Twins in Smart Agriculture (IGI Global)', year: '2026', link: 'https://doi.org/10.4018/979-8-3373-7077-4.ch007', logo: 'IGI Global' },
    { title: 'Human-Centric AI in Smart Farming: Paving the Way for Agriculture 5.0', authors: 'Kapgate, R. A., Khedkar, V., Kapgate, A., Patare, P. M., & Edeh, M. O.', journal: '3D Printing and Digital Twins in Smart Agriculture (IGI Global)', year: '2026', link: 'https://doi.org/10.4018/979-8-3373-7077-4.ch005', logo: 'IGI Global' },
    { title: 'Kannada Character Recognition: Integrating Deep Learning and Classical Machine Learning Techniques', authors: 'Kulkarni, S., Onyema, E.M., Calistus, U.C., Ezema Modesta, E., Gude, V.', journal: 'Lecture Notes in Networks and Systems, Vol. 1409 (Springer)', year: '2025', link: 'https://doi.org/10.1007/978-981-96-6300-2_1', logo: 'Springer' },
    { title: 'Introduction to Computer Architecture and Embedded Design with Arduino', authors: 'Udeh, CC; and Onyema EM', journal: 'Crosworld Concept Publishers, Enugu, Nigeria', year: '2025', link: '#', logo: 'Publisher' },
    { title: 'A data-driven framework for future healthcare diagnosis through predictive analytics', authors: 'Onyema, EM, Sharanya S, Karthikeyan S, Prabukavin B, and Annamalai, DA', journal: 'Drug Discovery and Telemedicine (De Gruyter)', year: '2025', link: 'https://doi.org/10.1515/9783111504667-005', logo: 'De Gruyter' },
    { title: 'Artificial intelligence in cancer diagnosis and therapy', authors: 'Onyema, EM', journal: 'Academic Press (Elsevier)', year: '2025', link: 'https://doi.org/10.1016/B978-0-443-33984-4.00022-5', logo: 'Elsevier' },
    { title: 'Technological Advancements: Integrating quantum AI and Interdisciplinary collaboration for Entrepreneurship', authors: 'Ibrahim, KM; Onyema EM; Ajala, MT; and Segun, A.', journal: 'Safari Books Ltd, Ibadan', year: '2025', link: '#', logo: 'Publisher' },
    { title: 'Development of an Intelligent System for Enhanced Maintenance of Automobiles using Machine Learning', authors: 'Neeraj, D; Onyema EM; Venkataramaiah, G; Neetu F; Gaytri, D; Reenu, B.', journal: 'Scalable Computing: Practice and Experience', year: '2025', link: 'https://doi.org/10.12694/scpe.v26i5.4792', logo: 'SCPE' },
    { title: 'Deep learning model for hair artifact removal and Mpox skin lesion analysis and detection', authors: 'Onyema, E.M., Gunapriya, B., Kavin, B.P. et al.', journal: 'Scientific Reports (Springer)', year: '2025', link: 'https://doi.org/10.1038/s41598-025-05324-2', logo: 'Springer' },
    { title: 'An efficient plant disease detection using transfer learning approach', authors: 'Sambana, B., Nnadi, H.S., Wajid, M.A. et al.', journal: 'Scientific Reports (Springer)', year: '2025', link: 'https://doi.org/10.1038/s41598-025-02271-w', logo: 'Springer' },
    { title: 'Deep learning approach for Parkinson\'s screening with geometric features from spiral and wave drawings', authors: 'Malik, M., Onyema, E.M., Uddin, M. et al.', journal: 'Multimedia Tools and Applications (Springer)', year: '2025', link: 'https://doi.org/10.1007/s11042-025-20915-x', logo: 'Springer' },
    { title: 'Discrete Structure Foundations and Applications for Computer Science', authors: 'Ngene, N; Udeh, CC; and Edeh, MO.', journal: 'Cropsworld Concepts, Enugu Nigeria', year: '2024', link: '#', logo: 'Publisher' },
    { title: 'Computer Installation Management', authors: 'Udeh, CC; Ngene, N; and Edeh, MO.', journal: 'Cropsworld Concepts, Enugu Nigeria', year: '2025', link: '#', logo: 'Publisher' },
    { title: 'Introduction to Compiler Construction 2', authors: 'Udeh, CC; and Edeh, MO.', journal: 'Cropsworld Concepts, Enugu Nigeria', year: '2025', link: '#', logo: 'Publisher' },
    { title: 'Transformative Role of Transformer Models in Healthcare', authors: 'Sbai, A., Khan, M., Dutta, P., Davim, J., & Onyema, EM.', journal: 'IGI Global', year: '2025', link: 'https://doi.org/10.4018/979-8-3373-2038-0', logo: 'IGI Global' },
    { title: 'Defending the Metaverse: Cybersecurity Strategies for the Next Generation Internet', authors: 'Sheth, R., Ouaissa, M., Ouaissa, M., Onyema, E.M., & Parekha, C.', journal: 'CRC Press (Taylor & Francis)', year: '2025', link: 'https://doi.org/10.1201/9781003581659', logo: 'CRC Press' },
    { title: 'A secure routing protocol for improving the energy efficiency in wireless sensor network applications for industrial manufacturing', authors: 'Onyema EM; Suguna S.K; Sundaravadivazhagan B; Rutvij, H.J; Ugwuja, NE; Chinecherem ED; Kumari K.S', journal: 'Next Energy (Elsevier)', year: '2025', link: 'https://doi.org/10.1016/j.nxener.2024.100219', logo: 'Elsevier' },
    { title: 'A novel deep learning model for predicting marine pollution for sustainable ocean management', authors: 'Edeh MO, Dalal S, Alhussein M, Aurangzeb K, Seth B, Kumar K', journal: 'PeerJ Computer Science', year: '2024', link: 'https://doi.org/10.7717/peerj-cs.2482', logo: 'PeerJ' },
    { title: 'ChatGPT Application in Educational Setting: Benefits and Drawback', authors: 'Onyema, EM; Anichebe, GE; Richard-Nnabu, NE; Udeh, CC; Ikechukwu, FJ; Ugboaja, S.G; and Chinecherem, DE.', journal: 'Tropical Journal of Applied Natural Science', year: '2024', link: 'https://tjansonline.org/view-paper.php?id=49', logo: 'TJANS' },
    { title: 'Breast Cancer Diagnosis Using Virtualization and Extreme Learning Algorithm Based on Deep Feed Forward Networks', authors: 'Shankar GS, Onyema EM, Kavin BP, Gude V, Prasad BS', journal: 'Biomedical Engineering and Computational Biology (SAGE)', year: '2024', link: 'https://doi.org/10.1177/11795972241278907', logo: 'SAGE' },
    { title: 'Advanced Diabetes Prediction using Supervised Machine Learning Technique: Random Forest', authors: 'Ugboaja, S.G; Onyema, EM; Madubuezi, C.O; Anichebe, GE; Udeh, CC; and Ogbuoka, OM', journal: 'Tropical Journal of Applied Natural Science', year: '2024', link: 'https://tjansonline.org/download/advanced-diabetes-prediction-using-supervised-machine-learning-technique-random-forest/', logo: 'TJANS' },
    { title: 'Super learner model for classifying leukemia through gene expression monitoring', authors: 'Selvaraj, S., Alsayed, A.O., Ismail, N.A.; Balasubramanian, PK; Onyema EM; Gan, HS; and Uchechi, AQ', journal: 'Discover Oncology (Springer)', year: '2024', link: 'https://doi.org/10.1007/s12672-024-01337-x', logo: 'Springer' },
    { title: 'Detection and mitigation of few control plane attacks in software defined network environments using deep learning algorithm', authors: 'Kumar MA, Onyema EM, Sundaravadivazhagan B, Manish G, Achyut S, Venkataramaiah G, Nagendar Y', journal: 'Concurrency Computation Practice and Experience', year: '2024', link: 'https://doi.org/10.1002/cpe.8256', logo: 'Wiley' },
    { title: 'Management and prediction of navigation of industrial robots based on neural network', authors: 'Onyema, EM; Surjeet, D; Celestine, I; Bijeta, S; Nwogbe O; and Anyalor, M.C.', journal: 'Int. J. Services, Economics and Management', year: '2024', link: 'https://doi.org/10.1504/IJSEM.2024.140940', logo: 'Journal' },
    { title: 'Cloud-Enhanced Machine Learning for Handwritten Character Recognition in Dementia Patients', authors: 'Muhammad H, Venkataramaiah G, Onyema EM, Fahad M, Wajid U.K, Muhammad I, Nwosu, O. F.', journal: 'Driving Transformative Technology Trends With Cloud Computing (IGI Global)', year: '2024', link: 'https://www.igi-global.com/chapter/cloud-enhanced-machine-learning-for-handwritten-character-recognition-in-dementia-patients/353363', logo: 'IGI Global' },
    { title: 'Ambient Intelligence: A Comprehensive Review and Insights Into Sensing Technologies', authors: 'Onyema EM; Ramesh G.; Karan Kumar; Satyam Pawale; Abdullah A.; Shreyas J.', journal: 'Driving Transformative Technology Trends With Cloud Computing (IGI Global)', year: '2024', link: 'https://doi.org/10.4018/979-8-3693-2869-9.ch001', logo: 'IGI Global' },
    { title: 'The Role of Emerging Technologies in Academic Career Development', authors: 'Onyema, EM; Ugwuja, NE; Charles, CO; Umoke, CC; Madubuezi, CO; Njoku, JO; and Richard-Nnabu, NE Victor, UE', journal: 'Babcock University Journal of Education', year: '2024', link: 'https://journal.babcock.edu.ng/article/2d6c2154-aea7-4dbf-a734-347f58d6279e', logo: 'Babcock' },
    { title: 'Transfer learned deep feature based crack detection using support vector machine: a comparative study', authors: 'Bhalaji Kharthik, K.S., Onyema, E.M., Mallik, S. et al.', journal: 'Scientific Reports (Springer)', year: '2024', link: 'https://doi.org/10.1038/s41598-024-63767-5', logo: 'Springer' },
    { title: 'Leveraging the Potential of Artificial Intelligence in the Real World: Smart Cities and Healthcare', authors: 'Tran, T.A., Onyema, E.M., & Abougreen, A.N.', journal: 'CRC Press (Taylor and Francis/Routledge)', year: '2024', link: 'https://Doi.Org/10.1201/9781032667508', logo: 'CRC Press' },
    { title: 'Deep Learning-Based Water Quality Index Classification Using Stacked Ensemble Variational Mode Decomposition', authors: 'Karpagam, V; Christy, S; and Edeh, MO.', journal: 'Environmental Research Communication', year: '2024', link: 'https://doi.org/10.1088/2515-7620/ad549e', logo: 'Journal' },
    { title: 'Utility and Perception of Mobile Technology among Law Students in Enugu Nigeria', authors: 'Onyema, EM; Chinecherem, DE; Ugboaja SG; Ezemoyih, CM; Madubuezi, CO; and Richard-Nnabu, NE', journal: 'Babcock University Journal of Education', year: '2023', link: 'https://journal.babcock.edu.ng/article/07101026-49e3-4165-89b1-399ec6a2b524', logo: 'Babcock' },
    { title: 'Smart Job Scheduling Model for Cloud Computing Network Application', authors: 'Onyema, E.M., Gude, V., Bhatt, A. et al.', journal: 'SN Computer Science (Springer)', year: '2024', link: 'https://doi.org/10.1007/s42979-023-02441-5', logo: 'Springer' },
    { title: 'Synthetic aperture radar communication', authors: 'H Singh, EM Onyema, S Mahajan, AK Pandit', journal: 'The 4th International Computer Sciences and Informatics Conference (ICSIC 2022), Vol. 2495', year: '2023', link: 'https://doi.org/10.1063/5.0123643', logo: 'Conference' },
    { title: 'Obstacles Uncovering System for Slender Pathways Using Unmanned Aerial Vehicles with Automatic Image Localization Technique', authors: 'Selvarajan, S., Manoharan, H., Khadidos, A.O., Achyut S; Adil O. K; Onyema, EM', journal: 'International Journal of Computational Intelligence Systems', year: '2023', link: 'https://doi.org/10.1007/s44196-023-00344-0', logo: 'Journal' },
    { title: 'A bibliometric analysis on soil salinity sensor', authors: 'Onyema EM', journal: 'AIP Conference Proceedings 2535', year: '2023', link: 'https://doi.org/10.1063/5.0123646', logo: 'AIP' },
    { title: 'Encryption and decryption of a word into weighted graph using super-edge anti-magic total labeling of Bi-star graph', authors: 'Jegan, R., Vijayakumar, P., Ambethkumar, V. D., Vijay, Pa and Onyema, EM', journal: 'Journal of Discrete Mathematical Sciences and Cryptography', year: '2023', link: 'https://doi.org/10.47974/JDMSC-1752', logo: 'Journal' },
    { title: 'Prospects of Digital Technologies in Academic Career Development', authors: 'Onyema, EM; Charles, CO; Umoke CC; Njoku, JO; Ugorji, CC; Nwalo C, Victor UE', journal: 'Alex Ekwueme Federal University, Ndufu-Alike (Conference)', year: '2023', link: '#', logo: 'Conference' },
    { title: 'Forecasting students\' adaptability in online entrepreneurship education using modified ensemble machine learning model', authors: 'A. Malik; EM Onyema, S. Dalal, Umesh K; D Anand; A Sharma, S Simaiya', journal: 'Array (Elsevier)', year: '2023', link: 'https://doi.org/10.1016/j.array.2023.100303', logo: 'Elsevier' },
    { title: 'Design and Fabrication of Metallic-Conductive Polymer-Based Hybrid Film Interconnections for Stretchable Electronic Devices', authors: 'M. Sucharitha, R Thomas, B. Jyothi, EM Onyema, G Bekele', journal: 'International Journal of Polymer Science', year: '2023', link: 'https://doi.org/10.1155/2023/1392115', logo: 'Hindawi' },
    { title: 'Enhanced security using multiple paths routine scheme in cloud-MANETs', authors: 'Hai, T., Zhou, J., Lu, Y; Jawawi, D; Wang, Dan; Onyema, EM, and Biamba, C.', journal: 'Journal of Cloud Computing (Springer)', year: '2023', link: 'https://doi.org/10.1186/s13677-023-00443-5', logo: 'Springer' },
    { title: 'Smartphone Usage among Computer Science Students in Higher Education during Covid-19 Lockdown', authors: 'Edeh M.O; Ugboaja S.G; Ugwuja, N.E; Igwe, J.S; Daniel I.E and Richard-Nnabu, N.E', journal: 'Journal of Computer Science and its Application (Nigeria Computer Society)', year: '2022', link: 'https://www.ajol.info/index.php/jcsia/article/view/252419', logo: 'NCS' },
    { title: 'Remote monitoring system using slow-fast deep convolution neural network model for identifying anti-social activities in surveillance applications', authors: 'Onyema, EM; Sundaravadivazhagn B, Kanimozhi S.S, Celestine I, B.V.V. S Prasad, Chinecherem DE', journal: 'Measurement: Sensors (Elsevier)', year: '2023', link: 'https://doi.org/10.1016/j.measen.2023.100718', logo: 'Elsevier' },
    { title: 'Application of Machine Learning for Cardiovascular Disease Risk Prediction', authors: 'Surjeet D, Pallavi G, EM Onyema, Adnan A, Amena M, Majed A.A, Halifa A', journal: 'Computational Intelligence and Neuroscience (Hindawi)', year: '2023', link: 'https://doi.org/10.1155/2023/9418666', logo: 'Hindawi' },
    { title: 'Energy-Efficient and Traffic-Aware Function Analysis of Network Service Orchestration', authors: 'Dinar, A.E., Ghouali, S., Guellil, M.S., Onyema, E.M.', journal: 'Advanced Computational Techniques for Renewable Energy Systems. IC-AIRES 2022 (Springer)', year: '2023', link: 'https://doi.org/10.1007/978-3-031-21216-1_29', logo: 'Springer' },
    { title: 'Evaluation of IoT-Enabled hybrid model for genome sequence analysis of patients in healthcare 4.0', authors: 'E.M. Onyema, U.K. Lilhore, P. Saurabh, S. Dalal, A.S. Nwaeze, A.T. Chijindu, L.C. Ndufeiya-Kumasi, S. Simaiya', journal: 'Measurement: Sensors (Elsevier)', year: '2023', link: 'https://doi.org/10.1016/j.measen.2023.100679', logo: 'Elsevier' },
    { title: 'Awareness and Perception of COVID-19 Vaccine among Computer Science Students in Higher Education in Southeast Nigeria', authors: 'EM Onyema, OR Akindutire, CE Emelisana, NC Ani and A Osijirin', journal: 'Journal of Computer Science and its Application (Nigeria Computer Society)', year: '2022', link: '#', logo: 'NCS' },
    { title: 'Impact of Mobile Technology and Use of Big Data in Physics Education During Coronavirus Lockdown', authors: 'E. M. Onyema, R. Khan, N. C. Eucheria and T. Kumar', journal: 'Big Data Mining and Analytics (IEEE)', year: '2023', link: 'https://doi.org/10.26599/BDMA.2022.9020013', logo: 'IEEE' },
    { title: 'Application of Mobile Technologies in Healthcare During Coronavirus Pandemic Lockdown', authors: 'Onyema EM, Nwafor CE, Ugboaja SG, Nneka ER, Akindutire OR, Emmanuel CE and Ifeoma U', journal: 'Future Health Scenarios (Taylor and Francis)', year: '2023', link: 'http://dx.doi.org/10.1201/9781003227892-11', logo: 'Taylor & Francis' },
    { title: 'Hybrid XGBoost model with hyperparameter tuning for prediction of liver disease with better accuracy', authors: 'Dalal S, Onyema EM, Malik A', journal: 'World Journal of Gastroenterology', year: '2022', link: 'https://dx.doi.org/10.3748/wjg.v28.i46.6551', logo: 'Journal' },
    { title: 'Human Emotions Recognition, Analysis and Transformation by the Bioenergy Field in Smart Grid Using Image Processing', authors: 'Chhabra, G.; Onyema, E.M.; Kumar, S.; Goutham, M.; Mandapati, S.; Iwendi, C', journal: 'Electronics (MDPI)', year: '2022', link: 'https://doi.org/10.3390/electronics11234059', logo: 'MDPI' },
    { title: 'Bootstrapping random forest and CHAID for prediction of white spot disease among shrimp farmers', authors: 'Edeh, M.O., Dalal, S., Obagbuwa, I.C. et al.', journal: 'Scientific Reports (Springer)', year: '2022', link: 'https://doi.org/10.1038/s41598-022-25109-1', logo: 'Springer' },
    { title: 'Chaotic Association Feature Extraction of Big Data Clustering Based on the Internet of Things', authors: 'X. Liu; T.P. Singh; R.K. Gupta; EM Onyema', journal: 'Informatica', year: '2022', link: 'https://doi.org/10.31449/inf.v46i3.3943', logo: 'Journal' },
    { title: 'Optimization of Intelligent Network Information Management System under Big Data and Cloud Computing', authors: 'L.MA; Rajiv.KG and Onyema EM', journal: 'Scalable Computing: Practice and Experience', year: '2022', link: 'https://doi.org/10.12694/scpe.v23i3.2001', logo: 'SCPE' },
    { title: 'A Security Policy Protocol for Detection and Prevention of Internet Control Message Protocol Attacks in Software Defined Networks', authors: 'Onyema EM, Kumar MA, Balasubaramanian S, Bharany S, Rehman AU, Eldin ET, Shafiq M', journal: 'Sustainability (MDPI)', year: '2022', link: 'https://doi.org/10.3390/su141911950', logo: 'MDPI' },
    { title: 'Machine learning-based forecasting of potability of drinking water through adaptive boosting model', authors: 'Dalal, S., Onyema, EM., Romero, C., Ndufeiya-Kumasi, L., Maryann, D., Nnedimkpa, A. & Bhatia, T.', journal: 'Open Chemistry', year: '2022', link: 'https://doi.org/10.1515/chem-2022-0187', logo: 'Journal' },
    { title: 'Cyber Threats, Attack Strategy, and Ethical Hacking in Telecommunications Systems', authors: 'Onyema, E.M., Dinar, A.E., Ghouali, S., Merabet, B., Merzougui, R., Feham, M.', journal: 'Security and Privacy in Cyberspace. Blockchain Technologies (Springer)', year: '2022', link: 'https://doi.org/10.1007/978-981-19-1960-2_2', logo: 'Springer' },
    { title: 'Design of Intrusion Detection System based on Cyborg intelligence for security of Cloud Network Traffic of Smart Cities', authors: 'Onyema, E.M., Dalal, S., Romero, C.A.T. et al.', journal: 'Journal of Cloud Computing (Springer)', year: '2022', link: 'https://doi.org/10.1186/s13677-022-00305-6', logo: 'Springer' },
    { title: 'Prospects and Limitations of Machine Learning in Computer Science Education', authors: 'Edeh, M. O., Ugorji, C. C., Nduanya, U. I., Onyewuchi, C., Ohwo, S. O., & Ikedilo, O. E.', journal: 'Benin Journal of Educational Studies', year: '2021', link: 'http://beninjes.com/index.php/bjes/article/view/70', logo: 'Journal' },
    { title: 'Robot visual navigation estimation and target localization based on neural network', authors: 'Zhao, Y; Gupta, RK and Onyema, EM', journal: 'Paladyn, Journal of Behavioral Robotics', year: '2022', link: 'https://doi.org/10.1515/pjbr-2022-0005', logo: 'Journal' },
    { title: 'Artificial Intelligence-Based Teleopthalmology Application for Diagnosis of Diabetics Retinopathy', authors: 'S. Ghouali, EM Onyema; MS. Guellil; M A. Wajid; O. Clare; W. Cherifi; M. Feham', journal: 'IEEE Open Journal of Engineering in Medicine and Biology', year: '2022', link: 'https://doi.org/10.1109/ojemb.2022.3192780', logo: 'IEEE' },
    { title: 'Weighted Bayesian Belief Network: A Computational Intelligence Approach for Predictive Modeling in Clinical Datasets', authors: 'Shweta K, Onyema EM, Aasim Z, Wajid M.A, Rockson K.A, Tripti S, and Sunita S', journal: 'Computational Intelligence and Neuroscience (Hindawi)', year: '2022', link: 'https://doi.org/10.1155/2022/3813705', logo: 'Hindawi' },
    { title: 'Assessment of Dynamic Swarm Heterogeneous Clustering in Cognitive Radio Sensor Networks', authors: 'Ruby B, Onyema EM, Khalid KA, Celestine I, Shahab SB, Tripti S and Amir M', journal: 'Wireless Communication and Mobile Computing (Wiley)', year: '2022', link: 'https://onlinelibrary.wiley.com/doi/10.1155/2022/7359210', logo: 'Wiley' },
    { title: 'Prospects and Challenges of Using Machine Learning for Academic Forecasting', authors: 'Onyema, EM; Almuzaini, KK; Onu, FU; Verma, D; Gregory, US; Puttaramaiah, M and Afriyie, RK', journal: 'Computational Intelligence and Neuroscience (Hindawi)', year: '2022', link: 'https://doi.org/10.1155/2022/5624475', logo: 'Hindawi' },
    { title: 'A Hybrid Machine Learning Model for Timely Prediction of Breast Cancer', authors: 'Surjeet D; Onyema EM; Pawan K; Didiugwu CM; Roselyn AO; Mercy IO', journal: 'International Journal of Modeling, Simulation, and Scientific Computing', year: '2023', link: 'https://doi.org/10.1142/S1793962323410234', logo: 'Journal' },
    { title: 'Cluster Analysis for Automatic Vehicle Counting Management System for Road Traffic Network', authors: 'Onyema EM, Ghouali S; Sharma A; Amina AD; and Mohammed SG', journal: 'Futuristic Trends for Sustainable Ecosystem (Routledge)', year: '2022', link: 'https://www.routledge.com/Futuristic-Trends-for-Sustainable-Ecosystem-Proceedings-of-the-Multidisciplinary/Iyer-Rami-Darji-Patel/p/book/9781032301969', logo: 'Routledge' },
    { title: 'Algerian Strategy Planning on Workforce Allocation between Sectors at the 2030 Horizon Using Fuzzy Goal Programming Approach', authors: 'Guellil M.S., M. Hadj Ahmed, S. Ghouali, M. Belmokaddem, M. Benbouziane and E. M. Onyema', journal: 'International Conference on Decision Aid Sciences and Applications (DASA) (IEEE)', year: '2022', link: 'https://ieeexplore.ieee.org/document/9765302', logo: 'IEEE' },
    { title: 'Content Coverage and Readability of Science Textbooks in Use in Nigeria Secondary Schools', authors: 'Nwafor, CE; Abonyi OS; Onyema EM; Oka OO and Igba EC', journal: 'Journal of Education and Practice', year: '2022', link: 'http://dx.doi.org/10.7176/JEP/13-7-06', logo: 'Journal' },
    { title: 'Prospects and Challenges of Precision Agriculture Technology in Rural Areas: A Case Study of Ubahu Community Enugu, Nigeria', authors: 'Edeh, M.O; Banjo, OS; Ugah JO; Agubosim, CC; Ohwo SO; Obiageli ON and Ugorji CC.', journal: 'The Journal of Computer Science and its Applications (Nigeria Computer Society)', year: '2021', link: 'https://www.ajol.info/index.php/jcsia/article/view/230513', logo: 'NCS' },
    { title: 'A Classification Algorithm-Based Hybrid Diabetes Prediction Model', authors: 'Edeh MO, Khalaf OI, Tavera CA, Tayeb S, Ghouali S, Abdulsahib GM, Richard-Nnabu NE and Louni A', journal: 'Frontiers in Public Health', year: '2022', link: 'https://doi.org/10.3389/fpubh.2022.829519', logo: 'Frontiers' },
    { title: 'Artificial Intelligence-Based Ensemble Learning Model for Prediction of Hepatitis C Disease', authors: 'Edeh MO, Dalal S, Dhaou IB, Agubosim CC, Umoke CC, Richard-Nnabu NE and Dahiya N', journal: 'Frontiers in Public Health', year: '2022', link: 'https://doi.org/10.3389/fpubh.2022.892371', logo: 'Frontiers' },
    { title: 'Potential of Internet of Things and Semantic Web Technologies in the Health Sector', authors: 'Edeh, M. O., Otto, E. E., Richard-Nnabu, N. E., Ugboaja, S. G., Umoke, C. C., and Omachi, D.', journal: 'Nigerian Journal of Biotechnology', year: '2021', link: 'https://dx.doi.org/10.4314/njb.v38i2.8', logo: 'Journal' },
    { title: 'Empirical Analysis of Apnea Syndrome Using an Artificial Intelligence-Based Granger Panel Model Approach', authors: 'Onyema, EM; Tariq, A.A; Ghouali, S; Manish S; Manish, M; Guellil, M.S; Daniel K', journal: 'Computational Intelligence and Neuroscience (Hindawi)', year: '2022', link: 'https://doi.org/10.1155/2022/7969389', logo: 'Hindawi' },
    { title: 'Application of Innovative Technologies in Computer Science Education during Covid-19 School Closure in Enugu', authors: 'Victor, U.E; Onyema EM, Osijirin, A.N. and Obasi, O', journal: 'International Journal of Mechatronics, Electrical and Computer Technology (IJMEC)', year: '2022', link: '#', logo: 'Journal' },
    { title: 'Enhancement of Patient Facial Recognition through Deep Learning Algorithm: ConvNet', authors: 'Onyema EM, Piyush KS, Surjeet D, Mayuri NM, Mohammed Z and Basant T', journal: 'Journal of Healthcare Engineering (Hindawi)', year: '2021', link: 'https://doi.org/10.1155/2021/5196000', logo: 'Hindawi' },
    { title: 'Artificial Intelligence-Based Kubernetes Container for Scheduling Nodes of Energy Composition', authors: 'Jorge-Martinez, D., Butt, S.A., Onyema, E.M., Chinmay, C., Qaisar, S., Emiro, DLHF, Paola, AC', journal: 'Int. J. of System Assurance Engineering and Management (Springer)', year: '2021', link: 'https://doi.org/10.1007/s13198-021-01195-8', logo: 'Springer' },
    { title: 'Effect of Flipped Classroom Approach on Academic Achievement of Students in Computer Science', authors: 'Onyema E.M., Choudhury T., Sharma A., Atonye F.G., Phylistony O.C., Edeh E.C.', journal: 'Data Driven Approach Towards Disruptive Technologies (Springer)', year: '2021', link: 'https://doi.org/10.1007/978-981-15-9873-9_41', logo: 'Springer' },
    { title: 'Prospects and Challenges of Using Flipped Classroom in Computer Science Instruction during Coronavirus Lockdown', authors: 'M.O. Edeh; A. Sharma; A.U. Eucharia; A.O. Roselyn', journal: 'Handbook of Research on Lifestyle Sustainability and Management Solutions Using AI, Big Data Analytics, and Visualization (IGI Global)', year: '2022', link: 'https://www.igi-global.com/chapter/prospects-and-challenges-of-using-the-flipped-classroom-in-computer-science-instruction-during-the-coronavirus-lockdown/298376', logo: 'IGI Global' },
    { title: 'Cybersecurity Awareness Among Undergraduate Students in Enugu Nigeria', authors: 'Onyema, E.M., Edeh, C. D., Gregory, U.S., Edmond, V.U., Charles, A.C. and Richard-Nnabu, N.E.', journal: 'International Journal of Information Security, Privacy and Digital Forensic (Nigeria Computer Society)', year: '2021', link: '#', logo: 'NCS' },
    { title: 'Effect of Visual Literacy on the Academic Achievements of Students in Computer Studies in Selected Secondary Schools in Enugu State, Nigeria', authors: 'Edeh, M.O., Akindutire O.R., Ugboaja S.G., Ohwo S.O., Chukwudum C.U. and Osijirin A.', journal: 'FUOYE Journal of Engineering and Technology (FUOYEJET)', year: '2021', link: 'http://dx.doi.org/10.46792/fuoyejet.v6i3.683', logo: 'Journal' },
    { title: 'Smart Health Application for Remote Tracking of Ambulatory Patients', authors: 'Shariq, A.B; Muhammad, W.A; Syed, A.H, Arindam, G and Onyema, EM.', journal: 'Smart Healthcare System Design: Security and Privacy Aspects (Wiley)', year: '2021', link: 'https://doi.org/10.1002/9781119792253.ch2', logo: 'Wiley' },
    { title: 'Impact of Emerging Technologies on the Job Performance of Educators in Selected Tertiary Institutions in Nigeria', authors: 'Onyema, E.M; A. Sharma., C.E, Nwafor., A.G. Fyneface., S, Sen., E.C. Edeh', journal: 'The Journal of Computer Science and its Applications (Nigerian Computer Society)', year: '2020', link: 'https://dx.doi.org/10.4314/jcsia.v27i1.4', logo: 'NCS' },
    { title: 'Pedagogical Use of Mobile Technologies During Coronavirus School Closure', authors: 'Onyema, E.M; Eucharia, A. U; Gbenga, F. S; Roselyn, A. O; Daniel, O and Kingsley, N. U', journal: 'The Journal of Computer Science and its Applications', year: '2020', link: 'https://dx.doi.org/10.4314/jcsia.v27i2.9', logo: 'Journal' },
    { title: 'Online Discussion Forum as a Tool for Interactive Learning and Communication', authors: 'Onyema, E.M; Edeh, C.D; Alhuseen, O.A; Quadri, N.N; and Sumaya, S.', journal: 'International Journal of Recent Technology and Engineering (IJRTE)', year: '2019', link: 'https://DOI:10.35940/ijrte.D8062.118419', logo: 'Journal' },
    { title: 'Impact of E-learning Platforms on Students\' Interest and Academic Achievement in data Structure Course', authors: 'Onyema, E.M; Eucharia, N.C; Ezeanya, C.U; Eziokwu, P.N; Ani, U.E.', journal: 'Coal City University Journal of Science', year: '2020', link: 'https://www.researchgate.net/publication/343933988_Impact_of_E-learning_Platforms_on_Students_Interest_and_Academic_Achievement_in_Data_Structure_Course', logo: 'Journal' },
    { title: 'Development of a Mobile Application for Flood Surveillance in Southwest Nigeria', authors: 'Onyema, E.M.', journal: 'TASUED Journal of Pure and Applied Sciences', year: '2018', link: '#', logo: 'Journal' },
    { title: 'Cloud Security Challenges: Implication on Education', authors: 'Onyema, E.M; Nwafor, C.E; Ugwugbo, A.N; Rockson, K.A; Ogbonnaya, U.N.', journal: 'International Journal of Computer Science and Mobile Computing', year: '2020', link: '#', logo: 'Journal' },
    { title: 'Evaluation of the Performance of K-Nearest Neighbor Algorithm in Determining Student Learning Styles', authors: 'Onyema, E.M; Elhaj, M.A.E; Bashir, S.G; Abdullahi, I; Hauwa, A.A; Hayatu, A.S.', journal: 'Int. J. of Innovative Sci., Eng. & Techn.', year: '2020', link: 'https://ijiset.com/vol7/v7s1/IJISET_V7_I1_10.pdf', logo: 'Journal' },
    { title: 'Development of a Mobile-Learning Platform for Entrepreneurship Education in Nigeria', authors: 'Onyema, E.M; Quadri, N.N; Alhuseen, O.A; Nwafor, C.E; Abdullahi, I. and Faluyi S.G.', journal: 'British Journal of Science (BSJ)', year: '2020', link: 'http://www.ajournal.co.uk/pdfs/BSvolume18(2)/BSVol.18%20(2)%20Article%2011.pdf', logo: 'Journal' },
    { title: 'Opportunities and Challenges of use of Mobile Phone Technology in teaching and learning in Nigeria- A Review', authors: 'Onyema, E.M.', journal: 'International Journal of Research in Engineering and Innovation', year: '2019', link: 'http://doi.org/10.36037/IJREI.2019.3601', logo: 'Journal' },
    { title: 'Implementing Morpheme-based Compression Security Mechanism in Distributed Systems', authors: 'Rockson, K.A; Michael. A; Onyema, E.M.', journal: 'Int. Journal of Innovative Research & Development (IJIRD)', year: '2020', link: 'https://DOI:10.24940/ijird/2020/v9/i2/JAN20092', logo: 'Journal' },
    { title: 'Integration of Emerging Technologies in Teaching and Learning Process in Nigeria: The Challenges', authors: 'Onyema, E.M.', journal: 'Central Asian Journal of Mathematical Theory and Computer Sciences', year: '2019', link: '#', logo: 'Journal' },
    { title: 'The Role of Technology in Mitigation of Examination Malpractices in West Africa', authors: 'Onyema, E.M; Ani, U.E; Nnaji, A.D; Abdullahi, I; Alhuseen, O.A; and Quadri N.N.', journal: 'International Journal of Innovative Research in Computer and Communication Engineering', year: '2019', link: 'https://doi.org/10.15680/IJIRCCE.2019.0710007', logo: 'Journal' },
    { title: 'The Impact of Inquiry-Based Teaching Approach on Computer Science Learning', authors: 'Edeh, M.O., Nwafor, C.E., Nnaji, A.D., Fyneface, G.A., Obiekwe, C.P. and Omachi, D.', journal: 'EBSU Science Journal', year: '2020', link: '#', logo: 'Journal' },
    { title: 'Impact of Coronavirus Pandemic on Education', authors: 'Onyema, E.M; Nwafor, C.E; Faith, A.O; Shuvro, S; Fyneface, G.A; Aabha, S; A.O.', journal: 'Journal of Education and Practice', year: '2020', link: 'https://doi.org/10.7176/JEP/11-13-12', logo: 'Journal' },
    { title: 'Potentials of Mobile Technologies in Enhancing the Effectiveness of Inquiry-based Learning Approach', authors: 'Onyema, E.M; Udeze, O.A; and Edeh, C.D.', journal: 'International Journal of Education (IJE)', year: '2019', link: 'https://doi.org/10.5121/IJE.2019.1421', logo: 'Journal' },
    { title: 'Possible Ways for Enhancing the Utilization of ICT by Educators of Tertiary Institutions in Enugu State Nigeria', authors: 'Charles, U.E; Eziokwu, P.N and Onyema, EM', journal: 'BSU Journal of Science, Mathematics and Computer Education', year: '2020', link: '#', logo: 'Journal' },
    { title: 'Impact of Mobile Phone Technology on Job Performance of Human Resource Managers in Nigeria', authors: 'Onyema, E.M; Chime, I.P; Faluyi S.G; and Edeh, C.D.', journal: 'International Journal of Research in Engineering and Innovation', year: '2019', link: 'https://doi.org/10.36037/IJREI.2019.3606', logo: 'Journal' },
    { title: 'Integration of 21st Century Competencies in Teaching and Learning of Biology', authors: 'Ogbonnaya, U.N; Onyema, E.M; Edeh, C.E; Fyneface, A.G; Digvijay, P.', journal: 'CCU Journal of Science', year: '2020', link: '#', logo: 'Journal' },
    { title: 'An Improved Android-Based Real Estate App', authors: 'Abdullahi, I; Hauwa A.A; Hayatu, A.S; Onyema, E.M.', journal: 'International Journal of Novel Research and Development (IJNRD)', year: '2020', link: '#', logo: 'Journal' },
    { title: 'Detection of Coronavirus Disease in Human Body Using Convolutional Neural Network', authors: 'Mohit, T; Tripti, T; Manal, K; Anit, N.R, Deepa; C. & Onyema, E.M.', journal: 'International Journal of Advanced Science and Technology', year: '2020', link: '#', logo: 'Journal' },
    { title: 'Variation of Ocean Wave Velocity with Ocean Depth Based on a Cubic Polynomial Fit Expression', authors: 'Egunjobi, K.A. and Onyema, E.M.', journal: 'COAL City University Journal of Science', year: '2020', link: '#', logo: 'Journal' },
    { title: 'Influence of Training and Learning on Employees\' Productivity in Service Sector in Pakistan', authors: 'Hussain, S; Onyema, E.M; A Masood; OU Nwoye.', journal: 'American Journal of Business, Economics and management', year: '2020', link: 'http://www.openscienceonline.com/journal/ajbem', logo: 'Journal' },
    { title: 'The Impact of Social Media on Faith and Christianity', authors: 'Edeh, M.O.', journal: '13th National Convention of Catholic Law Students Association', year: '2018', link: '#', logo: 'Conference' },
    { title: 'Infectivity, Preclusion, and Control (IPC) of Pandemic Novel COVID-19', authors: 'Digvijay Pandey and Onyema, E.M. et al', journal: 'International Journal of Computer Engineering In Research Trends (IJCERT)', year: '2020', link: 'https://doi.org/10.22362/ijcert/2020/v7/i05/v7i0501', logo: 'Journal' },
    { title: 'ICT: Your Skills; your Success Story', authors: 'Onyema, E.M.', journal: 'Department of Computer Science, Caritas University, Enugu (CST week)', year: '2019', link: '#', logo: 'Workshop' },
    { title: 'Appraisal of Public Opinions Towards Potential COVID-19 Vaccination in FCT-Abuja Nigeria', authors: 'Obafemi, FA, Olabode, HOK and Edeh, M.O.', journal: 'University of Ilorin Nigerian Journal of Pure & Applied Science', year: '2021', link: 'http://dx.doi.org/10.48198/NJPAS/21.A06', logo: 'Journal' },
    { title: 'Potential Public Health Threats to Ready Made Garments (RMG) Workers During COVID -19 in Bangladesh: A Call for Actions', authors: 'Sen, Shuvro and Ahmed, Fahad and Shahriar, Shihab Ahmad and Antara, Neel and Sen, Shusmita and Edeh, Michael Onyema and Chowdhury, Sunny', journal: 'SSRN/Elsevier', year: '2020', link: 'https://ssrn.com/abstract=3665404', logo: 'Elsevier' },
    { title: 'Potentials of Mobile Technologies in Biology Education', authors: 'Ogbonnaya, UN; Onyema EM; Jeremiah, N; Gbenga, S; Adewoga, TOS', journal: 'Journal of contemporary issues in Educational Planning and Administration', year: '2022', link: '#', logo: 'Journal' },
    { title: 'Why! Why! Why!!!', authors: 'Anonymous', journal: 'Peace Operations Training Institute', year: '2011', link: '#', logo: 'Publication' },
    { title: 'Unity in Diversity', authors: 'Anonymous', journal: 'Nigerian Army Depot (Buffalo) Magazine, 35th Edition', year: '2007', link: '#', logo: 'Magazine' },
    { title: 'My Experience in United Nations', authors: 'Anonymous', journal: 'Newsletter Magazine, Peace Operations Training Institute, USA', year: '2011', link: '#', logo: 'Newsletter' },
    { title: 'The Menace of Baby Factory', authors: 'Anonymous', journal: 'Pacesetter Magazine, 1st Edition', year: '2014', link: '#', logo: 'Magazine' },
  ]

  const getLogoColor = (logo) => {
    const colors = { 
      'Elsevier': 'bg-red-600', 
      'Springer': 'bg-blue-600', 
      'IEEE': 'bg-indigo-600', 
      'MDPI': 'bg-green-600', 
      'Wiley': 'bg-blue-800', 
      'Hindawi': 'bg-orange-500', 
      'SAGE': 'bg-purple-600', 
      'De Gruyter': 'bg-gray-700', 
      'PeerJ': 'bg-teal-500', 
      'TJANS': 'bg-cyan-600', 
      'NCS': 'bg-green-700', 
      'Taylor & Francis': 'bg-blue-900',
      'IJIPE': 'bg-violet-600',
      'ITM': 'bg-gray-800',
      'Conference': 'bg-yellow-600',
      'IGI Global': 'bg-red-700',
      'Publisher': 'bg-amber-600',
      'SCPE': 'bg-lime-600',
      'CRC Press': 'bg-cyan-700',
      'Frontiers': 'bg-orange-600',
      'Routledge': 'bg-indigo-700',
      'AIP': 'bg-pink-600',
      'Workshop': 'bg-green-500',
      'Newsletter': 'bg-slate-600',
      'Magazine': 'bg-rose-600',
      'Publication': 'bg-sky-600',
      'Journal': 'bg-gray-600'
    }
    return colors[logo] || 'bg-gray-500'
  }

  // Filter journals based on search term
  const filteredJournals = useMemo(() => {
    if (!searchTerm.trim()) return journals
    
    const lowerSearch = searchTerm.toLowerCase()
    return journals.filter((journal) => 
      journal.title.toLowerCase().includes(lowerSearch) ||
      journal.authors.toLowerCase().includes(lowerSearch) ||
      journal.journal.toLowerCase().includes(lowerSearch) ||
      journal.year.includes(searchTerm)
    )
  }, [searchTerm, journals])

  return (
    <div className="pt-20 ">
      <section className="relative py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6 text-amber-500">Journal Publications</h1>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">Over 150 peer-reviewed publications and research articles across top-tier international journals and conferences</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white -mt-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by title, author, journal, or year..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-gray-300 focus:border-amber-500 focus:outline-none transition-colors text-gray-900"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 p-1 hover:bg-gray-200 rounded transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                )}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-sm text-gray-500 mt-3"
              >
                {searchTerm ? `Found ${filteredJournals.length} result${filteredJournals.length !== 1 ? 's' : ''}` : `Showing all 150 publications`}
                {/* ${journals.length} */}
              </motion.p>
            </div>
          </motion.div>

          {/* Results */}
          <div className="space-y-6 -mt-15">
            {filteredJournals.length > 0 ? (
              filteredJournals.map((journal, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.02 }} viewport={{ once: true }} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getLogoColor(journal.logo)}`}>{journal.logo}</span>
                        <span className="text-sm text-gray-500">{journal.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{journal.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{journal.authors}</p>
                      <p className="text-amber-600 text-sm font-medium">{journal.journal}</p>
                    </div>
                    <a href={journal.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-200 hover:bg-amber-500 hover:text-white transition-colors flex-shrink-0">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No publications found</h3>
                <p className="text-gray-500">Try adjusting your search terms</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Journals
