<p align="center">React.js Template<div>

<br/>
<br/>

<h3>Dependencies</h3>

- ["@testing-library/jest-dom": "^4.2.4"]()
- [@testing-library/react": "^9.3.2]()
- [@testing-library/user-event": "^7.1.2]()
- [prop-types]()
- [react]()
- [react-dom]()
- [react-router-dom]()
- [react-scripts]()

<br/>

<h3>Dev Dependencies</h3>

- [@commitlint/cli: "^11.0.0"](),
- [@commitlint/config-conventional: "^11.0.0"](),
- [@yarnpkg/pnpify": "^2.2.1"]()
- [conventional-changelog-conventionalcommits": "^4.4.0"]()
- [eslint": "^7.9.0"]()
- [eslint-config-airbnb": "^18.2.0"]()
- [eslint-config-prettier": "^6.11.0"]()
- [eslint-import-resolver-node": "^0.3.4"]()
- [eslint-plugin-import": "^2.22.0"]()
- [eslint-plugin-import-helpers": "^1.1.0"]()
- [eslint-plugin-jest": "^24.0.2"]()
- [eslint-plugin-jsx-a11y": "^6.3.1"]()
- [eslint-plugin-react": "^7.20.6"]()
- [eslint-plugin-react-hooks": "^4.1.2"]()
- [husky": "^lint-staged": "^10.4.0"]()
- [prettier": "^2.1.2"]()
- [pretty-quick": "^3.0.2"]()
- [react-hooks": "^1.0.1]()


<br/>
<hr/>
<br/>

<h3>Architecture</h3>

```markdown
- src/
--- domain/
----- User/
------- Profile/
------- Avatar/
----- Message/
------- MessageItem/
------- MessageList/
----- Payment/
------- PaymentForm/
------- PaymentWizard/
------- services/
--------- Currency/
----------- index.js
----------- test.js
----- Error/
------- ErrorMessage/
------- ErrorBoundary/
------- services/
--------- ErrorTracking/
----------- index.js
----------- test.js
--- components/
--- hooks/
--- context/
--- services/
----- Format/
------- Date/
--------- index.js
--------- test.js
```

<br/>

<strong>Rules</strong>
- Max three level components

[React Folder Structure](https://www.robinwieruch.de/react-folder-structure)
