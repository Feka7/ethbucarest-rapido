import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main style={{ backgroundColor: "#0C0124", padding: "2rem 6rem" }}>
      <div className="navbar flex justify-between items-center px-4 py-2">
        <div className="logo">
          <Image src="/Logo.png" alt="Logo" width={200} height={80} />
        </div>
        <div className="nav-links flex items-center scroll-behavior: smooth">
          <a
            href="#how"
            className="mx-7 font-medium text-white hover:text-sky-500"
          >
            How it works
          </a>
          <a
            href="#company"
            className="mx-7 font-medium text-white hover:text-sky-500"
          >
            Use Cases
          </a>
          <Link href="/app" className="enter-app-btn">Enter App</Link>
        </div>
      </div>
      <div className="text-white p-12 flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center items-start text-left md:p-8">
          <h1 className="text-5xl leading-normal font-bold mb-4">
            <span className="text-[#79DFFF]">R</span>eal-time{" "}
            <span className="text-[#79DFFF]">A</span>ccess{" "}
            <span className="text-[#79DFFF]">P</span>ayroll{" "}
            <span className="text-[#79DFFF]">I</span>ntegration for{" "}
            <span className="text-[#79DFFF]">D</span>AO{" "}
            <span className="text-[#79DFFF]">O</span>perations
          </h1>
          <p className="mb-6 leading-normal text-xl">
            Stream payments directly to departments with ENS domains and
            subdomains
          </p>
          <Link href="/app" className="enter-app-btn">Enter App</Link>
        </div>
        <div className="flex-1 flex justify-center items-center md:p-8">
          <Image
            src="/Image 5.png"
            alt="Image"
            width={400}
            height={200}
            className="float"
          />
        </div>
      </div>
      <div className="banner overflow-hidden flex items-center py-2.5 w-full mx-auto max-w-none mb-24 mt-11">
        <div className="animate-slide infinite-scroll flex object-contain">
          <Image
            src="/logobanner1.png"
            alt="logobanner1"
            width={180}
            height={80}
            className="mx-4"
          />
          <Image
            src="/logobanner2.png"
            alt="logobanner2"
            width={180}
            height={80}
            className="mx-4"
          />
          <Image
            src="/logobanner3.png"
            alt="logobanner3"
            width={180}
            height={80}
            className="mx-4"
          />
          <Image
            src="/logobanner4.png"
            alt="logobanner4"
            width={180}
            height={80}
            className="mx-4"
          />
          <Image
            src="/logobanner1.png"
            alt="logobanner1"
            width={180}
            height={80}
            className="mx-4"
          />
          <Image
            src="/logobanner2.png"
            alt="logobanner2"
            width={180}
            height={80}
            className="mx-4"
          />
          <Image
            src="/logobanner3.png"
            alt="logobanner3"
            width={180}
            height={80}
            className="mx-4"
          />
          <Image
            src="/logobanner4.png"
            alt="logobanner4"
            width={180}
            height={80}
            className="mx-4"
          />
          <Image
            src="/logobanner1.png"
            alt="logobanner1"
            width={180}
            height={80}
            className="mx-4"
          />
          <Image
            src="/logobanner2.png"
            alt="logobanner2"
            width={180}
            height={80}
            className="mx-4"
          />
          <Image
            src="/logobanner3.png"
            alt="logobanner3"
            width={180}
            height={80}
            className="mx-4"
          />
          <Image
            src="/logobanner4.png"
            alt="logobanner4"
            width={180}
            height={80}
            className="mx-4"
          />
        </div>
      </div>
      <div className="mt-26 text-center" id="how">
        <p className="text-5xl font-bold gradient-text">How it works</p>
        <div className="divider"></div>
      </div>
      <div className=" text-white p-10 flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center items-start text-left md:p-8">
          <Image
            unoptimized={true}
            src={"/map.gif"}
            width={80}
            height={80}
            alt="map"
          />
          <p className="mb-[10px] text-4xl font-bold">
            Seamless setup for DAOs
          </p>
          <p className="max-w-md font-semibold mt-4">
            Begin by mapping your DAO&apos;s departments to specific ENS subdomains,
            such as product.dao.eth or marketing.dao.eth. This one-time setup
            aligns your organizational structure with your payment streams.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center md:p-8">
          <Image src="/donnaschema.png" width={400} height={300} alt="work1" />
        </div>
      </div>
      <div className=" text-white p-12 flex flex-col md:flex-row">
        <div className="flex-1 flex justify-center items-center md:p-8">
          <Image src="/uomopay.png" width={350} height={300} alt="work2" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start text-left md:p-8">
          {/* INSERIRE gif */}
          <p className="mb-[10px] text-4xl font-bold">
            Department-specific streams
          </p>
          <p className="max-w-md font-semibold mt-4">
            Use Sablier to direct funds to each department&apos;s ENS subdomain.Set
            up streams based on your payroll schedule, whether it&apos;s for
            short-term projects or ongoing compensation.
          </p>
        </div>
      </div>
      <div className=" text-white p-12 flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center items-start text-left md:p-8">
          {/* INSERIRE gif */}
          <p className="mb-[10px] text-4xl font-bold">
            Dynamic ENS integration
          </p>
          <p className="max-w-md font-semibold mt-4">
            We leverage ENS to make payments easy to manage and remember.Instead
            of dealing with complex wallet addresses, funds are streamed to
            recognizable and memorable subdomains aligned with your DAO&apos;s
            structure.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center md:p-8">
          <Image src="/uomoens.png" width={400} height={300} alt="work3" />
        </div>
      </div>
      <div className="text-white p-12 flex flex-col md:flex-row">
        <div className="flex-1 flex justify-center items-center md:p-8">
          <Image src="/schemawoman.png" width={400} height={300} alt="work4" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start text-left md:p-8">
          {/* INSERIRE gif */}
          <p className="mb-[10px] text-4xl font-bold">Ownership flexibility</p>
          <p className="max-w-md font-semibold mt-4">
            As roles within your DAO evolve, easily redirect payment streams to
            new recipients under the same departmental subdomain, without any
            interruption. This flexibility ensures that your team continues to
            receive their earnings in real-time, even as the organization grows
            and changes.
          </p>
        </div>
      </div>
      <div className="text-white p-12 flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-center items-start text-left md:p-8">
          {/* INSERIRE gif */}
          <p className="mb-[10px] text-4xl font-bold">Withdraw anytime</p>
          <p className="max-w-md font-semibold mt-4">
            Employees or collaborators can withdraw their accumulated funds at
            any point from their department&apos;s subdomain. This real-time access
            to earnings empowers them with financial flexibility and security.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center md:p-8">
          <Image src="/daiwith.png" width={300} height={300} alt="work5" />
        </div>
      </div>
      <div className="mt-[50px] text-center" id="company">
        <p className="text-4xl font-bold gradient-text">
          Company/DAO perspective
        </p>
        <div className="divider"></div>
      </div>
      <div className="text-white grid grid-cols-3 gap-4 p-4 mb-[120px]">
        <div className="card w-96 glass hover:scale-105 transition-transform duration-300">
          <div className="card-body">
            <h2 className="card-title">Flexibility and efficiency: </h2>
            <p>optimize team compensation across all DAO verticals.</p>
          </div>
        </div>
        <div className="card w-96 glass hover:scale-105 transition-transform duration-300">
          <div className="card-body">
            <h2 className="card-title">Simplify administrative tasks:</h2>
            <p>
              reduce the burden with payments tied to ENS domains, not
              individual NFT streams.
            </p>
          </div>
        </div>
        <div className="card w-96 glass hover:scale-105 transition-transform duration-300">
          <div className="card-body">
            <h2 className="card-title">Adaptable ownership:</h2>
            <p>
              easily redirect streams as roles within your DAO change, ensuring
              uninterrupted payroll continuity.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[50px] text-center" id="recipient">
        <p className="text-4xl font-bold gradient-text">
          Recipient (Contributor) perspective
        </p>
        <div className="divider"></div>
      </div>
      <div className="text-white grid grid-cols-3 gap-4 p-4">
        <div className="card w-96 glass hover:scale-105 transition-transform duration-300">
          <div className="card-body">
            <h2 className="card-title">Real-time earning: </h2>
            <p>
              payments now move at a pace that matches the pace of web3
              projects!
            </p>
          </div>
        </div>
        <div className="card w-96 glass hover:scale-105 transition-transform duration-300">
          <div className="card-body">
            <h2 className="card-title">Personalized payment streams:</h2>
            <p>
              withdraw your salary directly to department-specific ENS
              subdomains.
            </p>
          </div>
        </div>
        <div className="card w-96 glass hover:scale-105 transition-transform duration-300">
          <div className="card-body">
            <h2 className="card-title">Adaptive compensation:</h2>
            <p>
              as your role in the DAO evolves, your payment stream adjusts
              seamlessly, ensuring you&apos;re compensated for your current
              contributions without interruption.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
