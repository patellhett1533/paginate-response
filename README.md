# paginate-response

npm package for converting response data to a paginated response in Node.js with Express.js and MongoDB

## Installation

Install paginate-response with npm

```bash
  npm install paginate-response
```

## Usage/Examples

// put where model schema code is

```javascript
import paginate from "paginate-response";

...

const adminSchema = new mongoose.Schema({
    ...
})

adminSchema.plugin(paginate);

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
```

// create of paginate function

```javascript
//admin.service.ts

import QueryString from "qs";
...

const queryAdmins = async (
  filter: Pick<QueryString.ParsedQs, "name">,
  options: Pick<QueryString.ParsedQs, "sortBy" | "limit" | "page" | "search">
) => {
  const admins = await Admin.paginate(filter, options);
  return admins;
};

...
```

// usage of paginate function

```javascript
// admin.controller.ts

import adminService from "./../services/admin.service";
...

const getAdmin = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ["name"]);
  const options = pick(req.query, ["sortBy", "limit", "page", "search"]);
  const result = await adminService.queryAdmins(filter, options);
  res.status(httpStatus.OK).send(result);
});

...
```

## Output

```javascript
{
    "results": [
        {
            ...
        },
        ...
    ],
    "page": 1,
    "limit": 10,
    "totalPages": 1,
    "totalResults": 2
}
```

## Usage in Api

in api we can pass options as a query

in this case we can search by name because we pass name in filter, if we want to more filter like email, alias,etc then we pass all parameter in filter.

now, option is for pagination,

- a sortBy option is for sorting data assending or descending order.

```javascript
const res = fetch("BASE_URL/admin?sortBy=asc", { method: "GET" });
```

- a limit is for how much data comes in one page

```javascript
const res = fetch("BASE_URL/admin?limit=10", { method: "GET" });
```

- a page option is a represent current page if we want to go to 2nd page then

```javascript
const res = fetch("BASE_URL/admin?page=2", { method: "GET" });
```

- a search option is for we can filter data by field which we set in filter

```javascript
const res = fetch("BASE_URL/admin?search=xyz", { method: "GET" });
```

## Tech Stack

**Server:** Node, Express

**Databse:** MongoDB

## Authors

- [@patellhett](https://www.github.com/patellhett1533)

## License

[MIT](https://choosealicense.com/licenses/mit/)
