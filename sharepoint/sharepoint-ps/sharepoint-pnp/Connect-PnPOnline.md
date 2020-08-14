---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/connect-pnponline
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Connect-PnPOnline
---

# Connect-PnPOnline

## SYNOPSIS
Connect to a SharePoint site

## SYNTAX 

### Main
```powershell
Connect-PnPOnline -Url <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-Credentials <CredentialPipeBind>]
                  [-CurrentCredentials [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-AuthenticationMode <ClientAuthenticationMode>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### Token
```powershell
Connect-PnPOnline -Url <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-Realm <String>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-AzureEnvironment <AzureEnvironment>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### ADFS with client Certificate
```powershell
Connect-PnPOnline -Url <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-UseAdfsCert [<SwitchParameter>]]
                  [-ClientCertificate <X509Certificate2>]
                  [-LoginProviderName <String>]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### ADFS with user credentials
```powershell
Connect-PnPOnline -Url <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-Credentials <CredentialPipeBind>]
                  [-UseAdfs [<SwitchParameter>]]
                  [-Kerberos [<SwitchParameter>]]
                  [-LoginProviderName <String>]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### Access Token
```powershell
Connect-PnPOnline -AccessToken <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-Url <String>]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### Azure Active Directory using Scopes
```powershell
Connect-PnPOnline -Scopes <String[]>
                  [-Credentials <CredentialPipeBind>]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### PnP Office 365 Management Shell to the Microsoft Graph
```powershell
Connect-PnPOnline -Graph [<SwitchParameter>]
                  [-LaunchBrowser [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### Microsoft Graph using Azure Active Directory
```powershell
Connect-PnPOnline -AADDomain <String>
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### WebLogin
```powershell
Connect-PnPOnline -Url <String>
                  -UseWebLogin [<SwitchParameter>]
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### SPO Management Shell Credentials
```powershell
Connect-PnPOnline -Url <String>
                  -SPOManagementShell [<SwitchParameter>]
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-ClearTokenCache [<SwitchParameter>]]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### PnP O365 Management Shell / DeviceLogin
```powershell
Connect-PnPOnline -Url <String>
                  -PnPManagementShell [<SwitchParameter>]
                  [-ReturnConnection [<SwitchParameter>]]
                  [-LaunchBrowser [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### App-Only using a clientId and clientSecret and an URL
```powershell
Connect-PnPOnline -Url <String>
                  -ClientSecret <String>
                  -ClientId <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-Realm <String>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-AzureEnvironment <AzureEnvironment>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### App-Only using a clientId and clientSecret and an AAD Domain
```powershell
Connect-PnPOnline -ClientSecret <String>
                  -ClientId <String>
                  -AADDomain <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-Realm <String>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-NoTelemetry [<SwitchParameter>]]
```

### Azure Active Directory
```powershell
Connect-PnPOnline -Url <String>
                  -ClientId <String>
                  -RedirectUri <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-ClearTokenCache [<SwitchParameter>]]
                  [-AzureEnvironment <AzureEnvironment>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### App-Only with Azure Active Directory
```powershell
Connect-PnPOnline -Url <String>
                  -ClientId <String>
                  -Tenant <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-CertificatePath <String>]
                  [-CertificateBase64Encoded <String>]
                  [-Certificate <X509Certificate2>]
                  [-CertificatePassword <SecureString>]
                  [-AzureEnvironment <AzureEnvironment>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### App-Only with Azure Active Directory using X502 certificates
```powershell
Connect-PnPOnline -Url <String>
                  -ClientId <String>
                  -Tenant <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-AzureEnvironment <AzureEnvironment>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### High Trust using a X509Certificate2 object.
```powershell
Connect-PnPOnline -Url <String>
                  -ClientId <String>
                  -HighTrustCertificate <X509Certificate2>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-HighTrustCertificateIssuerId <String>]
                  [-UserName <String>]
                  [-NoTelemetry [<SwitchParameter>]]
```

### App-Only with Azure Active Directory using certificate from certificate store by thumbprint
```powershell
Connect-PnPOnline -Url <String>
                  -ClientId <String>
                  -Tenant <String>
                  -Thumbprint <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-AzureEnvironment <AzureEnvironment>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

