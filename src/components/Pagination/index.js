export default function Pagination ( totalPages, pageNumber ) {

    return <ul class="pagination">
        <li class="currentPage">
        <a href="/catalogue/products/ABCDEF/stores/1">
            <span class="pageNumber">1</span>
        </a>
        </li>
        <li class="page">
            <a href="/catalogue/products/ABCDEF/stores/2">
                <span class="pageNumber">2</span>
            </a>
        </li>
        <li class="page">
        <a href="/catalogue/products/ABCDEF/stores/3">
            <span class="pageNumber">3</span>
        </a>
        </li>
        <li class="page">
            <a href="/catalogue/products/ABCDEF/stores/4">
                <span class="pageNumber">4</span>
            </a>
        </li>
        <li class="page">
            <a href="/catalogue/products/ABCDEF/stores/5">
            <span class="pageNumber">5</span>
            </a>
        </li>
        <li class="forwardPage">
            <a href="/catalogue/products/ABCDEF/stores/6">
                <span class="forwardPage">»</span>
            </a>
        </li>
        <li class="lastPage">
            <a href="/catalogue/products/ABCDEF/stores/12">
                <span class="pageNumber">12</span>
            </a>
        </li>
    </ul>
}