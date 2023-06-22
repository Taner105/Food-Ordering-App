import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import Image from "next/image";

function createData(
  orderId: string,
  name: string,
  address: string,
  price: number
) {
  return { orderId, name, address, price };
}

const rows = [createData("63107f5559...", "Taner Aydoğan", "Bandırma", 18)];

const Order = () => {
  return (
    <Container
      sx={{
        minHeight: "calc(100vh - 415px)",
        mb: 5,
      }}
    >
      <Box mt={5}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead sx={{ bgcolor: "secondary.main", color: "#fff" }}>
              <TableRow sx={{ color: "#fff" }}>
                <TableCell sx={{ fontWeight: "bold", color: "#fff" }}>
                  ORDER ID
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", color: "#fff" }}
                  align="right"
                >
                  CUSTOMER
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", color: "#fff" }}
                  align="right"
                >
                  ADDRESS
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", color: "#fff" }}
                  align="right"
                >
                  TOTAL
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    cursor: "pointer",
                    ":hover": {
                      bgcolor: "primary.main",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    component="th"
                    scope="row"
                  >
                    {row.orderId}
                  </TableCell>

                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.address}</TableCell>
                  <TableCell align="right">${row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 10,
          bgcolor: "primary.main",
          p: 4,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "30px",
              width: "30px",
            }}
          >
            <Image
              src="/orderImage/paid.png"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Typography>Payment</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            className="circle pulse "
            sx={{
              position: "relative",
              height: "30px",
              width: "30px",
              animation: "paused",
            }}
          >
            <Image
              src="/orderImage/bake.png"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Typography>Preparing</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "30px",
              width: "30px",
            }}
          >
            <Image
              src="/orderImage/bike.png"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Typography>On the way</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "30px",
              width: "30px",
            }}
          >
            <Image
              src="/orderImage/delivered.png"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Typography>Delivered</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Order;
