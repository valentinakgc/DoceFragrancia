import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (

    <Drawer>
      <Drawer.Screen
        name="index" 
        options={{
          drawerLabel: "Home",
          title: "Bem-vindo",
        }}
      />

      <Drawer.Screen
        name="telaA" 
        options={{
          drawerLabel: "Tela A",
          title: "Tela A",
          drawerItemStyle: { height: 0 } //não mostra no drawer
        }}
      />

      <Drawer.Screen
        name="telaB" 
        options={{
          drawerLabel: "Tela B",
          title: "Tela B",
          drawerItemStyle: { height: 0 } //não mostra no drawer
        }}
      />

<Drawer.Screen
        name="telaC" 
        options={{
          drawerLabel: "Finalizado",
          title: "Cadastro concluído",
        }}
      />
    </Drawer>
  );
}