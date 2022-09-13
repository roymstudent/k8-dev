#FROM mcr.microsoft.com/dotnet/sdk:5.0.200-focal-amd64 AS build-env
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env

WORKDIR /app

ARG buildconf=Release    

#create artifacts folder with permissions
RUN mkdir -p /opt/home/artifacts
RUN chmod -R 777 /opt/home
# Copy csproj and restore as distinct layers

WORKDIR /source_code

#COPY *.csproj ./
COPY *.csproj /source_code/

RUN dotnet restore
    
# Copy everything else and build
COPY ./ /source_code/
RUN dotnet publish -c $buildconf -p:publishDir=/opt/home/artifacts
    
# Build runtime image
# FROM mcr.microsoft.com/dotnet/aspnet:5.0.3-focal-amd64 as runtime
FROM mcr.microsoft.com/dotnet/aspnet:6.0 as runtime

WORKDIR /app
COPY --from=build-env /opt/home/artifacts /app

ENTRYPOINT ["dotnet", "MyWebAPICore.dll"]