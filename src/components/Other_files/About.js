import Title from "./../Header/Title.js";
import imgtoUse from "./../../images/Band Members.png";
import "./About.css";
export default function About() {
  return (
    <div>
      <Title />
      <h2 className="abouth">About</h2>
      <div className="container about">
        <div>
          <img src={imgtoUse} alt="brand_member" className="aboutimg" />
        </div>
        <div className="ms-5 mt-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quo
          autem, minima consequatur fugit laboriosam dicta architecto maiores
          officia quibusdam maxime expedita assumenda quidem vel iste facere
          voluptates, voluptatum ad? Harum omnis itaque doloremque fugit totam
          labore temporibus placeat in, vitae minima quisquam assumenda eveniet
          aspernatur eos. Tempora consectetur cumque earum esse asperiores in
          sed recusandae pariatur voluptate numquam magnam a modi vel maxime
          repellendus accusantium deleniti dicta ea officia perferendis, nihil
          repudiandae neque. Perspiciatis rerum, modi quod dolore blanditiis
          recusandae aliquid quam earum necessitatibus. Perferendis rerum
          quaerat vel, neque natus eos, explicabo eaque similique esse sit
          placeat magnam incidunt aperiam, blanditiis consectetur eligendi sunt.
          Numquam, corporis velit? Natus, officiis! Saepe asperiores deserunt
          aut porro rem vel fugit dicta! Rem temporibus, voluptates dolorum
          labore architecto, reprehenderit quod voluptatibus obcaecati corrupti
          ut dolore tempore similique eius nam voluptatum a exercitationem
          placeat atque animi reiciendis nemo? Voluptatem, nihil. Inventore
          voluptatum aspernatur quisquam provident dolor, dolorum iste quaerat
          ex dicta error fuga sed. Ratione rerum natus facere temporibus debitis
          aspernatur laudantium minus ipsam, tempore, porro eos recusandae,
          consectetur quod maiores. Et, voluptatum officiis nisi, a repudiandae
          officia, excepturi id eos quos laudantium possimus eum voluptates
          quibusdam necessitatibus. Autem, ducimus, itaque quidem, delectus
          repellendus illum numquam obcaecati voluptatibus saepe eius possimus
          repudiandae labore accusamus dolorum exercitationem dignissimos.
          Accusamus minus harum dolore beatae libero cumque eos sint explicabo
          excepturi ipsa suscipit delectus ab, aliquam deserunt vero similique
          aperiam assumenda consequuntur saepe quidem, nemo itaque. Tempore odio
          ut dolore quibusdam accusamus ratione officia, suscipit aut et?
        </div>
      </div>
    </div>
  );
}
