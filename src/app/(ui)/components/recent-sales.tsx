import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const data = [
    { index: 1, screen: "start", views: 13, exits: 9, dropOffRate: "69%" },
    { index: 2, screen: "marketing-channels", views: 6, exits: 3, dropOffRate: "50%" },
    { index: 1, screen: "start", views: 13, exits: 9, dropOffRate: "69%" },
    { index: 2, screen: "marketing-channels", views: 6, exits: 3, dropOffRate: "50%" },
    { index: 1, screen: "start", views: 13, exits: 9, dropOffRate: "69%" },
    { index: 2, screen: "marketing-channels", views: 6, exits: 3, dropOffRate: "50%" },
    { index: 1, screen: "start", views: 13, exits: 9, dropOffRate: "69%" },
    { index: 2, screen: "marketing-channels", views: 6, exits: 3, dropOffRate: "50%" },
    { index: 1, screen: "start", views: 13, exits: 9, dropOffRate: "69%" },
    { index: 2, screen: "marketing-channels", views: 6, exits: 3, dropOffRate: "50%" },
];

export function RecentSales() {
    return (
        <Table className="min-w-1/2">
            <TableHeader>
                <TableRow className="*:p-2">
                    <TableHead>#</TableHead>
                    <TableHead>Screens</TableHead>
                    <TableHead>Screen Views</TableHead>
                    <TableHead>Exits</TableHead>
                    <TableHead>Drop-off Rate</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item, idx) => (
                    <TableRow key={idx} className="*:p-2">
                        <TableCell>{item.index}</TableCell>
                        <TableCell>{item.screen}</TableCell>
                        <TableCell>{item.views}</TableCell>
                        <TableCell>{item.exits}</TableCell>
                        <TableCell>{item.dropOffRate}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
