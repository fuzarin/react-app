import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./style.css"

const CardHero = ({ attribute, onClick }) => {
  const cardConfig = {
    agi: {
      name: "Agilidade",
      description:
        "Agilidade é um dos três atributos primários. Fornece velocidade de movimento, velocidade de ataque e armadura para todos os heróis. Os heróis de Agilidade também ganham dano de ataque por ponto de Agilidade.",
      imgSrc:
        "https://cdnb.artstation.com/p/assets/images/images/012/438/899/large/alexandra-bisson-002-agi.jpg?1534811827",
    },
    str: {
      name: "Força",
      description:
        "Força é um dos três atributos primários. Fornece vida, regeneração de vida e resistência mágica para todos os heróis. Os heróis de Força também ganham dano de ataque por ponto de Força.",
      imgSrc:
        "https://cdnb.artstation.com/p/assets/images/images/012/438/897/large/alexandra-bisson-001-str.jpg?1534811821",
    },
    int: {
      name: "Inteligência",
      description:
        "Inteligência é um dos três atributos primários. Fornece mana, regeneração de mana e amplificação mágica para todos os heróis. Os heróis de Inteligência também ganham dano de ataque por ponto de Inteligência.",
      imgSrc:
        "https://cdnb.artstation.com/p/assets/images/images/012/438/901/large/alexandra-bisson-003-int.jpg?1534811832",
    },
  };
  return (
    <Card className="boxCardHero" sx={{width: '320px'}}>
      <CardMedia
        component="img"
        height="140"
        image={cardConfig[attribute].imgSrc}
        alt={cardConfig[attribute].name}
      />
      <CardContent>
        <Typography className="textCardHero" gutterBottom variant="h5" component="div">
          <strong>{cardConfig[attribute].name}</strong>
        </Typography>
        <Typography className="textCardHero" variant="body2" color="text.secondary">
          {cardConfig[attribute].description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onClick} className="buttonSeeMore" variant="outlined" size="small">
          Ver Heróis
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardHero;
