﻿namespace Be.Infrustructure.Common.Contracts
{
    public class SearchRequest
    {
        public string SortBy { get; set; }

        public string FilterBy { get; set; }

        public int PageIndex { get; set; } = 1;

        public int PageSize { get; set; } = 10;
    }
}