### High Trust using a certificate from a PFX file.
```powershell
Connect-PnPOnline -Url <String>
                  -ClientId <String>
                  -HighTrustCertificatePath <String>
                  -HighTrustCertificatePassword <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-HighTrustCertificateIssuerId <String>]
                  [-UserName <String>]
                  [-NoTelemetry [<SwitchParameter>]]
```

### App-Only with Azure Active Directory using certificate as PEM strings
```powershell
Connect-PnPOnline -Url <String>
                  -ClientId <String>
                  -Tenant <String>
                  -PEMCertificate <String>
                  -PEMPrivateKey <String>
                  [-ReturnConnection [<SwitchParameter>]]
                  [-MinimalHealthScore <Int>]
                  [-RetryCount <Int>]
                  [-RetryWait <Int>]
                  [-RequestTimeout <Int>]
                  [-CreateDrive [<SwitchParameter>]]
                  [-DriveName <String>]
                  [-CertificatePassword <SecureString>]
                  [-AzureEnvironment <AzureEnvironment>]
                  [-TenantAdminUrl <String>]
                  [-SkipTenantAdminCheck [<SwitchParameter>]]
                  [-IgnoreSslErrors [<SwitchParameter>]]
                  [-NoTelemetry [<SwitchParameter>]]
```

## DESCRIPTION
Connects to a SharePoint site or another API and creates a context that is required for the other PnP Cmdlets. See https://github.com/pnp/PnP-PowerShell/wiki/Connect-options for more information on the options to connect and the APIs you can access with them.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com
```

Connect to SharePoint prompting for the username and password. When a generic credential is added to the Windows Credential Manager with https://contoso.sharepoint.com, PowerShell will not prompt for username and password and use those stored credentials instead.

### ------------------EXAMPLE 2------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com -Credentials (Get-Credential)
```

Connect to SharePoint prompting for the username and password to use to authenticate

### ------------------EXAMPLE 3------------------
```powershell
Connect-PnPOnline -Url http://yourlocalserver -CurrentCredentials
```

Connect to SharePoint using the credentials of the current user logged in to the machine

### ------------------EXAMPLE 4------------------
```powershell
Connect-PnPOnline -Url http://yourlocalserver -Credentials 'O365Creds'
```

Connect to SharePoint using credentials from the Windows Credential Manager, as defined by the label 'O365Creds'

### ------------------EXAMPLE 5------------------
```powershell
Connect-PnPOnline -Url http://yourlocalserver -Credentials (Get-Credential) -UseAdfs
```

Connect to SharePoint through ADFS prompting for the username and password to authenticate with

### ------------------EXAMPLE 6------------------
```powershell
Connect-PnPOnline -Url http://yourlocalserver -UseAdfsCert
```

Connect to SharePoint through ADFS using client certificate allowing you to select the client certificate to use for authentication

### ------------------EXAMPLE 7------------------
```powershell
Connect-PnPOnline -Url http://yourlocalserver -UseAdfsCert -ClientCertificate (Get-ChildItem -Path Cert:\CurrentUser\My\3A16F907D2BFFF1C22F447E55429C16F8BD3AC6E)
```

Connect to SharePoint through ADFS using the client certificate with thumbprint 3A16F907D2BFFF1C22F447E55429C16F8BD3AC6E from the local machine certificate store for the current user

### ------------------EXAMPLE 8------------------
```powershell
Connect-PnPOnline -Url https://yourserver -Credentials (Get-Credential) -CreateDrive
cd SPO:\\
dir
```

This will prompt you for credentials and creates a context for the other PowerShell commands to use. It will also create a SPO:\\ drive you can use to navigate around the site

### ------------------EXAMPLE 9------------------
```powershell
Connect-PnPOnline -Url https://yourserver -Credentials (Get-Credential) -AuthenticationMode FormsAuthentication
```

This will prompt you for credentials and creates a context for the other PowerShell commands to use. It assumes your server is configured for Forms Based Authentication (FBA)

