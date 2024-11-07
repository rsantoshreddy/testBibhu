import { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { InputFormGroup } from 'components/form/InputFormGroup'
import './DashboardPanel.scss'

// @todo - these data points belong to the specific panels, not at the top/dashboard level.
// i feel like a this is going to change a lot - so I will not make more comments on this file. -- Ian
const apiData = {
    status: {
        up: 116,
        backup: 3,
        impacted: 2,
        down: 1,
    },
    totalSites: 122,
    tickets: {
        open: 8,
        closed: 8,
    },
    mrc: '$12,235',
    sitesInProgress: 2,
    tasks: ['task 1 for the day', 'task 2 for the day', 'task 3 for the day'],
}

export default function DashboardPanel() {
    const [searchTxt, setSearchTxt] = useState('')

    const onChangeHandler = (e) => {
        setSearchTxt(e.target.value)
    }

    return (
        <Container xxl="true" className="DashboardPanel">
            <DashboardInfoCardsContainer data={apiData} />

            <Row className="dashboard-search-and-task-container">
                <Col md={6}>
                    <InputFormGroup
                        type="text"
                        placeholder="Ask me anything or Search for anything"
                        onChange={onChangeHandler}
                        error={''}
                        value={searchTxt}
                        label=""
                        className="input-form-group"
                    />
                </Col>
                <Col md={3}>
                    <DashboardMiniCardTask tasks={apiData?.tasks} />
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    )
}

function DashboardInfoCardsContainer({ data }) {
    let infoCardTitles = []

    if (data.status && Object.keys(data.status).length) {
        Object.keys(data).map((title) => {
            infoCardTitles.push(title)
        })
    }

    return (
        <Row className="dashboard-info-cards-container">
            <DashboardInfoCards
                infoCardTitles={infoCardTitles}
                sitesCount={data.totalSites}
                label="Status"
                cardsData={data.status}
            />
            <DashboardInfoCards
                infoCardTitles={infoCardTitles}
                sitesCount={data.totalSites}
                label="Tickets"
                cardsData={data.tickets}
            />
            <DashboardInfoCards
                infoCardTitles={infoCardTitles}
                sitesCount={data.totalSites}
                label="Sites in progress"
                cardsData={data.sitesInProgress}
            />
            <DashboardInfoCards
                infoCardTitles={infoCardTitles}
                sitesCount={data.totalSites}
                label="MRC"
                cardsData={data.mrc}
            />
        </Row>
    )
}

function DashboardInfoCards({ infoCardTitles, sitesCount, label, cardsData }) {
    return (
        <Col className="DashboardInfoCards">
            <div className="DashboardInfoCards-label-metadata-container">
                <div className="info-card-meta-data">
                    {sitesCount + ' Sites'}
                </div>
                <div className="info-card-label">{label}</div>
            </div>
            {infoCardTitles.length ? (
                infoCardTitles.map((title, i) => (
                    <div
                        key={i}
                        className="DashboardInfoCards-details-container">
                        <div className="info-card-title">
                            {title.charAt(0).toUpperCase() + title.slice(1)}
                        </div>
                        <div className="info-card-value">
                            {cardsData[title]}
                        </div>
                    </div>
                ))
            ) : (
                <div className="DashboardInfoCards-solo-value">{cardsData}</div>
            )}
        </Col>
    )
}

function DashboardMiniCardTask({ tasks }) {
    const [currentTaskStep, setCurrentTaskStep] = useState(0)
    const traverseTasks = (step) => {
        if (step === 'next' && currentTaskStep < apiData.tasks.length - 1) {
            setCurrentTaskStep(currentTaskStep + 1)
        } else if (step === 'prev' && currentTaskStep > 0) {
            setCurrentTaskStep(currentTaskStep - 1)
        }
    }

    if (tasks.length) {
        return (
            <div className="dashboard-tasks-card">
                <div
                    className="tasks-toggle-icon"
                    onClick={() => traverseTasks('prev')}>
                    {'<'}
                </div>
                <div className="tasks-title">My tasks: </div>
                <div className="tasks-details">{tasks[currentTaskStep]}</div>
                <div
                    className="tasks-toggle-icon"
                    onClick={() => traverseTasks('next')}>
                    {'>'}
                </div>
            </div>
        )
    } else {
        return <div className="dashboard-tasks-card no-tasks-msg">No tasks</div>
    }
}

// function DashboardMiniCardSort(cardsData, label, sitesCount, className) {
//     let infoCardTitle = [];

//     if (typeof cardsData === "object" && Object.keys(cardsData).length) {
//         Object.keys(cardsData).map((title) => {
//             infoCardTitle.push(title)
//         })
//     }

//     return (
//         <Col className={ className ? 'dashboard-info-cards ' + className : 'dashboard-info-cards'}>
//             <div className='dashboard-info-card-label-metadata'>
//                 <div className='info-card-meta-data fw-8'>{sitesCount + ' Sites'}</div>
//                 <div className='info-card-label fw-8'>{label}</div>
//             </div>
//             {infoCardTitle.length ? infoCardTitle.map((title, i) => (
//                 <div key={i} className='dashboard-info-card-details'>
//                     <div className='info-card-title fw-8'>{title.charAt(0).toUpperCase() + title.slice(1)}</div>
//                     <div className='info-card-value'>{cardsData[title]}</div>
//                 </div>
//             )) : (
//                 <div className='info-card-solo-value fw-8'>
//                     {cardsData}
//                 </div>
//             )}
//         </Col>
//     )
// }
