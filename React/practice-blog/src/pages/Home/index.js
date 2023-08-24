

import Bar from "@/components/Bar";

function Home() {
  return (
    <div>
      <Bar
        title='Frameworks'
        xData={['React', 'Vue', 'Angular']}
        yData={[50, 30, 20]}
        style={{ width: '500px', height: '400px' }}
      />
    </div>
  );
}

export default Home;