### ------------------EXAMPLE 10------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.de -ClientId 344b8aab-389c-4e4a-8fa1-4c1ae2c0a60d -ClientSecret a3f3faf33f3awf3a3sfs3f3ss3f4f4a3fawfas3ffsrrffssfd -AzureEnvironment Germany
```

This will authenticate you to the German Azure environment using the German Azure endpoints for authentication

### ------------------EXAMPLE 11------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com -SPOManagementShell
```

This will authenticate you using the SharePoint Online Management Shell application

### ------------------EXAMPLE 12------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com -PnPManagementShell
```

This will authenticate you using the PnP O365 Management Shell Multi-Tenant application. A browser window will have to be opened where you have to enter a code that is shown in your PowerShell window.

### ------------------EXAMPLE 13------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com -PnPManagementShell -LaunchBrowser
```

This will authenticate you using the PnP O365 Management Shell Multi-Tenant application. A browser window will automatically open and the code you need to enter will be automatically copied to your clipboard.

### ------------------EXAMPLE 14------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com -AccessToken $myaccesstoken
```

Connects using the provided access token

### ------------------EXAMPLE 15------------------
```powershell
Connect-PnPOnline -Scopes "Mail.Read","Files.Read","ActivityFeed.Read"
```

Connects to Azure Active Directory interactively and gets an OAuth 2.0 Access Token to consume the resources of the declared permission scopes. It will utilize the Azure Active Directory enterprise application named PnP Management Shell with application id 31359c7f-bd7e-475c-86db-fdb8c937548e registered by the PnP team. If you want to connect using your own Azure Active Directory application registration, use one of the Connect-PnPOnline cmdlets using a -ClientId attribute instead and pre-assign the required permissions/scopes/roles in your application registration in Azure Active Directory. The available permission scopes for Microsoft Graph are defined at the following URL: https://docs.microsoft.com/graph/permissions-reference . If the requested scope(s) have been used with this connect cmdlet before, they will not be asked for consent again. You can request scopes from different APIs in one Connect, i.e. from Microsoft Graph and the Microsoft Office Management API. It will ask you to authenticate for each of the APIs you have listed scopes for.

### ------------------EXAMPLE 16------------------
```powershell
Connect-PnPOnline -Scopes "Mail.Read","Files.Read","ActivityFeed.Read" -Credentials (New-Object System.Management.Automation.PSCredential ("johndoe@contoso.onmicrosoft.com", (ConvertTo-SecureString "password" -AsPlainText -Force)))
```

Connects to Azure Active Directory using delegated permissions and gets an OAuth 2.0 Access Token to consume the resources of the declared permission scopes. It will utilize the Azure Active Directory enterprise application named PnP Management Shell with application id 31359c7f-bd7e-475c-86db-fdb8c937548e registered by the PnP team. If you want to connect using your own Azure Active Directory application registration, use one of the Connect-PnPOnline cmdlets using a -ClientId attribute instead and pre-assign the required permissions/scopes/roles in your application registration in Azure Active Directory. The available permission scopes for Microsoft Graph are defined at the following URL: https://docs.microsoft.com/graph/permissions-reference . If the requested scope(s) have been used with this connect cmdlet before, they will not be asked for consent again. You can request scopes from different APIs in one Connect, i.e. from Microsoft Graph and the Microsoft Office Management API. You must have logged on interactively with the same scopes at least once without using -Credentials to allow for the permission grant dialog to show and allow constent for the user account you would like to use. You can provide this consent by logging in once with Connect-PnPOnline -Url <tenanturl> -PnPManagementShell -LaunchBrowser, and provide consent. This is a one-time action. From that moment on you will be able to use the cmdlet as stated here.

### ------------------EXAMPLE 17------------------
```powershell
certutil.exe -csp 'Microsoft Enhanced RSA and AES Cryptographic Provider' -v -p 'password' -importpfx -user c:\HighTrust.pfx NoRoot
Connect-PnPOnline -Url https://yourserver -ClientId <id> -HighTrustCertificate (Get-Item Cert:\CurrentUser\My\<thumbprint>)
```

Connect to an on-premises SharePoint environment using a high trust certificate, stored in the Personal certificate store of the current user.

### ------------------EXAMPLE 18------------------
```powershell
Connect-PnPOnline -ClientId '<id>' -ClientSecret '<secret>' -AADDomain 'contoso.onmicrosoft.com'
```

Connects to the Microsoft Graph API using application permissions via an app's declared permission scopes. See https://github.com/SharePoint/PnP-PowerShell/tree/master/Samples/Graph.ConnectUsingAppPermissions for a sample on how to get started.

### ------------------EXAMPLE 19------------------
```powershell
Connect-PnPOnline -Url https://yourserver -ClientId 763d5e60-b57e-426e-8e87-b7258f7f8188 -HighTrustCertificatePath c:\HighTrust.pfx -HighTrustCertificatePassword 'password' -HighTrustCertificateIssuerId 6b9534d8-c2c1-49d6-9f4b-cd415620bca8
```

Connect to an on-premises SharePoint environment using a high trust certificate stored in a .PFX file.

### ------------------EXAMPLE 20------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com -ClientId '<id>' -Tenant 'contoso.onmicrosoft.com' -CertificatePath c:\absolute-path\to\pnp.pfx -CertificatePassword <if needed>
```

