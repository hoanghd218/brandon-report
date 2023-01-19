FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["", ""]
RUN dotnet restore "Be.Api/Be.Api.csproj"
COPY . .
WORKDIR "/src"
RUN dotnet build "Be.Api/Be.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Be.Api/Be.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENV ASPNETCORE_URLS http://*:8000
ENTRYPOINT ["dotnet", "Be.Api.dll"]