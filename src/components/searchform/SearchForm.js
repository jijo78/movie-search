import React, {PropTypes} from 'react';

const SearchForm = ({
    onSubmit,
    onClick
})=>(
    <section className="search">
        <form action="" className="search__form" role="search" onSubmit={onSubmit}>
            <fieldset>
                <label for="search" className="search__form--hidden">Find your movie</label>
                <input type="text" placeholder="Search for a movie..." name="name" className="search__input" />
                <img onClick={onClick} className='search__icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAL5SURBVGhD7ZjLq81RFMePNwOkkAEzMRKFjCQzUUJe+Q88ymOKgfIoN5KimHmFMJBXJCXKI1Ey8GZG8spj5vX53qxanX73Hqff2vuck9+nPoOzu3etvX+/39577V2rqKjIzgAcgX26f3UIg3Ah7sd7+BV/O9/hddyOM7HtBjcGu/AT+o438jmuwSHYUvriBqx/8s36EudiSxiF17CoYy9wD67C+Tgbl+BaPITvsf5/fuFu7IfZGIuPsb4jx3EyNkKdnYO30ceQZ3EgJkdv4hn65I9wKjaLJvtyrJ9bJzHpm1Hwq+iTnsehWIaJ+AR93E2YDE1sn+wcRj05vWlNeov9A6dhOFpi/er0EIdjJJPQ57iL4XvNTrQEmthJnhasR8sj52EYg/EjWvATmApVB6/Qcl3CMBahBZb/ssSWQbu95dJc0fwJQbWTBVZZkRrtU/p8LaeW6BBUAFpQ7dg5uI+Wc5caIvAryUo1ZEBVguW8oIayqFywgHIB5kBvwXLeUkNZtFf4gczCHGxEy6nPrDQq1f1AFmMO9qLlvKKGCHSys6Dr1JCB02g5D6shAh1PLajOEznwm+IWNUSwAy3oB0x9+NGGa/mkzvchKJAPrENRSrah5fqCuokJQRWoL7Hv/G1LwWhU5y3XQQxlNVpwuRRTsA8tx08cj6GoAvZv5TNOwEh0QeFrrKOYBF3Z+ERPcSRGMAO/o8V+g1GxC/Glg9Rb0smuDPpMv6GPG1bx9oSWXl3Z+KQqKnWeb/YaR+cMHRH8WzZvYNlLjYboFHcK65O/Rh2KxmFvaJ/Yio1uKLMMRjXYZtQJrr4DesIP8Bjq9lAFoGqnM+gXDO9b1GRX5337TUw+GKFLCO0rPnkzaok9gjax1Wl13v9NtsFoc9Rtx0UsekNF6rM6gEX7REsHY2gCL0OtbrrA0/2ujsqXUU9eBaBKnv7YG20xmCh6Gsww7DiqwbQr6nTRYMJK/JwUDUa3oB2JH4z2oCnYsaimW4HTu39VVFT8r9RqfwBAAmL01UIlNgAAAABJRU5ErkJggg==" />
            </fieldset>
        </form>
    </section>
)


export default SearchForm;