Connects to SharePoint using app-only tokens via an app's declared permission scopes. See https://github.com/SharePoint/PnP-PowerShell/tree/master/Samples/SharePoint.ConnectUsingAppPermissions for a sample on how to get started.

### ------------------EXAMPLE 21------------------
```powershell
Connect-PnPOnline -ClientId <id> -CertificatePath 'c:\mycertificate.pfx' -CertificatePassword (ConvertTo-SecureString -AsPlainText 'myprivatekeypassword' -Force) -Url https://contoso.sharepoint.com -Tenant 'contoso.onmicrosoft.com'
```

Connects using an Azure Active Directory registered application using a locally available certificate containing a private key. See https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azuread for a sample on how to get started.

### ------------------EXAMPLE 22------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com -ClientId '<id>' -Tenant 'contoso.onmicrosoft.com' -Thumbprint 34CFAA860E5FB8C44335A38A097C1E41EEA206AA
```

Connects to SharePoint using app-only tokens via an app's declared permission scopes. See https://github.com/SharePoint/PnP-PowerShell/tree/master/Samples/SharePoint.ConnectUsingAppPermissions for a sample on how to get started. Ensure you have imported the private key certificate, typically the .pfx file, into the Windows Certificate Store for the certificate with the provided thumbprint.

### ------------------EXAMPLE 23------------------
```powershell
Connect-PnPOnline -ClientId <id> -CertificateBase64Encoded 'xxxx' -CertificatePassword (ConvertTo-SecureString -AsPlainText 'myprivatekeypassword' -Force) -Url https://contoso.sharepoint.com -Tenant 'contoso.onmicrosoft.com'
```

Connects using an Azure Active Directory registered application using a certificate containing a private key encoded in base 64 such as received in an Azure Function when using Azure KeyVault. See https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azuread for a sample on how to get started.

### ------------------EXAMPLE 24------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com -ClientId '<id>' -Tenant 'contoso.onmicrosoft.com' -PEMCertificate <PEM string> -PEMPrivateKey <PEM string> -CertificatePassword <if needed>
```

Connects to SharePoint using app-only tokens via an app's declared permission scopes. See https://github.com/SharePoint/PnP-PowerShell/tree/master/Samples/SharePoint.ConnectUsingAppPermissions for a sample on how to get started.

### ------------------EXAMPLE 25------------------
```powershell
Connect-PnPOnline -ClientId <id> -Certificate $cert -CertificatePassword (ConvertTo-SecureString -AsPlainText 'myprivatekeypassword' -Force) -Url https://contoso.sharepoint.com -Tenant 'contoso.onmicrosoft.com'
```

Connects using an Azure Active Directory registered application using a certificate instance containing a private key. See https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azuread for a sample on how to get started.

### ------------------EXAMPLE 26------------------
```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com -ClientId '<id>' -Tenant 'contoso.onmicrosoft.com' -Certificate <X509Certificate2>
```

Connects to SharePoint using app-only auth in combination with a certificate. See https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azuread#using-this-principal-in-your-powershell-script-using-the-pnp-sites-core-library for a sample on how to get started.

## PARAMETERS

### -AADDomain
The AAD where the O365 app is registered. Eg.: contoso.com, or contoso.onmicrosoft.com.

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: Microsoft Graph using Azure Active Directory, App-Only using a clientId and clientSecret and an AAD Domain

