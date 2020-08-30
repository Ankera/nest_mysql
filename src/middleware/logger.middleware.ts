export function logger(req: any, res: any, next: () => void) {
    console.log("func middleware");
    next();
}