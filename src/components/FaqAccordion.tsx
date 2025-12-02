import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
// FAQ Data
const faqData = [
    {
        id: "item-1",
        question: "Which manufacturing units are \"factory\" under the Factories Act, 1948?",
        answer: [
            "\"Factory\" means any premises including the precincts thereof",
            "(i) whereon ten or more workers are working, or were working on any day of the preceding twelve months, and in any part of which a manufacturing process is being carried on with the aid of power",
            "(ii) whereon twenty or more workers are working, or were working on any day of the preceding twelve months, and in any part of which a manufacturing process is being carried on without the aid of power",
            "(iii) wherein the following manufacturing processes are carried on by employing less than ten workers, if working with the aid of power and less than twenty workers, if working without the aid of power",
            "a. Manufacture of rubber and plastic products",
            "b. Manufacturing process involving repair of Motor Vehicles and Motor Cycles",
            "c. Manufacturing process using or producing explosives or highly inflammable articles or substances",
            "d. Fireworks manufacturing and its packaging units",
            "e. Manufacturing of Leather goods",
            "f. Manufacturing of Ice using ammonia as refrigerant",
            "g. Pesticides formulation units",
            "h. Manufacturing, handling & processing of asbestos and its products",
            "These are called section 2(m)(i), 2(m)(ii) and 85 factories respectively."
        ]
    },
    {
        id: "item-2",
        question: "Which industrial activities are called the \"manufacturing process\"?",
        answer: [
            "\"Manufacturing process\" means any process for-",
            "(i) making, altering, repairing, ornamenting, finishing, packing, oiling, washing, cleaning, breaking up, demolishing, or otherwise treating or adapting any article or substance with a view to its use, sale, transport, delivery or disposal, or",
            "(ii) pumping oil, water, sewage or any other substance, or",
            "(iii) generating, transforming or transmitting power; or",
            "(iv) composing types for printing, printing by letter press, lithography, photo-gravure or other similar process or book binding; or",
            "(v) constructing, reconstructing, repairing, refitting, finishing or breaking up ships or vessels; or",
            "(vi) preserving or storing any article in cold storage;"
        ]
    },
    {
        id: "item-3",
        question: "Which Factory Need To obtain previous permission from Chief Inspector Under The Factories Act 1948 in form of Approval of Plan?",
        answer: [
            "Section 2(m)(i) and 2(m)(ii) factories need to obtain previous permission from the Chief Inspector for the site and for the construction, extension or use of the building, part of a building or structure, on that site."
        ]
    },
    {
        id: "item-4",
        question: "Which Factory need to take licence under the Factories Act 1948?",
        answer: [
            "All type of factories [section 2(m)(i), 2(m)(ii) and 85 factories] need to take licence."
        ]
    },
    {
        id: "item-5",
        question: "What Is The Procedure For Applying For Approval of Plan Online?",
        answer: [
            "Please see the online manual for \"Approval of Factory Plan\"."
        ]
    },
    {
        id: "item-6",
        question: "What is the procedure for applying for the registration and licence online?",
        answer: [
            "Please see the online manual for \"Registration and grant of licence\"."
        ]
    },
    {
        id: "item-7",
        question: "What is the procedure for applying for the renewal of licence?",
        answer: [
            "Please refer and follow instructions furnished in the online manual for \"Renewal of Factory Licence\"."
        ]
    },
    {
        id: "item-8",
        question: "What is the procedure for amendment of licence online?",
        answer: [
            "Please refer and follow instructions furnished in the online manual for \"Amendment/Transfer of Factory Licence\""
        ]
    },
    {
        id: "item-9",
        question: "What is the procedure for transfer of licence online?",
        answer: [
            "Please refer and follow instructions furnished in the online manual for \"Amendment/Transfer of Factory Licence\""
        ]
    },
    {
        id: "item-10",
        question: "What Documents Are To Be Uploaded For applying any services?",
        answer: [
            "It has been mentioned in the Standard Operating Procedure (SOP) under SOP and Timeline of EoDB tab in the home screen."
        ]
    },
    {
        id: "item-11",
        question: "Whether can I track the status of my application?",
        answer: [
            "Yes, through the portal you can check the status of your application after getting logged in."
        ]
    },
    {
        id: "item-12",
        question: "Is there any time limit within which I may get the necessary approvals after I submit my application for a specific service?",
        answer: [
            "Yes. As per the WBRTPS Act, 2013, your service will be delivered within the time specified for that particular service, provided your application is correct in all respect and the application is carrying all requisite documents in proper form, else you will receive notification for rectification within the time frame.",
            "Stipulated time limit is 50 days for Approval of Factory Plan.",
            "Stipulated time limit is 65 days for Registration and grant of Licence.",
            "Stipulated time limit is 90 days for Amendment / Transfer of Licence."
        ]
    },
    {
        id: "item-13",
        question: "How To Calculate Licence Fees?",
        answer: [
            "Licence fees are calculated on the basis of no. of workers employed and installed power in HP/KW of the machinery. Please follow the fees calculation table.",
            "There are four categories of specified fees.",
            "Schedule A is for the factories defined under section 2(m)(i) of the Factories Act, 1948 other than Electricity Generating Stations. Here licence fees are calculated on the basis of number of workers employed and installed power in HP/KW of the machinery.",
            "Schedule B is for the Electricity Generating Stations only. Here licence fees are calculated on the basis of total installed capacity of the generating plants in K.W.",
            "Schedule C is for the factories defined under section 2(m)(ii) of the Factories Act, 1948. In this types of factories, licence fee are calculated on the basis of maximum number of workers to be employed on any day during the year.",
            "Licence Fee for the section 85 factories.",
            "Please see the fees calculation table shown in the portal under Licence Fee tab.",
            "This portal is provided with the facility of auto fees calculation. After filling up the Common Application Form properly, the applicant can see the applicable fees."
        ]
    },
    {
        id: "item-14",
        question: "Whether there are any applicable fees other than the licence fee for any other service?",
        answer: [
            "Yes.",
            "Rs.1000.00 is required as Registration Fee during application for registration and grant of licence of any factory.",
            "Rs.1000.00 is also to be paid as fee for each transfer or amendment of licence."
        ]
    },
    {
        id: "item-15",
        question: "How to make payment for licence fees?",
        answer: [
            "Please fill the Common Application Form (CAF), then applicable fee will be shown in the portal and thereafter pay the requisite fees from the portal itself by selecting Pay Now option.",
            "The GRIPS portal is integrated with the portal of the Directorate.",
            "The details of fees paid through this portal, shall be translated in the Common Application Form (CAF) Automatically, and you need not to fill up the payment details in CAF."
        ]
    },
    {
        id: "item-16",
        question: "What is due date of renewal of licence?",
        answer: [
            "Within the date up to which the licence is in force or valid. However one can not apply for Renewal of licence before 150 days of expiry of licence."
        ]
    },
    {
        id: "item-17",
        question: "How to calculate licence fees if not paid within due date?",
        answer: [
            "25% excess fees upto 31st March and 50% excess fees beyond 31st March corresponding to the year to which licence fee relates upto the year 2018.",
            "From the year 2019, applicant has to pay the proper licence fee as well as to submit the application for renewal of licence within the date of expiry of licence, otherwise the amount of the fee payable for renewal of the licence shall be 50 percent in excess of the amount which would otherwise be payable, if the application is made within 90 days of the time specified and shall be 100 percent in excess of the amount which would otherwise be payable for further default beyond 90 days."
        ]
    },
    {
        id: "item-18",
        question: "For how many years the licence can be granted / renewed?",
        answer: [
            "Licence can be renewed upto 15 consecutive years in advance."
        ]
    },
    {
        id: "item-19",
        question: "Can I take the benefit of Auto renewal of licence?",
        answer: [
            "Yes. You can take the benefit of real time auto renewal of licence. Please see the online manual for \"Auto-renewal of Factory Licence\". However you have to take care of the followings:",
            "(i) Your licence should be valid on the date of your auto renewal application.",
            "(ii) Your last renewal must have been obtained in online mode.",
            "(iii) There should not be any change in parameters/database as recorded in the last online application.",
            "(iv) No previously paid fees can be adjusted during the auto Renewal."
        ]
    },
    {
        id: "item-20",
        question: "When can a licence be cancelled?",
        answer: [
            "a. If the manpower falls below 10 in case of factories running with the aid of power",
            "b. If the manpower falls below 20 in case of factories running without power",
            "c. Manufacturing process of the factory ceases operation, this is applicable for also the factories who were registered with less than 10 workers.",
            "Procedure for cancellation of licence are as follows:",
            "a. Submission of closure notice by the occupier stating the date of closure or intended closure, reason for the closure, the number of workers working in the factory on the date of the notice / closure etc.",
            "b. Submission of licence copy showing it is valid till the date of such closure.",
            "c. Declaration regarding payment of all due earned wages of the worker as per Factories Act,1948 with corroborative evidence.",
            "d. Details of the plant and machinery, materials stored in the factory and steps taken to ensure safety, if things are kept in the premises.",
            "e. Other relevant documents as required by the Inspector of Factories or his superior authority."
        ]
    },
    {
        id: "item-21",
        question: "What records required to be maintained in Factory?",
        answer: [
            "All Forms as prescribed under West Bengal Factories Rule, 1958. For example Form Form8, Form 9, Forml3, Form 15, Form 24, etc."
        ]
    },
    {
        id: "item-22",
        question: "Can records be maintained in Digital Platform?",
        answer: [
            "All statutory registers and records can be stored online and/or in Digital Platform. The registers and records so maintained shall be subject to scrutiny and inspection by authorities as and when required."
        ]
    },
    {
        id: "item-23",
        question: "Which returns required to be filed?",
        answer: [
            "Annual Return in Form No. 22",
            "Half Yearly Return in Form No. 23",
            "Quarterly Return in Form No. 23A",
            "Annual Return under the Payment of Wages Act 1936 (Form No. IV)",
            "Annual Return under the Maternity Benefit Act, if the factory is not covered under ESIC.",
            "Annual returns now can be uploaded through the portal of the Directorate."
        ]
    },
    {
        id: "item-24",
        question: "Is it mandatory to submit reports of accidents / dangerous occurrences",
        answer: [
            "Yes, It is absolutely mandatory to submit reports of accidents / dangerous occurrences in prescribed format and within prescribed time.",
            "These reports now can be uploaded through the portal of the Directorate."
        ]
    },
    {
        id: "item-25",
        question: "What are the notices to be displayed at or near the main entrance of the factory?",
        answer: [
            "Following notices are to be displayed amongst others at some conspicuous and convenient place at or near the main entrance of the factory:",
            "(i) Copy of the valid licence",
            "(ii) Abstract of the Factories Act, 1948 and the Rules made under.",
            "(iii) Abstract of the Payment of Wages Act, 1936 and the Rules made under.",
            "(iv) Abstract of the Maternity Benefit Act, 1961 and the Rules made thereunder.",
            "(v) Name and address of the Inspector and the certifying surgeon.",
            "(vi) Notice of period of works etc."
        ]
    },
    {
        id: "item-26",
        question: "Who is the Occupier of a factory?",
        answer: [
            "Occupier of a factory means the person who has ultimate control over the affairs of the factory. Provided that:",
            "(i) in the case of a firm or other association of individuals, any one of the individual partners or members thereof shall be deemed to be the occupier;",
            "(ii) in the case of a company, any one of the directors shall be deemed to be the occupier;",
            "(iii) in the case of a factory owned or controlled by the Central Government or any State Government, or any local authority, the person or persons appointed to manage the affairs of the factory by the Central Government, the State Government or the local authority, as the case may be, shall be deemed to be the occupier"
        ]
    },
    {
        id: "item-27",
        question: "What Are The Duties / Responsibilities Of The Occupier?",
        answer: [
            "Every occupier shall ensure, so far as is reasonably practicable, the health, safety and welfare of all workers while they are at work in the factory, including",
            "a. The Provision and maintenance of plant and systems of work in the factory that are safe and without risk to health",
            "b. The arrangement in the factory for ensuring safety and absence of risks to health in connection with the use, handling, storage and transport of articles and substances.",
            "c. The provision of such information, instruction, training and supervision as are necessary to ensure the health and safety of all workers at work.",
            "d. The maintenance of all places of work in the factory in a condition that is safe and without risks to health and the provision and maintenance of such means of access to, and egress from, such places that are safe and without risks.",
            "e. The provision, maintenance or monitoring of such working environment in the factory for the workers that is safe, without risks to health and adequate as regards facilities and arrangements for their welfare at work.",
            "f. Other responsibilities as per the provisions of the Factories Act 1948 and the West Bengal Factories Rules,1958, like preparing a written statement of his general policy with respect to the health and safety of the workers at work and the organisation and arrangements for the time being in force for carrying out that policy etc."
        ]
    },
    {
        id: "item-28",
        question: "Who is the \"worker\" under the Factories Act, 1948?",
        answer: [
            "\"Worker\" means a person employed, directly or by or through any agency (including a contractor) with or without the knowledge of the principal employer, whether for remuneration or not, in any manufacturing process or in cleaning any part of the machinery or premises used for a manufacturing process, or in any other kind of work incidental to, or connected with, the manufacturing process, or the subject of the manufacturing process."
        ]
    },
    {
        id: "item-29",
        question: "What are the obligations of the workers?",
        answer: [
            "No worker in a factory:",
            "a. Shall wilfully interfere with or misuse any appliance, convenience or other thing provided in a factory for the purposes of securing the health, safety or welfare of the workers therein",
            "b. Shall wilfully and without reasonable cause do anything likely to endanger himself or others, and",
            "c. Shall wilfully neglect to make use of any appliance or other thing provided in the factory for the purposes of securing the health or safety of the workers therein"
        ]
    },
    {
        id: "item-30",
        question: "What are the Right of the Workers?",
        answer: [
            "Every worker shall have the right to:",
            "(i) obtain from the occupier, information relating to workers' health and safety at work,",
            "(ii) get trained within the factory wherever possible, or, to get himself sponsored by the occupier for getting trained at a training centre or institute, duly approved by the Chief Inspector, where training is imparted for workers' health and safety at work,",
            "(iii) represent to the Inspector directly or through his representative in the matter of inadequate provision for protection of his health or safety in the factory"
        ]
    },
    {
        id: "item-31",
        question: "Which industries are considered to be Hazardous?",
        answer: [
            "As per the First Schedule of the Factories Act 1948"
        ]
    },
    {
        id: "item-32",
        question: "Who are the competent person as per the Factories Act, 1948?",
        answer: [
            "Competent person means a person or an institution recognised by the Chief Inspector for the purposes of carrying out tests, examinations and inspections required to be done in a factory under the provisions of this Act."
        ]
    }
];

export default function FaqAccordion() {
    return (
        <div className="min-h-screen bg-white p-8 pb-25">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <p className="text-4xl ml-5 text-gray-500">
                        Frequently Asked Questions
                    </p>
                    <a
                        href="/Images/faq_bengali.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-500 hover:text-cyan-600 text-md hover:underline cursor-pointer"
                    >
                        View FAQ in Bengali
                    </a>
                </div>

                {/* FAQ Accordion - Using map to render */}
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    {faqData.map((faq, index) => (
                        <AccordionItem
                            key={faq.id}
                            value={faq.id}
                            className={index === faqData.length - 1 ? "border-none" : "border-b border-gray-200"}
                        >

                            <TooltipProvider>

                                <Tooltip>
                                    <TooltipTrigger>

                                        <AccordionTrigger className="px-6 py-5 text-left hover:no-underline cursor-pointer">
                                            <span className="text-md font-semibold text-gray-900">
                                                {faq.question}
                                            </span>
                                        </AccordionTrigger>
                                    </TooltipTrigger>
                                    <TooltipContent className="absolute w-30">
                                        <p className="text-blue-800">click to expand</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <AccordionContent className="px-6 pb-5 text-gray-700">
                                <div>
                                    {faq.answer.map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}


                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}