Required: True
Position: Named
Accept pipeline input: False
```

### -AccessToken
Connect with an existing Access Token

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: Access Token

Required: True
Position: Named
Accept pipeline input: False
```

### -AuthenticationMode
Specify to use for instance use forms based authentication (FBA)

```yaml
Type: ClientAuthenticationMode
Parameter Sets: Main

Required: False
Position: Named
Accept pipeline input: False
```

### -AzureEnvironment
The Azure environment to use for authentication, the defaults to 'Production' which is the main Azure environment.

Only applicable to: SharePoint Online

```yaml
Type: AzureEnvironment
Parameter Sets: Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, App-Only with Azure Active Directory using certificate from certificate store by thumbprint, App-Only with Azure Active Directory using X502 certificates, Token, App-Only using a clientId and clientSecret and an URL

Required: False
Position: Named
Accept pipeline input: False
```

### -Certificate
X509Certificate2 reference containing the private key to authenticate the requests to SharePoint Online

Only applicable to: SharePoint Online

```yaml
Type: X509Certificate2
Parameter Sets: App-Only with Azure Active Directory

Required: False
Position: Named
Accept pipeline input: False
```

### -CertificateBase64Encoded
Base64 Encoded X509Certificate2 certificate containing the private key to authenticate the requests to SharePoint Online such as retrieved in Azure Functions from Azure KeyVault

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: App-Only with Azure Active Directory

Required: False
Position: Named
Accept pipeline input: False
```

### -CertificatePassword
Password to the certificate (*.pfx)

Only applicable to: SharePoint Online

```yaml
Type: SecureString
Parameter Sets: App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings

Required: False
Position: Named
Accept pipeline input: False
```

### -CertificatePath
Path to the certificate containing the private key (*.pfx)

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: App-Only with Azure Active Directory

Required: False
Position: Named
Accept pipeline input: False
```

### -ClearTokenCache
Clears the token cache.

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: Azure Active Directory, SPO Management Shell Credentials

Required: False
Position: Named
Accept pipeline input: False
```

### -ClientCertificate
The client certificate which you want to use for the ADFS authentication

```yaml
Type: X509Certificate2
Parameter Sets: ADFS with client Certificate

Required: False
Position: Named
Accept pipeline input: False
```

### -ClientId
The Client ID of the Azure AD Application

```yaml
Type: String
Parameter Sets: Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, App-Only with Azure Active Directory using certificate from certificate store by thumbprint, App-Only with Azure Active Directory using X502 certificates, App-Only using a clientId and clientSecret and an URL, App-Only using a clientId and clientSecret and an AAD Domain

Required: True
Position: Named
Accept pipeline input: False
```

### -ClientSecret
The client secret to use.

```yaml
Type: String
Parameter Sets: App-Only using a clientId and clientSecret and an URL, App-Only using a clientId and clientSecret and an AAD Domain

Required: True
Position: Named
Accept pipeline input: False
```

### -CreateDrive
If you want to create a PSDrive connected to the URL

```yaml
Type: SwitchParameter
Parameter Sets: Main, Token, App-Only using a clientId and clientSecret and an URL, App-Only using a clientId and clientSecret and an AAD Domain, WebLogin, ADFS with client Certificate, ADFS with user credentials, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, App-Only with Azure Active Directory using certificate from certificate store by thumbprint, App-Only with Azure Active Directory using X502 certificates, SPO Management Shell Credentials, Access Token

Required: False
Position: Named
Accept pipeline input: False
```

### -Credentials
Credentials of the user to connect with. Either specify a PSCredential object or a string. In case of a string value a lookup will be done to the Generic Credentials section of the Windows Credentials in the Windows Credential Manager for the correct credentials.

```yaml
Type: CredentialPipeBind
Parameter Sets: Main, ADFS with user credentials, Azure Active Directory using Scopes

Required: False
Position: Named
Accept pipeline input: False
```

### -CurrentCredentials
If you want to connect with the current user credentials

```yaml
Type: SwitchParameter
Parameter Sets: Main

