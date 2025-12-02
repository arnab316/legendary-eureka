import React from "react";
import { Link } from "react-router-dom";
import { GoDash } from "react-icons/go";

const EmergencyResponseProcedure: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-700">
      {/* Hero Section */}
      <div className="relative h-52 bg-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url('/Images/about-us-banner-img.avif')" }}
        />
        <div className="relative h-full w-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Emergency Response Procedure
          </h1>
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span className="text-cyan-400">Emergency Response Procedure</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-8 leading-relaxed">
        <p>
          An emergency occurring at any installation can lead to injury, loss of
          life or damage to property along with impact on environment. This may
          be within the installation or may be both inside and outside of it.
          The reason for development of such emergency may be due to abnormal
          functioning of the devices within the installation or caused by third
          party or by natural factors. If the emergency becomes uncontrollable
          and may lead to damage to life and property in the premises and its
          neighborhood, it may be defined as a "disaster".
        </p>

        <section>
          <span className="text-lg md:text-xl font-bold text-gray-900 mb-1 inline-block">
            OBJECTIVES OF THE EMERGENCY RESPONSE PROCEDURE
          </span>
          <div className="flex text-blue-600 mb-4">
            <GoDash />
            <GoDash />
          </div>
          <ul className="list-none space-y-1">
            <li>A. To control, localize and eliminate the hazards in minimum time.</li>
            <li>B. To minimize damage to property and environment.</li>
            <li>C. To render medical treatment to the injured quickly.</li>
            <li>D. To speed up the rescue and head count operation.</li>
            <li>E. To safeguard others by timely evacuation.</li>
            <li>
              F. To ensure safety of the installation and persons before they
              re-enter and resume the work.
            </li>
            <li>G. To restore normalcy as quickly as possible.</li>
          </ul>
        </section>

        <section>
          <span className="text-lg md:text-xl font-bold text-gray-900 mb-1 inline-block">
            EMERGENCY CATEGORISATION
          </span>
          <div className="flex text-blue-600 mb-4">
            <GoDash />
            <GoDash />
          </div>
          <p>
            Emergencies are categorized to assess the likely severity of
            emergencies and resources required.
          </p>
          <p className="mt-2">
            <strong>Category I:</strong> Minor emergencies, which may or may not
            cause damage or injuries and which are not likely to develop to a
            magnitude that warrants evacuation and can be controlled effectively
            using the resources available within the factory.
          </p>
          <p className="mt-2">
            <strong>Category II:</strong> Major emergencies which may or may not
            cause damage or injuries within the plant but are likely to develop
            to a magnitude that warrants evacuation and can be controlled
            effectively using factory resources.
          </p>
          <p className="mt-2">
            <strong>Category III:</strong> Major emergencies which may cause
            material damage or injuries and impact the entire factory. Such
            emergencies may require assistance from nearby industries or fire
            brigades.
          </p>
          <p className="mt-2">
            <strong>Category IV:</strong> Major emergencies with impact on a
            large geographical area requiring coordination with District
            Emergency Authorities.
          </p>
          <p className="mt-2">
            <strong>Category V:</strong> Emergencies occurring outside the plant
            during transportation requiring assistance from external agencies
            and coordination with District Authorities.
          </p>
        </section>

        <section>
          <span className="text-lg md:text-xl font-bold text-gray-900 mb-1 inline-block">
            AN EMERGENCY SITUATION CAN ARISE DUE TO
          </span>
          <div className="flex text-blue-600 mb-4">
            <GoDash />
            <GoDash />
          </div>
          <ul className="list-none space-y-1">
            <li>1. Fire</li>
            <li>2. Explosion</li>
            <li>3. Serious Accident</li>
            <li>4. Toxic Release</li>
            <li>5. Major Natural Calamity (Flood, Earthquake, etc.)</li>
          </ul>
        </section>

        <section>
          <span className="text-lg md:text-xl font-bold text-gray-900 mb-1 inline-block">
            GENERAL GUIDELINE
          </span>
          <div className="flex text-blue-600 mb-4">
            <GoDash />
            <GoDash />
          </div>
          <p className="text-gray-700">
            All persons coming to site after emergency declaration must use specified gate.
            They should also check with security the location of emergency point and act according
            to instruction of the site head. Normally no visitors are allowed to enter site at the
            time of emergency.
          </p>

          <ul className="list-none mt-4 space-y-1 text-gray-700">
            <li>
              <strong>TYPICAL ALARM SIREN SYSTEM</strong>
            </li>
            <li>
              <strong>FIRE ALARM SIREN:</strong> 5 Seconds "on" and 5 Second "off" (5 Times)
            </li>
            <li>
              <strong>TOXIC RELEASE SIREN:</strong> 5 Seconds "on" and 5 Second "off" (3 Times)
            </li>
            <li>
              <strong>EMERGENCY DECLARATION SIREN:</strong> 30 Seconds "on" and 5 Second "off" (2 Times)
            </li>
            <li>
              <strong>ALL CLEAR SIREN:</strong> 30 Seconds "on" at a stretch (1 Time)
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h3 className="text-gray-600 underline mb-2 font-semibold">
            PERSON DISCOVERING INCIDENT
          </h3>
          <ol className="list-decimal list-inside space-y-1 text-gray-600">
            <li>Inform nearest available in-charge / Officer.</li>
            <li>If not available, raise fire alarm.</li>
            <li>Shout loudly to draw attention of other colleagues</li>
            <li>
              Tackle fire/emergency with colleagues / others who are trained in Fire
              fighting/ emergency.
            </li>
            <li>Direct Fire Squad to the spot.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h3 className="text-gray-700 underline mb-2 font-semibold">
            ACTION BY TEMPORARY INCIDENT CONTROLLER
          </h3>
          <ul className="list-decimal list-inside space-y-1 text-gray-700">
            <li>Rush to the spot.</li>
            <li>Raise normal fire alarm if not raised. Depute a person to guide Fire Squad.</li>
            <li>Ask other Officers / Supervisors to take over as temporary incident controller.</li>
            <li>Organize crash shutdown of critical operations.</li>
            <li>Contact and brief Site Head about the latest scenario.</li>
            <li>Carry out all Emergency functions of Site Head till he arrives.</li>
            <li>Instruct non-essential staff to assemble at Assembly point.</li>
            <li>Arrange roll call at Assembly point and report missing persons to Forward Control Center.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-gray-700 underline mb-2 font-semibold">
            ACTION BY SITE HEAD
          </h3>
          <ul className="list-decimal list-inside space-y-1 text-gray-700">
            <li>Rush to the spot for assessment of situation.</li>
            <li>Ensure control / isolation of Hazard source.</li>
            <li>Assess and keep contact with Business Head.</li>
            <li>Monitor progress of Emergency action.</li>
            <li>Institute search for missing persons.</li>
            <li>Ensure evacuation of non-essential staff.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-gray-700 underline mb-2 font-semibold">
            EMERGENCY CONTROL CENTRE
          </h3>
          <p className="text-gray-700 mb-2">
            This is a command post which serves as a liaison for co-ordination of emergency Services. 
            Site Head or his nominee should take control of this office during emergency.
          </p>
          <p className="font-semibold text-gray-700 mb-1">Essential items for Control Centre:</p>
          <ul className="list-inside space-y-1 text-gray-700">
            <li>a. Sufficient telephones for communication.</li>
            <li>b. Telephone numbers of all relevant persons.</li>
            <li>c. Site map.</li>
            <li>d. At least 2 / 3 senior officials to assist Site Head.</li>
            <li>e. Emergency requirement of PPE.</li>
            <li>f. MSDS of hazardous chemicals used in chemical plant.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-gray-700 underline mb-2 font-semibold">
            IN-HOUSE FACILITIES
          </h3>
          <ul className="list-decimal list-inside space-y-1 text-gray-700">
            <li>Communication systems (including Public Address System)</li>
            <li>Emergency Siren</li>
            <li>Transport for evacuation of plant personnel</li>
            <li>Assembly area</li>
            <li>First Aid facility including ambulance at site</li>
            <li>Fire Fighting and rescue arrangements</li>
            <li>Security arrangements</li>
            <li>Breathing air sets and facilities for bottling of breathing air.</li>
            <li>Laboratory facilities</li>
          </ul>
        </section>

        <section>
          <span className="text-lg md:text-xl font-bold text-gray-900 mb-1 inline-block">
            ROLE OF SITE HEAD / PERSONNEL MANAGER AS INCIDENT CONTROLLER
          </span>
          <div className="flex text-blue-600 mb-4">
            <GoDash />
            <GoDash />
          </div>
        </section>

        <section className="mt-8">
          <h3 className="text-gray-700 underline mb-2 font-semibold">
            A. Fire
          </h3>
          <ul className="list-decimal list-inside space-y-1 text-gray-700">
            <li>Rush to the spot and take charge of rescue and control work.</li>
            <li>Assess emergency and instruct all nearby plants in danger to shutdown.</li>
            <li>Arrange isolation of electrical mains except that of water pump required for water supply.</li>
            <li>Take charge of Control Center (CC).</li>
            <li>Activate Major Emergency Procedure to ensure personnel safety and minimize damage to plant, material, and environment.</li>
            <li>Evacuate non-essential employees to Assembly Point by confirming wind direction.</li>
            <li>Execute rescue/firefighting operations and search for casualties; ensure CC is manned by senior personnel at all times.</li>
            <li>Ensure outside emergency forces and key personnel are called in.</li>
            <li>When situation is under control, announce termination of emergency.</li>
            <li>Provide facts and materials for the enquiry.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-gray-700 underline mb-2 font-semibold">
            B. Explosion
          </h3>
          <ul className="list-decimal list-inside space-y-1 text-gray-700">
            <li>Ensure Site Head/Manager personnel rushes to the spot and take charge.</li>
            <li>Cordon off the area, shut down plant, and evacuate all to Assembly Point.</li>
            <li>Organize preventive measures such as removal of dangerous materials to safer locations.</li>
            <li>Guide fire squad for rescue and search; arrange medical care for injured and finalize casualty list.</li>
            <li>Ensure wreckage and debris are left untouched except for rescue or recovery.</li>
            <li>Confirm no possibility of secondary explosion before allowing entry.</li>
            <li>If post-explosion fire is likely to spread, contain it by isolating affected areas and cooling surroundings.</li>
            <li>Take charge of Control Center (CC).</li>
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-gray-700 underline mb-2 font-semibold">
            C. Toxic Release
          </h3>
          <ul className="list-decimal list-inside space-y-1 text-gray-700">
            <li>Identify the source of leak, if possible.</li>
            <li>Determine precise location, materials involved, quantity, and wind direction.</li>
            <li>Take charge of the site and contain the leak by closing isolating valves or switching off machinery; transfer material if isolation is not possible.</li>
            <li>Rush affected persons for medical care.</li>
            <li>Shut down plants in danger and divert vehicles in the downwind direction; cordon off the area.</li>
            <li>Assess effects in terms of fire, explosion, toxicity, and take preventive steps.</li>
            <li>Go to CC, inform about emergency, potential escalation, and evacuate all persons to Assembly Point. Arrange roll call and search for missing persons.</li>
            <li>Fire services to perform specific tasks only; they must not fight toxic release alone.</li>
            <li>When situation is controlled, inform CC to announce termination of emergency.</li>
            <li>Record all possible information about the toxic release and casualties.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-gray-700 underline mb-2 font-semibold">
            D. Natural Calamity
          </h3>
          <ul className="list-decimal list-inside space-y-1 text-gray-700">
            <li>Actions are almost identical to those of Explosion.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-gray-700 underline mb-2 font-semibold">
            E. Serious Accident
          </h3>
          <ul className="list-decimal list-inside space-y-1 text-gray-700">
            <li>Ensure Site Head/Manager personnel rush to the spot when siren is sounded.</li>
            <li>Take charge of site and cordon off the area.</li>
            <li>Organize search, rescue, first-aid, and removal of injured to safe areas.</li>
            <li>Call for medical and fire squad/brigade help if needed.</li>
            <li>Check and finalize casualty list.</li>
            <li>Record all relevant information.</li>
          </ul>
        </section>

        <section className="mt-8">
          <ul className="list-decimal list-inside space-y-1 text-gray-700">
            <p><span className="underline">ASSEMBLY POINTS </span>- All persons within site and not allotted with any specific assignment for emergency tackling, will have to go to declared "assembly point".
               In sites handling toxic chemicals, there should be at least two assembly points. 
              <span className="underline">TERMINATION OF EMERGENCY</span> Only Site Head or his nominee is authorized to decide about termination of emergency and will advice to operate all clear siren.</p>
          </ul>
        </section>

        <section>
          <span className="text-lg md:text-xl font-bold text-gray-900 mb-1 inline-block">
            ROLL OF FIRE AND SECURITY SERVICES
          </span>
          <div className="flex text-blue-600 mb-4">
            <GoDash />
            <GoDash />
          </div>
        </section>

        <section className="mt-8">
          <h3 className="text-gray-700 mb-2 font-semibold">A. SAFETY OFFICER</h3>
          <ul className="list-decimal list-inside space-y-1 text-gray-700">
            <li>Rush to spot, ensure overall safety of emergency operations.</li>
            <li>Standby with Incident Controller at CC.</li>
            <li>Facilitate communication from CC.</li>
            <li>Contact member of Emergency Task Force for service.</li>
            <li>Arrange safety equipment.</li>
            <li>Assist evacuation.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-gray-700 mb-2 font-semibold">B. SECURITY OFFICER</h3>
          <ul className="list-decimal list-inside space-y-1 text-gray-700">
            <li>Take control of entry gates.</li>
            <li>Do not allow visitors to enter site till emergency exists.</li>
            <li>Allow free movement of emergency vehicles like external fire brigade, etc.</li>
            <li>Tackle gathering of outsiders at gates.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-gray-700 mb-2 font-semibold">C. EMERGENCY TASK FORCE</h3>
          <p className="text-gray-700">
            There should be declared emergency task force members for:
          </p>
          <ul className="list-decimal list-inside space-y-1 text-gray-700">
            <li>Fire fighting</li>
            <li>Rescue</li>
            <li>First aid</li>
          </ul>
          <p className="text-gray-700">
            They should be given adequate training in their respective field and will perform in case of emergency.
          </p>
        </section>

        <section className="mt-8">
          <h3 className="text-gray-700 mb-2 font-semibold">D. MEDICAL OFFICER</h3>
          <ul className="list-decimal list-inside space-y-1 text-gray-700">
            <li>Rush to Medical Centre and organize emergency medical services.</li>
            <li>Ensure that an ambulance is rushed to incident area.</li>
            <li>Ascertain nature/number of casualties.</li>
            <li>Receive and treat casualties, arrange quick transfer to outside hospitals if required.</li>
            <li>Inform Control Centre on magnitude of injury and their identity.</li>
            <li>If Medical Centre has to be evacuated due to toxic release effect, shift to other location with advice from CC.</li>
            <li>Contact CC and obtain assistance for managerial supervision.</li>
            <li>Medical Centre will be assisted by trained first aiders.</li>
          </ul>
        </section>

        <section>
          <span className="text-lg md:text-xl font-bold text-gray-900 mb-1 inline-block">
            ENGINEERING FUCTION
          </span>
          <div className="flex text-blue-600 mb-4">
            <GoDash />
            <GoDash />
          </div>
        </section>

        <section className="mt-8">
          <h3 className="text-gray-700 underline mb-2 font-semibold">ENGINEERING MANAGER</h3>
          <ol className="list-decimal list-inside space-y-1 text-gray-700">
            <li>Rush to the spot.</li>
            <li>Obtain all necessary information regarding emergency to provide engineering requirements.</li>
            <li>Mobilize resources in engineering team.</li>
            <li>Be available at Control Center (CC).</li>
          </ol>
        </section>

        <section className="mt-8">
          <h3 className="text-gray-700 underline mb-2 font-semibold">PERSONNEL FUNCTION</h3>
          <ol className="list-decimal list-inside space-y-1 text-gray-700">
            <li>Obtain all necessary information regarding emergency, particularly pertaining to the function group.</li>
            <li>Get clearance from Site Head for conveying declaration of major emergency to Civic Authorities.</li>
            <li>Assess areas expected to be affected by the emergency, particularly outside the works.</li>
            <li>Assess and organize nature of assistance required from Civic Authorities and Police.</li>
            <li>Standby with Site Head and assist in contacting Civic Authorities, external emergency services, and communicating to surrounding residents through police force.</li>
            <li>Liaise with Civic Authorities.</li>
            <li>Issue authorities statements and handle media personnel after clearance from Site Head or Business Head.</li>
            <li>Deal with casualty information.</li>
            <li>Extend administrative support to Medical Centre.</li>
          </ol>
        </section>

        <section className="mt-8">
          <h3 className="text-gray-700 underline mb-2 font-semibold">SITE EVACUATION</h3>
          <ol className="list-decimal list-inside space-y-1 text-gray-700">
            <li>If incident goes out of control, Site Head will advise site evacuation.</li>
            <li>Use declared gate route as Emergency Escapes.</li>
            <li>Arrange vehicles for evacuation if needed.</li>
          </ol>
        </section>

        <section>
          <span className="text-lg md:text-xl font-bold text-gray-900 mb-1 inline-block">
            LIST OF EMERGENCY SERVICES – EXTERNAL
          </span>
          <div className="flex text-blue-600 mb-4">
            <GoDash />
            <GoDash />
          </div>
        </section>

        <section className="max-w-4xl mb-10 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold w-16">Sl.</th>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold">Outside Board</th>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold w-32">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 text-gray-600">1.</td>
                  <td className="px-4 py-3 text-gray-700">State Fire Service</td>
                  <td className="px-4 py-3 text-gray-400">----</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">2.</td>
                  <td className="px-4 py-3 text-gray-700">Local Municipality/ Corporation</td>
                  <td className="px-4 py-3 text-gray-400">----</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">3.</td>
                  <td className="px-4 py-3 text-gray-700">For Ambulance</td>
                  <td className="px-4 py-3 text-gray-400">----</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">4.</td>
                  <td className="px-4 py-3 text-gray-700">Local Police station</td>
                  <td className="px-4 py-3 text-gray-400">----</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">5.</td>
                  <td className="px-4 py-3 text-gray-700">Nursing home</td>
                  <td className="px-4 py-3 text-gray-400">----</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">6.</td>
                  <td className="px-4 py-3 text-gray-700">Hospital</td>
                  <td className="px-4 py-3 text-gray-400">----</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">7.</td>
                  <td className="px-4 py-3 text-gray-700">Sub-Divisional Officer (SDO)</td>
                  <td className="px-4 py-3 text-gray-400">----</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">8.</td>
                  <td className="px-4 py-3 text-gray-700">Inspector of Factories</td>
                  <td className="px-4 py-3 text-gray-400">----</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">9.</td>
                  <td className="px-4 py-3 text-gray-700">Chief Inspector of Factories</td>
                  <td className="px-4 py-3 text-gray-400">----</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">10.</td>
                  <td className="px-4 py-3 text-gray-700">State Pollution Control Board, Local unit</td>
                  <td className="px-4 py-3 text-gray-400">----</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">11.</td>
                  <td className="px-4 py-3 text-gray-700">State Pollution Control Board Member Secretary</td>
                  <td className="px-4 py-3 text-gray-400">----</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">12.</td>
                  <td className="px-4 py-3 text-gray-700">Jt. Chief Controller of Explosive</td>
                  <td className="px-4 py-3 text-gray-400">----</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">13.</td>
                  <td className="px-4 py-3 text-gray-700">District Magistrate</td>
                  <td className="px-4 py-3 text-gray-400">----</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">14.</td>
                  <td className="px-4 py-3 text-gray-700">SD PO</td>
                  <td className="px-4 py-3 text-gray-400">----</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">15.</td>
                  <td className="px-4 py-3 text-gray-700">Supd. Of Police</td>
                  <td className="px-4 py-3 text-gray-400">----</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmergencyResponseProcedure;