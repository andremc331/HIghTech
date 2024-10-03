import React, { useState } from "react";
// import "../CSS/Historico.css";
import styled_Historico from "../styled/styled_Historico";
const{
  ContainerHistorico,
  BarraNavegacao,
  PeriodoSelector,
  PeriodoButton,
  Sidebar,
  SidebarContent,
  Item,
  WhiteBox,
  MealInfo,
  HomeContainer,
  Text,
  Icon
}=styled_Historico();

interface HistoricoProps {
  setPage: (
    page:
      | "bem-vindo"
      | "cadastro"
      | "info-pessoal"
      | "definicao-metas"
      | "termosdeuso"
      | "home"
      | "cardapio"
      | "historico"
      | "metas"
      | "configuracoes"
  ) => void;
}

const Historico: React.FC<HistoricoProps> = ({ setPage }) => {
  const [periodo, setPeriodo] = useState<"dia" | "semana" | "mes">("dia");

  return (
    <ContainerHistorico>
      <BarraNavegacao>
        <h1>Nome de usuário</h1>
      </BarraNavegacao>

      <Sidebar>
        <SidebarContent>
          <Item onClick={() => setPage("home")}>
            <Text>Home</Text>
            <Icon>🏠</Icon>
          </Item>
          <Item onClick={() => setPage("cardapio")}>
            <Text>Cardápio</Text>
            <Icon>⚙️</Icon>
          </Item>
          <Item onClick={() => setPage("historico")}>
            <Text>Histórico</Text>
            <Icon>🔍</Icon>
          </Item>
          <Item onClick={() => setPage("metas")}>
            <Text>Progresso</Text>
            <Icon>⚙️</Icon>
          </Item>
          <Item onClick={() => setPage("configuracoes")}>
            <Text>Configurações</Text>
            <Icon>⚙️</Icon>
          </Item>
        </SidebarContent>
      </Sidebar>

      <HomeContainer>
        <PeriodoSelector>
          <PeriodoButton
            className={periodo === "dia" ? "active" : ""}
            onClick={() => setPeriodo("dia")}
          >
            Dia
          </PeriodoButton>
          <span className="separador"></span>
          <PeriodoButton
            className={periodo === "semana" ? "active" : ""}
            onClick={() => setPeriodo("semana")}
          >
            Semana
          </PeriodoButton>
          <span className="separador"></span>
          <PeriodoButton
            className={periodo === "mes" ? "active" : ""}
            onClick={() => setPeriodo("mes")}
          >
            Mês
          </PeriodoButton>
        </PeriodoSelector>

        {periodo === "dia" && (
          <div className="historico-container">
            <WhiteBox>
              <MealInfo>
                <span className="meal-type">Almoço</span>
                <span className="meal-time">Horário: 12:20</span>
                <span className="meal-items">
                  <p>150g de frango grelhado</p>
                  <p>1 colher de arroz integral</p>
                  <p>25g de brócolis</p>
                  <p>Salada verde com azeite de oliva</p>
                </span>
              </MealInfo>
            </WhiteBox>

            <WhiteBox>
              <MealInfo>
                <span className="meal-type">Café da manhã</span>
                <span className="meal-time">Horário: 06:30</span>
                <span className="meal-items">
                  <p>2 fatias de pão integral</p>
                  <p>2 ovos mexidos</p>
                  <p>1 banana</p>
                  <p>1 colher de chá de xia</p>
                  <p>200ml de leite desnatado</p>
                </span>
              </MealInfo>
            </WhiteBox>
          </div>
        )}

        {periodo === "semana" && (
          <WhiteBox>
            <MealInfo>
              <p>Histórico da semana será exibido aqui...</p>
            </MealInfo>
          </WhiteBox>
        )}

        {periodo === "mes" && (
          <WhiteBox>
            <MealInfo>
              <p>Histórico do mês será exibido aqui...</p>
            </MealInfo>
          </WhiteBox>
        )}
      </HomeContainer>
    </ContainerHistorico>
  );
};

export default Historico;