Required: False
Position: Named
Accept pipeline input: False
```

### -DriveName
Name of the PSDrive to create (default: SPO)

```yaml
Type: String
Parameter Sets: Main, Token, App-Only using a clientId and clientSecret and an URL, App-Only using a clientId and clientSecret and an AAD Domain, WebLogin, ADFS with client Certificate, ADFS with user credentials, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, App-Only with Azure Active Directory using certificate from certificate store by thumbprint, App-Only with Azure Active Directory using X502 certificates, SPO Management Shell Credentials, Access Token

Required: False
Position: Named
Accept pipeline input: False
```

### -Graph
Log in using the PnP O365 Management Shell application towards the Graph. You will be asked to consent to:

* Read and write managed metadata
* Have full control of all site collections
* Read user profiles
* Invite guest users to the organization
* Read and write all groups
* Read and write directory data
* Read and write identity providers
* Access the directory as you


Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: PnP Office 365 Management Shell to the Microsoft Graph

Required: True
Position: Named
Accept pipeline input: False
```

### -HighTrustCertificate
The certificate which has been registered in SharePoint as a Trusted Security Token issuer to use for the High Trust connection. Note that CNG key storage providers are not supported.

Only applicable to: SharePoint Server 2019, SharePoint Server 2016, SharePoint Server 2013

```yaml
Type: X509Certificate2
Parameter Sets: High Trust using a X509Certificate2 object.

Required: True
Position: Named
Accept pipeline input: False
```

### -HighTrustCertificateIssuerId
The IssuerID under which the certificate has been registered in SharePoint as a Trusted Security Token issuer to use for the High Trust connection. Uses the ClientID if not specified.

Only applicable to: SharePoint Server 2019, SharePoint Server 2016, SharePoint Server 2013

```yaml
Type: String
Parameter Sets: High Trust using a X509Certificate2 object., High Trust using a certificate from a PFX file.

Required: False
Position: Named
Accept pipeline input: False
```

### -HighTrustCertificatePassword
The password of the private key certificate (.pfx) to use for the High Trust connection

Only applicable to: SharePoint Server 2019, SharePoint Server 2016, SharePoint Server 2013

```yaml
Type: String
Parameter Sets: High Trust using a certificate from a PFX file.

Required: True
Position: Named
Accept pipeline input: False
```

### -HighTrustCertificatePath
The path to the private key certificate (.pfx) to use for the High Trust connection

Only applicable to: SharePoint Server 2019, SharePoint Server 2016, SharePoint Server 2013

```yaml
Type: String
Parameter Sets: High Trust using a certificate from a PFX file.

Required: True
Position: Named
Accept pipeline input: False
```

### -IgnoreSslErrors
Ignores any SSL errors. To be used i.e. when connecting to a SharePoint farm using self signed certificates or using a certificate authority not trusted by this machine.

```yaml
Type: SwitchParameter
Parameter Sets: Main, Token, App-Only using a clientId and clientSecret and an URL, WebLogin, ADFS with client Certificate, ADFS with user credentials, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, App-Only with Azure Active Directory using certificate from certificate store by thumbprint, App-Only with Azure Active Directory using X502 certificates, Microsoft Graph using Azure Active Directory, Azure Active Directory using Scopes, PnP Office 365 Management Shell to the Microsoft Graph, SPO Management Shell Credentials

Required: False
Position: Named
Accept pipeline input: False
```

### -Kerberos
Authenticate using Kerberos to ADFS

```yaml
Type: SwitchParameter
Parameter Sets: ADFS with user credentials

Required: False
Position: Named
Accept pipeline input: False
```

### -LaunchBrowser
Launch a browser automatically and copy the code to enter to the clipboard

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: PnP O365 Management Shell / DeviceLogin, PnP Office 365 Management Shell to the Microsoft Graph

Required: False
Position: Named
Accept pipeline input: False
```

### -LoginProviderName
The name of the ADFS trusted login provider

```yaml
Type: String
Parameter Sets: ADFS with client Certificate, ADFS with user credentials

Required: False
Position: Named
Accept pipeline input: False
```

### -MinimalHealthScore
Specifies a minimal server healthscore before any requests are executed

```yaml
Type: Int
Parameter Sets: Main, Token, App-Only using a clientId and clientSecret and an URL, App-Only using a clientId and clientSecret and an AAD Domain, WebLogin, ADFS with client Certificate, ADFS with user credentials, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, App-Only with Azure Active Directory using certificate from certificate store by thumbprint, App-Only with Azure Active Directory using X502 certificates, SPO Management Shell Credentials, Access Token

Required: False
Position: Named
Accept pipeline input: False
```

### -NoTelemetry
In order to help to make PnP PowerShell better, we can track anonymous telemetry. We track the version of the cmdlets you are using, which cmdlet you are executing and which version of SharePoint you are connecting to. Use Disable-PnPPowerShellTelemetry to turn this off in general or use the -NoTelemetry switch to turn it off for that session.

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -PEMCertificate
PEM encoded certificate

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: App-Only with Azure Active Directory using certificate as PEM strings

Required: True
Position: Named
Accept pipeline input: False
```

### -PEMPrivateKey
PEM encoded private key for the certificate

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: App-Only with Azure Active Directory using certificate as PEM strings

Required: True
Position: Named
Accept pipeline input: False
```

### -PnPManagementShell
Log in using the PnP O365 Management Shell application. You will be asked to consent to:

* Read and write managed metadata
* Have full control of all site collections
* Read user profiles
* Invite guest users to the organization
* Read and write all groups
* Read and write directory data
* Read and write identity providers
* Access the directory as you

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: PnP O365 Management Shell / DeviceLogin
Aliases: PnPO365ManagementShell

Required: True
Position: Named
Accept pipeline input: False
```

### -Realm
Authentication realm. If not specified will be resolved from the url specified.

```yaml
Type: String
Parameter Sets: Token, App-Only using a clientId and clientSecret and an URL, App-Only using a clientId and clientSecret and an AAD Domain

Required: False
Position: Named
Accept pipeline input: False
```

### -RedirectUri
The Redirect URI of the Azure AD Application

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: Azure Active Directory

Required: True
Position: Named
Accept pipeline input: False
```

### -RequestTimeout
The request timeout. Default is 1800000

```yaml
Type: Int
Parameter Sets: Main, Token, App-Only using a clientId and clientSecret and an URL, App-Only using a clientId and clientSecret and an AAD Domain, WebLogin, ADFS with client Certificate, ADFS with user credentials, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, App-Only with Azure Active Directory using certificate from certificate store by thumbprint, App-Only with Azure Active Directory using X502 certificates, SPO Management Shell Credentials, Access Token

Required: False
Position: Named
Accept pipeline input: False
```

### -RetryCount
Defines how often a retry should be executed if the server healthscore is not sufficient. Default is 10 times.

```yaml
Type: Int
Parameter Sets: Main, Token, App-Only using a clientId and clientSecret and an URL, App-Only using a clientId and clientSecret and an AAD Domain, WebLogin, ADFS with client Certificate, ADFS with user credentials, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, App-Only with Azure Active Directory using certificate from certificate store by thumbprint, App-Only with Azure Active Directory using X502 certificates, SPO Management Shell Credentials, Access Token

Required: False
Position: Named
Accept pipeline input: False
```

### -RetryWait
Defines how many seconds to wait before each retry. Default is 1 second.

```yaml
Type: Int
Parameter Sets: Main, Token, App-Only using a clientId and clientSecret and an URL, App-Only using a clientId and clientSecret and an AAD Domain, WebLogin, ADFS with client Certificate, ADFS with user credentials, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, App-Only with Azure Active Directory using certificate from certificate store by thumbprint, App-Only with Azure Active Directory using X502 certificates, SPO Management Shell Credentials, Access Token

Required: False
Position: Named
Accept pipeline input: False
```

### -ReturnConnection
Returns the connection for use with the -Connection parameter on cmdlets.

```yaml
Type: SwitchParameter
Parameter Sets: Main, Token, App-Only using a clientId and clientSecret and an URL, App-Only using a clientId and clientSecret and an AAD Domain, WebLogin, ADFS with client Certificate, ADFS with user credentials, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, App-Only with Azure Active Directory using certificate from certificate store by thumbprint, App-Only with Azure Active Directory using X502 certificates, SPO Management Shell Credentials, Access Token, PnP O365 Management Shell / DeviceLogin

Required: False
Position: Named
Accept pipeline input: True
```

### -Scopes
The array of permission scopes to request from Azure Active Directory

Only applicable to: SharePoint Online

```yaml
Type: String[]
Parameter Sets: Azure Active Directory using Scopes

Required: True
Position: Named
Accept pipeline input: False
```

### -SkipTenantAdminCheck
Should we skip the check if this site is the Tenant admin site. Default is false

```yaml
Type: SwitchParameter
Parameter Sets: Main, Token, App-Only using a clientId and clientSecret and an URL, WebLogin, ADFS with client Certificate, ADFS with user credentials, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, App-Only with Azure Active Directory using certificate from certificate store by thumbprint, App-Only with Azure Active Directory using X502 certificates, SPO Management Shell Credentials, Access Token

Required: False
Position: Named
Accept pipeline input: False
```

### -SPOManagementShell
Log in using the SharePoint Online Management Shell application

Only applicable to: SharePoint Online

```yaml
Type: SwitchParameter
Parameter Sets: SPO Management Shell Credentials

Required: True
Position: Named
Accept pipeline input: False
```

### -Tenant
The Azure AD Tenant name,e.g. mycompany.onmicrosoft.com

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: App-Only with Azure Active Directory using certificate as PEM strings, App-Only with Azure Active Directory using certificate from certificate store by thumbprint, App-Only with Azure Active Directory, App-Only with Azure Active Directory using X502 certificates

Required: True
Position: Named
Accept pipeline input: False
```

### -TenantAdminUrl
The url to the Tenant Admin site. If not specified, the cmdlets will assume to connect automatically to https://&lt;tenantname&gt;-admin.sharepoint.com where appropriate.

```yaml
Type: String
Parameter Sets: Main, Token, App-Only using a clientId and clientSecret and an URL, WebLogin, ADFS with client Certificate, ADFS with user credentials, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, App-Only with Azure Active Directory using certificate from certificate store by thumbprint, App-Only with Azure Active Directory using X502 certificates, SPO Management Shell Credentials

Required: False
Position: Named
Accept pipeline input: False
```

### -Thumbprint
The thumbprint of the certificate containing the private key registered with the application in Azure Active Directory

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: App-Only with Azure Active Directory using certificate from certificate store by thumbprint

Required: True
Position: Named
Accept pipeline input: False
```

### -Url
The Url of the site collection to connect to

```yaml
Type: String
Parameter Sets: Main, Token, App-Only using a clientId and clientSecret and an URL, WebLogin, ADFS with client Certificate, ADFS with user credentials, Azure Active Directory, App-Only with Azure Active Directory, App-Only with Azure Active Directory using certificate as PEM strings, App-Only with Azure Active Directory using X502 certificates, App-Only with Azure Active Directory using certificate from certificate store by thumbprint, SPO Management Shell Credentials, Access Token, PnP O365 Management Shell / DeviceLogin

Required: True
Position: 0
Accept pipeline input: True
```

### -UseAdfs
If you want to connect to SharePoint using ADFS and credentials

```yaml
Type: SwitchParameter
Parameter Sets: ADFS with user credentials

Required: False
Position: Named
Accept pipeline input: False
```

### -UseAdfsCert
If you want to connect to SharePoint farm using ADFS with a client certificate

```yaml
Type: SwitchParameter
Parameter Sets: ADFS with client Certificate

Required: False
Position: Named
Accept pipeline input: False
```

### -UserName
Name of the user (login name) on whose behalf to create the access token. Supported input formats are SID and User Principal Name (UPN) in the format user@domain.local. If the parameter is not specified, an App Only Context is created.

Only applicable to: SharePoint Server 2019, SharePoint Server 2016, SharePoint Server 2013

```yaml
Type: String
Parameter Sets: High Trust using a X509Certificate2 object., High Trust using a certificate from a PFX file.

Required: False
Position: Named
Accept pipeline input: False
```

### -UseWebLogin
If you want to connect to SharePoint with browser based login. This is required when you have multi-factor authentication (MFA) enabled.

```yaml
Type: SwitchParameter
Parameter Sets: WebLogin

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)