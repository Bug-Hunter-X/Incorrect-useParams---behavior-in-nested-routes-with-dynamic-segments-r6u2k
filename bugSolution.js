The solution involves accessing the parent route's parameters via the `useLocation` hook and accessing its `pathname` property to manually extract the needed values.  Then, the parent parameter is used for data fetching and other aspects. 

```javascript
import { useLocation, useParams } from 'react-router-dom';

function ChildPage() {
  const { childId } = useParams();
  const location = useLocation();
  const pathname = location.pathname;
  const parentId = pathname.split('/')[1]; // Extract parentId from pathname

  // Now you have both parentId and childId
  // ...fetch data using parentId and childId...
  return (
    <div>Child Page: parentId={parentId}, childId={childId}</div>
  );
}
```
This ensures that both parent and child parameters are correctly accessed and used within the `ChildPage` component, resolving the issue.